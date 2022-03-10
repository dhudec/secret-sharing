import {
  deleteAccountById,
  selectAccountById,
  upsertAccount,
} from '@basis-theory/basis-theory-portal-commons/src/mongodb';
import type { JWT } from 'next-auth/jwt';
import { httpClient } from '@/api-framework/server/http-client';
import { BtOauthToken } from '@/globals';
import { getDbConnection } from '@/server-side/db';
import { getAllTenants } from '@/server-side/services/tenant-service';

const issueBasisTheoryToken = (
  oAuthAccessToken: string,
  tenantId: string
): Promise<{ data: BtOauthToken; status: number }> =>
  httpClient.post<BtOauthToken>('/oauth2/token')(oAuthAccessToken, {
    tenantId,
  });

const createBtAccountByTenantId = async (
  oAuthAccessToken: string,
  tenantId: string
): Promise<string> => {
  const {
    status,
    data: { accessToken: btAccessToken, expiresIn: btAccessTokenExpires },
  } = await issueBasisTheoryToken(oAuthAccessToken, tenantId);

  if (status === 200) {
    const { upsertedId } = await upsertAccount(getDbConnection(), {
      accessToken: btAccessToken,
      accessTokenExpires: Date.now() + btAccessTokenExpires * 1000,
      type: 'bt',
    });

    return upsertedId.toString();
  }

  return undefined;
};

const persistNewBtAccount = async (
  oAuthAccessToken: string
): Promise<{ btAccountId?: string; tenantId?: string }> => {
  let tenantId: string;

  const { data: tenantList } = await getAllTenants(oAuthAccessToken);

  // tenants returned by last createdAt date descending. this will choose the most recently created tenant
  if (tenantList?.data.length > 0) {
    tenantId = tenantList.data[0].id;
  }

  if (tenantId) {
    const btAccountId = await createBtAccountByTenantId(
      oAuthAccessToken,
      tenantId
    );

    return {
      btAccountId,
      tenantId,
    };
  }

  return {};
};

const refreshBtToken = async (
  oAuthAccessToken: string,
  { tenantId, btAccountId }: JWT
): Promise<Pick<JWT, 'btAccountId' | 'tenantId'>> => {
  const {
    data: { accessToken: btAccessToken, expiresIn: btAccessTokenExpires },
    status,
  } = await issueBasisTheoryToken(oAuthAccessToken, tenantId);

  if (status === 200) {
    await upsertAccount(getDbConnection(), {
      _id: btAccountId,
      accessToken: btAccessToken,
      accessTokenExpires: Date.now() + btAccessTokenExpires * 1000,
      type: 'bt',
    });

    return {
      tenantId,
      btAccountId,
    };
  }

  await deleteAccountById(getDbConnection(), btAccountId);

  return {};
};

const refreshBtTokenIfExpired = async (
  jwt: JWT
): Promise<Pick<JWT, 'btAccountId' | 'tenantId' | 'error'>> => {
  const { btAccountId, oAuthAccountId } = jwt;

  if (!btAccountId) {
    return {
      ...jwt,
      error: 'NoAccountForTokenError',
    };
  }

  const btAccount = await selectAccountById(getDbConnection(), btAccountId);

  if (!btAccount) {
    return {
      ...jwt,
      error: 'NoAccountForTokenError',
    };
  }

  if (Date.now() < (btAccount.accessTokenExpires || Number.POSITIVE_INFINITY)) {
    return jwt;
  }

  const oAuthAccount = await selectAccountById(
    getDbConnection(),
    oAuthAccountId
  );

  if (!oAuthAccount) {
    return {
      ...jwt,
      error: 'NoAccountForTokenError',
    };
  }

  return refreshBtToken(oAuthAccount.accessToken, jwt);
};

export {
  createBtAccountByTenantId,
  persistNewBtAccount,
  refreshBtTokenIfExpired,
};

import { logError } from '@basis-theory/basis-theory-portal-commons/src/config/log';
import { deleteAccountById } from '@basis-theory/basis-theory-portal-commons/src/mongodb/account';
import { persistNewOAuthAccount } from '@basis-theory/basis-theory-portal-commons/src/next-auth/server';
import { refreshOAuthAccountTokensIfExpired } from '@basis-theory/basis-theory-portal-commons/src/next-auth/server/utils';
import { NextApiRequest } from 'next';
import { Account, User } from 'next-auth';
import { getToken, JWT } from 'next-auth/jwt';
import { getDbConnection } from '@/server-side/db';
import { env } from '@/server-side/env';
import {
  persistNewBtAccount,
  refreshBtTokenIfExpired,
} from '@/server-side/services/bt-oauth-token-service';

const createSession = async (user: User, account: Account): Promise<JWT> => {
  const oAuthJwt = await persistNewOAuthAccount(
    getDbConnection(),
    user,
    account
  );

  if (oAuthJwt.error) {
    return oAuthJwt;
  }

  const btJwt = await persistNewBtAccount(account.access_token);

  return {
    ...oAuthJwt,
    ...btJwt,
  };
};

const refreshSessionIfExpired = async (jwt: JWT): Promise<JWT> => {
  const refreshedOAuthJwt = await refreshOAuthAccountTokensIfExpired(
    env(),
    getDbConnection(),
    jwt
  );

  if (refreshedOAuthJwt.error) {
    return refreshedOAuthJwt;
  }

  const refreshedBtJwt = refreshBtTokenIfExpired(jwt);

  return {
    ...refreshedOAuthJwt,
    ...refreshedBtJwt,
  };
};

const endSession = async (req: NextApiRequest): Promise<void> => {
  try {
    const jwt = await getToken({
      req,
      secret: await env().getSecret('JWT_SECRET'),
    });

    if (jwt?.oAuthAccountId) {
      await deleteAccountById(getDbConnection(), jwt.oAuthAccountId);
    }

    if (jwt?.btAccountId) {
      await deleteAccountById(getDbConnection(), jwt.btAccountId);
    }
  } catch (error) {
    // ignore errors if we're not able to delete tokens from mongo since all docs have a TTL
    logError('Error encountered in trying to delete tokens from DB: ');
    logError(error);
  }
};

export { createSession, refreshSessionIfExpired, endSession };

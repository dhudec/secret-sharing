import { addOAuthAuthorizationHeader } from '@basis-theory/basis-theory-portal-commons/src/next-auth/server';
import { Transform } from '@basis-theory/basis-theory-portal-commons/src/proxy';
import { getDbConnection } from '@/server-side/db';
import { env } from '@/server-side/env';
import {
  buildClientUserAgentHeader,
  buildUserAgentHeader,
} from '@/server-side/server-helpers/user-agent-helpers';

export const addClientHeaders =
  (accountId: string): Transform =>
  (config, req, abort) =>
    addOAuthAuthorizationHeader(env(), getDbConnection(), accountId)(
      {
        ...config,
        headers: {
          ...config.headers,
          'User-Agent': buildUserAgentHeader(),
          'BT-CLIENT-USER-AGENT': buildClientUserAgentHeader(),
        },
      },
      req,
      abort
    );

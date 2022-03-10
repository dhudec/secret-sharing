import {
  logError,
  logInfo,
  logRequest,
} from '@basis-theory/basis-theory-portal-commons/src/config/log';
import { selectAccountById } from '@basis-theory/basis-theory-portal-commons/src/mongodb';
import type { AxiosError } from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/client';
import jwt from 'next-auth/jwt';
import { getDbConnection } from '@/server-side/db';
import { env } from '@/server-side/env';

const logErrorAndRespond = (
  nameOfController: string,
  error: AxiosError,
  res: NextApiResponse
) => {
  const errorMessage = `Error in ${nameOfController} controller`;

  logError(`${errorMessage}:`);
  logError(error);

  if (error?.response?.data) {
    logError(error.response.data);
  }

  res.status(error.response?.status || 500).json({ message: errorMessage });
};

type CallbackFunction = (
  callbackRequest: NextApiRequest,
  callbackResponse: NextApiResponse,
  callbackAccessToken?: string
) => Promise<void> | void;

interface CallbackFunctions {
  POST?: CallbackFunction;
  GET?: CallbackFunction;
  PUT?: CallbackFunction;
  DELETE?: CallbackFunction;
}

const withLoggingAndErrorHandler =
  (nameOfController: string, callbackFunctions: CallbackFunctions) =>
  async (req: NextApiRequest, res: NextApiResponse, accessToken?: string) => {
    if (!accessToken) {
      logRequest(nameOfController, req);
    }

    try {
      if (callbackFunctions[req.method]) {
        // eslint-disable-next-line no-param-reassign
        req.body =
          typeof req.body === 'string' && req.body.length > 0
            ? JSON.parse(req.body)
            : req.body;
        await callbackFunctions[req.method](req, res, accessToken);
      } else {
        res.status(404).json({ message: 'Endpoint not found' });
      }
    } catch (error) {
      logErrorAndRespond(nameOfController, error, res);
    }
  };

const getAccessToken = async (
  req: NextApiRequest,
  tokenId: string
): Promise<string> => {
  const token = await jwt.getToken({
    req,
    secret: await env().getSecret('JWT_SECRET'),
  });

  const account = await selectAccountById(
    getDbConnection(),
    token[tokenId] as string
  );

  return account?.accessToken;
};

const accessTokenRequiredHandler =
  (
    nameOfController: string,
    callbackFunctions: CallbackFunctions,
    tokenId: string
  ) =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    logRequest(nameOfController, req);
    const session = await getSession({ req });

    if (session) {
      try {
        const accessToken = await getAccessToken(req, tokenId);

        await withLoggingAndErrorHandler(nameOfController, callbackFunctions)(
          req,
          res,
          accessToken
        );
      } catch (error) {
        logErrorAndRespond(nameOfController, error, res);
      }
    } else {
      logInfo(`Unauthenticated request in ${nameOfController} controller`);
      res.status(401).json({ message: 'Unauthenticated' });
    }
  };

const withOAuthAccessTokenRequiredHandler = (
  nameOfController: string,
  callbackFunctions: CallbackFunctions
) =>
  accessTokenRequiredHandler(
    nameOfController,
    callbackFunctions,
    'oAuthAccountId'
  );

const withBtAccessTokenRequiredHandler = (
  nameOfController: string,
  callbackFunctions: CallbackFunctions
) =>
  accessTokenRequiredHandler(
    nameOfController,
    callbackFunctions,
    'btAccountId'
  );

export {
  getAccessToken,
  withLoggingAndErrorHandler,
  withOAuthAccessTokenRequiredHandler,
  withBtAccessTokenRequiredHandler,
};

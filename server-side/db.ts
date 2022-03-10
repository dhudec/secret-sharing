import {
  cached,
  connectMongoDb,
} from '@basis-theory/basis-theory-portal-commons/src/config';
import { env } from './env';

const getDbConnection = cached(connectMongoDb, env);

export { getDbConnection };

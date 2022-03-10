import {
  cleanEnv,
  cached,
} from '@basis-theory/basis-theory-portal-commons/src/config';
import { str } from 'envalid';

const env = cached(
  cleanEnv,
  {
    BT_API_KEY: str({
      desc: 'The BT server to server API key',
    }),
  }
);

export { env };

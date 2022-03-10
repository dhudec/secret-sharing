import { getOSVersion, getRuntime } from '@basis-theory/basis-theory-js/common';
import type { ClientUserAgent } from '@basis-theory/basis-theory-js/types';
import snakecaseKeys from 'snakecase-keys';

const USER_AGENT_CLIENT = 'basistheory-customer-portal';

const buildUserAgentHeader = (): string => {
  const version = 'latest';

  return `${USER_AGENT_CLIENT}/${version}`;
};

const buildClientUserAgentHeader = (): string => {
  const clientUserAgent: ClientUserAgent = {
    client: USER_AGENT_CLIENT,
    clientVersion: 'latest',
    osVersion: getOSVersion(),
    runtimeVersion: getRuntime(),
  };

  return JSON.stringify(snakecaseKeys(clientUserAgent));
};

export { USER_AGENT_CLIENT, buildUserAgentHeader, buildClientUserAgentHeader };

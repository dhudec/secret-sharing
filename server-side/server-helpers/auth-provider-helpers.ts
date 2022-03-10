import type { User } from 'next-auth';
import type { Awaitable } from 'next-auth/internals/utils';
import type { BuiltInProviders } from 'next-auth/providers';
import { env } from '@/server-side/env';

type Auth0Options = Parameters<BuiltInProviders['Auth0']>[0];
type Auth0Profile = Parameters<Auth0Options['profile']>[0];
interface ExtendedAuth0Profile extends Auth0Profile {
  name?: string;
  /* eslint-disable camelcase */
  given_name?: string;
  family_name?: string;
  nickname?: string;
}

const resolveAuth0UserName = ({
  nickname,
  name,
  given_name,
  family_name,
}: ExtendedAuth0Profile): string => {
  if (family_name?.trim()) {
    if (given_name?.trim()) {
      // user signed up after fix
      return `${given_name} ${family_name}`;
    }

    // user signed up before fix, but family name was collected
    return `${name} ${family_name}`;
  }

  // family name was not collected
  return name?.trim() || nickname;
};
/* eslint-enable camelcase */

export const getEnvironmentSpecificConfigs = (): Partial<Auth0Options> => {
  if (!env().USE_LOCAL_AUTH) {
    return {
      scope: 'openid profile email offline_access',
      authorizationUrl: `https://${
        env().OAUTH_DOMAIN
      }/authorize?response_type=code&audience=${encodeURI(
        env().OAUTH_AUDIENCE
      )}`,
      accessTokenUrl: `https://${env().OAUTH_DOMAIN}/oauth/token`,
      profile: (profile) => {
        const extended = profile as unknown as ExtendedAuth0Profile;
        const { sub, email, picture } = extended;

        return {
          id: sub,
          name: resolveAuth0UserName(extended),
          email,
          image: picture,
        } as Awaitable<User & { id: string }>;
      },
    };
  }

  return {
    accessTokenUrl: `http://${env().OAUTH_DOMAIN}/connect/token`,
    authorizationUrl: `http://${
      env().OAUTH_DOMAIN
    }/connect/authorize?response_type=code`,
    profileUrl: `http://${env().OAUTH_DOMAIN}/connect/userinfo`,
    scope: 'openid profile email offline_access',
  };
};

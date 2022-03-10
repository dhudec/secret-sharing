import type { NextApiResponse } from 'next';
import { encode } from 'next-auth/jwt';
import { setCookie } from 'nookies';
import { env } from '@/server-side/env';

export const setAuthCookie = async (
  responseObject: NextApiResponse,
  token: Record<string, unknown>
) => {
  const newSessionCookie = await encode({
    secret: await env().getSecret('JWT_SECRET'),
    token,
  });

  const sessionCookieName = env().NEXTAUTH_URL.startsWith('https')
    ? '__Secure-next-auth.session-token'
    : 'next-auth.session-token';

  setCookie(
    {
      res: responseObject,
    },
    sessionCookieName,
    newSessionCookie,
    {
      maxAge: 30 * 24 * 60 * 60, // 30 days
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
      secure: true,
    }
  );
};

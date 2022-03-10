import crypto from 'crypto';
import getConfig from 'next/config';
import { v4 as uuid } from 'uuid';

const { serverRuntimeConfig } = getConfig();
const { gtmId } = serverRuntimeConfig;

/**
 * Generate Content Security Policy for the app.
 * Uses randomly generated nonce (base64)
 *
 * @returns {csp: string, nonce: string}
 */
export const useDocument = (): {
  csp: string;
  nonce: string;
  gtmId: string;
} => {
  // Generate random nonce converted to base64. Must be different on every HTTP page load
  const hash = crypto.createHash('sha256');

  hash.update(uuid());
  const nonce = hash.digest('base64');

  let csp = ``;

  csp += `default-src 'self';`;
  csp += `manifest-src 'self' https://basistheory.cloudflareaccess.com;`;
  csp += `img-src 'self' https://s.gravatar.com https://i1.wp.com https://www.google-analytics.com https://www.googletagmanager.com https://ssl.gstatic.com https://www.gstatic.com https://avatars.githubusercontent.com https://lh3.googleusercontent.com ${
    process.env.NODE_ENV === 'production' ? '' : 'https://i.imgur.com'
  } data: ;`;
  csp += `style-src 'self' https://fonts.googleapis.com https://tagmanager.google.com https://www.googletagmanager.com https://fonts.googleapis.com 'unsafe-inline';`; // NextJS requires 'unsafe-inline'
  csp += `script-src 'self' 'nonce-${nonce}' https://*.basistheory.com https://www.googletagmanager.com  https://tagmanager.google.com https://www.google-analytics.com https://ssl.google-analytics.com https://*.basistheory.com ${
    process.env.NODE_ENV === 'production' ? '' : "'unsafe-eval'"
  };`; // NextJS requires 'self' and 'unsafe-eval' in dev (faster source maps)
  csp += `frame-src https://*.basistheory.com;`;
  csp += `font-src 'self' https://fonts.gstatic.com;`;
  csp += `connect-src 'self' https://dc.services.visualstudio.com https://*.basistheory.com https://www.google-analytics.com ${process.env.NEXT_PUBLIC_CSP_CONNECT_SRC};`;

  return {
    csp,
    nonce,
    gtmId,
  };
};

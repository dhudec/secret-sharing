const { createSecureHeaders } = require('next-secure-headers');
const { i18n } = require('./next-i18next.config');
const appInsights = require('applicationinsights');
const {
  configureTranspileModules,
} = require('@basis-theory/basis-theory-portal-commons/src/config/next');

if (process.env.APPINSIGHTS_INSTRUMENTATIONKEY) {
  appInsights
    .setup(process.env.APPINSIGHTS_INSTRUMENTATIONKEY)
    .setSendLiveMetrics(true);
  appInsights.defaultClient.context.tags[
    appInsights.defaultClient.context.keys.cloudRole
  ] = 'BT Portal Server';
  appInsights.start();
}

module.exports = configureTranspileModules({
  i18n,
  poweredByHeader: false,
  headers: () => [
    {
      source: '/(.*)',
      headers: createSecureHeaders({
        referrerPolicy: 'strict-origin-when-cross-origin',
      }),
    },
  ],
  serverRuntimeConfig: {
    /* eslint-disable node/no-process-env */
    gtmId: process.env.GTM_ID,
    /* eslint-enable node/no-process-env */
  },
});

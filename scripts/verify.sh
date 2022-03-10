#!/bin/bash
set -e

yarn install --frozen-lockfile --no-progress --ignore-scripts

if [ "$SKIP_LINT" = true ] || [ "$SKIP_LINT" = 1 ]
then
  echo SKIP_LINT is set, skipping ESLint run...
else
  yarn lint
fi

if [ "$SKIP_TEST" = true ] || [ "$SKIP_TEST" = 1 ]
then
  echo SKIP_TEST is set, skipping Jest run...
else
  yarn test
fi

if [ "$SKIP_E2E" = true ] || [ "$SKIP_E2E" = 1 ]
then
  echo SKIP_E2E is set, skipping Cypress run...
  exit 0
fi

make stop
make start

export CYPRESS_OAUTH_DOMAIN=host.docker.internal:5679
export CYPRESS_API_BASE_URL=http://host.docker.internal:3333
export CYPRESS_SDK_API_BASE_URL=http://localhost:3333
export CYPRESS_ELEMENTS_BASE_URL=https://elements-dev.basistheory.com
export CYPRESS_JWT_SECRET=secret
export CYPRESS_APPINSIGHTS_INSTRUMENTATIONKEY=abc123
export CYPRESS_SUPPORT_EMAIL=support@basistheory.com
export CYPRESS_DISCORD_LINK=https://discord.gg/NSvXxaW5Fv
export CYPRESS_BILLING_ELEMENTS_KEY=$BILLING_ELEMENTS_KEY

if [ -n "$CYPRESS_RECORD_KEY" ] && [ -n "$BUILD_NUMBER" ]
then
  yarn cypress:run --record --parallel --ci-build-id "$BUILD_NUMBER"
else
  yarn cypress:run
fi


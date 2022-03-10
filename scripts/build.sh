#!/bin/bash
set -e

if [ "$SKIP_BUILD" = true ] || [ "$SKIP_BUILD" = 1 ]
then
  echo SKIP_BUILD is set, skipping portal build...
else
  docker build . \
    --build-arg NPM_TOKEN="${NPM_TOKEN}" \
    --build-arg CSP_CONNECT_SRC="http://localhost:3333" \
    --tag customer-portal
fi

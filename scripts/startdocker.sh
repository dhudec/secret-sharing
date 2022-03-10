#!/bin/bash
set -e

if [ "$SKIP_BUILD" = true ] || [ "$SKIP_BUILD" = 1 ]
then
  echo SKIP_BUILD is set, skipping fake-api-gateway build...
else
  docker build fake-api-gateway --tag fake-api-gateway
fi

docker-compose up -d

#!/bin/bash
set -e

docker run \
  --network=customer-portal \
  --env BILLING_ELEMENTS_KEY=$BILLING_ELEMENTS_KEY \
  --env-file .env.docker \
  -p 3000:3000 \
  --add-host=host.docker.internal:host-gateway \
  --name customer-portal \
  -dt customer-portal

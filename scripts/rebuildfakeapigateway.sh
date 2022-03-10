#!/bin/bash
set -e


docker-compose stop -- fake-api-gateway || true
./scripts/startdocker.sh

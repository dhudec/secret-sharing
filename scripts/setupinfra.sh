#!/bin/bash
set -e

current_directory=`pwd`

cd BasisTheory.CustomerPortalNext.Infrastructure

if [[ -z "${AZURE_CREDENTIALS}" ]]; then
    echo "AZURE_CREDENTIALS environment variable is not set"
    exit 1
fi

if [[ -z "${AUTH0_SETTINGS}" ]]; then
    echo "AUTH0_SETTINGS environment variable is not set"
    exit 1
fi

export ARM_CLIENT_ID=$(echo $AZURE_CREDENTIALS | python3 -c "import sys, json; print(json.load(sys.stdin)['clientId'])")
export ARM_CLIENT_SECRET=$(echo $AZURE_CREDENTIALS | python3 -c "import sys, json; print(json.load(sys.stdin)['clientSecret'])")
export ARM_SUBSCRIPTION_ID=$(echo $AZURE_CREDENTIALS | python3 -c "import sys, json; print(json.load(sys.stdin)['subscriptionId'])")
export ARM_TENANT_ID=$(echo $AZURE_CREDENTIALS | python3 -c "import sys, json; print(json.load(sys.stdin)['tenantId'])")

export AUTH0_DOMAIN=$(echo $AUTH0_SETTINGS | python3 -c "import sys, json; print(json.load(sys.stdin)['domain'])")
export AUTH0_CLIENT_ID=$(echo $AUTH0_SETTINGS | python3 -c "import sys, json; print(json.load(sys.stdin)['client_id'])")
export AUTH0_CLIENT_SECRET=$(echo $AUTH0_SETTINGS | python3 -c "import sys, json; print(json.load(sys.stdin)['client_secret'])")

pulumi login
(pulumi stack init $PULUMI_STACK) || echo "Pulumi $PULUMI_STACK already exists"
pulumi stack select $PULUMI_STACK

pulumi config set agentIpAddress $IP_ADDRESS
pulumi config set dockerRegistryServerUrl $DOCKER_REGISTRY_SERVER_URL
pulumi config set dockerRegistryServerUsername $DOCKER_REGISTRY_SERVER_USERNAME
pulumi config set testCards $TEST_CARDS
pulumi config set --secret dockerRegistryServerPassword $DOCKER_REGISTRY_SERVER_PASSWORD
pulumi config set --secret azureSslCertId $AZURE_SSL_CERT_ID
pulumi config set --secret billingElementsKey $BASISTHEORY_BILLING_API_KEY
pulumi config set --secret gtmId $GTM_ID
pulumi config set vpnIp $(pulumi stack output --stack basistheory/infrastructure-operations/prod --json | jq -r .vpnPublicIp)

GLOBAL_STACK_OUTPUTS=$(pulumi stack output --stack $PULUMI_GLOBAL_STACK --json)
PORTAL_URL=$(echo $GLOBAL_STACK_OUTPUTS | jq -r '.hostNames.portal')
pulumi config set globalStackLogAnalyticsId $(echo $GLOBAL_STACK_OUTPUTS | jq -r '.logAnalyticsWorkspaceId')

echo "::set-output name=portalUrl::https://$PORTAL_URL"

pulumi config set analyticsIntegrity "$(pulumi stack output --stack $PULUMI_CDN_STACK --json | jq -r .analyticsIntegrity)"

if [ "$IS_PR_WORKFLOW" = true ] ; then
  pulumi preview --diff
else
  pulumi up -y
fi

result=$?

cd "$current_directory"

exit $result

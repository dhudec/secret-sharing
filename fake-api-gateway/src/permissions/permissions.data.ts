const data = [
  {
    type: 'tenant:read',
    description: 'Read tenants',
    application_types: ['management'],
  },
  {
    type: 'tenant:update',
    description: 'Update tenants',
    application_types: ['management'],
  },
  {
    type: 'tenant:delete',
    description: 'Delete tenants',
    application_types: ['management'],
  },
  {
    type: 'application:create',
    description: 'Create applications',
    application_types: ['management'],
  },
  {
    type: 'application:read',
    description: 'Read applications',
    application_types: ['management'],
  },
  {
    type: 'application:update',
    description: 'Update and regenerate API keys for applications',
    application_types: ['management'],
  },
  {
    type: 'application:delete',
    description: 'Delete applications',
    application_types: ['management'],
  },
  {
    type: 'log:read',
    description: 'Read logs',
    application_types: ['management'],
  },
  {
    type: 'token:bank:create',
    description: 'Create tokens with bank classification of any impact level',
    application_types: ['elements', 'public', 'server_to_server'],
  },
  {
    type: 'token:bank:read:low',
    description: 'Read tokens with bank classification of low impact level',
    application_types: ['server_to_server'],
  },
  {
    type: 'token:bank:read:moderate',
    description:
      'Read tokens with bank classification of moderate or low impact levels',
    application_types: ['server_to_server'],
  },
  {
    type: 'token:bank:read:high',
    description:
      'Read tokens with bank classification of high, moderate, or low impact levels',
    application_types: ['server_to_server'],
  },
  {
    type: 'token:bank:update',
    description: 'Update tokens with bank classification of any impact level',
    application_types: ['server_to_server'],
  },
  {
    type: 'token:bank:use:proxy',
    description:
      'Use tokens in the Proxy with bank classification of any impact level',
    application_types: ['server_to_server'],
  },
  {
    type: 'token:bank:use:reactor',
    description:
      'Use tokens in Reactors with bank classification of any impact level',
    application_types: ['server_to_server'],
  },
  {
    type: 'token:bank:delete',
    description: 'Delete tokens with bank classification of any impact level',
    application_types: ['server_to_server'],
  },
  {
    type: 'token:general:create',
    description:
      'Create tokens with general classification of any impact level',
    application_types: ['elements', 'public', 'server_to_server'],
  },
  {
    type: 'token:general:read:low',
    description:
      'Read tokens with general classification of low impact level',
    application_types: ['server_to_server'],
  },
  {
    type: 'token:general:read:moderate',
    description:
      'Read tokens with general classification of moderate or low impact levels',
    application_types: ['server_to_server'],
  },
  {
    type: 'token:general:read:high',
    description:
      'Read tokens with general classification of high, moderate, or low impact levels',
    application_types: ['server_to_server'],
  },
  {
    type: 'token:general:use:proxy',
    description:
      'Use tokens in the Proxy with general classification of any impact level',
    application_types: ['server_to_server'],
  },
  {
    type: 'token:general:use:reactor',
    description:
      'Use tokens in Reactors with general classification of any impact level',
    application_types: ['server_to_server'],
  },
  {
    type: 'token:general:delete',
    description:
      'Delete tokens with general classification of any impact level',
    application_types: ['server_to_server'],
  },
  {
    type: 'token:pci:create',
    description: 'Create tokens with PCI classification of any impact level',
    application_types: ['elements', 'public', 'server_to_server'],
  },
  {
    type: 'token:pci:read:low',
    description: 'Read tokens with PCI classification of low impact level',
    application_types: ['server_to_server'],
  },
  {
    type: 'token:pci:read:moderate',
    description:
      'Read tokens with PCI classification of moderate or low impact levels',
    application_types: ['server_to_server'],
  },
  {
    type: 'token:pci:read:high',
    description:
      'Read tokens with PCI classification of high, moderate, or low impact levels',
    application_types: ['server_to_server'],
  },
  {
    type: 'token:pci:update',
    description: 'Update tokens with PCI classification of any impact level',
    application_types: ['server_to_server'],
  },
  {
    type: 'token:pci:use:proxy',
    description:
      'Use tokens in the Proxy with PCI classification of any impact level',
    application_types: ['server_to_server'],
  },
  {
    type: 'token:pci:use:reactor',
    description:
      'Use tokens in Reactors with PCI classification of any impact level',
    application_types: ['server_to_server'],
  },
  {
    type: 'token:pci:delete',
    description: 'Delete tokens with PCI classification of any impact level',
    application_types: ['server_to_server'],
  },
  {
    type: 'token:pii:create',
    description: 'Create tokens with PII classification of any impact level',
    application_types: ['elements', 'public', 'server_to_server'],
  },
  {
    type: 'token:pii:read:low',
    description: 'Read tokens with PII classification of low impact level',
    application_types: ['server_to_server'],
  },
  {
    type: 'token:pii:read:moderate',
    description:
      'Read tokens with PII classification of moderate or low impact levels',
    application_types: ['server_to_server'],
  },
  {
    type: 'token:pii:read:high',
    description:
      'Read tokens with PII classification of high, moderate, or low impact levels',
    application_types: ['server_to_server'],
  },
  {
    type: 'token:pii:use:proxy',
    description:
      'Use tokens in the Proxy with PII classification of any impact level',
    application_types: ['server_to_server'],
  },
  {
    type: 'token:pii:use:reactor',
    description:
      'Use tokens in Reactors with PII classification of any impact level',
    application_types: ['server_to_server'],
  },
  {
    type: 'token:pii:delete',
    description: 'Delete tokens with PII classification of any impact level',
    application_types: ['server_to_server'],
  },
  {
    type: 'reactor:create',
    description: 'Create reactors and formulas',
    application_types: ['management'],
  },
  {
    type: 'reactor:read',
    description: 'Read reactors and formulas',
    application_types: ['management'],
  },
  {
    type: 'reactor:update',
    description: 'Update reactors and formulas',
    application_types: ['management'],
  },
  {
    type: 'reactor:delete',
    description: 'Delete reactors and formulas',
    application_types: ['management'],
  },
  {
    type: 'report:read',
    description: 'Read reports',
    application_types: ['management'],
  },
];

export const getData = () => data;

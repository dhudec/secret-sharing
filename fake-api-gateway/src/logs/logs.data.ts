

const data = [
  {
    tenant_id: '86703b2d-90bb-462a-a2ca-28ad7eacada6',
    actor_id: '35f19649-44b0-43d9-8edb-829dbb321d72',
    actor_type: 'user',
    entity_type: 'tenant',
    entity_id: '03def8f0-86a7-42e1-bd58-cb1e8b7e78d3',
    operation: 'create',
    message: 'Tenant created',
    created_at: '2022-02-04T22:05:39.125+00:00',
  },
  {
    tenant_id: '86703b2d-90bb-462a-a2ca-28ad7eacada6',
    actor_id: 'B0E08683-9FA5-4D8D-A404-2CBD39124823',
    actor_type: 'application',
    entity_type: 'token',
    entity_id: '03def8f0-86a7-42e1-bd58-cb1e8b7e78d3',
    operation: 'read',
    message: 'Retrieved token',
    created_at: '2022-02-04T22:05:39.12+00:00',
  },
  {
    tenant_id: '86703b2d-90bb-462a-a2ca-28ad7eacada6',
    actor_id: 'B0E08683-9FA5-4D8D-A404-2CBD39124823',
    actor_type: 'application',
    entity_type: 'card',
    entity_id: '03def8f0-86a7-42e1-bd58-cb1e8b7e78d3',
    operation: 'create',
    message: 'Card created',
    created_at: '2022-02-04T22:05:36.502+00:00',
  },
  {
    tenant_id: '86703b2d-90bb-462a-a2ca-28ad7eacada6',
    actor_id: 'B0E08683-9FA5-4D8D-A404-2CBD39124823',
    actor_type: 'application',
    entity_type: 'token',
    entity_id: '03def8f0-86a7-42e1-bd58-cb1e8b7e78d3',
    operation: 'create',
    message: 'Token of type card created',
    created_at: '2022-02-04T22:05:36.477+00:00',
  },
  {
    tenant_id: '86703b2d-90bb-462a-a2ca-28ad7eacada6',
    actor_id: 'B0E08683-9FA5-4D8D-A404-2CBD39124823',
    actor_type: 'application',
    entity_type: 'token',
    entity_id: '4fdcc15b-e3f9-4c2b-9e3b-28974c1ff4ec',
    operation: 'not_found',
    message: 'Could not find token by ID',
    created_at: '2022-02-04T22:05:27.818+00:00',
  },
  {
    tenant_id: '86703b2d-90bb-462a-a2ca-28ad7eacada6',
    actor_id: 'DF12967A-3CBC-4CA8-9CB4-705D76ABF809',
    actor_type: 'application',
    entity_type: 'bank',
    entity_id: '4fdcc15b-e3f9-4c2b-9e3b-28974c1ff4ec',
    operation: 'read',
    message: 'Retrieved bank',
    created_at: '2022-02-04T22:05:23.204+00:00',
  },
  {
    tenant_id: '86703b2d-90bb-462a-a2ca-28ad7eacada6',
    actor_id: 'DF12967A-3CBC-4CA8-9CB4-705D76ABF809',
    actor_type: 'application',
    entity_type: 'token',
    entity_id: '4fdcc15b-e3f9-4c2b-9e3b-28974c1ff4ec',
    operation: 'read',
    message: 'Retrieved token',
    created_at: '2022-02-04T22:05:23.203+00:00',
  },
  {
    tenant_id: '86703b2d-90bb-462a-a2ca-28ad7eacada6',
    actor_id: 'DF12967A-3CBC-4CA8-9CB4-705D76ABF809',
    actor_type: 'application',
    entity_type: 'bank',
    entity_id: '4fdcc15b-e3f9-4c2b-9e3b-28974c1ff4ec',
    operation: 'create',
    message: 'Bank created',
    created_at: '2022-02-04T22:05:18.514+00:00',
  },
  {
    tenant_id: '86703b2d-90bb-462a-a2ca-28ad7eacada6',
    actor_id: 'DF12967A-3CBC-4CA8-9CB4-705D76ABF809',
    actor_type: 'application',
    entity_type: 'token',
    entity_id: '4fdcc15b-e3f9-4c2b-9e3b-28974c1ff4ec',
    operation: 'create',
    message: 'Token of type bank created',
    created_at: '2022-02-04T22:05:18.504+00:00',
  },
  {
    tenant_id: '86703b2d-90bb-462a-a2ca-28ad7eacada6',
    actor_id: 'DF12967A-3CBC-4CA8-9CB4-705D76ABF809',
    actor_type: 'application',
    entity_type: 'card',
    entity_id: 'a1b56bdd-55c9-4eca-80f9-324771e9fa6b',
    operation: 'create',
    message: 'Card created',
    created_at: '2022-02-04T22:05:10.55+00:00',
  },
  {
    tenant_id: '86703b2d-90bb-462a-a2ca-28ad7eacada6',
    actor_id: 'DF12967A-3CBC-4CA8-9CB4-705D76ABF809',
    actor_type: 'application',
    entity_type: 'token',
    entity_id: 'a1b56bdd-55c9-4eca-80f9-324771e9fa6b',
    operation: 'create',
    message: 'Token of type card created',
    created_at: '2022-02-04T22:05:10.507+00:00',
  },
];

export const getData = () => data;

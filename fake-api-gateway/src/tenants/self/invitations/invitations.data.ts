let data = [
  {
    id: '4BEE9767-B439-438B-8266-C981E14A7D3C',
    tenant_id: '40578742-C2F4-408B-B3BC-2C0821D6BF38',
    email: 'dope@armstead-products.com',
    status: 'PENDING',
    expires_at: new Date(new Date().setDate(new Date().getDate() + 3)).toISOString(),
    created_by: '8682048D-69E2-4E05-9EA1-21AC7D02ECE8',
    created_at: new Date().toISOString(),
    modified_by: null,
    modified_at: null,
  },
  {
    id: '0519B690-4C6E-40DF-A810-4D86E29CA23C',
    tenant_id: '40578742-C2F4-408B-B3BC-2C0821D6BF38',
    email: 'tanning.buttery.bliss@bt.com',
    status: 'EXPIRED',
    expires_at: new Date(new Date().setDate(new Date().getDate() - 2)).toISOString(),
    created_by: '8682048D-69E2-4E05-9EA1-21AC7D02ECE8',
    created_at: new Date(new Date().setDate(new Date().getDate() - 5)).toISOString(),
    modified_by: null,
    modified_at: null,
  },
  {
    id: '9E4EAE4A-97F7-40F0-B7B6-422B9F6C7EEA',
    tenant_id: '40578742-C2F4-408B-B3BC-2C0821D6BF38',
    email: 'thunder.mustache@colinsface.com',
    status: 'PENDING',
    expires_at: new Date(new Date().setDate(new Date().getDate() + 1)).toISOString(),
    created_by: '8682048D-69E2-4E05-9EA1-21AC7D02ECE8',
    created_at: new Date(new Date().setDate(new Date().getDate() - 2)).toISOString(),
    modified_by: null,
    modified_at: null,
  }
];

export const getData = () => data;
export const setData = (newData: any[]) => (data = newData);

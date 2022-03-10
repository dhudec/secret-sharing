const data = [
  {
    id: 'FCA03B6F-71B8-4410-833C-F1D0F599E078',
    type: 'bank',
    tenant_id: '9B3A164D-0D72-4902-A591-1C71902928E2',
    bank: {
      routing_number: '123456789',
      account_number: 'XXXXXXXXX9012'
    },
    created_at: '2021-01-26T17:11:13.156Z',
    created_by: 'B0E08683-9FA5-4D8D-A404-2CBD39124823',
  },
  {
    id: '3EBE6704-EEFF-4159-9F80-745481941A26',
    type: 'bank',
    tenant_id: '79806907-BF67-4732-B62A-111DDE81B428',
    bank: {
      routing_number: '987654321',
      account_number: 'XXXXXXXXX1234'
    },
    created_at: '2021-04-14T17:11:13.156Z',
    created_by: 'DF12967A-3CBC-4CA8-9CB4-705D76ABF809',
  },
];

export const getData = () => data;

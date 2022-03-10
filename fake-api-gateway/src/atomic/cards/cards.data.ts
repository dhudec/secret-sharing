const data = [
  {
    id: '8AD3CE7D-2F7A-40A2-A790-8E39577B61F2',
    type: 'card',
    tenant_id: '9B3A164D-0D72-4902-A591-1C71902928E2',
    card: {
      number: "XXXXXXXXXXXX4242",
      expiration_month: 1,
      expiration_year: 2027
    },
    created_at: '2021-01-26T17:11:13.156Z',
    created_by: 'B0E08683-9FA5-4D8D-A404-2CBD39124823',
  },
  {
    id: '37FB47D5-9F7F-4E1A-A063-F29520D2CA83',
    type: 'card',
    tenant_id: '79806907-BF67-4732-B62A-111DDE81B428',
    card: {
      number: "XXXXXXXXXXXX5556",
      expiration_month: 5,
      expiration_year: 2026
    },
    created_at: '2021-04-14T17:11:13.156Z',
    created_by: 'DF12967A-3CBC-4CA8-9CB4-705D76ABF809',
  },
];

export const getData = () => data;


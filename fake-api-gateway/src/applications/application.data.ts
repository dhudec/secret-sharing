const data = [
  {
    id: 'B0E08683-9FA5-4D8D-A404-2CBD39124823',
    owner_id: '490B43AF-A109-4D81-9A71-BB761934E840',
    name: 'Application A',
    type: 'server_to_server',
    created_at: '2021-03-22T17:11:13.156Z',
    modified_at: '2021-03-22T17:11:13.156Z',
    permissions: [
      'token:general:read:high',
      'token:general:use:proxy',
      'token:pii:read:moderate',
    ],
    key: 'key_dev_2CBD39124823',
  },
  {
    id: 'DF12967A-3CBC-4CA8-9CB4-705D76ABF809',
    owner_id: '65E6DCE0-ADDF-43DE-AF85-E8A6589C3626',
    name: 'Application B',
    type: 'elements',
    created_at: '2021-03-22T17:11:13.156Z',
    modified_at: '2021-03-22T17:11:13.156Z',
    permissions: [
      'token:general:create',
      'token:pci:create',
      'token:bank:create',
    ],
    key: 'key_dev_705D76ABF809',
  },
];

export const getData = () => data;

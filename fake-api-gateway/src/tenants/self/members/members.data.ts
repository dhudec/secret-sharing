let data = [
  {
    id: 'C9B53F04-5758-4EA8-AC25-FC988C1EA753',
    tenant_id: '40578742-C2F4-408B-B3BC-2C0821D6BF38',
    role: 'OWNER',
    user: {
      id: '0AAD31F7-9923-4320-98A4-A9E94764530B',
      email: 'alicesmith@email.com',
      picture: 'https://i.imgur.com/RVoCirF.jpeg',
      first_name: 'Alice',
      last_name: 'Smith',
    },
    last_login: new Date(new Date().setDate(new Date().getDate() - 2)).toISOString(),
    created_by: '8682048D-69E2-4E05-9EA1-21AC7D02ECE8',
    created_at: new Date().toISOString(),
    modified_by: null,
    modified_at: null,
  },
  {
    id: '4BEE9767-B439-438B-8266-C981E14A7D3C',
    tenant_id: '40578742-C2F4-408B-B3BC-2C0821D6BF38',
    role: 'ADMIN',
    user: {
      id: '6792D654-9E64-46F8-A617-CD46A23F7F13',
      email: 'drewsue.webuino@bt.com',
      picture: 'https://i.imgur.com/0cXVmNO.jpeg',
      first_name: 'Drewsue',
      last_name: 'Webuino',
    },
    created_by: '8682048D-69E2-4E05-9EA1-21AC7D02ECE8',
    created_at: new Date().toISOString(),
    modified_by: null,
    modified_at: null,
  },
  {
    id: '9E4EAE4A-97F7-40F0-B7B6-422B9F6C7EEA',
    tenant_id: '40578742-C2F4-408B-B3BC-2C0821D6BF38',
    role: 'ADMIN',
    user: {
      id: '1B424E21-09E9-47AB-83EC-CF5EB29E57AD',
      email: 'bradam.gomstead@bt.com',
      picture: 'https://i.imgur.com/jaRHc.png',
      first_name: 'Bradam',
      last_name: 'Gomstead',
    },
    created_by: '8682048D-69E2-4E05-9EA1-21AC7D02ECE8',
    created_at: new Date().toISOString(),
    modified_by: null,
    modified_at: null,
  },
  {
    id: '97DB1982-928E-40F1-8ACF-B39A26CD7F53',
    tenant_id: '40578742-C2F4-408B-B3BC-2C0821D6BF38',
    role: 'ADMIN',
    user: {
      id: 'A940BAB9-A339-4A82-A65B-002D49ECBA4E',
      email: 'jamus.billuce@bt.com',
      picture: 'https://i.imgur.com/nXy66ei.jpeg',
      first_name: 'Trisdan',
      last_name: 'Billuce',
    },
    created_by: '8682048D-69E2-4E05-9EA1-21AC7D02ECE8',
    created_at: new Date().toISOString(),
    modified_by: null,
    modified_at: null,
  },
  {
    id: '4F3AC793-3118-41E2-91BA-46F8BE3FBCA5',
    tenant_id: '40578742-C2F4-408B-B3BC-2C0821D6BF38',
    role: 'ADMIN',
    user: {
      id: '174566DD-8EDB-4E73-9037-5B90D694CF7C',
      email: 'dacas@bt.com',
      picture: 'https://i.imgur.com/4Sirm.jpeg',
      first_name: 'Dacas',
      last_name: undefined,
    },
    created_by: '8682048D-69E2-4E05-9EA1-21AC7D02ECE8',
    created_at: new Date().toISOString(),
    modified_by: null,
    modified_at: null,
  },
  {
    id: 'D2D724D2-63C9-4250-93EC-79A112D9901C',
    tenant_id: '40578742-C2F4-408B-B3BC-2C0821D6BF38',
    role: 'ADMIN',
    user: {
      id: 'D7C80EEA-08AB-4F8D-B05B-BBE4708C2BA7',
      email: 'taylamp@bt.com',
      picture: 'https://i.imgur.com/a5BI7.jpeg',
      first_name: '',
      last_name: 'Taylamp',
    },
    created_by: '8682048D-69E2-4E05-9EA1-21AC7D02ECE8',
    created_at: new Date().toISOString(),
    modified_by: null,
    modified_at: null,
  }
];

export const getData = () => data;
export const setData = (newData: any[]) => (data = newData);
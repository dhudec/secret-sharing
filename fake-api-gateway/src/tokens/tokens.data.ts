const data = [
  {
    id: 'CBDC53CB-6585-430E-B927-6AD7271105DD',
    type: 'token',
    tenant_id: '22C494B0-2C27-45D2-BC79-A8D25B6F0312',
    data: 'U0FTiYDDUUtVFwHrgn1NRlm1i9np/38rxbL2AVojd7+IfFM5yn5TMCZutxuYI+70B9JAbHK2VpiVdvAwZWNTP2lgALRgILdgMYCKNQV9ANu90pa3yDayN2QmAU90vGx4XOe2rG+4PjYn51WcqWQCSX3I3JQc0uH8SKZ3GuTFhLIMBcFwcbptFYkoGoRNxSbutL0okShKjSgZWjsw0CSJJK2eVxUW5n5IuvWAXengB6NVXx31C/OD8wCD2FKP8SSy483p5ei8ItTzYiJgaTufHcxijGVCVc69MLixT3vmuEsPJNuXYlMY4VFqdBggfny0ZxO+spJnJuLkqfh9DboYlvQrC2saKdiP0otqBZYCckgWs5N08ZSRpPNbGvH13VvpiVsd+GoNfjjKLAWyldjZoA==',
    metadata: 'Some metadata!',
    encryption: {
      cek: {
        key: 'somekey',
        alg: 'AES',
      },
      kek: {
        key: 'somekey',
        alg: 'RSA',
      },
    },
    created_at: '2021-03-22T17:11:13.156Z',
    created_by: 'B0E08683-9FA5-4D8D-A404-2CBD39124823',
    privacy: {
      classification: 'general',
      impact_level: 'low',
      restriction_policy: 'redact',
    },
  },
  {
    id: '5990486C-3C0F-4B8B-982C-69F1339C01E8',
    type: 'token',
    tenant_id: '0EBCA3A8-6EA2-49B2-BDEF-5D62319C3EAA',
    data: '1234',
    metadata: 'Some metadata!',
    created_at: '2021-02-02T17:11:13.156Z',
    created_by: 'DF12967A-3CBC-4CA8-9CB4-705D76ABF809',
    privacy: {
      classification: 'pii',
      impact_level: 'moderate',
      restriction_policy: 'redact',
    },
  },
  {
    id: '37FB47D5-9F7F-4E1A-A063-F29520D2CA83',
    type: 'card',
    tenant_id: '79806907-BF67-4732-B62A-111DDE81B428',
    created_at: '2021-04-14T17:11:13.156Z',
    created_by: 'DF12967A-3CBC-4CA8-9CB4-705D76ABF809',
    privacy: {
      classification: 'pci',
      impact_level: 'high',
      restriction_policy: 'mask',
    },
  },
  {
    id: 'FCA03B6F-71B8-4410-833C-F1D0F599E078',
    type: 'bank',
    tenant_id: '9B3A164D-0D72-4902-A591-1C71902928E2',
    created_at: '2021-01-26T17:11:13.156Z',
    created_by: 'B0E08683-9FA5-4D8D-A404-2CBD39124823',
    privacy: {
      classification: 'bank',
      impact_level: 'high',
      restriction_policy: 'mask',
    },
  },
  {
    id: '38253291-26f5-4c55-9199-0066424a4d77',
    type: 'card_number',
    data: 'XXXXXXXXXXXX4242',
    tenant_id: '79806907-BF67-4732-B62A-111DDE81B428',
    created_at: '2021-04-14T17:11:13.156Z',
    created_by: 'DF12967A-3CBC-4CA8-9CB4-705D76ABF809',
    privacy: {
      classification: 'pci',
      impact_level: 'high',
      restriction_policy: 'mask',
    },
  },
  {
    id: '5eda1d2f-232e-4f00-9f56-66729239629e',
    type: 'social_security_number',
    data: 'XXX-XX-1234',
    tenant_id: '79806907-BF67-4732-B62A-111DDE81B428',
    created_at: '2021-04-14T17:11:13.156Z',
    created_by: 'DF12967A-3CBC-4CA8-9CB4-705D76ABF809',
    privacy: {
      classification: 'pii',
      impact_level: 'high',
      restriction_policy: 'mask',
    },
  },
  {
    id: 'd598554e-cbd0-4bda-9a36-658bde1f5d95',
    type: 'employer_id_number',
    data: 'XX-XXX1234',
    tenant_id: '79806907-BF67-4732-B62A-111DDE81B428',
    created_at: '2021-04-14T17:11:13.156Z',
    created_by: 'DF12967A-3CBC-4CA8-9CB4-705D76ABF809',
    privacy: {
      classification: 'pii',
      impact_level: 'high',
      restriction_policy: 'mask',
    },
  },
  {
    id: 'cc90cdf7-7ec8-40a6-ba4b-348fc29ce863',
    type: 'us_bank_account_number',
    data: 'XXXXXXXXXXXX1234',
    tenant_id: '79806907-BF67-4732-B62A-111DDE81B428',
    created_at: '2021-04-14T17:11:13.156Z',
    created_by: 'DF12967A-3CBC-4CA8-9CB4-705D76ABF809',
    privacy: {
      classification: 'bank',
      impact_level: 'moderate',
      restriction_policy: 'redact',
    },
  },
  {
    id: 'bf9f15f5-aad0-4c78-bebd-23e4a7f8cdf6',
    type: 'us_bank_routing_number',
    data: '123456789',
    tenant_id: '79806907-BF67-4732-B62A-111DDE81B428',
    created_at: '2021-04-14T17:11:13.156Z',
    created_by: 'DF12967A-3CBC-4CA8-9CB4-705D76ABF809',
    privacy: {
      classification: 'bank',
      impact_level: 'low',
      restriction_policy: 'mask',
    },
  },
  {
    id: '107AA845-FACD-4806-B8D5-C83EEA7D175E',
    type: 'foo',
    tenant_id: 'B633094D-3D34-4C8A-AD32-5CA5E88BB723',
    data: 'bar',
    metadata: 'bazz',
    created_at: '2021-04-14T17:11:13.156Z',
    created_by: 'DF12967A-3CBC-4CA8-9CB4-705D76ABF809',
    privacy: {
      classification: 'general',
      impact_level: 'low',
      restriction_policy: 'redact',
    },
  },
];

const addEncryption = (id: any, tokenData: any, encryption: any) => {
  const token = data.find((datum) => datum.id === id);
  const index = data.findIndex((datum) => datum.id === id);

  if (!token) {
    throw new Error('Token not found.');
  }

  // add encryption values
  token.data = tokenData;
  token.encryption = encryption;

  // replace token
  data[index] = token;

  return token;
};

const getData = () => data;

export { addEncryption, getData };

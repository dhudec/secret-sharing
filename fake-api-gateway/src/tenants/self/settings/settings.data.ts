const data = {
  '40578742-C2F4-408B-B3BC-2C0821D6BF38': [
    {
      key: 'has_payment_method',
      value: 'false',
      description: 'Whether this tenant has a payment method on record',
      data_type: 'boolean',
    },
    {
      key: 'log_history_limit',
      value: '86400000',
      description:
        'The maximum age in milliseconds of logs that can be accessed',
      data_type: 'number',
    },
  ],
  'F8BB783A-0D6E-4CD0-845B-E3061BE9BCB2': [
    {
      key: 'has_payment_method',
      value: 'false',
      description: 'Whether this tenant has a payment method on record',
      data_type: 'boolean',
    },
    {
      key: 'log_history_limit',
      value: '86400000',
      description:
        'The maximum age in milliseconds of logs that can be accessed',
      data_type: 'number',
    },
  ],
  '78BFD06B-87D8-40AB-9084-1638CFFA5840': [
    {
      key: 'has_payment_method',
      value: 'true',
      description: 'Whether this tenant has a payment method on record',
      data_type: 'boolean',
    },
    {
      key: 'log_history_limit',
      value: '86400000',
      description:
        'The maximum age in milliseconds of logs that can be accessed',
      data_type: 'number',
    },
  ],
};

export const getData = (tenantId: string) =>
  data[tenantId] ?? Object.values(data)[0];

export const setData = (tenantId: string, newData: any[]) =>
  (data[tenantId] = newData);

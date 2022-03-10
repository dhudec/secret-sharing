const data = {
  '40578742-C2F4-408B-B3BC-2C0821D6BF38': {
    token_report: {
      metrics_by_type: {
        bank: {
          count: 5,
          last_created_at: '2021-01-22T13:19:09.156Z',
        },
        'bank:reaction': {
          count: 8,
          last_created_at: '2021-01-22T13:19:09.156Z',
        },
        card: {
          count: 7,
          last_created_at: '2021-01-22T13:19:09.156Z',
        },
        'card:reaction': {
          count: 9,
          last_created_at: '2021-01-22T13:19:09.156Z',
        },
        token: {
          count: 4,
          last_created_at: '2021-01-22T13:19:09.156Z',
        },
      },
      monthly_active_tokens: 457,
      included_monthly_active_tokens: 1000,
    },
  },
  'F8BB783A-0D6E-4CD0-845B-E3061BE9BCB2': {
    token_report: {
      metrics_by_type: {
        bank: {
          count: 5,
          last_created_at: '2021-01-22T13:19:09.156Z',
        },
        'bank:reaction': {
          count: 8,
          last_created_at: '2021-01-22T13:19:09.156Z',
        },
        card: {
          count: 7,
          last_created_at: '2021-01-22T13:19:09.156Z',
        },
        'card:reaction': {
          count: 9,
          last_created_at: '2021-01-22T13:19:09.156Z',
        },
        token: {
          count: 4,
          last_created_at: '2021-01-22T13:19:09.156Z',
        },
      },
      monthly_active_tokens: 1288,
      included_monthly_active_tokens: 1000,
    },
  },
  '78BFD06B-87D8-40AB-9084-1638CFFA5840': {
    token_report: {
      metrics_by_type: {
      },
      monthly_active_tokens: 0,
      included_monthly_active_tokens: 1000,
    },
  },
};

export const getData = (tenantId: string) =>
  data[tenantId] ?? Object.values(data)[0];

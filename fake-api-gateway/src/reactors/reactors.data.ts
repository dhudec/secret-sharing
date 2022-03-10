import {stripeFormula, dwollaFormula, adyenFormula} from './reactor-formulas.data'

const data = [
  {
    id: 'a60a9092-a0f4-4485-8dbb-532e3902d298',
    name: 'My Stripe Reactor',
    created_at: '2021-03-22T17:11:13.156Z',
    modified_at: '2021-03-22T17:11:13.156Z',
    formula: stripeFormula,
    configuration: {
      'STRIPE_API_KEY': '240a8850-c8c8-479f-aa3a-f33567504713'
    }
  },
  {
    id: 'f99f455f-c33d-4302-9b85-df8530f2a841',
    name: 'My Dwolla Reactor',
    created_at: '2021-05-22T17:11:13.156Z',
    modified_at: '2021-03-22T17:11:13.156Z',
    formula: dwollaFormula,
    configuration: {
      'DWOLLA_ACCESS_TOKEN': 'bcb05951-1cdc-4c9e-8fcb-b05b08f296fd'
    }
  },
  {
    id: 'e61ef617-18bb-4b7a-8589-2e955ed1f209',
    name: 'My Adyen Reactor',
    created_at: '2021-05-22T17:11:13.156Z',
    modified_at: '2021-03-22T17:11:13.156Z',
    formula: adyenFormula,
    configuration: {
      'ADYEN_ACCESS_TOKEN': '0645aecf-c2d8-4fb2-b7e2-a19a04819087'
    }
  },
];

export const getData = () => data;


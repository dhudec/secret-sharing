export interface AtomicCard {
  id: string;
  type: 'card';
  tenantId: string;
  card: {
    number: string;
    expirationMonth: number;
    expirationYear: number;
    cvc?: string;
  };
  createdAt: string;
  createdBy: string;
}

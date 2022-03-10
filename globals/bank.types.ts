export interface AtomicBank {
  id: string;
  type: 'card';
  tenantId: string;
  bank: {
    routingNumber: string;
    accountNumber: string;
  };
  createdAt: string;
  createdBy: string;
}

import type { AtomicCard } from '@/globals/atomic-card.types';
import type { TokenType } from '@/globals/token.types';

type PaymentType = Extract<TokenType, 'card'>;

interface TenantPaymentMethod {
  id: string;
  paymentMethodType: PaymentType;
  card: AtomicCard['card'];
  createdAt: string;
  modifiedAt?: string;
  metadata?: Record<string, string>;
}

interface TenantPaymentMethodCreate {
  paymentMethodType: PaymentType;
  atomicTokenId: string;
}

export type { PaymentType, TenantPaymentMethod, TenantPaymentMethodCreate };

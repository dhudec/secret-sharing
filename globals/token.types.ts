import type { PaginationQuery } from '@/globals';

const tokenTypes = [
  'token',
  'card',
  'bank',
  'card_number',
  'us_bank_routing_number',
  'us_bank_account_number',
  'social_security_number',
  'employer_id_number',
] as const;

type TokenType = typeof tokenTypes[number];

interface EncryptionKey {
  key: string;
  alg: string;
  prov: string;
}

interface EncryptionMetadata {
  cek: Omit<EncryptionKey, 'prov'>;
  kek: EncryptionKey;
}

interface PrivacySettings {
  classification: string;
  impactLevel: string;
  restrictionPolicy: string;
}

interface Token {
  id: string;
  type: TokenType;
  tenantId: string;
  data: unknown;
  metadata?: unknown;
  encryption?: EncryptionMetadata;
  createdAt: string;
  createdBy: string;
  privacy: PrivacySettings;
}

interface TokenQuery extends PaginationQuery {
  type?: string;
}

interface TokenSearchRequest {
  query: string;
  page?: number;
  size?: number;
}

export { tokenTypes };
export type { TokenType, Token, TokenQuery, TokenSearchRequest };

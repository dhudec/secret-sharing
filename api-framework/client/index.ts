import type { Secret, CreateSecret } from '@/globals';
import { httpClient } from './http-client';

const secrets = {
  create: httpClient.post<Secret, CreateSecret>('secrets'),
};

export const clientApiFramework = {
  secrets,
} as const;

import { PaginatedList } from '@basis-theory/basis-theory-elements-interfaces/sdk';
import { FetchPromise } from '@/api-framework/api-interfaces';
import { httpClient } from '@/api-framework/server/http-client';
import type { Tenant } from '@/globals';

const getAllTenants = (
  accessToken: string
): FetchPromise<PaginatedList<Tenant>> =>
  httpClient.get<PaginatedList<Tenant>>('/tenants')(accessToken);

const deleteTenantBySelf = (accessToken: string): FetchPromise =>
  httpClient.delete('/tenants/self')(accessToken);

export { getAllTenants, deleteTenantBySelf };

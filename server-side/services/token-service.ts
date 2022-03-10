import type { TenantUsageReport } from '@basis-theory/basis-theory-elements-interfaces/models';
import { httpClient } from '@/api-framework/server/http-client';
import { getTokenCountFromReport } from '@/components/shared';

const getTokenCount = (accessToken: string): Promise<number> =>
  httpClient
    .get<TenantUsageReport>('/tenants/self/reports/usage')(accessToken)
    .then((res) => getTokenCountFromReport(res.data));

export { getTokenCount };

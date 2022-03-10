import { useApi } from '@basis-theory/basis-theory-portal-commons/src/api/client';
import type { TenantReportUsage, TenantSettings } from '@/globals';

export const useYourPlan = () => {
  const { data: tenantReportUsage, mutate: revalidateUsage } =
    useApi<TenantReportUsage>('bt/tenants/self/reports/usage', undefined, {
      sticky: true,
    });
  const { data: hasPaymentTenantSetting, mutate: revalidateSettings } =
    useApi<TenantSettings>(
      'bt/tenants/self/settings/has_payment_method',
      undefined,
      {
        sticky: true,
      }
    );

  const tenantReportsUsage = tenantReportUsage?.tokenReport;
  const hasPaymentMethod = hasPaymentTenantSetting?.value === 'true';

  const limitExceeded =
    !hasPaymentMethod &&
    tenantReportsUsage?.monthlyActiveTokens >
      tenantReportsUsage?.includedMonthlyActiveTokens;

  const limitExceededBy =
    limitExceeded &&
    tenantReportsUsage.monthlyActiveTokens -
      tenantReportsUsage.includedMonthlyActiveTokens;

  const revalidate = () =>
    Promise.all([revalidateUsage(), revalidateSettings()]);

  return {
    tenantReportsUsage,
    hasPaymentMethod,
    isLoading: !tenantReportsUsage || !hasPaymentTenantSetting,
    revalidate,
    limitExceeded,
    limitExceededBy,
  };
};

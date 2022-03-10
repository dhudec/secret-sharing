import { useApi } from '@basis-theory/basis-theory-portal-commons/src/api/client';
import { useHumanizedDuration } from '@/components/hooks/useHumanizedDuration';
import { TenantSettings } from '@/globals';

export const useLogHistoryLimit = () => {
  const { data: setting } = useApi<TenantSettings>(
    'bt/tenants/self/settings/log_history_limit'
  );

  const humanizedDuration = useHumanizedDuration(
    Number(setting?.value) || undefined
  );

  return {
    setting,
    humanizedDuration,
  };
};

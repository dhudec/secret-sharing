import { useSession } from 'next-auth/client';
import { useTranslation } from 'next-i18next';

export const useUserMenu = () => {
  const { t } = useTranslation('components');
  const [session, loading] = useSession();

  return {
    session,
    loading,
    t,
  };
};

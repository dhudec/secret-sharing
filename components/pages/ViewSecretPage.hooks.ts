import { useClientApiFramework } from '@/components/hooks';
import {useTranslation} from "next-i18next";

export const useViewSecretPage = () => {
  const { t } = useTranslation('secrets');
  const clientApiFramework = useClientApiFramework();

  const getSecret = async () => {
    try {
      // const secret = await clientApiFramework.secrets.get({
      //   id: 'foo'
      // });
    } finally {
    }
  };

  return {
    t,
    getSecret,
  };
};

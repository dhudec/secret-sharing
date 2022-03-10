import { useClientApiFramework } from '@/components/hooks';
import {useTranslation} from "next-i18next";
import {useState} from "react";

export const useViewSecretPage = () => {
  const { t } = useTranslation('secrets');
  const clientApiFramework = useClientApiFramework();
  const [secret, setSecret] = useState<string>();

  const viewSecret = async () => {
    try {
      // const secret = await clientApiFramework.secrets.get({
      //   id: 'foo'
      // });
      setSecret('hunter2');
    } finally {
    }
  };

  const copySecret = () => {
    console.log("copying the secret");
  }

  return {
    t,
    secret,
    viewSecret,
    copySecret,
  };
};

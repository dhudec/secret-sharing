import { useClientApiFramework } from '@/components/hooks';
import {useTranslation} from "next-i18next";
import {useEffect, useState} from "react";
import {useApi} from "@basis-theory/basis-theory-portal-commons/src/api/client";
import {Secret} from "@/globals";
import {useRouter} from "next/router";

export const useViewSecretPage = () => {
  const { t } = useTranslation('secrets');
  const clientApiFramework = useClientApiFramework();
  const [secret, setSecret] = useState<string>();
  const router = useRouter();
  const secretId = router.query.id;

  const { isValidating } = useApi<Secret>(
      `secrets/${secretId}/details`,
      undefined,
      {
        revalidateOnFocus: false,
      }
  );

  const viewSecret = async () => {
      const {data} = await clientApiFramework.secrets.get({
        id: secretId
      });
      setSecret(data.data);
    };

  return {
    t,
    isValidating,
    secret,
    viewSecret,
  };
};

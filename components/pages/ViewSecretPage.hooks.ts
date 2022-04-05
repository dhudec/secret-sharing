import { useClientApiFramework } from '@/components/hooks';
import {useState} from "react";
import {useApi} from "@basis-theory/basis-theory-portal-commons/src/api/client";
import {Secret} from "@/globals";
import {useRouter} from "next/router";

export const useViewSecretPage = () => {
  const clientApiFramework = useClientApiFramework();
  const [secret, setSecret] = useState<string>();
  const router = useRouter();
  const secretId = router.query.id;

  console.log('Rendering ViewSecretPage');

  const { isValidating } = useApi<Secret>(
      `secrets/${secretId}/details`,
      undefined,
      {
        revalidateOnFocus: false,
      }
  );

  const viewSecret = async () => {
      console.log('Viewing secret');
      const {data} = await clientApiFramework.secrets.get({
        id: secretId
      });
      setSecret(data.data);
    };

  return {
    isValidating,
    secret,
    viewSecret,
  };
};

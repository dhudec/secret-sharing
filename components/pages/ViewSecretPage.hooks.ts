import { useState } from 'react';
import { useApi } from '@basis-theory/basis-theory-portal-commons/src/api/client';
import { useRouter } from 'next/router';
import { useClientApiFramework } from '@/components/hooks';
import { Secret } from '@/globals';

export const useViewSecretPage = () => {
  const clientApiFramework = useClientApiFramework();
  const [secret, setSecret] = useState<string>();
  const router = useRouter();
  const secretId = router.query.id ?? 'd4bb595f-802b-497b-b4cc-c3cba6c96d01';

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
    const { data } = await clientApiFramework.secrets.get({
      id: secretId,
    });
    setSecret(data.data);
  };

  return {
    isValidating,
    secret,
    viewSecret,
  };
};

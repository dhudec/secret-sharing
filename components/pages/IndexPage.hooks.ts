import { useState } from 'react';
import { useClientApiFramework } from '@/components/hooks';

export const useIndexPage = () => {
  const [ttl, setTtl] = useState<string>('600');
  const [data, setData] = useState<string>();
  const [secretId, setSecretId] = useState<string>();
  const [isSharePage, setIsSharePage] = useState<boolean>(false);
  const clientApiFramework = useClientApiFramework();

  const createSecret = async () => {
    try {
      const { data: secret } = await clientApiFramework.secrets.create({
        ttl: Number(ttl),
        data,
      });

      setSecretId(secret.id);
      setIsSharePage(true);
    } finally {
    }
  };

  return {
    createSecret,
    ttl,
    setTtl,
    setData,
    isSharePage,
    secretId,
  };
};

import { useState } from 'react';
import { useClientApiFramework } from '@/components/hooks';

export const useIndexPage = () => {
  const [ttl, setTtl] = useState<string>('600');
  const [data, setData] = useState<string>();
  const [isSharePage, setIsSharePage] = useState<boolean>(false);
  const clientApiFramework = useClientApiFramework();

  const createSecret = async () => {
    try {
      const ttl = 600; // todo - Gonzo do this for realz
      const secret = await clientApiFramework.secrets.create({
        ttl: Number(ttl),
        data,
      });

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
  };
};

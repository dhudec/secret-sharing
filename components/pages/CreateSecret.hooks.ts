import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { useClientApiFramework } from '@/components/hooks';

export const useCreateSecret = () => {
  const { t } = useTranslation('secrets');
  const [ttl, setTtl] = useState<string>('600');
  const [data, setData] = useState<string>();

  console.log('Rendering CreateSecret page');
  const clientApiFramework = useClientApiFramework();

  const createSecret = async () => {
    try {
      console.log('Creating secret');
      const secret = await clientApiFramework.secrets.create({
        ttl: Number(ttl),
        data,
      });
    } finally {
    }
  };

  return {
    t,
    ttl,
    setTtl,
    createSecret,
    setData,
  };
};

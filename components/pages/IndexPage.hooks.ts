import { useClientApiFramework } from '@/components/hooks';

export const useIndexPage = () => {
  const clientApiFramework = useClientApiFramework();

  const createSecret = async () => {
    try {
      const secret = await clientApiFramework.secrets.create({
        ttl: Number(ttl),
        data,
      });
    } finally {
    }
  };

  return {
    createSecret,
  };
};

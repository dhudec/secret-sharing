import type { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export { ViewSecretPage as default } from '@/components/pages/ViewSecretPage';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      'common',
      'components',
      'secrets',
      'portal-commons',
    ])),
  },
});

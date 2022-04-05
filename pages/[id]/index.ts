import type { GetStaticPaths, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export { ViewSecretPage as default } from '@/components/pages/ViewSecretPage';

export const getStaticPaths: GetStaticPaths = () => ({
  paths: [],
  fallback: 'blocking',
});

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
        'components',
        'portal-commons'
    ])),
  },
});

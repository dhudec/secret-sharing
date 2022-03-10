import type { GetStaticPaths, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ViewPage } from '@/components/pages/ViewPage';

const getStaticPaths: GetStaticPaths = () => ({
  paths: [],
  fallback: 'blocking',
});

const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      'common',
      'components',
      'portal-commons',
    ])),
  },
});

export { ViewPage as default, getStaticProps, getStaticPaths };

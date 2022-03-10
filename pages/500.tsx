import { InternalServerError } from '@basis-theory/basis-theory-portal-commons/src/components';
import type { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['portal-commons'])),
  },
});

export default InternalServerError;

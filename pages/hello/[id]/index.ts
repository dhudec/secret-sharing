import type { GetStaticPaths, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export { HelloPage as default } from '@/components/pages/HelloPage';

// export const getStaticPaths: GetStaticPaths = async () => ({
//   paths: [],
//   fallback: 'blocking',
// });
//
// export const getStaticProps: GetStaticProps = async ({ locale }) => ({
//   props: {
//     ...(await serverSideTranslations(locale, [
//       'common',
//       'components',
//       'secrets',
//       'portal-commons',
//     ])),
//   },
// });

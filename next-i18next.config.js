module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt-BR'],
    react: {
      useSuspense: false,
    },
    reloadOnPrerender: process.env.NODE_ENV !== 'production',
  },
};

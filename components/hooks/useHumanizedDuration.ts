import humanizeDuration from 'humanize-duration';
import { Duration } from 'luxon';
import { useTranslation } from 'next-i18next';

export const useHumanizedDuration = (
  duration?: Duration | number
): string | undefined => {
  const {
    i18n: { language: i18nextLanguage },
  } = useTranslation();

  if (duration === undefined) {
    return undefined;
  }

  // strips out anything after a dash to look for ISO 639-1 language
  // e.g. "pt-BR" ->  "pt"
  const language = i18nextLanguage.replaceAll(/-.+$/gu, '');

  const millis: number =
    typeof duration === 'number' ? duration : duration.as('milliseconds');

  const aDayOrLess =
    millis <=
    Duration.fromObject({
      days: 1,
    }).as('milliseconds');

  const humanized = humanizeDuration(millis, {
    fallbacks: ['en'],
    language,
    ...(aDayOrLess
      ? {
          units: ['h', 'm'],
        }
      : {}),
  });

  return humanized;
};

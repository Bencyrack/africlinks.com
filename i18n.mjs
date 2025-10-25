import { getRequestConfig } from 'next-intl/server';

export const locales = ['fr', 'en', 'pt'];
export const defaultLocale = 'fr';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !locales.includes(locale)) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});

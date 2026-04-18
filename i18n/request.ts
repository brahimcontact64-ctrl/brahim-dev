import { getRequestConfig } from 'next-intl/server';
import { defaultLocale, isLocale } from '@/i18n/routing';

export default getRequestConfig(async ({ locale }) => {
  const requestedLocale = locale && isLocale(locale) ? locale : defaultLocale;

  return {
    locale: requestedLocale,
    messages: (await import(`@/messages/${requestedLocale}.json`)).default,
  };
});
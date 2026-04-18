export const locales = ['fr', 'ar', 'en', 'de'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'fr';

export const rtlLocales: Locale[] = ['ar'];

export const localeOpenGraph: Record<Locale, string> = {
  fr: 'fr_FR',
  ar: 'ar_DZ',
  en: 'en_US',
  de: 'de_DE',
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getDirection(locale: Locale) {
  return rtlLocales.includes(locale) ? 'rtl' : 'ltr';
}
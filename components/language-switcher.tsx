'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { locales, type Locale } from '@/i18n/routing';

const localeLabels: Record<Locale, string> = {
  fr: 'FR',
  ar: 'AR',
  en: 'EN',
  de: 'DE',
};

function getLocalizedPathname(pathname: string, locale: Locale) {
  const segments = pathname.split('/');

  if (segments[1] && locales.includes(segments[1] as Locale)) {
    segments[1] = locale;
    return segments.join('/');
  }

  return `/${locale}`;
}

type LanguageSwitcherProps = {
  currentLocale: Locale;
};

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const t = useTranslations('Common');

  return (
    <div
      aria-label={t('languageSwitcherLabel')}
      className="inline-flex items-center rounded-lg bg-gray-100 p-1"
      role="navigation"
    >
      {locales.map((locale) => {
        const isActive = locale === currentLocale;

        return (
          <Link
            key={locale}
            href={getLocalizedPathname(pathname, locale)}
            prefetch={false}
            className={`rounded-md px-2.5 py-1.5 text-xs font-semibold transition sm:px-3 sm:text-sm ${
              isActive
                ? 'bg-white text-[#F15A24] shadow-sm'
                : 'text-gray-600 hover:text-[#F15A24]'
            }`}
          >
            {localeLabels[locale]}
          </Link>
        );
      })}
    </div>
  );
}
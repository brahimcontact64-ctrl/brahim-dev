import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { LocaleHtmlAttributes } from '@/components/locale-html-attributes';
import { getDirection, isLocale, type Locale } from '@/i18n/routing';

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-dynamic';

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const messages = (await import(`@/messages/${locale}.json`)).default;

  return (
    <>
      <LocaleHtmlAttributes locale={locale} dir={getDirection(locale)} />
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </>
  );
}
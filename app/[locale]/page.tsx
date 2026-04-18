import { notFound } from 'next/navigation';
import { HomePage } from '@/components/home-page';
import { isLocale } from '@/i18n/routing';

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return [
    { locale: 'fr' },
    { locale: 'ar' },
    { locale: 'en' },
    { locale: 'de' },
  ];
}

export const dynamicParams = false;

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <HomePage />;
}
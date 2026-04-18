import { notFound } from 'next/navigation';
import { HomePage } from '@/components/home-page';
import { isLocale } from '@/i18n/routing';

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-dynamic';

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <HomePage />;
}
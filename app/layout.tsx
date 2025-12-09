import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

// =======================
//      FONT
// =======================
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

// =======================
//      SEO METADATA
// =======================
export const metadata: Metadata = {
  title: 'Brahim.dev – Web & App Development',
  description:
    'Professional web & mobile development. Modern designs, high performance, and bilingual support FR/AR. Build your online presence with Brahim.dev.',
  keywords: [
    'web development',
    'mobile apps',
    'freelance developer',
    'React',
    'Next.js',
    'landing page',
    'site web algérie',
    'brahim dev',
  ],
  authors: [{ name: 'Brahim Beldjilali' }],
  creator: 'Brahim.dev',
  metadataBase: new URL('https://brahim.dev'),

  openGraph: {
    title: 'Brahim.dev – Web & App Development',
    description:
      'Professional websites, landing pages, e-commerce and mobile apps. High-quality development with modern UI/UX.',
    url: 'https://brahim.dev',
    siteName: 'Brahim.dev',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Brahim.dev Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

// =======================
//      ROOT LAYOUT
// =======================
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
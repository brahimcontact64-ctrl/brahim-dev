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
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  metadataBase: new URL('https://brahim.dev'),

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

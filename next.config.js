const withNextIntl = require('next-intl/plugin')('./i18n/request.ts');
const isProduction = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(isProduction ? { output: 'export' } : {}),
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.microlink.io',
      },
    ],
  },
};

module.exports = withNextIntl(nextConfig);

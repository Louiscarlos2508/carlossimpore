const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@electric-sql/pglite'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'carlossimpore.com',
      },
    ],
  },
};

module.exports = withNextIntl(nextConfig);

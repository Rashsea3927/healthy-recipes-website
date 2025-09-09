import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://cdn.sanity.io/**')],
  },
  experimental: {
    turbopackScopeHoisting: false,
  },
};

export default nextConfig;

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/complete-sql-query-builder',
  assetPrefix: '/complete-sql-query-builder/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

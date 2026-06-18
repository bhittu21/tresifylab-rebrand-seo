import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tresifylab.com',
      },
    ],
  },
};

export default nextConfig;

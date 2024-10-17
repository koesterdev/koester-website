/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  redirects: () => [
    {
      source: '/:path*',
      has: [
        {
          type: 'host',
          value: 'www.nick.koesterdev.com',
        },
      ],
      destination: 'https://www.koesterdev.com/nick/:path*',
      permanent: false,
    },
    {
      source: '/:path*',
      has: [
        {
          type: 'host',
          value: 'www.mark.koesterdev.com',
        },
      ],
      destination: 'https://www.koesterdev.com/mark/:path*',
      permanent: false,
    },
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
    ],
  },
};

export default nextConfig;

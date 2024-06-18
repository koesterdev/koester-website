/** @type {import('next').NextConfig} */
const nextConfig = {
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
};

export default nextConfig;

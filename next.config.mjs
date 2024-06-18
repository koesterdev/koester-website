/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: () => ({
    beforeFiles: [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.nick.koesterdev.com',
          },
        ],
        destination: '/nick/:path*',
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.mark.koesterdev.com',
          },
        ],
        destination: '/mark/:path*',
      },
    ],
  }),
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/guides',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

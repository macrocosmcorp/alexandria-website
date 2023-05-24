/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/download',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig

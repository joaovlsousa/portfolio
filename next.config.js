/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'github.com',
        protocol: 'https',
        pathname: '/joaovlsousa.png',
      },
    ],
  },
}

module.exports = nextConfig

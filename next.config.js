/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'github.com',
        protocol: 'https',
        pathname: '/joaovlsousa.png',
      },
      {
        hostname: 'anhghlqeivqemenrwgot.supabase.co',
        protocol: 'https',
      },
    ],
  },
}

module.exports = nextConfig

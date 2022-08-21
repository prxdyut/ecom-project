/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: ['ucarecdn.com', 'www.giftacrossindia.com'],
  },
}

module.exports = nextConfig

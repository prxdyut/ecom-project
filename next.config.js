/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['ucarecdn.com', 'www.giftacrossindia.com'],
  },
}

module.exports = nextConfig
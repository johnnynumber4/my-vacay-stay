/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  future: {
    webpack5: true,
  },
  styles: {
    global: '@/styles/globals.css',
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/landingRW' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/landingRW' : ''
}

module.exports = nextConfig

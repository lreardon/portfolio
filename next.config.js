/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

if (process.env.NODE_ENV == 'production') {
  nextConfig.images =  {
    loader: 'custom',
    loaderFile: './cloudflareLoader.js'
  }
}

module.exports = nextConfig

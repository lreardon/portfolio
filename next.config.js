/** @type {import('next').NextConfig} */
let nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/portfolio-photos/portfolio/**',
      },
    ],
  },
}

module.exports = nextConfig

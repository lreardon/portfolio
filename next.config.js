/** @type {import('next').NextConfig} */
let nextConfig = {
  reactStrictMode: true,
}

// if (process.env.NODE_ENV == 'production') {
//   nextConfig.images =  {
//     loader: 'custom',
//     loaderFile: './src/cloudflareLoader.js'
//   }
// }

module.exports = nextConfig

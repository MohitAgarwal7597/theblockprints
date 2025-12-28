/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Commented out to allow dynamic routes in development
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig

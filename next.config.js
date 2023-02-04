/** @type {import('next').NextConfig} */
const apiHost = process.env.NEXT_PUBLIC_FLASK_API_HOST;
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['image.tmdb.org'],
  },
  env: {
    apiHost: apiHost,
  },
}

module.exports = nextConfig

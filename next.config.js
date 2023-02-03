/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["i.imgur.com", "images.unsplash.com"],
  },
};

module.exports = nextConfig;

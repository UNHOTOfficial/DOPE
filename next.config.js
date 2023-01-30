/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["images.unsplash.com", "storage.cloudconvert.com", "i.imgur.com"],
  },
};

module.exports = nextConfig;

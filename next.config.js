const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: false,
  sw: "service-worker.js",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["i.imgur.com", "images.unsplash.com"],
  },
};

module.exports = withPWA(nextConfig);

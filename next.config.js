const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: false,
  sw: "service-worker.js",
  buildExcludes: [/middleware-manifest\.json$/],
  runtimeCaching,
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

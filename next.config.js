const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: false,
  sw: "service-worker.js",
  buildExcludes: [
    /\/*server\/middleware-chunks\/[0-9]*[a-z]*[A-Z]*\.js$/,
    /middleware-manifest\.json$/,
    /middleware-runtime\.js$/,
    /_middleware\.js$/,
    /^.+\\_middleware\.js$/,
],
publicExcludes: ['!robots.txt'],
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

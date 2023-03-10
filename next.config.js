const isDev = process.env.NODE_ENV !== "production";
const withPWA = require("next-pwa")({
  disable: true,
  dest: "public",
  register: true,
  skipWaiting: true,
  sw: "service-worker.js",
  exclude: [
    // add buildExcludes here
    ({ asset, compilation }) => {
      if (
        asset.name.startsWith("server/") ||
        asset.name.match(
          /^((app-|^)build-manifest\.json|react-loadable-manifest\.json)$/
        )
      ) {
        return true;
      }
      if (isDev && !asset.name.startsWith("static/runtime/")) {
        return true;
      }
      return false;
    },
  ],
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "i.imgur.com",
      "images.unsplash.com",
      "avatars.githubusercontent.com",
    ],
  },
};

module.exports = withPWA(nextConfig);

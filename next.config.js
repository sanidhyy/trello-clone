/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
    ],
  },
  experimental: {
    serverActions: {
      allowedOrigins: [
        "localhost:3000",
        "bug-free-broccoli-557rxgv5wg4fvwgq-3000.app.github.dev",
      ],
    },
  },
};

module.exports = nextConfig;

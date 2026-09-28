/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/Princeton_Game_Theory_Club",
  assetPrefix: "/Princeton_Game_Theory_Club/",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

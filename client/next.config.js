/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: process.env.API_HOST,
        port: process.env.API_PORT,
        pathname: "/uploads/**",
      },
    ],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "doting-jellyfish-485.convex.cloud",
      },
    ],
  },
};

export default nextConfig;

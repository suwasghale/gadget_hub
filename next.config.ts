import type { NextConfig } from "next";

const nextConfig: NextConfig = {
images: {
    remotePatterns: [
      {
        protocol: 'https', // Or 'http' if needed, but 'https' is more secure
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;

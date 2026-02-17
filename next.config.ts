import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
  sassOptions: {
    additionalData: `
    @use "@/constants/COLORS.scss" as *;
    @use "@/constants/FONTS.scss" as *;
    @use "@/constants/SPACING.scss" as *;
  `,
  },
};

export default nextConfig;

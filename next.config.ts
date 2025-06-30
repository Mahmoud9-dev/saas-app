import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
    ],
  },
  // Fix for lightningcss platform-specific binary issue
  experimental: {
    serverComponentsExternalPackages: ['lightningcss'],
  },
  transpilePackages: ['lightningcss', '@tailwindcss/postcss'],
};

export default withSentryConfig(nextConfig, {
  org: "self-employed-mhz",
  project: "mnd_converso",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  // Disable source maps to avoid lightningcss issues
  disableSourceMapUpload: true,
  sourcemaps: {
    assets: false,
    server: false,
    client: false,
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: "/nextjs-tailwind-course-landing-page/",
  basePath: "/nextjs-tailwind-course-landing-page",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;

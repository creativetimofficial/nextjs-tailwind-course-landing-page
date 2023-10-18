/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  assetPrefix: "/nextjs-tailwind-course-landing-page/",
  basePath: "/nextjs-tailwind-course-landing-page",
};

module.exports = nextConfig;

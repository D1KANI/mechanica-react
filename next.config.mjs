/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePath: "@/src/styles",
    prependData: '@import "@/styles/global.scss";',
  },
};

export default nextConfig;

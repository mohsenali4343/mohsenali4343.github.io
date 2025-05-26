/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // enables static export
    images: {
    unoptimized: true, // ✅ disable Next.js Image Optimization API
  },
  basePath: '/next-site', // 👈 important: if your repo is not root domain
  assetPrefix: '/next-site',
};

export default nextConfig;

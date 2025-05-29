/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export', // enables static export
    images: {
    unoptimized: true, // ✅ disable Next.js Image Optimization API
  },
  // basePath: '', // 👈 important: if your repo is not root domain
  // assetPrefix: '/', 
};

export default nextConfig;

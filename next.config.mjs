/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    assetPrefix: './',
    basePath: '/Portfolio',
};

export default nextConfig;

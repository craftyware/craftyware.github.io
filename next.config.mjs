/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: process.env.NODE_ENV === "production" ? 'docs' : '.next', // 'docs' is where GitHub pages is serving from
    output: 'export'
};

export default nextConfig;

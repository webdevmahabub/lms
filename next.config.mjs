/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true, // Ensure App Router is enabled
    },
    images: {
        domains: ['i.pravatar.cc'],
    }
};
export default nextConfig;

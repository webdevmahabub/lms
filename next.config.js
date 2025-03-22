/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true, // Ensure App Router is enabled
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "i.pravatar.cc"
            },
            {
                protocol: "https",
                hostname: "res.cloudinary.com"
            },
        ]
    }
};
export default nextConfig;

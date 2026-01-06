import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        dangerouslyAllowLocalIP: true,
        remotePatterns: [
            // Local development
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '1337',
                pathname: '/uploads/**',
            },
            {
                protocol: 'http',
                hostname: '127.0.0.1',
                port: '1337',
                pathname: '/uploads/**',
            },
            // Strapi Cloud
            {
                protocol: 'https',
                hostname: '**.strapiapp.com',
                pathname: '/uploads/**',
            },
        ]
    }
};

export default nextConfig;

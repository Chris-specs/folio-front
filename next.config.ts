import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com'
            }
        ]
    },
    async redirects() {
        return [
            {
                source: '/dashboard',
                destination: '/dashboard/home',
                permanent: true
            }
        ]
    }
}

export default nextConfig

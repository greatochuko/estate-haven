/** @type {import('next').NextConfig} */
const nextConfig = {images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.filestackcontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'fazgogjawhavphnbqkst.supabase.co',
        port: '',
        pathname: '/**',
      },
    ],
  },};

export default nextConfig;

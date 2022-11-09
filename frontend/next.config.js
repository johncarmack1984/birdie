/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/api/:path*",
          destination: `http://backend:8000/:path*`,
        },
      ],
    };
  },
};

module.exports = nextConfig;

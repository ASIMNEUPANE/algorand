/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        // You can add other Node.js core modules here if needed
        path: false,
        os: false,
      };
    }

    return config;
  },
};
export default nextConfig;

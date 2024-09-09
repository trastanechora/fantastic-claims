/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@node-rs/argon2'],
    instrumentationHook: true,
  },
};

export default nextConfig;

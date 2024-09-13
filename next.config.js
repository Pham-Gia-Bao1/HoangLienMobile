/** @type {import('next').NextConfig} */
// next.config.js
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["dn.fastcare.vn","cdn.fastcare.vn",'via.placeholder.com'], // Allowing images from dn.fastcare.vn
  },
  env: {
    API_URL: process.env.NEXT_PUBLIC_API_URL, // Access the environment variables
    WEBSITE_DOMAIN: process.env.NEXT_PUBLIC_WEBSITE_DOMAIN,
  },
};

module.exports = nextConfig;

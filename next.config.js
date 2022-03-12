/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "rb.gy",
      "content.linkedin.com",
      "www.linkedin.com",
      "static-exp1.licdn.com",
    ],
  },
};

module.exports = nextConfig;

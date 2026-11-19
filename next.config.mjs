/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/projects", destination: "/work", permanent: true },
      { source: "/projects/:path*", destination: "/work", permanent: true },
      { source: "/products", destination: "/services", permanent: false },
      { source: "/youtube", destination: "/about", permanent: false },
      { source: "/insights", destination: "/blog", permanent: true },
    ];
  },
};

export default nextConfig;

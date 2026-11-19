/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/projects", destination: "/work", permanent: true },
      { source: "/projects/:path*", destination: "/work", permanent: true },
      { source: "/blog", destination: "/", permanent: false },
      { source: "/blog/:path*", destination: "/", permanent: false },
      { source: "/products", destination: "/services", permanent: false },
      { source: "/youtube", destination: "/about", permanent: false },
    ];
  },
};

export default nextConfig;

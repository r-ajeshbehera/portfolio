/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  async redirects() {
    return [
      { source: "/projects/all", destination: "/projects", permanent: true },
      { source: "/blog/all", destination: "/blog", permanent: true },
    ];
  },
};

export default nextConfig;

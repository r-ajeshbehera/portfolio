/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Produces a self-contained .next/standalone build (only the files needed
  // to run the app, with node_modules pruned to production deps) -- makes
  // the Docker runtime image much smaller and avoids copying node_modules.
  output: 'standalone',
};

export default nextConfig;

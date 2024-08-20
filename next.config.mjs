/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "btxtvhxbwjxbtxrxceii.supabase.co",
        pathname: "/**", // Optional, allows all paths under this hostname
      },
    ],
  },
};

export default nextConfig;

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "btxtvhxbwjxbtxrxceii.supabase.co",
        pathname: "/storage/v1/object/public/cabins-images/**", // Optional, allows all paths under this hostname
      },
    ],
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "upload.wikimedia.org" },

      // add any other domains you want to allow herenames you want to allow here
    ],
  },
};

module.exports = nextConfig;

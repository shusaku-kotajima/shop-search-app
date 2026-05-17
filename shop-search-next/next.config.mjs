/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-src 'self' https://maps.google.com https://www.google.com https://maps.app.goo.gl;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'a.thumbs.redditmedia.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'b.thumbs.redditmedia.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.redditmedia.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'external-preview.redd.it',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig

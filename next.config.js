/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}


module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination:'/visitante/landing-page',
        permanent: true,
        basePath:false
      },
    ]
  },
  nextConfig
}

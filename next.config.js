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
      {
        source: '/admin',
        destination:'/admin/home',
        permanent: false,
        basePath:false
      },
      {
        source: '/discente',
        destination:'/discente/home',
        permanent: false,
        basePath:false
      },
    ]
  },
  nextConfig
}

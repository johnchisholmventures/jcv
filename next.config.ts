import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/cv',
        destination: '/pdfs/chisholm_cv_november_2020.pdf',
      },
      {
        source: '/regulation',
        destination: '/pdfs/regulation.pdf',
      },
      {
        source: '/dei',
        destination: '/pdfs/deireport.pdf',
      },
      {
        source: '/deipres',
        destination: '/pdfs/deipres.pdf',
      },
      {
        source: '/admin',
        destination: '/admin/index.html',
      },
    ]
  },
}

export default nextConfig

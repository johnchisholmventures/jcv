require('dotenv').config()

module.exports = {
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
      }
    ]
  },
  env: {
    TWITTER_API_TOKEN: process.env.TWITTER_API_TOKEN,
    // TWITTER_LABS_ENABLED: '1',
    // TWITTER_LABS_EXPANSIONS: 'attachments.poll_ids',
    // TWITTER_LOAD_WIDGETS: false,
  },
};
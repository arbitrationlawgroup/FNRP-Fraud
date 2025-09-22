/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://fnrpfraud.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*'],
  additionalPaths: async (config) => {
    const result = []

    // Add dynamic routes for filings
    try {
      const { getAllFilings } = await import('./lib/filings')
      const filings = await getAllFilings()
      
      filings.forEach((filing) => {
        result.push({
          loc: `/filings/${filing.slug}`,
          lastmod: filing.date,
          changefreq: 'weekly',
          priority: 0.8,
        })
      })
    } catch (error) {
      console.warn('Could not generate filing sitemap entries:', error)
    }

    // Add dynamic routes for updates
    try {
      const { getAllUpdates } = await import('./lib/updates')
      const updates = await getAllUpdates()
      
      updates.forEach((update) => {
        result.push({
          loc: `/updates/${update.slug}`,
          lastmod: update.date,
          changefreq: 'weekly',
          priority: 0.7,
        })
      })
    } catch (error) {
      console.warn('Could not generate update sitemap entries:', error)
    }

    return result
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://fnrpfraud.com/sitemap.xml',
    ],
  },
}

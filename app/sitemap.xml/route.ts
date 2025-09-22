import { getAllFilings } from '@/lib/filings'
import { getAllUpdates } from '@/lib/updates'

export async function GET() {
  const siteUrl = 'https://fnrpfraud.com'
  
  const [filings, updates] = await Promise.all([
    getAllFilings(),
    getAllUpdates()
  ])

  const staticPages = [
    { url: '', priority: '1.0', changefreq: 'daily' },
    { url: '/filings', priority: '0.9', changefreq: 'weekly' },
    { url: '/timeline', priority: '0.8', changefreq: 'weekly' },
    { url: '/updates', priority: '0.8', changefreq: 'weekly' },
    { url: '/press', priority: '0.7', changefreq: 'monthly' },
    { url: '/about', priority: '0.6', changefreq: 'monthly' },
    { url: '/contact', priority: '0.6', changefreq: 'monthly' },
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages.map(page => `
  <url>
    <loc>${siteUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')}
  
  ${filings.map(filing => `
  <url>
    <loc>${siteUrl}/filings/${filing.slug}</loc>
    <lastmod>${filing.date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('')}
  
  ${updates.map(update => `
  <url>
    <loc>${siteUrl}/updates/${update.slug}</loc>
    <lastmod>${update.date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`).join('')}
</urlset>`

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}

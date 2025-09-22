import { getAllUpdates } from '@/lib/updates'
import { getAllFilings } from '@/lib/filings'

export async function GET() {
  const [updates, filings] = await Promise.all([
    getAllUpdates(),
    getAllFilings()
  ])

  const siteUrl = 'https://fnrpfraud.com'
  const feedItems: Array<{
    title: string
    description: string
    link: string
    pubDate: string
    guid: string
  }> = []

  // Add updates
  updates.slice(0, 20).forEach((update) => {
    feedItems.push({
      title: update.title,
      description: update.description,
      link: `${siteUrl}/updates/${update.slug}`,
      pubDate: new Date(update.date).toUTCString(),
      guid: `${siteUrl}/updates/${update.slug}`,
    })
  })

  // Add recent filings
  filings.slice(0, 10).forEach((filing) => {
    feedItems.push({
      title: filing.title,
      description: filing.summary,
      link: `${siteUrl}/filings/${filing.slug}`,
      pubDate: new Date(filing.date).toUTCString(),
      guid: `${siteUrl}/filings/${filing.slug}`,
    })
  })

  // Sort by date (newest first)
  feedItems.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime())

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>FNRP Fraud Lawsuit - Court Filings & Timeline</title>
    <description>Read official filings, exhibits, and independent updates on the ongoing federal cases.</description>
    <link>${siteUrl}</link>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${feedItems.map(item => `
    <item>
      <title><![CDATA[${item.title}]]></title>
      <description><![CDATA[${item.description}]]></description>
      <link>${item.link}</link>
      <guid isPermaLink="true">${item.guid}</guid>
      <pubDate>${item.pubDate}</pubDate>
    </item>`).join('')}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}

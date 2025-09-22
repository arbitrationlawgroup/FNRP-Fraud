'use client'

import { DefaultSeo as NextDefaultSeo } from 'next-seo'

export function DefaultSeo() {
  return (
    <NextDefaultSeo
      title="FNRP Fraud Lawsuit – Court Filings & Timeline"
      description="Read official filings, exhibits, and independent updates on the ongoing federal cases."
      canonical="https://fnrpfraud.com"
      openGraph={{
        type: 'website',
        locale: 'en_US',
        url: 'https://fnrpfraud.com',
        siteName: 'FNRP Fraud Lawsuit',
        title: 'FNRP Fraud Lawsuit – Court Filings & Timeline',
        description: 'Read official filings, exhibits, and independent updates on the ongoing federal cases.',
        images: [
          {
            url: 'https://fnrpfraud.com/og/default.png',
            width: 1200,
            height: 630,
            alt: 'FNRP Fraud Lawsuit',
          },
        ],
      }}
      twitter={{
        handle: '@fnrpfraud',
        site: '@fnrpfraud',
        cardType: 'summary_large_image',
      }}
      additionalLinkTags={[
        {
          rel: 'icon',
          href: '/favicon.ico',
        },
        {
          rel: 'apple-touch-icon',
          href: '/apple-touch-icon.png',
        },
      ]}
    />
  )
}

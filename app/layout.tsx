import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'First National Realty Partners (FNRP) Fraud Lawsuits – Court Filings & Timeline',
  description: 'Read official filings, exhibits, and independent updates on the ongoing federal fraud lawsuits against First National Realty Partners (FNRP).',
  keywords: 'First National Realty Partners, FNRP, lawsuit, fraud, misrepresentation, federal court, investors, counterclaim, breach of contract',
  authors: [{ name: 'FNRP Fraud Lawsuit' }],
  creator: 'FNRP Fraud Lawsuit',
  publisher: 'FNRP Fraud Lawsuit',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fnrpfraud.com',
    siteName: 'First National Realty Partners (FNRP) Fraud Lawsuits',
    title: 'First National Realty Partners (FNRP) Fraud Lawsuits – Court Filings & Timeline',
    description: 'Read official filings, exhibits, and independent updates on the ongoing federal fraud lawsuits against First National Realty Partners (FNRP).',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'First National Realty Partners (FNRP) Fraud Lawsuits – Court Filings & Timeline',
    description: 'Read official filings, exhibits, and independent updates on the ongoing federal fraud lawsuits against First National Realty Partners (FNRP).',
  },
  alternates: {
    canonical: 'https://fnrpfraud.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <SiteHeader />
          <main className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}

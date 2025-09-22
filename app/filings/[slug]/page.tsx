import { notFound } from 'next/navigation'
import { getFilingBySlug, getAllFilings } from '@/lib/filings'
import { PdfEmbed } from '@/components/PdfEmbed'
import { Disclaimer } from '@/components/Disclaimer'
import { Badge } from '@/components/Badge'
import { Metadata } from 'next'
import { FileText, Tag, ExternalLink } from 'lucide-react'

interface FilingPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const filings = await getAllFilings()
  return filings.map((filing) => ({
    slug: filing.slug,
  }))
}

export async function generateMetadata({ params }: FilingPageProps): Promise<Metadata> {
  const filing = await getFilingBySlug(params.slug)
  
  if (!filing) {
    return {
      title: 'Filing Not Found - FNRP Fraud Lawsuit',
    }
  }

  return {
    title: `${filing.title} - FNRP Fraud Lawsuit`,
    description: filing.summary,
    openGraph: {
      title: filing.title,
      description: filing.summary,
      url: `https://fnrpfraud.com/filings/${filing.slug}`,
      type: 'article',
    },
  }
}

export default async function FilingPage({ params }: FilingPageProps) {
  const filing = await getFilingBySlug(params.slug)

  if (!filing) {
    notFound()
  }

  const formatDate = (_dateString: string) => ''

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LegalCase',
    name: filing.title,
    description: filing.summary,
    dateFiled: filing.date,
    court: filing.court,
    docketNumber: filing.docket,
    about: filing.tags,
    url: `https://fnrpfraud.com/filings/${filing.slug}`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <FileText className="h-6 w-6 text-primary mr-3" />
              <Badge variant="primary">{filing.type}</Badge>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {filing.title}
            </h1>
            
            <div className="flex items-center text-gray-600 mb-6">
              <span className="mr-6"><strong>Court:</strong> {filing.court}</span>
              <span><strong>Docket:</strong> {filing.docket}</span>
            </div>

            {filing.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {filing.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700"
                  >
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Summary */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Summary</h2>
            <p className="text-gray-700 leading-relaxed">{filing.summary}</p>
          </div>

          {/* Parties */}
          {filing.parties.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Parties</h2>
              <ul className="space-y-2">
                {filing.parties.map((party, index) => (
                  <li key={index} className="text-gray-700">{party}</li>
                ))}
              </ul>
            </div>
          )}

          {/* PDF Viewer */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Document</h2>
            <PdfEmbed pdfUrl={filing.pdf} title={filing.title} />
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href={filing.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center"
            >
              <FileText className="h-4 w-4 mr-2" />
              Open in New Tab
              <ExternalLink className="h-4 w-4 ml-2" />
            </a>
            <a
              href={filing.pdf}
              download
              className="btn-secondary inline-flex items-center"
            >
              Download PDF
            </a>
          </div>

          {/* Disclaimer */}
          <Disclaimer />
        </div>
      </div>
    </>
  )
}

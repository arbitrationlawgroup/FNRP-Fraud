import { notFound } from 'next/navigation'
import { getUpdateBySlug, getAllUpdates } from '@/lib/updates'
import { Markdown } from '@/components/Markdown'
import { Metadata } from 'next'
import { Tag, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface UpdatePageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const updates = await getAllUpdates()
  return updates.map((update) => ({
    slug: update.slug,
  }))
}

export async function generateMetadata({ params }: UpdatePageProps): Promise<Metadata> {
  const update = await getUpdateBySlug(params.slug)
  
  if (!update) {
    return {
      title: 'Update Not Found - FNRP Fraud Lawsuit',
    }
  }

  return {
    title: `${update.title} - FNRP Fraud Lawsuit`,
    description: update.description,
    openGraph: {
      title: update.title,
      description: update.description,
      url: `https://fnrpfraud.com/updates/${update.slug}`,
      type: 'article',
      images: update.ogImage ? [
        {
          url: `https://fnrpfraud.com${update.ogImage}`,
          width: 1200,
          height: 630,
          alt: update.title,
        },
      ] : undefined,
    },
  }
}

export default async function UpdatePage({ params }: UpdatePageProps) {
  const update = await getUpdateBySlug(params.slug)

  if (!update) {
    notFound()
  }

  const formatDate = (_dateString: string) => ''

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: update.title,
    description: update.description,
    datePublished: update.date,
    author: {
      '@type': 'Organization',
      name: 'FNRP Fraud Lawsuit',
    },
    publisher: {
      '@type': 'Organization',
      name: 'FNRP Fraud Lawsuit',
    },
    url: `https://fnrpfraud.com/updates/${update.slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://fnrpfraud.com/updates/${update.slug}`,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/updates"
              className="inline-flex items-center text-gray-600 hover:text-primary font-medium"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Updates
            </Link>
          </div>

          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center mb-4" />
            
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {update.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-6">
              {update.description}
            </p>

            {update.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {update.tags.map((tag) => (
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
          </header>

          {/* Content */}
          <article className="prose prose-lg prose-gray max-w-none">
            <Markdown content={update.htmlContent} />
          </article>

          {/* Related Filings */}
          {update.relatedFilings && update.relatedFilings.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Related Filings
              </h2>
              <div className="space-y-2">
                {update.relatedFilings.map((filingSlug) => (
                  <Link
                    key={filingSlug}
                    href={`/filings/${filingSlug}`}
                    className="block text-primary hover:text-primary/80 font-medium"
                  >
                    View {filingSlug}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

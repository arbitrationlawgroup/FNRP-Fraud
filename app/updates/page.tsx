import { getAllUpdates } from '@/lib/updates'
import { Markdown } from '@/components/Markdown'
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Tag } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Updates - FNRP Fraud Lawsuit',
  description: 'Latest news and developments in the FNRP fraud lawsuit case.',
  openGraph: {
    title: 'Updates - FNRP Fraud Lawsuit',
    description: 'Latest news and developments in the FNRP fraud lawsuit case.',
    url: 'https://fnrpfraud.com/updates',
  },
}

export default async function UpdatesPage() {
  const updates = await getAllUpdates()

  return (
    <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Case Updates
            </h1>
            <p className="text-lg text-gray-600">
              Latest news and developments in the FNRP fraud lawsuit case
            </p>
          </div>

          {updates.length > 0 ? (
            <div className="space-y-8">
              {updates.map((update) => (
                <article key={update.slug} className="card p-8">
                  <div className="flex items-center mb-4" />
                  
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {update.title}
                  </h2>
                  
                  <p className="text-lg text-gray-600 mb-6">
                    {update.description}
                  </p>

                  {update.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
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

                  <div className="prose prose-gray max-w-none mb-6">
                    <Markdown content={update.htmlContent} />
                  </div>

                  <Link
                    href={`/updates/${update.slug}`}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                  >
                    Read Full Update
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No updates available yet.</p>
            </div>
          )}
        </div>
      </div>
  )
}

import { Hero } from '@/components/Hero'
import { DocCard } from '@/components/DocCard'
import { PressReleaseCard } from '@/components/PressReleaseCard'
import { getAllFilings } from '@/lib/filings'
import { getLatestUpdates } from '@/lib/updates'
import Link from 'next/link'
import { ArrowRight, Newspaper } from 'lucide-react'

export default async function HomePage() {
  const [filings, updates] = await Promise.all([
    getAllFilings(),
    getLatestUpdates(3)
  ])

  const latestFilings = filings.slice(0, 3)

  // Press release data
  const pressReleases = [
    {
      title: "Red Bank real estate investment firm accused in lawsuit of shortchanging investors of $12M",
      date: "February 21, 2025",
      source: "Asbury Park Press",
      url: "https://www.app.com/story/money/business/2025/02/21/first-national-realty-partners-red-bank-real-estate-lawsuit/79182886007/",
      excerpt: "First National Realty Partners, a Red Bank real estate investment firm, offered customers the chance to buy shares in shopping centers and receive annual returns of up to 9%, but instead skimmed more than half of the money for itself, according to a lawsuit filed in federal court. The lawsuit seeks to recover $12 million from investors.",
      readTime: "2 min read"
    },
    {
      title: "Two Investor Groups File Federal Lawsuits Against First National Realty Partners Alleging Fraud and Misrepresentation",
      date: "August 14, 2025",
      source: "Yahoo Finance",
      url: "https://finance.yahoo.com/news/two-investor-groups-file-federal-114700578.html",
      excerpt: "Two separate groups of investors have filed lawsuits in the United States District Court for the District of New Jersey against First National Realty Partners, LLC (FNRP), First National Realty Advisors, LLC (FNRA), and several affiliated individuals, including managing principals Anthony Grosso and Christopher Palermo. The filings allege violations of federal and state securities laws, as well as claims under the Racketeer Influenced and Corrupt Organizations Act (RICO).",
      readTime: "2 min read"
    }
  ]

  return (
    <>
      <Hero />
      
      {/* Press Releases Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Press Coverage
            </h2>
            <p className="text-lg text-gray-600">
              Latest news coverage and press releases about the FNRP fraud lawsuits
            </p>
          </div>

          {pressReleases.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {pressReleases.map((pressRelease, index) => (
                <PressReleaseCard key={index} pressRelease={pressRelease} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No press releases available yet.</p>
            </div>
          )}

          <div className="text-center">
            <Link
              href="/press"
              className="btn-primary inline-flex items-center"
            >
              <Newspaper className="h-4 w-4 mr-2" />
              View Press Kit
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Latest Updates Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Latest Updates
            </h2>
            <p className="text-lg text-gray-600">
              Stay informed with the latest developments in the case
            </p>
          </div>

          {updates.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {updates.map((update) => (
                  <div key={update.slug} className="card p-6">
                  <div className="flex items-center mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {update.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {update.description}
                  </p>
                  <Link
                    href={`/updates/${update.slug}`}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No updates available yet.</p>
            </div>
          )}

          <div className="text-center">
            <Link
              href="/updates"
              className="btn-primary inline-flex items-center"
            >
              View All Updates
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Filings Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Recent Court Filings
            </h2>
            <p className="text-lg text-gray-600">
              Browse the most recent court documents and exhibits
            </p>
          </div>

          {latestFilings.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {latestFilings.map((filing) => (
                <DocCard key={filing.slug} filing={filing} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No filings available yet.</p>
            </div>
          )}

          <div className="text-center">
            <Link
              href="/filings"
              className="btn-primary inline-flex items-center"
            >
              View All Filings
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

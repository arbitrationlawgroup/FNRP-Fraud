import { getAllFilings } from '@/lib/filings'
import { FilingsClient } from './FilingsClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Court Filings - FNRP Fraud Lawsuit',
  description: 'Browse all official court filings, complaints, and exhibits related to the FNRP fraud lawsuit.',
  openGraph: {
    title: 'Court Filings - FNRP Fraud Lawsuit',
    description: 'Browse all official court filings, complaints, and exhibits related to the FNRP fraud lawsuit.',
    url: 'https://fnrpfraud.com/filings',
  },
}

export default async function FilingsPage() {
  const filings = await getAllFilings()
  
  // Years no longer used (dates removed)
  const years: string[] = []
  const types = Array.from(new Set(filings.map(f => f.type))).sort()

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Court Filings
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Browse all official court documents, complaints, and exhibits related to the FNRP fraud lawsuit.
          </p>
        </div>

        <FilingsClient 
          initialFilings={filings}
          years={years}
          types={types}
        />
      </div>
    </div>
  )
}

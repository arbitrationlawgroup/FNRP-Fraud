import { TimelineItem } from '@/components/TimelineItem'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Timeline - FNRP Fraud Lawsuit',
  description: 'Key events and milestones in the FNRP fraud lawsuit case progression.',
  openGraph: {
    title: 'Timeline - FNRP Fraud Lawsuit',
    description: 'Key events and milestones in the FNRP fraud lawsuit case progression.',
    url: 'https://fnrpfraud.com/timeline',
  },
}

const timelineData = [
  {
    date: '2025-08-14',
    title: 'Investor Fraud Complaint Filed',
    description: 'Initial federal complaint filed against First National Realty Partners alleging fraud and misrepresentation.',
    type: 'filing' as const,
    relatedFiling: 'complaint-2025-08-14',
  },
  {
    date: '2025-08-15',
    title: 'Case Assigned to Judge',
    description: 'Investor fraud case assigned to U.S. District Judge in New Jersey federal court.',
    type: 'event' as const,
  },
  {
    date: '2025-08-21',
    title: 'Additional Investors Join Lawsuit',
    description: 'Eighteen additional investors file separate federal complaint alleging similar misrepresentations.',
    type: 'update' as const,
    relatedUpdate: 'additional-investors-join',
  },
  {
    date: '2025-08-25',
    title: 'Defendants Served',
    description: 'Court documents served to First National Realty Partners and related entities.',
    type: 'event' as const,
  },
  {
    date: '2025-09-01',
    title: 'Response Deadline Set',
    description: 'Defendants given 21 days to respond to the investor complaint.',
    type: 'event' as const,
  },
  {
    date: '2025-01-15',
    title: 'FNRP Files Counterclaim',
    description: 'First National Realty Partners files counterclaim against investors, alleging breach of contract and seeking declaratory judgment.',
    type: 'filing' as const,
    relatedFiling: 'counterclaim-2025-01-15',
  },
  {
    date: '2025-01-20',
    title: 'Counterclaim Case Assigned',
    description: 'FNRP counterclaim case assigned to federal judge for case management.',
    type: 'event' as const,
  },
]

export default function TimelinePage() {
  return (
    <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Case Timeline
            </h1>
            <p className="text-lg text-gray-600">
              Key events and milestones in the First National Realty Partners (FNRP) fraud lawsuits progression
            </p>
          </div>

          <div className="relative">
            {timelineData.map((item, index) => (
              <TimelineItem
                key={index}
                date={item.date}
                title={item.title}
                description={item.description}
                type={item.type}
                relatedFiling={item.relatedFiling}
                relatedUpdate={item.relatedUpdate}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">
              This timeline will be updated as new developments occur in the case.
            </p>
          </div>
        </div>
      </div>
  )
}

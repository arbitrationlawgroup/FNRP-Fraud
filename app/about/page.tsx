import { Metadata } from 'next'
import { Disclaimer } from '@/components/Disclaimer'

export const metadata: Metadata = {
  title: 'About - FNRP Fraud Lawsuit',
  description: 'Learn about the FNRP fraud lawsuit and our mission to provide transparency and information to affected investors.',
  openGraph: {
    title: 'About - FNRP Fraud Lawsuit',
    description: 'Learn about the FNRP fraud lawsuit and our mission to provide transparency and information to affected investors.',
    url: 'https://fnrpfraud.com/about',
  },
}

export default function AboutPage() {
  return (
    <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              About These Cases
            </h1>
            <p className="text-lg text-gray-600">
              Providing transparency and information about the First National Realty Partners (FNRP) fraud lawsuits
            </p>
          </div>

          <div className="prose prose-lg prose-gray max-w-none">
            <h2>Our Mission</h2>
            <p>
              This website serves as a central resource for information about the ongoing federal lawsuits 
              involving First National Realty Partners (FNRP). Our mission is to provide transparency, 
              accessibility, and up-to-date information about these cases to affected investors, media, 
              and the general public.
            </p>

            <h2>Case Overview</h2>
            <p>
              <strong>Investor Fraud Lawsuits:</strong> Multiple investors have filed federal complaints alleging that 
              First National Realty Partners engaged in fraudulent practices including undisclosed fees, 
              exaggerated investment returns, and conflicted transactions that harmed investors. These cases 
              are currently pending in the U.S. District Court for the District of New Jersey.
            </p>

            <p>
              <strong>FNRP Counterclaim:</strong> In response to the investor allegations, First National Realty Partners 
              has filed a counterclaim against investors, alleging breach of contract and seeking declaratory judgment. 
              This counterclaim disputes the fraud allegations and claims the investors violated their investment agreements.
            </p>

            <p>
              These cases represent one of the most significant investment fraud disputes currently being litigated 
              in federal court, with both sides presenting their arguments through official court filings.
            </p>

            <h2>What We Provide</h2>
            <ul>
              <li><strong>Court Filings:</strong> Complete access to all official court documents, complaints, counterclaims, and exhibits</li>
              <li><strong>Case Timeline:</strong> Chronological tracking of key events and developments</li>
              <li><strong>Regular Updates:</strong> Independent analysis and updates on case progress</li>
              <li><strong>Press Resources:</strong> Media kit and resources for journalists</li>
              <li><strong>Transparency:</strong> Open access to information that affects investors and stakeholders</li>
            </ul>

            <h2>Our Commitment</h2>
            <p>
              We are committed to maintaining the highest standards of accuracy and transparency. 
              All information presented on this website is sourced from publicly available court 
              documents and verified sources. We strive to present information in a clear, 
              accessible manner that serves the interests of justice and public understanding.
            </p>

            <p>
              This website is maintained independently and is not affiliated with any law firm 
              or party to the litigation. Our goal is simply to make important legal proceedings 
              more accessible to those who are affected by them.
            </p>
          </div>

          <div className="mt-12">
            <Disclaimer />
          </div>
        </div>
      </div>
  )
}

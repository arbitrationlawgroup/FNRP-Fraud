import { Metadata } from 'next'
import { Download, Mail, Phone, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Press Kit - FNRP Fraud Lawsuit',
  description: 'Press resources and media information for the FNRP fraud lawsuit case.',
  openGraph: {
    title: 'Press Kit - FNRP Fraud Lawsuit',
    description: 'Press resources and media information for the FNRP fraud lawsuit case.',
    url: 'https://fnrpfraud.com/press',
  },
}

export default function PressPage() {
  return (
    <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Press Kit
            </h1>
            <p className="text-lg text-gray-600">
              Media resources and information for journalists covering the First National Realty Partners (FNRP) fraud lawsuits
            </p>
          </div>

          {/* Fact Sheet */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Case Fact Sheet</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Investor Fraud Case</h3>
                  <p className="text-gray-700">McGrath et al. v. First National Realty Partners, LLC</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">FNRP Counterclaim</h3>
                  <p className="text-gray-700">First National Realty Partners v. May et al.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Court</h3>
                  <p className="text-gray-700">U.S. District Court for the District of New Jersey</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Docket Numbers</h3>
                  <p className="text-gray-700">2:25-cv-13714 (Investor), 2:25-cv-01119 (Counterclaim)</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Case Types</h3>
                  <p className="text-gray-700">Securities Fraud, Investment Fraud, Arbitration Enforcement</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Status</h3>
                  <p className="text-gray-700">Active Litigation - Both Cases</p>
                </div>
              </div>
            </div>
          </section>

          {/* Key Allegations */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Allegations</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Investor Fraud Allegations</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Undisclosed Fees</h4>
                    <p className="text-gray-700">
                      Defendants allegedly failed to disclose significant fees and commissions to investors.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Exaggerated Returns</h4>
                    <p className="text-gray-700">
                      Investment returns were allegedly misrepresented and inflated in marketing materials.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Conflicted Transactions</h4>
                    <p className="text-gray-700">
                      Defendants allegedly used affiliated entities to funnel investor funds for personal benefit.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">FNRP Counterclaim Allegations</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Arbitration Clause Enforcement</h4>
                    <p className="text-gray-700">
                      FNRP seeks to enforce arbitration clauses in investment agreements to compel arbitration instead of court litigation.
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Declaratory Judgment</h4>
                    <p className="text-gray-700">
                      FNRP seeks court declaration that their practices were lawful and compliant.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Downloads */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Press Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Court Filings</h3>
                <p className="text-gray-600 mb-4">
                  Access all official court documents and exhibits
                </p>
                <a
                  href="/filings"
                  className="btn-primary inline-flex items-center"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Filings
                </a>
              </div>
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Case Timeline</h3>
                <p className="text-gray-600 mb-4">
                  Key events and milestones in the case progression
                </p>
                <a
                  href="/timeline"
                  className="btn-primary inline-flex items-center"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Timeline
                </a>
              </div>
            </div>
          </section>

          {/* Media Contact */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Media Contact</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Press Inquiries</h3>
                  <div className="flex items-center mb-2">
                    <Mail className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-gray-700">fnrpfraud@gmail.com</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Response Time</h3>
                  <p className="text-gray-700">
                    We typically respond to media inquiries within 24-48 hours during business days.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Disclaimer */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="font-semibold text-yellow-800 mb-2">Important Notice</h3>
            <p className="text-sm text-yellow-800">
              All claims described are allegations only. No court has made findings of liability. 
              Defendants are presumed innocent unless and until proven otherwise. This information 
              is provided for media reference purposes only and should not be construed as legal advice.
            </p>
          </div>
        </div>
      </div>
  )
}

import Link from 'next/link'
import { Disclaimer } from './Disclaimer'

export function SiteFooter() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Site Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              FNRP Fraud Lawsuit
            </h3>
            <p className="text-gray-600 mb-4">
              Read official filings, exhibits, and independent updates on the ongoing federal cases.
            </p>
            <Disclaimer />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/filings" className="text-gray-600 hover:text-primary text-sm">
                  Court Filings
                </Link>
              </li>
              <li>
                <Link href="/timeline" className="text-gray-600 hover:text-primary text-sm">
                  Timeline
                </Link>
              </li>
              <li>
                <Link href="/updates" className="text-gray-600 hover:text-primary text-sm">
                  Updates
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-gray-600 hover:text-primary text-sm">
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-primary text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} FNRP Fraud Lawsuit. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2 md:mt-0">
              Domain: fnrpfraud.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

'use client'

import Link from 'next/link'
import { FileText, Calendar, Newspaper, Users, Info, Mail } from 'lucide-react'

export function Hero() {
  const cards = [
    {
      title: 'Court Filings',
      description: 'Browse official court documents and exhibits',
      href: '/filings',
      icon: FileText,
    },
    {
      title: 'Timeline',
      description: 'Key events and case progression',
      href: '/timeline',
      icon: Calendar,
    },
    {
      title: 'Press & Media',
      description: 'Press kit and media resources',
      href: '/press',
      icon: Newspaper,
    },
    {
      title: 'Updates',
      description: 'Latest news and developments',
      href: '/updates',
      icon: Users,
    },
    {
      title: 'About',
      description: 'Learn more about this case',
      href: '/about',
      icon: Info,
    },
    {
      title: 'Contact',
      description: 'Get in touch with us',
      href: '/contact',
      icon: Mail,
    },
  ]

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            First National Realty Partners (FNRP) Fraud Lawsuits
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Read official filings, exhibits, and independent updates on the ongoing federal fraud lawsuits 
            against First National Realty Partners (FNRP), including investor complaints and FNRP's counterclaim.
          </p>
          
          {/* Callout Box */}
          <div className="bg-primary text-white rounded-lg p-8 max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl font-bold mb-4">Download the Official Court Filings</h2>
            <p className="text-lg mb-6">
              Access all court documents, complaints, counterclaims, and exhibits related to the First National Realty Partners (FNRP) fraud lawsuits.
            </p>
            <Link 
              href="/filings" 
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block"
            >
              View All Filings
            </Link>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <Link
                key={card.title}
                href={card.href}
                className="card p-6 group hover:shadow-lg transition-all duration-200"
              >
                <div className="flex items-center mb-4">
                  <Icon className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-200">
                    {card.title}
                  </h3>
                </div>
                <p className="text-gray-600">
                  {card.description}
                </p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

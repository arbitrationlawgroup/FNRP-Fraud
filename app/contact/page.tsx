import { Metadata } from 'next'
import { Mail, Phone, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact - FNRP Fraud Lawsuit',
  description: 'Get in touch with us regarding the FNRP fraud lawsuit case.',
  openGraph: {
    title: 'Contact - FNRP Fraud Lawsuit',
    description: 'Get in touch with us regarding the FNRP fraud lawsuit case.',
    url: 'https://fnrpfraud.com/contact',
  },
}

export default function ContactPage() {
  return (
    <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600">
              Get in touch with us regarding the FNRP fraud lawsuit case
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-primary mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@arbitrationlawgroup.com</p>
                    <p className="text-sm text-gray-500">General inquiries and information</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-primary mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">(202) 444 - 4222</p>
                    <p className="text-sm text-gray-500">Monday - Friday, 9 AM - 5 PM EST</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600">1200 G St. NW</p>
                    <p className="text-gray-600">Suite 800</p>
                    <p className="text-gray-600">Washington D.C., 20005</p>
                    <p className="text-sm text-gray-500">Serving affected investors nationwide</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Response Time</h3>
                <p className="text-sm text-gray-600">
                  We typically respond to inquiries within 24-48 hours during business days. 
                  For urgent matters, please call our phone number.
                </p>
              </div>
            </div>

            {/* No form; show contact info only */}
          </div>
        </div>
      </div>
  )
}

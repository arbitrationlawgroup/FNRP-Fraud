'use client'

import { useState } from 'react'
import { FileText, Download, AlertCircle } from 'lucide-react'

interface PdfEmbedProps {
  pdfUrl: string
  title: string
  className?: string
}

export function PdfEmbed({ pdfUrl, title, className = '' }: PdfEmbedProps) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div className={`bg-gray-50 border border-gray-200 rounded-lg p-8 text-center ${className}`}>
        <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          PDF Viewer Error
        </h3>
        <p className="text-gray-600 mb-4">
          Unable to display the PDF in the browser. Please download the file to view it.
        </p>
        <a
          href={pdfUrl}
          download
          className="btn-primary inline-flex items-center"
        >
          <Download className="h-4 w-4 mr-2" />
          Download PDF
        </a>
      </div>
    )
  }

  return (
    <div className={`bg-white border border-gray-200 rounded-lg overflow-hidden ${className}`}>
      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center">
          <FileText className="h-5 w-5 text-primary mr-2" />
          <span className="font-medium text-gray-900">{title}</span>
        </div>
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary hover:text-primary/80 font-medium"
        >
          Open in New Tab
        </a>
      </div>
      
      <div className="relative" style={{ height: '600px' }}>
        <object
          data={pdfUrl}
          type="application/pdf"
          width="100%"
          height="100%"
          onError={() => setHasError(true)}
          className="w-full h-full"
        >
          <div className="flex items-center justify-center h-full bg-gray-50">
            <div className="text-center">
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-4">
                Your browser doesn't support PDF viewing.
              </p>
              <a
                href={pdfUrl}
                download
                className="btn-primary inline-flex items-center"
              >
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </a>
            </div>
          </div>
        </object>
      </div>
    </div>
  )
}

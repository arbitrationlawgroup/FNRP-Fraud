'use client'

import { Filing } from '@/lib/filings'
import { FileText, Download, Copy, Tag } from 'lucide-react'
import { useState } from 'react'

interface DocCardProps {
  filing: Filing
}

export function DocCard({ filing }: DocCardProps) {
  const [copied, setCopied] = useState(false)

  const copyLink = async () => {
    const url = `${window.location.origin}/filings/${filing.slug}`
    await navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="card p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          <FileText className="h-6 w-6 text-primary mr-3" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {filing.title}
            </h3>
            <div className="flex items-center text-sm text-gray-500" />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
            {filing.type}
          </span>
        </div>
      </div>

      <p className="text-gray-600 mb-4 line-clamp-3">
        {filing.summary}
      </p>

      <div className="mb-4">
        <div className="text-sm text-gray-500 mb-2">
          <strong>Court:</strong> {filing.court}
        </div>
        <div className="text-sm text-gray-500 mb-2">
          <strong>Docket:</strong> {filing.docket}
        </div>
        {filing.parties.length > 0 && (
          <div className="text-sm text-gray-500">
            <strong>Parties:</strong> {filing.parties.join(', ')}
          </div>
        )}
      </div>

      {filing.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {filing.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700"
            >
              <Tag className="h-3 w-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="flex space-x-3">
        <a
          href={filing.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary flex items-center"
        >
          <FileText className="h-4 w-4 mr-2" />
          View PDF
        </a>
        <a
          href={filing.pdf}
          download
          className="btn-secondary flex items-center"
        >
          <Download className="h-4 w-4 mr-2" />
          Download
        </a>
        <button
          onClick={copyLink}
          className="btn-secondary flex items-center"
        >
          <Copy className="h-4 w-4 mr-2" />
          {copied ? 'Copied!' : 'Copy Link'}
        </button>
      </div>
    </div>
  )
}

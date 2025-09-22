'use client'

import Link from 'next/link'
import { ExternalLink, Newspaper } from 'lucide-react'

interface PressRelease {
  title: string
  date: string
  source: string
  url: string
  excerpt: string
  readTime?: string
}

interface PressReleaseCardProps {
  pressRelease: PressRelease
}

export function PressReleaseCard({ pressRelease }: PressReleaseCardProps) {
  return (
    <div className="card p-6 group hover:shadow-lg transition-all duration-200">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          <Newspaper className="h-6 w-6 text-primary mr-3" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-primary transition-colors duration-200">
              {pressRelease.title}
            </h3>
            <div className="flex items-center text-sm text-gray-500" />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">
            Press Release
          </span>
        </div>
      </div>
      
      <p className="text-gray-600 mb-4 line-clamp-3">
        {pressRelease.excerpt}
      </p>
      
      <div className="mb-4">
        <div className="text-sm text-gray-500 mb-2">
          <strong>Source:</strong> {pressRelease.source}
        </div>
        {pressRelease.readTime && (
          <div className="text-sm text-gray-500">
            <strong>Read Time:</strong> {pressRelease.readTime}
          </div>
        )}
      </div>
      
      <div className="flex space-x-3">
        <Link
          href={pressRelease.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary flex items-center"
        >
          <ExternalLink className="h-4 w-4 mr-2" />
          Read Full Article
        </Link>
        <button 
          onClick={() => navigator.clipboard.writeText(pressRelease.url)}
          className="btn-secondary flex items-center"
        >
          <ExternalLink className="h-4 w-4 mr-2" />
          Copy Link
        </button>
      </div>
    </div>
  )
}

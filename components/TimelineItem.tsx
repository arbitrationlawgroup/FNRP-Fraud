import { Calendar, FileText, ExternalLink } from 'lucide-react'
import Link from 'next/link'

interface TimelineItemProps {
  date: string
  title: string
  description: string
  type: 'filing' | 'event' | 'update'
  relatedFiling?: string
  relatedUpdate?: string
}

export function TimelineItem({ 
  date, 
  title, 
  description, 
  type, 
  relatedFiling, 
  relatedUpdate 
}: TimelineItemProps) {
  const formatDate = (_dateString: string) => ''

  const getIcon = () => {
    switch (type) {
      case 'filing':
        return <FileText className="h-5 w-5 text-primary" />
      case 'event':
        return <Calendar className="h-5 w-5 text-blue-600" />
      case 'update':
        return <Calendar className="h-5 w-5 text-green-600" />
      default:
        return <Calendar className="h-5 w-5 text-gray-600" />
    }
  }

  const getTypeColor = () => {
    switch (type) {
      case 'filing':
        return 'border-l-primary bg-primary/5'
      case 'event':
        return 'border-l-blue-500 bg-blue-50'
      case 'update':
        return 'border-l-green-500 bg-green-50'
      default:
        return 'border-l-gray-300 bg-gray-50'
    }
  }

  return (
    <div className={`relative pl-8 pb-8 border-l-4 ${getTypeColor()}`}>
      <div className="absolute -left-2 top-0 w-4 h-4 bg-white border-2 border-current rounded-full" />
      
      <div className="flex items-center mb-2">
        {getIcon()}
        <span className="ml-2 text-sm font-medium text-gray-500"></span>
        <span className="ml-3 px-2 py-1 text-xs font-medium bg-white rounded-full border">
          {type.toUpperCase()}
        </span>
      </div>
      
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {title}
      </h3>
      
      <p className="text-gray-600 mb-4">
        {description}
      </p>
      
      <div className="flex space-x-4">
        {relatedFiling && (
          <Link
            href={`/filings/${relatedFiling}`}
            className="inline-flex items-center text-sm text-primary hover:text-primary/80 font-medium"
          >
            <FileText className="h-4 w-4 mr-1" />
            View Filing
            <ExternalLink className="h-3 w-3 ml-1" />
          </Link>
        )}
        {relatedUpdate && (
          <Link
            href={`/updates/${relatedUpdate}`}
            className="inline-flex items-center text-sm text-primary hover:text-primary/80 font-medium"
          >
            <Calendar className="h-4 w-4 mr-1" />
            Read Update
            <ExternalLink className="h-3 w-3 ml-1" />
          </Link>
        )}
      </div>
    </div>
  )
}

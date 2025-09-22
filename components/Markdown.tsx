'use client'

interface MarkdownProps {
  content: string
  className?: string
}

export function Markdown({ content, className = '' }: MarkdownProps) {
  return (
    <div 
      className={`prose prose-gray max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}

import { z } from 'zod'
import fs from 'fs'
import path from 'path'

const FilingSchema = z.object({
  slug: z.string(),
  title: z.string(),
  date: z.string(),
  type: z.string(),
  court: z.string(),
  docket: z.string(),
  summary: z.string(),
  parties: z.array(z.string()),
  pdf: z.string(),
  tags: z.array(z.string()),
})

export type Filing = z.infer<typeof FilingSchema>

const contentDir = path.join(process.cwd(), 'content', 'filings')
const publicDir = path.join(process.cwd(), 'public', 'docs')

export async function getAllFilings(): Promise<Filing[]> {
  try {
    // Aggregate filings from two sources:
    // 1) Explicit JSON sidecars in content/filings (authoritative)
    // 2) Inferred from PDFs in public/docs (fallbacks when no sidecar provided)

    const filingsBySlug = new Map<string, Filing>()
    const existingPdfPaths = new Set<string>()

    // 1) Load all JSON sidecars regardless of whether a matching PDF filename exists
    if (fs.existsSync(contentDir)) {
      const jsonFiles = fs.readdirSync(contentDir).filter(file => file.endsWith('.json'))
      for (const jsonFile of jsonFiles) {
        try {
          const raw = fs.readFileSync(path.join(contentDir, jsonFile), 'utf8')
          const data = JSON.parse(raw)
          const filing = FilingSchema.parse(data)
          filingsBySlug.set(filing.slug, filing)
          if (typeof filing.pdf === 'string') {
            existingPdfPaths.add(filing.pdf)
          }
        } catch (error) {
          console.warn(`Invalid filing sidecar ${jsonFile}:`, error)
        }
      }
    }

    // 2) Load PDFs and create inferred filings for any that don't already
    // have an explicit JSON entry
    if (fs.existsSync(publicDir)) {
      const pdfFiles = fs.readdirSync(publicDir).filter(file => file.endsWith('.pdf'))
      for (const pdfFile of pdfFiles) {
        const inferred = createInferredFiling(pdfFile)
        // Skip inferred entry if a sidecar already references this PDF path
        if (existingPdfPaths.has(inferred.pdf)) {
          continue
        }
        if (!filingsBySlug.has(inferred.slug)) {
          filingsBySlug.set(inferred.slug, inferred)
        }
      }
    }
    
    // Sort by date (newest first)
    const filings = Array.from(filingsBySlug.values())
    return filings.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    console.error('Error loading filings:', error)
    return []
  }
}

export async function getFilingBySlug(slug: string): Promise<Filing | null> {
  const filings = await getAllFilings()
  return filings.find(filing => filing.slug === slug) || null
}

export function listYears(): string[] {
  const years = new Set<string>()
  // This would be populated from actual filing data
  return Array.from(years).sort((a, b) => b.localeCompare(a))
}

export function listTypes(): string[] {
  const types = new Set<string>()
  // This would be populated from actual filing data
  return Array.from(types).sort()
}

function createInferredFiling(pdfFile: string): Filing {
  const baseName = path.basename(pdfFile, '.pdf')
  const date = extractDateFromFilename(baseName)
  
  return {
    slug: baseName,
    title: formatTitleFromFilename(baseName),
    date: date || new Date().toISOString().split('T')[0],
    type: 'Document',
    court: 'U.S. District Court',
    docket: 'TBD',
    summary: 'Court filing document',
    parties: ['Various parties'],
    pdf: `/docs/${pdfFile}`,
    tags: ['court-filing'],
  }
}

function extractDateFromFilename(filename: string): string | null {
  // Try to extract date in various formats
  const datePatterns = [
    /(\d{4}-\d{2}-\d{2})/, // YYYY-MM-DD
    /(\d{2}-\d{2}-\d{4})/, // MM-DD-YYYY
    /(\d{4}_\d{2}_\d{2})/, // YYYY_MM_DD
  ]
  
  for (const pattern of datePatterns) {
    const match = filename.match(pattern)
    if (match) {
      let dateStr = match[1]
      if (dateStr.includes('_')) {
        dateStr = dateStr.replace(/_/g, '-')
      }
      return dateStr
    }
  }
  
  return null
}

function formatTitleFromFilename(filename: string): string {
  // Convert filename to readable title
  return filename
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase())
    .replace(/\.pdf$/i, '')
}

import { z } from 'zod'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const UpdateSchema = z.object({
  title: z.string(),
  date: z.string(),
  description: z.string(),
  tags: z.array(z.string()),
  relatedFilings: z.array(z.string()).optional(),
  ogImage: z.string().optional(),
})

export type Update = z.infer<typeof UpdateSchema> & {
  slug: string
  content: string
  htmlContent: string
}

const updatesDir = path.join(process.cwd(), 'content', 'updates')

export async function getAllUpdates(): Promise<Update[]> {
  try {
    const fileNames = fs.readdirSync(updatesDir)
    const mdxFiles = fileNames.filter(name => name.endsWith('.mdx') || name.endsWith('.md'))
    
    const updates = await Promise.all(
      mdxFiles.map(async (fileName) => {
        const slug = fileName.replace(/\.(mdx|md)$/, '')
        const fullPath = path.join(updatesDir, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        
        const { data, content } = matter(fileContents)
        
        // Validate frontmatter
        const validatedData = UpdateSchema.parse(data)
        
        // Convert markdown to HTML
        const processedContent = await remark()
          .use(html)
          .process(content)
        
        const htmlContent = processedContent.toString()
        
        return {
          slug,
          content,
          htmlContent,
          ...validatedData,
        }
      })
    )
    
    // Sort by date (newest first)
    return updates.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    console.error('Error loading updates:', error)
    return []
  }
}

export async function getUpdateBySlug(slug: string): Promise<Update | null> {
  const updates = await getAllUpdates()
  return updates.find(update => update.slug === slug) || null
}

export async function getLatestUpdates(count: number = 3): Promise<Update[]> {
  const updates = await getAllUpdates()
  return updates.slice(0, count)
}

# FNRP Fraud Lawsuit Website

A fast, SEO-optimized website to host public court filings and updates for the FNRP fraud lawsuit case.

## Features

- **Next.js 14** with App Router and TypeScript
- **Tailwind CSS** for clean, minimal, accessible styling
- **SEO Optimized** with next-seo, sitemap, and RSS feeds
- **Court Filings** with PDF viewer and metadata
- **Timeline** of key case events
- **Updates** blog-style posts with Markdown support
- **Press Kit** for media resources
- **Responsive Design** with mobile-first approach

## Tech Stack

- Framework: Next.js 14+ (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- SEO: next-seo, next-sitemap
- Content: Markdown/MDX with gray-matter
- Validation: Zod
- Icons: Lucide React
- Animations: Framer Motion (subtle only)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd fnrp-fraud-lawsuit
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Content Management

### Adding a New PDF Filing

1. Place the PDF file in `/public/docs/`
2. (Optional) Create a sidecar JSON file in `/content/filings/` with the same base filename:

```json
{
  "slug": "complaint-2025-08-14",
  "title": "Federal Complaint Filed – First National Realty Partners",
  "date": "2025-08-14",
  "type": "Complaint",
  "court": "U.S. District Court for the District of New Jersey",
  "docket": "2:25-cv-XXXXX",
  "summary": "Investors allege undisclosed fees, exaggerated returns, and use of affiliates to funnel investor funds.",
  "parties": ["Plaintiffs: [redacted]", "Defendants: First National Realty Partners, LLC, et al."],
  "pdf": "/docs/complaint-2025-08-14.pdf",
  "tags": ["fraud", "misrepresentation", "federal-court"]
}
```

If no sidecar JSON exists, the system will automatically infer metadata from the filename.

### Publishing a New Update

1. Create a new MDX file in `/content/updates/` with frontmatter:

```mdx
---
title: "Update Title"
date: "2025-08-21"
description: "Brief description of the update."
tags: ["investor-updates", "complaint"]
relatedFilings: ["complaint-2025-08-14"]
ogImage: "/og/updates-2025-08-21.png"
---

# Update Content

Your markdown content here...
```

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure environment variables if needed
3. Deploy automatically on push to main branch

### Manual Deployment

```bash
npm run build
npm run generate:sitemap
```

The built files will be in the `.next` directory.

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://fnrpfraud.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## SEO Features

- Automatic sitemap generation
- RSS/Atom feed at `/feed.xml`
- JSON-LD structured data
- OpenGraph and Twitter cards
- Canonical URLs
- Meta tags optimization

## Legal Disclaimer

All claims described are allegations only. No court has made findings of liability. Defendants are presumed innocent unless and until proven otherwise.

## License

This project is for informational purposes only and is not affiliated with any law firm or party to the litigation.

## Support

For technical support or questions about this website, please contact the development team.

'use client'

import { useState } from 'react'
import { DocCard } from '@/components/DocCard'
import { SearchFilter } from '@/components/SearchFilter'
import { Filing } from '@/lib/filings'

interface FilingsClientProps {
  initialFilings: Filing[]
  years: string[]
  types: string[]
}

export function FilingsClient({ initialFilings, years, types }: FilingsClientProps) {
  const [filings] = useState<Filing[]>(initialFilings)
  const [filteredFilings, setFilteredFilings] = useState<Filing[]>(initialFilings)

  const handleFilterChange = ({ search, year, type }: { search: string; year: string; type: string }) => {
    let filtered = filings

    if (search) {
      const searchLower = search.toLowerCase()
      filtered = filtered.filter(filing => 
        filing.title.toLowerCase().includes(searchLower) ||
        filing.summary.toLowerCase().includes(searchLower) ||
        filing.tags.some(tag => tag.toLowerCase().includes(searchLower))
      )
    }

    if (year) {
      filtered = filtered.filter(filing => 
        new Date(filing.date).getFullYear().toString() === year
      )
    }

    if (type) {
      filtered = filtered.filter(filing => filing.type === type)
    }

    setFilteredFilings(filtered)
  }

  return (
    <>
      <SearchFilter
        onFilterChange={handleFilterChange}
        years={years}
        types={types}
      />

      {filteredFilings.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFilings.map((filing) => (
            <DocCard key={filing.slug} filing={filing} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">
            {filings.length === 0 
              ? 'No filings available yet.' 
              : 'No filings match your search criteria.'
            }
          </p>
        </div>
      )}
    </>
  )
}

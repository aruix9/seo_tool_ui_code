'use client'

import Breadcrumbs from '@/components/shared/breadcrumb'
import BacklinkTable from './BacklinkTable'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function Page() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleExport = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/api/v1/exports/backlinks`,
        {
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
            // Authorization: `Bearer ${token}` // add if needed
          },
        },
      )

      const data = await response.json()

      if (!data.downloadUrl) {
        throw new Error('Download URL not returned')
      }

      /**
       * Trigger file download
       */
      const link = document.createElement('a')
      link.href = `${process.env.NEXT_PUBLIC_API_BASE}${data.downloadUrl}`
      link.download = ''
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (err: any) {
      console.error(err)
      setError(err.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className='container grow flex flex-col'>
      <Breadcrumbs
        list={[
          { name: 'Home', link: '/' },
          { name: 'Audit', link: '' },
        ]}
      />
      <h1 className='my-8 font-bold text-xl'>Audit List</h1>
      <div className='w-full flex justify-end mb-8'>
        <Button onClick={handleExport}>
          {loading ? 'Exporting...' : 'Export Backlinks'}
        </Button>
      </div>
      <BacklinkTable />
    </div>
  )
}

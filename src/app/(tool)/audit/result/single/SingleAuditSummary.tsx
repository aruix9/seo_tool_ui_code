'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

import Breadcrumbs from '@/components/shared/breadcrumb'
import {
  getAnchors,
  getMetrics,
  getRefdomains,
  getSummary,
} from '@/lib/actions/audit/auditActions'
import { auditDataType } from '@/../types/type'
import LoadingSkeleton from '@/components/shared/layout/loadingSkeleton'
import SummaryCardWrapper from './SummaryCardWrapper'
import { Button } from '@/components/ui/button'

const SingleAuditSummary = () => {
  const [auditData, setAuditData] = useState<auditDataType>()
  const searchParams = useSearchParams()
  const url = searchParams.get('url')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleExport = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/api/v1/exports/backlinks?type=all-data&target=${searchParams.get('url')}`,
        {
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )

      const data = await response.json()

      if (!data.downloadUrl) {
        throw new Error('Download URL not returned')
      }

      const fileName = data.downloadUrl

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/api/v1/exports/download?file=${encodeURIComponent(fileName)}`,
      )

      const blob = await res.blob()

      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')

      a.href = url
      a.download = fileName
      document.body.appendChild(a)
      a.click()

      a.remove()
      window.URL.revokeObjectURL(url)
    } catch (err: any) {
      console.error(err)
      setError(err.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const fetchAuditData = async () => {
      if (url) {
        const summaryResponse = await getSummary([url])
        const metricsResponse = await getMetrics([url])
        const anchorsResponse = await getAnchors(url, 'refdomains')
        const refDomainsResponse = await getRefdomains(url, 'refdomains', 100)
        setAuditData({
          summary: { ...summaryResponse[0] },
          metrics: { ...metricsResponse[0] },
          anchors: [...anchorsResponse],
          refDomains: [...refDomainsResponse],
        })
      }
    }

    fetchAuditData()
  }, [url])

  if (!auditData) {
    return <LoadingSkeleton />
  }

  return (
    <div className='w-full max-w-[1440px] px-6 mx-auto'>
      <h1 className='my-8 text-xl font-bold'>{url} Summary</h1>

      <div className='mb-8'>
        <Button onClick={handleExport}>
          {loading ? 'Exporting...' : 'Export All Data'}
        </Button>
      </div>
      <SummaryCardWrapper
        metrics={auditData.metrics}
        summary={auditData.summary}
        anchors={auditData.anchors}
        refDomains={auditData.refDomains}
      />
    </div>
  )
}

export default SingleAuditSummary

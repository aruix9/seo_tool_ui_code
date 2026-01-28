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

const SingleAuditSummary = () => {
  const [auditData, setAuditData] = useState<auditDataType>()
  const searchParams = useSearchParams()
  const url = searchParams.get('url')

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
    <div className='container grow flex flex-col max-h-[calc(100vh-95px)] overflow-y-auto'>
      <Breadcrumbs
        list={[
          { name: 'Home', link: '/' },
          { name: 'Audit Summary', link: '' },
        ]}
      />
      <h1 className='my-8 text-xl font-bold'>{url} Summary</h1>
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

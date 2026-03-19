'use client'

import SummaryDisplayCards from './SummaryDisplayCards'
import SummaryTable from './SummaryTable'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { getSummary } from '@/lib/actions/audit/auditActions'
import LoadingSkeleton from '@/components/shared/layout/loadingSkeleton'

const MultiAuditSummary = () => {
  const [auditData, setAuditData] = useState(null)
  const [auditKeys, setAuditKeys] = useState(null)

  const searchParams = useSearchParams()

  const fetchAuditData = useCallback(async () => {
    const urls: string[] = []
    const mainUrl = searchParams.get('url')
    if (mainUrl) urls.push(mainUrl)

    for (let i = 1; i <= 5; i++) {
      const competitor = searchParams.get(`competitor${i}`)
      if (competitor) urls.push(competitor)
    }

    if (urls.length === 0) return

    const summaryResponse = await getSummary(urls)
    if (summaryResponse.length > 0) {
      setAuditData({ summary: summaryResponse })
      setAuditKeys({ summaryKeys: Object.keys(summaryResponse[0]) })
    }
  }, [searchParams])

  useEffect(() => {
    fetchAuditData()
  }, [fetchAuditData])

  if (!auditData && !auditKeys) {
    return <LoadingSkeleton />
  }

  return (
    <>
      <div className='container grow flex flex-col'>
        <h1 className='my-8 font-bold text-xl'>Audit Summary</h1>
        <SummaryDisplayCards auditData={auditData} />
        <SummaryTable auditData={auditData} auditKeys={auditKeys} />
        <div className='text-center mb-16'>
          <Link
            href={`backlink?${searchParams.toString()}`}
            className='border-2 px-2 py-1 border-primary rounded-md'
          >
            More
          </Link>
        </div>
      </div>
    </>
  )
}

export default MultiAuditSummary

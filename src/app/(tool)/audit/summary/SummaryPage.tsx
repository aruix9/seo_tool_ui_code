'use client'

import { useSearchParams } from 'next/navigation'
import MultiAuditSummary from './multi/MultiAuditSummary'
import SingleAuditSummary from './single/SingleAuditSummary'

const SummaryPage = () => {
  const searchParams = useSearchParams()
  const queries = Object.keys(Object.fromEntries(searchParams.entries()))

  if (queries.some((item) => item.includes('competitor'))) {
    return <MultiAuditSummary />
  } else {
    return <SingleAuditSummary />
  }
}

export default SummaryPage

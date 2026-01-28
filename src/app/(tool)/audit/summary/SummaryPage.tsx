'use client'

import { useSearchParams } from 'next/navigation'
import MultiAuditSummary from './multi/MultiAuditSummary'
import SingleAuditSummary from './single/SingleAuditSummary'

const SummaryPage = () => {
  const searchParams = useSearchParams()

  if (searchParams.size > 1) {
    return <MultiAuditSummary />
  } else {
    return <SingleAuditSummary />
  }
}

export default SummaryPage

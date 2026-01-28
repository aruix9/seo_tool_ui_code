'use client'

import { useSearchParams } from 'next/navigation'
import MultiAuditSummary from './multi/MultiAuditSummary'
import SingleAuditSummary from './single/SingleAuditSummary'

export default function Page() {
  const searchParams = useSearchParams()

  if (searchParams.size > 1) {
    return (
      // <MultiAuditSummary auditData={auditData} searchParams={searchParams} />
      <MultiAuditSummary />
    )
  } else {
    // return <SingleAuditSummary auditData={auditData} />
    return <SingleAuditSummary />
  }
}

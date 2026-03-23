'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import Breadcrumb from "@/components/Layout/Breadcrumb";
import SingleAuditSummary from './single/SingleAuditSummary'
import MultiDomainSummary from './(multiDomains)'

const SummaryPage = () => {
  const searchParams = useSearchParams()
  const queries = Object.keys(Object.fromEntries(searchParams.entries()))
  
  const router = useRouter();
  if(!searchParams.get('url')) router.push(`audit`);

  return (
    <div className="bg-background-light font-display text-slate-900 min-h-screen">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Audit", href: "/audit" },
        { label: "Audit Result" }
      ]} />
      {(queries.some((item) => item.includes('competitor'))) ? <MultiDomainSummary searchParams={searchParams} /> : <SingleAuditSummary />}
    </div>
  )
}

export default SummaryPage

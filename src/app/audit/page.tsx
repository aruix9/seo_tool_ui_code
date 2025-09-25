'use client'
import { useEffect, useState } from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { getSummary } from '@/lib/actions/audit/summaryActions'

const BacklinksPage = () => {
  const [summary, setSummary] = useState(null)

  const fetchSummaryData = async () => {
    const targets: String[] = ["https://www.seranking.com/", "https://www.google.com/"]
    const SummaryData = await getSummary(targets)
    console.log(SummaryData)
    setSummary(SummaryData)
  }

  useEffect(() => {
    fetchSummaryData()
  }, [])
  
  return (
    <div className='container grow flex flex-col'>
      <Breadcrumb className='my-4'>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Audit Summary</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className='grow w-full flex justify-center items-center my-8'>
        
      </div>
    </div>
  )
}

export default BacklinksPage

'use client'
import { useEffect, useState } from 'react'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { getSummary } from '@/lib/actions/audit/auditActions'
import Link from 'next/link'
import { Skeleton } from '@/components/ui/skeleton'
import { useSearchParams } from 'next/navigation'
import Breadcrumbs from '@/components/shared/breadcrumb'
import SummaryPieChart from './SummaryPieChart'
import SummaryLineChart from './SummaryLineChart'

const topAuditLinkObject = {
  top_anchors_by_backlinks: {
    link: 'anchors/',
    orderBy: 'backlinks'
  },
  top_anchors_by_refdomains: {
    link: 'anchors/',
    orderBy: 'refdomains'
  },
  top_pages_by_backlinks: {
    link: 'indexed-pages/',
    orderBy: 'backlinks'
  },
  top_pages_by_refdomains: {
    link: 'indexed-pages/',
    orderBy: 'refdomains'
  },
  top_tlds: 'tlds',
  top_countries: 'countries'
}

const displayCard = ["backlinks", "anchors", "refdomains", "inlink_rank"]
const summaryList = ["backlinks", "refdomains", "dofollow_backlinks", "inlink_rank"]

const Page = () => {
  const [auditData, setAuditData] = useState(null)
  const [auditKeys, setAuditKeys] = useState(null)

  const searchParams = useSearchParams()

  useEffect(() => {
    const fetchAuditData = async () => {
      // Collect the main website
      const urls: string[] = []
      const mainUrl = searchParams.get('url')
      if (mainUrl) urls.push(mainUrl)

      // Collect competitors (competitor1..5)
      for (let i = 1; i <= 5; i++) {
        const competitor = searchParams.get(`competitor${i}`)
        if (competitor) urls.push(competitor)
      }

      if (urls.length === 0) return // avoid empty API calls

      const summaryResponse = await getSummary(urls)
      // const metricsResponse = await getMetrics(urls)
      // const backlinksMetricsResponse = await getBacklinksMetrics(urls)
      setAuditData({
        summary: summaryResponse,
        // metrics: metricsResponse,
        // historyBacklink: historyResponse,
        // backlinksMetrics: backlinksMetricsResponse
      })
      setAuditKeys({
        summaryKeys: Object.keys(summaryResponse[0]),
        // metricsKeys: Object.keys(metricsResponse[0]),
        // historyKeys: Object.keys(historyResponse[0]),
        // backlinksMetricsKeys: Object.keys(backlinksMetricsResponse[0]),
      })
    }

    fetchAuditData()
  }, [searchParams])

  if(!auditData && !auditKeys) {
    return (
      <div className='my-12'>
        <h1 className='text-xl font-bold mb-4'>Content Loading</h1>
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </div>
    )
  }
  
  return (
    <div className='container grow flex flex-col'>
      <Breadcrumbs list={[{name: 'Home', link: '/'}, {name: 'Audit', link: ''}]} />

      <h1 className='my-8 font-bold text-xl'>Audit Summary</h1>

      <div className='flex flex-row gap-4'>
        {
          displayCard.map((type, index) => (
            <SummaryPieChart
              key={index}
              summaryData={auditData?.summary}
              type={type}
              typeName={type.replace(/_/g, ' ').replace(/^\w/, c => c.toUpperCase())}
            />
          ))
        }
      </div>
      <div className='w-full mt-8 mb-16'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Target</TableHead>
              {auditData && auditData?.summary.map(summary => <TableHead key={summary.target}>{summary.target}</TableHead>)}
            </TableRow>
          </TableHeader>
          <TableBody>
            {auditKeys && auditKeys?.summaryKeys.map((key) => (
              summaryList.includes(key) && 
              <TableRow key={key}>
                <TableCell className='capitalize'>{key.replaceAll("_", " ")}</TableCell>
                  {auditData && auditData?.summary.map((summary, index) => (
                    // summaryList.includes(key) ? 'yes' : 'no'
                    
                      <TableCell key={index}>{summary[key].toLocaleString("en-IN")}</TableCell>
                  )
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="text-center mt-8">
          <Link href="/about">More</Link>
        </div>
      </div>
    </div>
  )
}

export default Page
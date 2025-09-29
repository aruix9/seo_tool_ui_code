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

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { getBacklinksMetrics, getHistory, getMetrics, getSummary } from '@/lib/actions/audit/auditActions'
import Link from 'next/link'

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

const Page = () => {
  const [auditData, setAuditData] = useState(null)
  const [auditKeys, setAuditKeys] = useState(null)

  const fetchAuditData = async () => {
    const targets: String[] = ["https://www.seranking.com/", "https://www.google.com/"]
    const summaryResponse = await getSummary(targets)
    const metricsResponse = await getMetrics(targets)
    const backlinksMetricsResponse = await getBacklinksMetrics(targets)
    const historyResponse = await getHistory(targets[0], '2023-01-15', '2025-09-24')
    setAuditData({
      summary: summaryResponse,
      metrics: metricsResponse,
      historyBacklink: historyResponse,
      backlinksMetrics: backlinksMetricsResponse
    })
    setAuditKeys({
      summaryKeys: Object.keys(summaryResponse[0]),
      metricsKeys: Object.keys(metricsResponse[0]),
      historyKeys: Object.keys(historyResponse[0]),
      backlinksMetricsKeys: Object.keys(backlinksMetricsResponse[0]),
    })
  }

  useEffect(() => {
    fetchAuditData()
  }, [])

  console.log(auditData)
  console.log(auditKeys)

  if(!auditData && !auditKeys) {
    return;
  }
  
  return (
    <div className='container grow flex flex-col'>
      <Breadcrumb className='my-4'>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Audit</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className='mt-8 font-bold text-xl'>Audit Backlinks Metrics</h1>
      <div className='grow w-full flex my-8'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Target</TableHead>
              {auditData && auditData?.backlinksMetrics?.map(metric => <TableHead key={metric.target}>{metric.target}</TableHead>)}
            </TableRow>
          </TableHeader>
          <TableBody>
            {auditKeys && auditKeys?.backlinksMetricsKeys?.map((key) => (
              key !== 'target' && 
              <TableRow key={key}>
                <TableCell className='capitalize'>{key.replaceAll("_", " ")}</TableCell>
                  {auditData && auditData?.backlinksMetrics?.map((metric, index) => (
                    <TableCell key={index}>{metric[key]}</TableCell>
                  )
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <hr className='my-8 border-b-2'/>
      <h1 className='mt-8 font-bold text-xl'>Audit Metrics</h1>
      <div className='grow w-full flex my-8'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Target</TableHead>
              {auditData && auditData?.metrics.map(metric => <TableHead key={metric.target}>{metric.target}</TableHead>)}
            </TableRow>
          </TableHeader>
          <TableBody>
            {auditKeys && auditKeys?.metricsKeys.map((key) => (
              key !== 'target' && 
              <TableRow key={key}>
                <TableCell className='capitalize'>{key.replaceAll("_", " ")}</TableCell>
                  {auditData && auditData?.metrics.map((metric, index) => (
                    <TableCell key={index}>{metric[key]}</TableCell>
                  )
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <hr className='my-8 border-b-2'/>
      <h1 className='mt-8 font-bold text-xl'>Audit Summary</h1>
      <div className='grow w-full flex my-8'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Target</TableHead>
              {auditData && auditData?.summary.map(summary => <TableHead key={summary.target}>{summary.target}</TableHead>)}
            </TableRow>
          </TableHeader>
          <TableBody>
            {auditKeys && auditKeys?.summaryKeys.map((key) => (
              key !== 'target' && 
              <TableRow key={key}>
                <TableCell className='capitalize'>{key.replaceAll("_", " ")}</TableCell>
                  {auditData && auditData?.summary.map((summary, index) => (
                    typeof summary[key] !== 'object' ?
                      <TableCell key={index}>{summary[key]}</TableCell> :
                      <TableCell>{summary[key].length} &nbsp; &nbsp;<Link target="_blank" href={`${topAuditLinkObject[key].link + encodeURIComponent(summary.target)}?orderBy=${topAuditLinkObject[key].orderBy}`} className='underline text-primary'>More</Link></TableCell>
                  )
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <hr className='my-8 border-b-2'/>
      <h1 className='mt-8 font-bold text-xl'>Audit History</h1>
      <div className='grow w-full flex my-8'>
        <Table className='table-fixed'>
          <TableHeader>
            <TableRow>
              {auditKeys && auditKeys?.historyKeys.map(key => <TableHead key={key} className='w-[150] capitalize'>{key.replaceAll("_", " ")}</TableHead>)}
            </TableRow>
          </TableHeader>
          <TableBody>
            {auditData && auditData?.historyBacklink.map((key, historyIndex) => (
              key !== 'target' && 
              <TableRow key={historyIndex}>
                {auditKeys && auditKeys?.historyKeys.map((item, index) => (
                    <TableCell className='break-all whitespace-normal'>{Array.isArray(key[item])
                    ? JSON.stringify(key[item])
                    : typeof key[item] === 'boolean'
                    ? key[item].toString()
                    : key[item] !== null
                    ? key[item]
                    : '—'}</TableCell>
                  )
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default Page

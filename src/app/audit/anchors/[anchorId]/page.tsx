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

import axios from 'axios';
import { useSearchParams } from 'next/navigation';

export type AuditAnchorProps = {
  params: Promise<{
    anchorId: string
  }>
}

const Page = ({params}: AuditAnchorProps) => {
  const searchParams = useSearchParams();
  const orderBy = searchParams.get('orderBy')

  const [anchorsData, setAnchorsData] = useState(null)
  const [anchorsKeys, setAnchorsKeys] = useState(null)

  const fetchAnchorsData = async () => {
    const { anchorId } = await params
    const response = await axios.post('http://localhost:3000/api/v1/audit/anchors', {target: decodeURIComponent(anchorId), order: orderBy})
    const anchorsResponse = response.data.anchors
    setAnchorsData(anchorsResponse)
    setAnchorsKeys(Object.keys(anchorsResponse[0]))
  }

  useEffect(() => {
    fetchAnchorsData()
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
            <BreadcrumbPage>Anchors</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className='mt-8 font-bold text-xl'>Audit Anchors</h1>
      <div className='grow w-full flex my-8'>
        <Table className='table-fixed'>
          <TableHeader>
            <TableRow>
              {anchorsKeys && anchorsKeys.map((anchor, i) => <TableHead key={anchor} className={`capitalize ${i == 0 ? 'w-3xs': ''}`}>{anchor.replaceAll("_", " ")}</TableHead>)}
            </TableRow>
          </TableHeader>
          <TableBody>
            {anchorsData && anchorsData.map((item, index) => (
              <TableRow key={index}>
                {anchorsKeys && anchorsKeys.map((key, i) => (
                  <TableCell key={key} className={`${i == 0 ? 'whitespace-normal' : ''}`}>{item[key]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default Page

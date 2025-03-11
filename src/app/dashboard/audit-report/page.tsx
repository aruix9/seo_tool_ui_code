'use client'

import CommonChart from '@/components/shared/layout/commonChart'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { ArrowUp, Download, Link, Share2 } from 'lucide-react'

const AuditReport = () => {
  return (
    <div className='grow p-4'>
      <Breadcrumb className='mb-4'>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href='/dashboard'>Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Audit Report</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className='h1-bold'>Audit Report</h1>
      <div className='border rounded-lg mt-8'>
        <div className='flex justify-between gap-8 p-6 border-b'>
          <div>
            <h2 className='font-bold text-lg'>
              Website backlink analysis summary
            </h2>
            <p className='text-sm'>
              Assessing the quality and quantity of backlinks pointing to a URL
            </p>
          </div>
          <div className='flex gap-4 items-center'>
            <Link size={24} />
            <span>
              URL (all) <br /> 50 URLs
            </span>
          </div>
          <div className='flex gap-4 items-center'>
            <Button className='cursor-pointer'>
              <Download />
              Download Report
            </Button>
            <Button className='cursor-pointer' variant={'outline'}>
              <Share2 />
              Share
            </Button>
          </div>
        </div>
        <div className='flex justify-between gap-8 p-8'>
          <div className='flex flex-col justify-center items-center grow'>
            <h2 className='font-bold text-xl'>Backlink Quality Score</h2>
            <div className='w-[200px] h-[200px] my-auto flex flex-col items-center justify-center border-10 border-purple-400 bg-purple-100 rounded-full my-4'>
              <h2 className='text-4xl font-bold'>8.7</h2>
              <span>/10</span>
            </div>
          </div>
          <div className='flex gap-4 items-center'>
            <div className='border p-16 rounded-xl'>
              <CommonChart />
            </div>
          </div>
        </div>
        <div className='flex justify-between p-4 border-t flex-wrap'>
          <div className='flex gap-4 items-center w-1/3 p-4'>
            <Link size={24} />
            <span className='flex flex-col'>
              <strong>Link Diversity</strong>
              <span className='flex gap-2'>
                7.9 <ArrowUp />
              </span>
            </span>
          </div>
          <div className='flex gap-4 items-center w-1/3 p-4'>
            <Link size={24} />
            <span className='flex flex-col'>
              <strong>Link Diversity</strong>
              <span className='flex gap-2'>
                7.9 <ArrowUp />
              </span>
            </span>
          </div>
          <div className='flex gap-4 items-center w-1/3 p-4'>
            <Link size={24} />
            <span className='flex flex-col'>
              <strong>Link Diversity</strong>
              <span className='flex gap-2'>
                7.9 <ArrowUp />
              </span>
            </span>
          </div>
          <div className='flex gap-4 items-center w-1/3 p-4'>
            <Link size={24} />
            <span className='flex flex-col'>
              <strong>Link Diversity</strong>
              <span className='flex gap-2'>
                7.9 <ArrowUp />
              </span>
            </span>
          </div>
          <div className='flex gap-4 items-center w-1/3 p-4'>
            <Link size={24} />
            <span className='flex flex-col'>
              <strong>Link Diversity</strong>
              <span className='flex gap-2'>
                7.9 <ArrowUp />
              </span>
            </span>
          </div>
          <div className='flex gap-4 items-center w-1/3 p-4'>
            <Link size={24} />
            <span className='flex flex-col'>
              <strong>Link Diversity</strong>
              <span className='flex gap-2'>
                7.9 <ArrowUp />
              </span>
            </span>
          </div>
          <div className='flex gap-4 items-center w-1/3 p-4'>
            <Link size={24} />
            <span className='flex flex-col'>
              <strong>Link Diversity</strong>
              <span className='flex gap-2'>
                7.9 <ArrowUp />
              </span>
            </span>
          </div>
          <div className='flex gap-4 items-center w-1/3 p-4'>
            <Link size={24} />
            <span className='flex flex-col'>
              <strong>Link Diversity</strong>
              <span className='flex gap-2'>
                7.9 <ArrowUp />
              </span>
            </span>
          </div>
          <div className='flex gap-4 items-center w-1/3 p-4'>
            <Link size={24} />
            <span className='flex flex-col'>
              <strong>Link Diversity</strong>
              <span className='flex gap-2'>
                7.9 <ArrowUp />
              </span>
            </span>
          </div>
          <div className='flex gap-4 items-center w-1/3 p-4'>
            <Link size={24} />
            <span className='flex flex-col'>
              <strong>Link Diversity</strong>
              <span className='flex gap-2'>
                7.9 <ArrowUp />
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuditReport

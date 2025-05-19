'use client'

import React, { useEffect } from 'react'
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbItem,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { getOrderById } from '@/lib/actions/getOrders'

const OrderDetails = ({ params }: { params: { id: string } }) => {
  useEffect(() => {
    const getOrderId = async () => {
      const { id } = await params
      getOrderById(id)
    }
    getOrderId()
  }, [params])

  return (
    <main className='container'>
      <Breadcrumb className='my-4'>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Orders</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h2 className='h2-bold mb-8'>Order Details</h2>
      <div className='mb-4'>
        <div className='flex gap-8'>
          <div className='w-1/3 border border-gray-300 rounded-lg p-6'>
            <div>
              <h3 className='text-xl font-bold mb-2'>Payment Details</h3>
              <div className='flex gap-2 mb-1'>
                <span className='font-medium'>Paid through:</span>
                <span>Credit Card</span>
              </div>
              <div className='flex gap-2 mb-1'>
                <span className='font-medium'>Cardholder name:</span>
                <span>Alice Johnson</span>
              </div>
              <div className='flex gap-2'>
                <span className='font-medium'>Card Number</span>
                <span>41** **** **** 1235</span>
              </div>
            </div>
          </div>
          <div className='w-2/3'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
            doloribus in dicta adipisci, voluptates aut maiores ab atque
            inventore totam? Repudiandae assumenda quo quos corrupti mollitia a,
            id saepe eaque?
          </div>
        </div>
      </div>
    </main>
  )
}

export default OrderDetails

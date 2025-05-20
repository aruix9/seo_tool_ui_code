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
import { IOrder } from '@/models/order'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export type OrderDetailsProps = {
  params: Promise<{
    orderId: string
  }>
}

const OrderDetails = ({ params }: OrderDetailsProps) => {
  const [order, setOrder] = React.useState<IOrder | null>(null)

  useEffect(() => {
    const getOrderId = async () => {
      const { orderId } = await params
      const order = await getOrderById(orderId)
      setOrder(order)
    }
    getOrderId()
  }, [params])

  if (!order) {
    return (
      <main className='container'>
        <h2 className='h2-bold mb-8'>Loading...</h2>
      </main>
    )
  }

  return (
    <main className='container'>
      <Breadcrumb className='my-4'>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href='/orders'>Orders</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{order._id}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h2 className='h2-bold mb-8'>Order Details</h2>
      <div className='mb-4'>
        <div className='flex gap-8'>
          <div className='w-1/3 border border-gray-300 rounded-lg p-6'>
            <div className='mb-4'>
              <h3 className='text-xl font-bold mb-2'>Billing Details</h3>
              <div className='flex gap-2 mb-1'>
                <span className='font-medium'>Name:</span>
                <span className='capitalize'>{order.billingAddress.name}</span>
              </div>
              <div className='flex gap-2 mb-1'>
                <span className='font-medium'>Address:</span>
                <span className='capitalize'>
                  {`${order.billingAddress.street}, ${order.billingAddress.country}, ${order.billingAddress.state}, ${order.billingAddress.city}, ${order.billingAddress.zipCode}`}
                </span>
              </div>
              <div className='flex gap-2 mb-1'>
                <span className='font-medium'>Phone:</span>
                <span className='capitalize'>{order.billingAddress.phone}</span>
              </div>
              <div className='flex gap-2 mb-1'>
                <span className='font-medium'>Email:</span>
                <span className='capitalize'>{order.billingAddress.email}</span>
              </div>
            </div>
            <div>
              <h3 className='text-xl font-bold mb-2'>Payment Details</h3>
              <div className='flex gap-2 mb-1'>
                <span className='font-medium'>Paid through:</span>
                <span className='capitalize'>{order.paymentMethod}</span>
              </div>
              <div className='flex gap-2 mb-1'>
                <span className='font-medium'>Amount paid:</span>
                <span className='capitalize'>{order.totalAmount}</span>
              </div>
            </div>
          </div>
          <div className='w-2/3'>
            <p className={`capitalize p-2 mb-4 bg-${order.status}`}>
              <span className='font-bold'>Order Status:</span> {order.status}
            </p>
            <Table>
              <TableHeader>
                <TableRow className='bg-gray-200'>
                  <TableHead className='font-bold text-black'>
                    Link Details
                  </TableHead>
                  <TableHead className='font-bold text-black'>Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {order.cart &&
                  order.cart?.items.map((item, index) => (
                    <TableRow
                      key={index}
                      className={index % 2 == 0 ? 'border-b' : ''}
                    >
                      <TableCell>
                        <p className='mb-2 font-semibold'>{item.website}</p>
                        <p className='mb-2'>{item.url}</p>
                        <p className='mb-2'>{item.description}</p>
                        <p className='mb-2'>{item.keywords}</p>
                      </TableCell>
                      <TableCell>{item.price}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </main>
  )
}

export default OrderDetails

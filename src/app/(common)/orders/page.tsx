'use client'

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbItem,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { getOrders } from '@/lib/actions/getOrders'
import { IOrderType } from '@/models/order'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const OrdersPage = () => {
  const [order, setOrder] = useState<IOrderType[] | []>([])

  useEffect(() => {
    const fetchCartData = async () => {
      const orderData = await getOrders()
      setOrder(orderData)
    }
    fetchCartData()
  }, [])

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

      <h2 className='h2-bold mb-8'>Orders</h2>
      {order ? (
        <>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='font-bold'>Order ID</TableHead>
                <TableHead className='font-bold'>Status</TableHead>
                <TableHead className='font-bold'>Payment Method</TableHead>
                <TableHead className='font-bold'>Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {order &&
                order.map((item, index) => (
                  <TableRow
                    key={index}
                    className={index % 2 == 0 ? 'bg-purple-100' : ''}
                  >
                    <TableCell className='font-medium'>
                      <Link
                        href={`/orders/${item._id}`}
                        className='text-primary hover:text-primary/80'
                      >
                        {item._id}
                      </Link>
                    </TableCell>
                    <TableCell>{item.status}</TableCell>
                    <TableCell>{item.paymentMethod}</TableCell>
                    <TableCell>{item.totalAmount.toFixed(2)}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </>
      ) : (
        <h2 className='h2-bold text-rose-400 text-center'>No orders found</h2>
      )}
    </main>
  )
}

export default OrdersPage

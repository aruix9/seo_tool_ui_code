'use client'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { getUserCart } from '@/lib/actions/getUserCart'
import { useEffect, useState } from 'react'
import { Cart } from '../../../../types/cart'
import BillingAddress from '@/components/shared/form/billingAddress'
import PaymentDetails from '@/components/shared/form/paymentDetails'
import { Button } from '@/components/ui/button'

const CheckoutPage = () => {
  const [cart, setCart] = useState<Cart | null>(null)

  useEffect(() => {
    const fetchCartData = async () => {
      const cartData = await getUserCart()
      setCart(cartData)
    }
    fetchCartData()
  }, [])

  return (
    <div className='container mx-auto'>
      <Breadcrumb className='my-4'>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Checkout</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className='flex mt-8 gap-8'>
        <div className='w-3/5'>
          <BillingAddress />
          <PaymentDetails />

          <div className='my-8 w-3xs'>
            <Button size='lg' className='w-full cursor-pointer' type='submit'>
              Place Order
            </Button>
          </div>
        </div>
        <aside className='w-2/5'>
          <h2 className='h2-bold mb-4'>Summary</h2>
          <div className='flex justify-between mb-2 border-b pb-2 font-bold gap-4 px-2'>
            <p className=''>Website</p>
            <span>
              Qty <span className='inline-block mx-2'>x</span> Price
            </span>
          </div>
          {cart &&
            cart?.items.map((item, index) => (
              <div
                key={index}
                className='flex justify-between mb-2 border-b pb-2 gap-4 px-2'
              >
                <div>
                  <p className='font-bold'>{item.website}</p>
                  <small>{item.url}</small>
                </div>
                <span>
                  {item.quantity} <span className='inline-block mx-2'>x</span>{' '}
                  <span>{item.price}</span>
                </span>
              </div>
            ))}
          {cart && (
            <>
              <div className='flex justify-between border-b gap-4 pb-2 px-2'>
                <p className=''>Tax</p>
                <span>12</span>
              </div>
              <div className='flex justify-between mb-2 border-b py-2 font-bold gap-4 bg-purple-200 px-2'>
                <p className=''>Total</p>
                <span>{cart && cart?.totalPrice * 12}</span>
              </div>
            </>
          )}
        </aside>
      </div>
    </div>
  )
}

export default CheckoutPage

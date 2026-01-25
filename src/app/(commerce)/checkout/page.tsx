'use client'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { getUserCart } from '@/lib/actions/cartActions'
import { useEffect, useState } from 'react'
import { Cart } from '../../../../types/cart'
import BillingAddress from '@/components/shared/form/billingAddress'
import PaymentDetails from '@/components/shared/form/paymentDetails'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { z } from 'zod'
import { CheckoutSchema } from '@/schemas/zodCheckoutSchema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '@/components/ui/form'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import Script from 'next/script'
import axios from 'axios'
import { toast } from 'sonner'
import { Razorpay, RazorpayOptions } from '../../../../types/razorpay'

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => Razorpay
  }
}

const CheckoutPage = () => {
  const [cart, setCart] = useState<Cart | null>(null)

  const [isProcessing, setIsProcessing] = useState(false)

  const router: AppRouterInstance = useRouter()
  const form = useForm<z.infer<typeof CheckoutSchema>>({
    resolver: zodResolver(CheckoutSchema),
    defaultValues: {
      name: 'Arun Biradar',
      email: 'arunb@gmail.com',
      street: '19-1-497/1, Mahadev Colony',
      country: 'India',
      state: 'Karnataka',
      city: 'Bidar',
      zipCode: '585402',
      phone: '0987654321',
      ccName: 'Arun Biradar',
      ccNumber: '4111111111111111',
      ccExpiry: '05/12',
      ccCVV: '123',
    },
  })

  useEffect(() => {
    const fetchCartData = async () => {
      const cartData = await getUserCart()
      setCart(cartData)
    }
    fetchCartData()
  }, [])

  const onSubmit = async (values: z.infer<typeof CheckoutSchema>) => {
    setIsProcessing(true)
    try {
      const newOrder = await axios.post('/api/checkout/placeorder', values)
      const razorpay = new window.Razorpay({
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
        amount: cart ? Number(cart.totalPrice.toFixed(2)) * 100 : 0,
        currency: 'INR',
        name: 'Butterswipe',
        description: 'Purchase of websites',
        image: '/images/6s-logo.png',
        order_id: newOrder.data._id,
        handler: async () => {
          setIsProcessing(false)
          toast.success('Order placed successfully', {
            description: newOrder.data.message,
          })

          setIsProcessing(false)
          router.replace('/order-confirmed')
        },
        prefill: {
          name: values.name,
          email: values.email,
          contact: values.phone,
        },
      })
      razorpay.open()
      // handlePlaceOrder(values, router)
    } catch (error) {
      setIsProcessing(false)
      console.log(error)
      if (axios.isAxiosError(error)) {
        toast.error('Error placing order', {
          description: error.response?.data.message,
        })
      } else {
        toast.error('Error placing order', {
          description: 'Something went wrong',
        })
      }
    }
  }

  return (
    <div className='container mx-auto'>
      <Script
        src='https://checkout.razorpay.com/v1/checkout.js'
        strategy='lazyOnload'
      />
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
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
              <BillingAddress
                register={form.register}
                formState={form.formState}
              />
              <PaymentDetails
                register={form.register}
                formState={form.formState}
                errors={form.formState.errors}
              />

              <div className='mb-8 w-3xs'>
                <Button
                  size='lg'
                  type='submit'
                  disabled={isProcessing}
                  className='w-full cursor-pointer'
                >
                  {isProcessing ? 'Processing...' : 'Place Order'}
                </Button>
              </div>
            </form>
          </Form>
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
                <span>{cart && (cart?.totalPrice + 12).toFixed(2)}</span>
              </div>
            </>
          )}
        </aside>
      </div>
    </div>
  )
}

export default CheckoutPage

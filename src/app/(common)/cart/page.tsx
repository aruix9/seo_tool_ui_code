'use client'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useEffect, useState } from 'react'
import { getUserCart } from '@/lib/actions/cartActions'
import { Cart } from '../../../../types/cart'
import { Input } from '@/components/ui/input'
import { CircleHelp, LinkIcon, Upload } from 'lucide-react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { User } from 'next-auth'
import { toast } from 'sonner'
import axios from 'axios'

const CartPage = () => {
  const { data: session } = useSession()
  const user: User = session?.user
  const [cart, setCart] = useState<Cart | null>(null)

  const fetchCartData = async () => {
    const cartData = await getUserCart()
    setCart(cartData)
  }

  useEffect(() => {
    fetchCartData()
  }, [])

  const handleFileUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    linkId: string
  ) => {
    e.preventDefault()
    if (!e.target.files || e.target.files.length === 0) return
    const userId = user.id
    if (!userId || !cart?._id) {
      toast.error('Failed to upload the file.')
      return
    }

    const formData = new FormData()
    formData.append('attachment', e.target.files[0])
    formData.append('userId', userId)
    formData.append('linkId', linkId)

    const response = await axios.post('/api/cart/uploadAttachment', formData)
    if (response.data.success) {
      fetchCartData()
      toast.success('File uploaded successfully.')
    } else {
      toast.error('Failed to upload the file.')
    }
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
            <BreadcrumbPage>Cart</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h2 className='h2-bold mb-8'>Cart</h2>
      {cart && cart.items ? (
        <>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='font-bold'>Website</TableHead>
                <TableHead className='font-bold'>URL</TableHead>
                <TableHead className='font-bold'>Keyword</TableHead>
                <TableHead className='font-bold'>Qty</TableHead>
                <TableHead className='font-bold'>Price</TableHead>
                <TableHead className='font-bold text-center'>
                  Attachment
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cart.items.map((item, index) => (
                <TableRow
                  key={index}
                  className={index % 2 == 0 ? 'bg-purple-100' : ''}
                >
                  <TableCell className='font-medium'>{item.website}</TableCell>
                  <TableCell>{item.url}</TableCell>
                  <TableCell>{item.keywords}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell className='text-center'>
                    <div className='flex items-center justify-center gap-2'>
                      {!item.attachmentUrl ? (
                        <>
                          <label
                            htmlFor={`attachment-${item.linkId}`}
                            className='inline-flex items-center justify-center  gap-2 cursor-pointer '
                            title='Upload an Attachment'
                          >
                            <Upload className='text-primary' />
                            Upload Document
                          </label>
                          <Input
                            type='file'
                            id={`attachment-${item.linkId}`}
                            name={`attachment-${item.linkId}`}
                            className='hidden'
                            onChange={(e) => handleFileUpload(e, item.linkId)}
                          />
                          <div className='relative group'>
                            <CircleHelp className='cursor-pointer w-4 h-4' />
                            <div className='hidden group-hover:block absolute top-1/2 right-4 -translate-y-1/2 bg-gray-100 border border-gray-300 rounded-md p-2 w-[150px] shadow-lg z-10 whitespace-normal'>
                              Reference document to write the article on this
                              site.
                            </div>
                          </div>
                        </>
                      ) : (
                        <Link
                          href={item.attachmentUrl}
                          target='_blank'
                          className='inline-flex gap-2 text-primary'
                        >
                          <LinkIcon className=' w-4 h-4' />
                          Link to File
                        </Link>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableHead colSpan={4} className='text-right font-bold'>
                  Subtotal
                </TableHead>
                <TableHead colSpan={2} className='font-bold'>
                  {cart.totalPrice}
                </TableHead>
              </TableRow>
              <TableRow className='bg-white'>
                <TableHead colSpan={4} className='text-right font-bold'>
                  Tax
                </TableHead>
                <TableHead colSpan={2} className='font-bold'>
                  12
                </TableHead>
              </TableRow>
              <TableRow>
                <TableHead colSpan={4} className='text-right font-bold'>
                  Total
                </TableHead>
                <TableHead colSpan={2} className='font-bold'>
                  {cart.totalPrice + 12}
                </TableHead>
              </TableRow>
            </TableFooter>
          </Table>
          <div className='mt-8 text-right'>
            <Button className='w-full max-w-48' size='lg'>
              <Link href='/checkout'>Proceed to Checkout</Link>
            </Button>
          </div>
        </>
      ) : (
        <h2 className='h2-bold text-rose-400 text-center'>No cart found</h2>
      )}
    </main>
  )
}

export default CartPage

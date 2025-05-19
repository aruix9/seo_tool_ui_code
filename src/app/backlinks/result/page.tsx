'use client'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { getAllLinks } from '@/lib/actions/getLinks'
import { useEffect, useState } from 'react'
import { Link } from '../../../../types/link'
import { Button } from '@/components/ui/button'
import { addLinkToCart, getUserCart } from '@/lib/actions/cartActions'
import { useSession } from 'next-auth/react'
import { User } from 'next-auth'
import { Cart } from '../../../../types/cart'

const BackLinkResults = () => {
  const { data: session } = useSession()
  const user: User = session?.user
  const [links, setLinks] = useState<Link[] | null>(null)
  const [cartItems, setCartItems] = useState<string[]>([])

  useEffect(() => {
    const fetchAllLinks = async () => {
      const linkData = await getAllLinks()
      setLinks(linkData)
    }

    const fetchCartData = async () => {
      const cartData = await getUserCart()
      getCartLinkId(cartData)
    }

    fetchAllLinks()
    fetchCartData()
  }, [])

  const handleAddToCart = async (linkId: string) => {
    const userId = user.id
    const response = await addLinkToCart(linkId, userId)
    const cart = response.cart
    getCartLinkId(cart)
  }

  const getCartLinkId = (cart: Cart | null) => {
    if (cart && cart.items) {
      const linkIds: string[] = cart.items.map(
        (item: { linkId: string; quantity: number }) => item.linkId
      )
      setCartItems(linkIds)
    }
  }

  if (!links) {
    return <div>Loading...</div>
  }

  return (
    <div className='container'>
      <Breadcrumb className='my-4'>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href='/backlinks'>Audit Backlink</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Result</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Card className='my-8'>
        <CardHeader className='h2-bold'>
          <CardTitle>Backlink Audit Results</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='flex w-full items-center gap-8 max-md:flex-col'>
            <div className='border p-4 rounded-lg bg-purple-50 text-center grow'>
              <h3 className='font-bold text-lg'>Total Backlinks</h3>
              <p className='font-bold text-2xl'>{links.length}</p>
            </div>
            <div className='border p-4 rounded-lg bg-purple-50 text-center grow'>
              <h3 className='font-bold text-lg'>Total Backlinks</h3>
              <p className='font-bold text-2xl'>{links.length}</p>
            </div>
            <div className='border p-4 rounded-lg bg-purple-50 text-center grow'>
              <h3 className='font-bold text-lg'>Total Backlinks</h3>
              <p className='font-bold text-2xl'>{links.length}</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className='my-8'>
        <CardHeader className='h2-bold'>
          <CardTitle>Detailed Backlink Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='flex w-full gap-8 flex-col'>
            {links.map((link) => (
              <div
                key={link._id}
                className='border p-4 rounded-lg bg-purple-50 grow flex justify-between items-center'
              >
                <div>
                  <h3 className='font-bold text-lg' title={link.url}>
                    {link.website}
                  </h3>
                  <p>{link.description}</p>
                  <p className='font-bold'>${link.price}</p>
                </div>
                <Button
                  className='cursor-pointer'
                  disabled={cartItems.includes(link._id)}
                  onClick={() => handleAddToCart(link._id)}
                >
                  Add to Cart
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default BackLinkResults

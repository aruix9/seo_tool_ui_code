import { getServerSession, User } from 'next-auth'
import Razorpay from 'razorpay'
import { authOptions } from '../../auth/[...nextauth]/options'
import mongoose from 'mongoose'
import { Cart } from '@/models/cart'
import { Cart as CartType } from '../../../../../types/cart'
import { connectToDatabase } from '@/lib/db'
import Order from '@/models/order'

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
  key_secret: process.env.NEXT_PUBLIC_RAZORPAY_KEY_SECRET!,
})

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    const _user: User = session?.user
    const userId = new mongoose.Types.ObjectId(_user.id)
    if (!session || !_user.id) {
      return new Response(
        JSON.stringify({ success: false, message: 'Not authenticated' }),
        { status: 401 },
      )
    }

    const cart: CartType[] = await Cart.aggregate([
      {
        $match: { userId }, // Match the cart for the authenticated user
      },
      {
        $unwind: '$items', // Unwind items array for lookup
      },
      {
        $lookup: {
          from: 'links', // Collection name for links
          localField: 'items.linkId',
          foreignField: '_id',
          as: 'linkData',
        },
      },
      {
        $unwind: '$linkData', // Unwind linkData to merge with items
      },
      {
        $addFields: {
          'items.url': '$linkData.url',
          'items.website': '$linkData.website',
          'items.description': '$linkData.description',
          'items.price': '$linkData.price',
          'items.totalPrice': {
            $multiply: ['$items.quantity', '$linkData.price'],
          },
        },
      },
      {
        $group: {
          _id: '$_id', // Group back by cart id
          userId: { $first: '$userId' },
          items: { $push: '$items' },
          totalPrice: { $sum: '$items.totalPrice' },
          createdAt: { $first: '$createdAt' },
          updatedAt: { $first: '$updatedAt' },
        },
      },
      {
        $limit: 1, // Ensure only one cart is returned
      },
    ])

    if (!cart) {
      return Response.json(
        { success: false, message: 'Cart not found or unauthorized' },
        { status: 404 },
      )
    }

    await connectToDatabase()

    // create order in razorpay
    const order = await razorpay.orders.create({
      amount: Math.round(cart[0].totalPrice * 100), // amount in the smallest currency unit
      currency: 'INR',
      receipt: `receipt-${Date.now()}`,
      notes: {
        userId: _user.id,
        items: JSON.stringify(cart[0].items),
      },
    })
    const body = await req.json()
    const billingAddress = { ...body }
    if (!order) {
      return Response.json(
        { success: false, message: 'Failed to create order' },
        { status: 500 },
      )
    }
    // Prepare the order data
    const orderData = {
      user: userId,
      cart: cart[0],
      totalAmount: cart[0].totalPrice,
      paymentMethod: 'razorpay',
      billingAddress,
      status: 'pending',
      razorpayOrderId: order.id,
    }
    // Save the order to the database
    const newOrder = await Order.create(orderData)
    // await Cart.deleteOne({ _id: cart[0]._id })

    return Response.json(
      {
        success: true,
        message: 'Order placed successfully',
        newOrder,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error('Error in POST placeorder:', error)
    return new Response('Internal Server Error', { status: 500 })
  }
}

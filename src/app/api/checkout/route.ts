import { connectToDatabase } from '@/lib/db'
import { getServerSession, User } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]/options'
import { Cart } from '@/models/cart'
import Order from '@/models/order'
import mongoose from 'mongoose'
import { Cart as CartType } from '../../../../types/cart'

export async function POST(req: Request) {
  await connectToDatabase()

  const session = await getServerSession(authOptions)
  const _user: User = session?.user
  const userId = new mongoose.Types.ObjectId(_user.id)

  if (!session || !_user) {
    return new Response(
      JSON.stringify({ success: false, message: 'Not authenticated' }),
      { status: 401 }
    )
  }

  try {
    const body = await req.json()

    const billingAddress = { ...body }

    // Default payment data (simulated for now)
    const paymentMethod = 'razorpay'

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
        { status: 404 }
      )
    }

    // Calculate total amount from cart items
    const totalAmount = cart[0].totalPrice

    // Prepare the order data
    const orderData = {
      user: new mongoose.Types.ObjectId(_user.id),
      cart: new mongoose.Types.ObjectId(cart[0]._id),
      totalAmount,
      paymentMethod,
      billingAddress,
    }

    console.log(orderData)

    // Save the order to the database
    const order = new Order(orderData)
    await order.save()
    await Cart.deleteOne({ _id: cart[0]._id })

    return Response.json(
      {
        success: true,
        message: 'Order placed successfully',
        order,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error placing order:', error)

    return Response.json(
      { success: false, message: 'Error placing order' },
      { status: 500 }
    )
  }
}

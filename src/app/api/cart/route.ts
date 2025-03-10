import { connectToDatabase } from '@/lib/db'
import { Cart } from '@/models/cart'
import { authOptions } from '../auth/[...nextauth]/options'
import { getServerSession, User } from 'next-auth'
import mongoose from 'mongoose'

export async function GET() {
  await connectToDatabase()

  const session = await getServerSession(authOptions)
  const _user: User = session?.user

  if (!session || !_user) {
    return Response.json(
      { success: false, message: 'Not authenticated' },
      { status: 401 }
    )
  }

  const userId = new mongoose.Types.ObjectId(_user.id)

  try {
    // Retrieve cart data for the given userId
    const cart = await Cart.aggregate([
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
        { success: false, message: 'Cart not found for this user.' },
        { status: 404 }
      )
    }

    // Respond with the cart data
    return Response.json(cart[0], { status: 200 })
  } catch (error) {
    console.error('Error retrieving cart data:', error)
    return Response.json(
      { success: false, message: 'Error retrieving cart data' },
      { status: 500 }
    )
  }
}

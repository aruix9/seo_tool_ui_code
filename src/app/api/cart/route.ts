import { connectToDatabase } from '@/lib/db'
import { Cart } from '@/models/cart'
import { authOptions } from '../auth/[...nextauth]/options'
import { getServerSession, User } from 'next-auth'
import mongoose, { isValidObjectId } from 'mongoose'
import Link from '@/models/link'

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
        $lookup: {
          from: 'attachments', // Collection name for links
          localField: 'items.attachmentId',
          foreignField: '_id',
          as: 'attachmentData',
        },
      },
      {
        $unwind: '$linkData', // Unwind linkData to merge with items
      },
      {
        $unwind: '$attachmentData', // Unwind linkData to merge with items
      },
      {
        $addFields: {
          'items.url': '$linkData.url',
          'items.website': '$linkData.website',
          'items.attachmentUrl': '$attachmentData.fileUrl',
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

    if (!cart.length) {
      return Response.json(
        { success: false, message: 'Cart not found for this user.' },
        { status: 200 }
      )
    } else {
      return Response.json(cart[0], { status: 200 })
    }
  } catch (error) {
    console.error('Error retrieving cart data:', error)
    return Response.json(
      { success: false, message: 'Error retrieving cart data' },
      { status: 500 }
    )
  }
}

export async function POST(req: Request) {
  await connectToDatabase()
  try {
    const { linkId, userId } = await req.json()

    // Validate input
    if (!isValidObjectId(userId) || !isValidObjectId(linkId)) {
      return Response.json(
        { success: false, message: 'Invalid userId or linkId' },
        { status: 400 }
      )
    }

    // Check if the link exists
    const link = await Link.findById(linkId)
    if (!link) {
      return Response.json(
        { success: false, message: 'Link not found' },
        { status: 404 }
      )
    }

    let cart = await Cart.findOne({ userId })

    if (!cart) {
      cart = await Cart.create({
        userId,
        items: [],
      })
    }

    // Check if the link is already in the cart
    const existingItem = cart.items.find(
      (item) => item.linkId.toString() === linkId
    )

    if (existingItem) {
      return Response.json(
        { success: false, message: 'Link already in cart', cart },
        { status: 202 }
      )
    } else {
      cart.items.push({
        linkId,
      })
    }

    // Save the cart
    await cart.save()

    return Response.json({
      success: true,
      message: 'Item added to cart successfully',
      cart,
    })
  } catch (error) {
    console.error('Add to Cart Error:', error)
    return Response.json(
      { success: false, message: 'Add to Cart Error' },
      { status: 500 }
    )
  }
}

import { connectToDatabase } from '@/lib/db'
import mongoose from 'mongoose'
import { getServerSession, User } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]/options'
import Order from '@/models/order'

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
    const orders = await Order.find({ user: userId })

    return Response.json({ success: true, orders }, { status: 200 })
  } catch (error) {
    console.error('Error retrieving cart data:', error)
    return Response.json(
      { success: false, message: 'Error retrieving cart data' },
      { status: 500 }
    )
  }
}

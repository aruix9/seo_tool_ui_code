import { OrderDetailsProps } from '@/app/(common)/orders/[orderId]/page'
import { connectToDatabase } from '@/lib/db'
import Order from '@/models/order'

export async function GET(req: Request, { params }: OrderDetailsProps) {
  await connectToDatabase()
  const { orderId } = await params
  try {
    const order = await Order.findById(orderId)
    if (!order) {
      return Response.json(
        { success: false, message: 'Order not found' },
        { status: 404 }
      )
    }
    return Response.json({ success: true, order }, { status: 200 })
  } catch (error) {
    console.error('Error retrieving order:', error)
    return Response.json(
      { success: false, message: 'Error retrieving order' },
      { status: 500 }
    )
  }
}

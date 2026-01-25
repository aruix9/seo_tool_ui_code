import { connectToDatabase } from '@/lib/db'
import Order from '@/models/order'
import { sendEmail } from '@/utils/sendEmail'
import crypto from 'crypto'

export async function POST(req: Request) {
  try {
    const body = await req.text()
    const signature = req.headers.get('x-razorpay-signature')

    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
      .update(body)
      .digest('hex')

    console.log('Expected Signature:', expectedSignature)

    if (expectedSignature !== signature) {
      console.log('signature:', signature)
      return new Response(
        JSON.stringify({ success: false, message: 'Invalid signature' }),
        { status: 400 }
      )
    }
    const event = JSON.parse(body)
    await connectToDatabase()

    if (event.event === 'payment.captured') {
      const payment = event.payload.payment

      // Update the order status in your database
      const order = await Order.findOneAndUpdate(
        { razorpayOrderId: payment.orderId },
        { razorpayPaymentId: payment.id },
        { status: 'completed' }
      ).populate({
        path: 'user',
        select: 'name email',
      })
      if (!order) {
        return new Response(
          JSON.stringify({ success: false, message: 'Order not found' }),
          { status: 404 }
        )
      }
      await sendEmail(
        order.user.email,
        'Butterswipe Order Completed',
        'orderEmail.html',
        { orderId: order._id, name: order.user.name }
      )
      return new Response(
        JSON.stringify({ success: true, message: 'Order Completed' }),
        { status: 200 }
      )
    }
  } catch (error) {
    console.error('Error processing webhook:', error)
    return new Response(
      JSON.stringify({ success: false, message: 'Error processing webhook' }),
      { status: 500 }
    )
  }
}

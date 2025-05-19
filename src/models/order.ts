import { Schema, model, models, Document } from 'mongoose'
import { IUser } from './user'
import { LinkSchema } from './link'
import { Link } from '../../types/link'

export interface IOrder extends Document {
  _id: string
  user: Schema.Types.ObjectId | IUser | string
  cart: {
    userId: Schema.Types.ObjectId | IUser | string
    items: Link[]
  }
  status: 'pending' | 'processing' | 'completed' | 'cancelled'
  totalAmount: number
  paymentMethod: 'razorpay' | 'paypal' | 'cod'
  billingAddress: {
    name: string
    email: string
    phone: string
    street: string
    city: string
    state: string
    zipCode: string
    country: string
  }
  createdAt: Date
  updatedAt: Date
}
export interface IOrderType extends Document, IOrder {
  _id: string
}
const OrderSchema = new Schema<IOrder>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    cart: {
      userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
      items: [LinkSchema],
    },
    status: {
      type: String,
      enum: ['pending', 'processing', 'completed', 'cancelled'],
      default: 'pending',
    },
    totalAmount: { type: Number, required: true },
    paymentMethod: {
      type: String,
      enum: ['razorpay', 'paypal'],
      required: true,
    },
    billingAddress: {
      name: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String, required: true },
      street: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      zipCode: { type: String, required: true },
      country: { type: String, required: true },
    },
  },
  { timestamps: true }
)

const Order = models.Order || model<IOrder>('Order', OrderSchema)

export default Order

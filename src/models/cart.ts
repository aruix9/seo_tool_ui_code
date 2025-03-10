import { model, Model, models, Schema } from 'mongoose'
import { ILink } from './link'
import { IAttachment } from './attachment'

export interface ICartItem {
  linkId: Schema.Types.ObjectId | ILink
  attachment: Schema.Types.ObjectId | IAttachment
  quantity: number
}

export interface ICart extends Document {
  userId: Schema.Types.ObjectId
  items: ICartItem[]
}

const CartItemSchema = new Schema<ICartItem>(
  {
    linkId: { type: Schema.Types.ObjectId, ref: 'Link', required: true },
    attachment: { type: Schema.Types.ObjectId, ref: 'Attachment' },
    quantity: { type: Number, required: true, default: 1 },
  },
  { _id: false }
)

const CartSchema = new Schema<ICart>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    items: [CartItemSchema],
  },
  { timestamps: true }
)

const Cart: Model<ICart> = models.Cart || model<ICart>('Cart', CartSchema)

export { Cart }

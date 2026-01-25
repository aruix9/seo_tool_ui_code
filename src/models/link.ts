import { Document, Schema, model, models, Model } from 'mongoose'

// Define the Link interface
export interface ILink extends Document {
  url: string
  website: string
  description?: string
  price: number
  keywords?: string[]
  createdAt: Date
  updatedAt: Date
}

// Define the schema for the Link model
export const LinkSchema = new Schema<ILink>(
  {
    url: { type: String, required: true, trim: true },
    website: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    price: { type: Number, default: 10 },
    keywords: [{ type: String, trim: true }],
  },
  { timestamps: true }
)

// Create the Link model
const Link: Model<ILink> = models.Link || model<ILink>('Link', LinkSchema)

export default Link

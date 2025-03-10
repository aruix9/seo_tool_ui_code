import { model, Model, models, Schema } from 'mongoose'

export interface IAttachment extends Document {
  name: string
  fileUrl: string
  uploadedAt: Date
}

const AttachmentSchema = new Schema<IAttachment>(
  {
    name: { type: String, required: true },
    fileUrl: { type: String, required: true },
    uploadedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
)

const Attachment: Model<IAttachment> =
  models.Attachment || model<IAttachment>('Attachment', AttachmentSchema)

export { Attachment }

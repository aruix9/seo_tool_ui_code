import { z } from 'zod'

export const BacklinkSchema = z.object({
  url: z.string().nonempty('Full name is required'),
  backlinkType: z.string().nonempty('Full name is required'),
})

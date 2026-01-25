import { z } from 'zod'

export const BacklinkSchema = z.object({
  url: z.string().nonempty('Website Url is required'),
  competitor1: z.string(),
  competitor2: z.string(),
  competitor3: z.string(),
  competitor4: z.string(),
  competitor5: z.string(),
  backlinkType: z.string(),
})

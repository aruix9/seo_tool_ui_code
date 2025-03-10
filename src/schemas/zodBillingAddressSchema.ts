import { z } from 'zod'

export const BillingAddressSchema = z.object({
  name: z.string().nonempty('Full name is required'),
  email: z
    .string()
    .email('Invalid email address')
    .nonempty('Email is required'),
  street: z.string().nonempty('This field is required'),
  line1: z.string().nonempty('This field is required'),
  country: z.string().nonempty('Country is required'),
  state: z.string().nonempty('State is required'),
  city: z.string().nonempty('City is required'),
  zipCode: z.string().nonempty('Zip code is required'),
  phone: z.string().nonempty('Phone number is required'),
})

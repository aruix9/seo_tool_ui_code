import { z } from 'zod'

export const CheckoutSchema = z.object({
  name: z.string().nonempty('Full name is required'),
  email: z
    .string()
    .email('Invalid email address')
    .nonempty('Email is required'),
  street: z.string().nonempty('This field is required'),
  country: z.string().nonempty('Country is required'),
  state: z.string().nonempty('State is required'),
  city: z.string().nonempty('City is required'),
  zipCode: z.string().nonempty('Zip code is required'),
  phone: z.string().nonempty('Phone number is required'),
  ccName: z.string().nonempty('CardHolder name is required'),
  ccNumber: z.string().nonempty('Card number is required'),
  ccExpiry: z.string().nonempty('Card expiry is required'),
  ccCVV: z.string().nonempty('Card CVV is required'),
})

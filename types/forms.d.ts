import { FieldError, UseFormRegisterReturn } from 'react-hook-form'

export interface FormFieldProps {
  field: UseFormRegisterReturn
  className?: string
  placeholder?: string
  label?: string
  error?: FieldError
}

export interface CheckoutFormProps {
  email: string
  name: string
  street: string
  country: string
  state: string
  city: string
  zipCode: string
  phone: string
  ccName: string
  ccNumber: string
  ccExpiry: string
  ccCVV: string
}

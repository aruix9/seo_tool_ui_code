import { FieldError, UseFormRegisterReturn } from 'react-hook-form'

export interface FormFieldProps {
  field: UseFormRegisterReturn
  className?: string
  placeholder?: string
  label?: string
  error?: FieldError
}

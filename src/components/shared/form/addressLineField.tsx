import { Input } from '../../ui/input'
import { FormControl, FormItem, FormLabel, FormMessage } from '../../ui/form'
import { FormFieldProps } from '../../../../types/forms'

const AddressLineField = ({
  field,
  error,
  placeholder = 'Enter address line',
  label = 'Address Line',
  className,
}: FormFieldProps) => {
  return (
    <FormItem className={className}>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <Input
          type='text'
          placeholder={placeholder}
          {...field}
          className='bg-white h-10'
        />
      </FormControl>
      {error && (
        <FormMessage className='text-red-500'>{error.message}</FormMessage>
      )}
    </FormItem>
  )
}

export default AddressLineField

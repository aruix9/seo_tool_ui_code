import { FieldErrors, FormState, UseFormRegister } from 'react-hook-form'
import { CheckoutFormProps } from '../../../../types/forms'
import { Input } from '@/components/ui/input'
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

const PaymentDetails = ({
  register,
  errors,
}: {
  errors: FieldErrors<CheckoutFormProps>
  register: UseFormRegister<CheckoutFormProps>
  formState: FormState<CheckoutFormProps>
}) => {
  return (
    <div className='mt-16'>
      <h2 className='h2-bold mb-6'>Payment Details</h2>
      <div className='flex gap-6 mb-6 items-start'>
        <div className='w-full'>
          <FormItem className="space-y-2">
            <FormLabel>Cardholder Name</FormLabel>
            <FormControl>
              <Input
                type='text'
                placeholder='Enter cardholder name'
                {...register('ccName')}
                className="h-12 px-4 pr-12 rounded-lg border-slate-300 bg-white focus-visible:ring-primary focus-visible:border-primary text-base" 
              />
            </FormControl>
            {errors?.ccName && (
              <FormMessage className='text-red-500'>
                {errors?.ccName.message}
              </FormMessage>
            )}
          </FormItem>
        </div>
      </div>
      <div className='flex gap-6 mb-6 items-start'>
        <div className='w-1/2'>
          <FormItem className="space-y-2">
            <FormLabel>Card Number</FormLabel>
            <FormControl>
              <Input
                type='text'
                placeholder='Enter card Number'
                {...register('ccNumber')}
                className="h-12 px-4 pr-12 rounded-lg border-slate-300 bg-white focus-visible:ring-primary focus-visible:border-primary text-base" 
              />
            </FormControl>
            {errors?.ccNumber && (
              <FormMessage className='text-red-500'>
                {errors?.ccNumber.message}
              </FormMessage>
            )}
          </FormItem>
        </div>
        <div className='w-1/2 flex gap-6 mb-6 items-start'>
          <div className='w-2/3'>
            <FormItem className="space-y-2">
              <FormLabel>Expiry Date</FormLabel>
              <FormControl>
                <Input
                  type='text'
                  placeholder='Enter expiry date'
                  {...register('ccExpiry')}
                  className="h-12 px-4 pr-12 rounded-lg border-slate-300 bg-white focus-visible:ring-primary focus-visible:border-primary text-base" 
                />
              </FormControl>
              {errors?.ccExpiry && (
                <FormMessage className='text-red-500'>
                  {errors?.ccExpiry.message}
                </FormMessage>
              )}
            </FormItem>
          </div>
          <div className='w-1/3'>
            <FormItem className="space-y-2">
              <FormLabel>CVV</FormLabel>
              <FormControl>
                <Input
                  type='text'
                  placeholder='Enter cvv'
                  {...register('ccCVV')}
                  className="h-12 px-4 pr-12 rounded-lg border-slate-300 bg-white focus-visible:ring-primary focus-visible:border-primary text-base" 
                />
              </FormControl>
              {errors?.ccCVV && (
                <FormMessage className='text-red-500'>
                  {errors?.ccCVV.message}
                </FormMessage>
              )}
            </FormItem>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentDetails

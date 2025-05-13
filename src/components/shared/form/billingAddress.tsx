'use client'

import NameField from './nameField'
import EmailField from './emailField'
import AddressLineField from './addressLineField'
import CityField from './cityField'
import StateField from './stateField'
import CountryField from './countryField'
import PhoneField from './phoneField'
import ZipField from './zipField'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { BillingAddressSchema } from '@/schemas/zodBillingAddressSchema'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { handlePlaceOrder } from '@/lib/actions/handlePlaceOrder'
import { Form } from '@/components/ui/form'

const BillingAddress = () => {
  const router: AppRouterInstance = useRouter()
  const form = useForm<z.infer<typeof BillingAddressSchema>>({
    resolver: zodResolver(BillingAddressSchema),
    defaultValues: {
      name: '',
      email: '',
      street: '',
      line1: '',
      country: '',
      state: '',
      city: '',
      zipCode: '',
      phone: '',
    },
  })

  const onSubmit = (values: z.infer<typeof BillingAddressSchema>) => {
    handlePlaceOrder(values, router)
  }
  return (
    <>
      <h2 className='h2-bold mb-6'>Billing Address</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
          <div className='flex gap-6 mb-6 items-start'>
            <NameField
              className='w-1/2'
              field={form.register('name')}
              error={form.formState.errors?.name}
            />
            <EmailField
              className='w-1/2'
              field={form.register('email')}
              error={form.formState.errors?.email}
            />
          </div>
          <div className='flex gap-6 mb-6 items-start'>
            <AddressLineField
              label='Street'
              placeholder='Enter house number and street name'
              className='w-full'
              field={form.register('street')}
              error={form.formState.errors?.street}
            />
          </div>
          <div className='flex gap-6 mb-6 items-start'>
            <CountryField
              className='w-1/2'
              field={form.register('country')}
              error={form.formState.errors?.country}
            />
            <StateField
              className='w-1/2'
              field={form.register('state')}
              error={form.formState.errors?.state}
            />
          </div>
          <div className='flex gap-6 mb-6 items-start'>
            <CityField
              className='w-1/2'
              field={form.register('city')}
              error={form.formState.errors?.city}
            />
            <ZipField
              className='w-1/2'
              field={form.register('zipCode')}
              error={form.formState.errors?.zipCode}
            />
          </div>
          <div className='flex gap-6 mb-6 items-start'>
            <PhoneField
              className='w-1/2'
              field={form.register('phone')}
              error={form.formState.errors?.phone}
            />
          </div>
        </form>
      </Form>
    </>
  )
}

export default BillingAddress

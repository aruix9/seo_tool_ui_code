'use client'

import NameField from './nameField'
import EmailField from './emailField'
import AddressLineField from './addressLineField'
import CityField from './cityField'
import StateField from './stateField'
import CountryField from './countryField'
import PhoneField from './phoneField'
import ZipField from './zipField'
import { FormState, UseFormRegister } from 'react-hook-form'
import { CheckoutFormProps } from '../../../../types/forms'

const BillingAddress = ({
  register,
  formState,
}: {
  register: UseFormRegister<CheckoutFormProps>
  formState: FormState<CheckoutFormProps>
}) => {
  return (
    <>
      <h2 className='h2-bold mb-6'>Billing Address</h2>
      <div className='flex gap-6 mb-6 items-start'>
        <NameField
          className='w-1/2'
          field={register('name')}
          error={formState.errors?.name}
        />
        <EmailField
          className='w-1/2'
          field={register('email')}
          error={formState.errors?.email}
        />
      </div>
      <div className='flex gap-6 mb-6 items-start'>
        <AddressLineField
          label='Street'
          placeholder='Enter house number and street name'
          className='w-full'
          field={register('street')}
          error={formState.errors?.street}
        />
      </div>
      <div className='flex gap-6 mb-6 items-start'>
        <CountryField
          className='w-1/2'
          field={register('country')}
          error={formState.errors?.country}
        />
        <StateField
          className='w-1/2'
          field={register('state')}
          error={formState.errors?.state}
        />
      </div>
      <div className='flex gap-6 mb-6 items-start'>
        <CityField
          className='w-1/2'
          field={register('city')}
          error={formState.errors?.city}
        />
        <ZipField
          className='w-1/2'
          field={register('zipCode')}
          error={formState.errors?.zipCode}
        />
      </div>
      <div className='flex gap-6 mb-6 items-start'>
        <PhoneField
          className='w-1/2'
          field={register('phone')}
          error={formState.errors?.phone}
        />
      </div>
    </>
  )
}

export default BillingAddress

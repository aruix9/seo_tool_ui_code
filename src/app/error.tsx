'use client' // Error boundaries must be Client Components
 
import { Button } from '@/components/ui/button'
import Link from 'next/link'
 
export default function Error() { 
  return (
    <div>
      <div className='flex justify-center items-center flex-col gap-4 min-h-screen'>
        <h1 className='text-9xl uppercase font-bold text-primary'>500 <small className='text-3xl'>error</small></h1>
        <h2 className='text-3xl uppercase font-bold'>Something went wrong!</h2>
        <Button className='font-bold'><Link href="/">Return Home</Link></Button>
      </div>
    </div>
  )
}
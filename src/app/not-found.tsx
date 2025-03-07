import { Button } from '@/components/ui/button'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex justify-center items-center flex-col gap-4 min-h-screen'>
      <h1 className='text-9xl uppercase font-bold text-primary'>404 <small className='text-3xl'>error</small></h1>
      <h2 className='text-3xl uppercase font-bold'>Not Found</h2>
      <p className='text-lg'>Could not find requested resource</p>
      <Button className='font-bold'><Link href="/">Return Home</Link></Button>
    </div>
  )
}
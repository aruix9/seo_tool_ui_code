import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href='/'>
      <Image
        src='/images/6s-logo.png'
        width={140}
        height={46}
        className='object-cover'
        alt='Butterswipe'
      />
    </Link>
  )
}

export default Logo

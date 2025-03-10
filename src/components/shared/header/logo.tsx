import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href='/'>
      <Image
        src='/images/6s-logo.png'
        width={115}
        height={39}
        className='object-cover'
        alt='Butterswipe'
      />
    </Link>
  )
}

export default Logo

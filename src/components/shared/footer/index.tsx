import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-purple-950 py-2'>
      <div className='container mx-auto text-purple-50'>
        <div className='flex justify-between'>
          <p>&copy; Copyright 2025.</p>
          <nav>
            <ul className='flex space-x-4'>
              <li>
                <Link href='/contact-us'>Contact</Link>
              </li>
              <li>
                <Link href='/terms-conditions'>Terms</Link>
              </li>
              <li>
                <Link href='/shipping-delivery'>Shipping</Link>
              </li>
              <li>
                <Link href='/privacy-policy'>Privacy</Link>
              </li>
              <li>
                <Link href='/cancellation-refund'>Cancellation</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import React from 'react'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

const page = () => {
  return (
    <main className='container'>
      <Breadcrumb className='my-4'>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Contact Us</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h2 className='h2-bold mb-8'>Contact Us</h2>
      <div className='contact-us'>
        <header className='mb-8'>
          <p>Last updated: May 20, 2025</p>
        </header>
        <section className='mb-8'>
          <h2>1. How to Reach Us</h2>
          <p>
            We are here to help you. If you have any questions, concerns, or
            feedback, please get in touch with us.
          </p>
        </section>
        <section className='mb-8'>
          <h2>2. Customer Support</h2>
          <p>
            For support with your orders or our services, email us at{' '}
            <a href='mailto:support@example.com'>support@example.com</a> or call
            us at <strong>+1 (123) 456-7890</strong>.
          </p>
        </section>
        <section className='mb-8'>
          <h2>3. Business Inquiries</h2>
          <p>
            For business partnerships or media inquiries, please contact{' '}
            <a href='mailto:business@example.com'>business@example.com</a>.
          </p>
        </section>
        <section className='mb-8'>
          <h2>4. Our Office Address</h2>
          <p>
            1234 Market Street,
            <br />
            Suite 500,
            <br />
            Cityville, State 12345,
            <br />
            Country
          </p>
        </section>
        <footer>
          <p>
            We look forward to hearing from you! Feel free to reach out anytime.
          </p>
        </footer>
      </div>
    </main>
  )
}

export default page

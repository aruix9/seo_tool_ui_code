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
            <BreadcrumbPage>Shipping Policy</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h2 className='h2-bold mb-8'>Shipping Policy</h2>
      <div className='shipping-policy'>
        <header className='mb-8'>
          <p>Last updated: May 20, 2025</p>
        </header>
        <section className='mb-8'>
          <h2>1. Shipping Overview</h2>
          <p>
            We aim to deliver your orders in a timely and efficient manner. This
            page outlines the shipping policies that apply to all purchases made
            on our platform.
          </p>
        </section>
        <section className='mb-8'>
          <h2>2. Shipping Locations</h2>
          <p>
            We currently ship to most regions globally. However, certain remote
            areas may have limited service. Please check your address during
            checkout for availability.
          </p>
        </section>
        <section className='mb-8'>
          <h2>3. Shipping Costs</h2>
          <p>
            Shipping costs vary depending on the destination, weight, and size
            of your order. Exact charges will be calculated at checkout and
            shown before you confirm your purchase.
          </p>
        </section>
        <section className='mb-8'>
          <h2>4. Delivery Time</h2>
          <p>
            Estimated delivery times are displayed during checkout. Standard
            shipping typically takes 5-10 business days, while expedited options
            may deliver faster. Delivery times may vary due to unforeseen
            circumstances.
          </p>
        </section>
        <section className='mb-8'>
          <h2>5. Order Tracking</h2>
          <p>
            Once your order is shipped, we will provide a tracking number. You
            can use this number to track your package on our website or the
            carrier&apos;s website.
          </p>
        </section>
        <section className='mb-8'>
          <h2>6. Delays and Issues</h2>
          <p>
            In case of delays or shipping issues, please contact our support
            team at <a href='mailto:support@example.com'>support@example.com</a>
            . We will work to resolve the matter as quickly as possible.
          </p>
        </section>
        <footer>
          <p>
            For more information about our shipping policy, feel free to contact
            us at <a href='mailto:support@example.com'>support@example.com</a>.
          </p>
        </footer>
      </div>
    </main>
  )
}

export default page

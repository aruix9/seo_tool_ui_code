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
            <BreadcrumbPage>Cancellation and Refund Policy</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h2 className='h2-bold mb-8'>Cancellation and Refund Policy</h2>
      <div className='cancellation-and-refund'>
        <header className='mb-8'>
          <p>Last updated: May 20, 2025</p>
        </header>
        <section className='mb-8'>
          <h2>1. Order Cancellation</h2>
          <p>
            You can cancel your order within 24 hours of placing it. Once the
            order is shipped, cancellations are no longer possible. To request a
            cancellation, please contact our support team at{' '}
            <a href='mailto:support@example.com'>support@example.com</a>.
          </p>
        </section>
        <section className='mb-8'>
          <h2>2. Refund Eligibility</h2>
          <p>
            Refunds are available for eligible cancellations and returned items.
            Items must be returned in their original condition within 14 days of
            delivery to qualify for a refund.
          </p>
        </section>
        <section className='mb-8'>
          <h2>3. Refund Process</h2>
          <p>
            Once we receive your cancellation or returned item, we will process
            the refund within 7-10 business days. Refunds will be credited to
            your original payment method.
          </p>
        </section>
        <section className='mb-8'>
          <h2>4. Non-Refundable Items</h2>
          <p>
            Certain items, such as digital products or customized goods, are
            non-refundable unless there is a defect. Please review the product
            details before purchase.
          </p>
        </section>
        <section className='mb-8'>
          <h2>5. Issues with Refunds</h2>
          <p>
            If you have not received your refund after 10 business days, please
            contact our support team for assistance. We will work to resolve the
            issue as quickly as possible.
          </p>
        </section>
        <footer>
          <p>
            For any questions about cancellations or refunds, please contact us
            at <a href='mailto:support@example.com'>support@example.com</a>.
          </p>
        </footer>
      </div>
    </main>
  )
}

export default page

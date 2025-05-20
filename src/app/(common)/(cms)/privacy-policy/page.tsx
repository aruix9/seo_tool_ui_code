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
            <BreadcrumbPage>Privacy Policy</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h2 className='h2-bold mb-8'>Privacy Policy</h2>
      <div className='privacy-policy'>
        <header className='mb-8'>
          <p>Last updated: May 20, 2025</p>
        </header>
        <section className='mb-8'>
          <h2>1. Introduction</h2>
          <p>
            Your privacy is important to us. This Privacy Policy explains how we
            collect, use, and protect your information when you use our website
            and services.
          </p>
        </section>
        <section className='mb-8'>
          <h2>2. Information We Collect</h2>
          <p>
            We may collect personal information such as your name, email
            address, and payment details when you use our services. Non-personal
            data, like browsing behavior, may also be collected for analytics.
          </p>
        </section>
        <section className='mb-8'>
          <h2>3. How We Use Your Information</h2>
          <p>
            We use your information to process your orders, provide customer
            support, and improve our services. We may also use it for
            communication regarding updates or promotional offers.
          </p>
        </section>
        <section className='mb-8'>
          <h2>4. Sharing Your Information</h2>
          <p>
            We do not sell or rent your information to third parties. However,
            we may share your data with trusted partners for order processing or
            legal compliance purposes.
          </p>
        </section>
        <section className='mb-8'>
          <h2>5. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your
            information from unauthorized access, alteration, or loss. Despite
            our efforts, no method of transmission or storage is completely
            secure.
          </p>
        </section>
        <section className='mb-8'>
          <h2>6. Your Rights</h2>
          <p>
            You have the right to access, update, or delete your personal data.
            If you wish to exercise these rights, please contact us at{' '}
            <a href='mailto:support@example.com'>support@example.com</a>.
          </p>
        </section>
        <section className='mb-8'>
          <h2>7. Policy Changes</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page, and significant updates will be
            communicated via email or notifications.
          </p>
        </section>
        <footer>
          <p>
            If you have any questions about our Privacy Policy, please contact
            us at <a href='mailto:support@example.com'>support@example.com</a>.
          </p>
        </footer>
      </div>
    </main>
  )
}

export default page

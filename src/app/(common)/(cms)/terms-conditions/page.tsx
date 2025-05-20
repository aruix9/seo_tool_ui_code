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
            <BreadcrumbPage>Terms and Conditions</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h2 className='h2-bold mb-8'>Terms and Conditions</h2>
      <div className='terms-and-conditions'>
        <header className='mb-8'>
          <p>Last updated: May 20, 2025</p>
        </header>
        <section className='mb-8'>
          <h2>1. Introduction</h2>
          <p>
            Welcome to our tool. By using our website, you agree to follow these
            terms and conditions. Please read them carefully before using our
            services.
          </p>
        </section>
        <section className='mb-8'>
          <h2>2. Usage of Services</h2>
          <p>
            Our services are designed for lawful purposes only. You must not use
            them to harm, disrupt, or interfere with other users or systems.
          </p>
        </section>
        <section className='mb-8'>
          <h2>3. Account Responsibilities</h2>
          <p>
            If you create an account, you are responsible for keeping your login
            details secure. Any activity under your account is your
            responsibility.
          </p>
        </section>
        <section className='mb-8'>
          <h2>4. Intellectual Property</h2>
          <p>
            All content, tools, and features on this website are owned by us.
            You are not allowed to copy, modify, or distribute them without our
            permission.
          </p>
        </section>
        <section className='mb-8'>
          <h2>5. Termination</h2>
          <p>
            We may suspend or terminate your access to our services if you
            violate these terms. We reserve the right to do this without notice.
          </p>
        </section>
        <section className='mb-8'>
          <h2>6. Limitation of Liability</h2>
          <p>
            We are not responsible for any damages or losses resulting from your
            use of our services. Use them at your own risk.
          </p>
        </section>
        <section className='mb-8'>
          <h2>7. Changes to Terms</h2>
          <p>
            We may update these terms from time to time. Please review this page
            regularly to stay informed about changes.
          </p>
        </section>
        <footer>
          <p>
            If you have any questions about these terms, contact us at
            support@example.com.
          </p>
        </footer>
      </div>
    </main>
  )
}

export default page

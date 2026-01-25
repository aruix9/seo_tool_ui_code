import React from 'react'
import Header from '../header'
import Footer from '../footer'

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-1 flex flex-col items-center grow'>{children}</main>
      <Footer />
    </div>
  )
}

export default CommonLayout

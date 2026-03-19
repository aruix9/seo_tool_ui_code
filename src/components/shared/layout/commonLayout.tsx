import Footer from '@/components/Layout/footer'
import Header from '@/components/Layout/header'

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
        <main className='flex-1 flex flex-col items-center grow'>{children}</main>
      <Footer />
    </>
  )
}

export default CommonLayout

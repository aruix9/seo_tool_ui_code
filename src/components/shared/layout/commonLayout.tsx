import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default CommonLayout

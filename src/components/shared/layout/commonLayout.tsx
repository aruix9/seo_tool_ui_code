import Footer from '@/components/Layout/footer'
import Header from '@/components/Layout/header'

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

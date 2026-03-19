import Footer from "@/components/Layout/footer"
import Header from "@/components/Layout/header"

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
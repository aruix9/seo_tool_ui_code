import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

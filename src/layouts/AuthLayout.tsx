import { Outlet } from "react-router-dom"
import { Header } from "../components/layout/Header"
import { Footer } from "../components/layout/Footer"

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background-light font-display text-slate-900">
      <Header />
      <main className="flex-1 w-full bg-white py-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

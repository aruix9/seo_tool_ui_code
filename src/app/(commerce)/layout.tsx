import Logo from '@/components/shared/logo'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='py-2 bg-purple-200'>
        <div className='container mx-auto'>
          <div className='flex justify-between'>
            <Logo />
          </div>
        </div>
      </header>
      <main className='flex-1 flex flex-col items-center grow'>{children}</main>
      <footer className='bg-purple-950 py-2'>
        <div className='container mx-auto text-purple-50'>
          <p>&copy; Copyright 2025.</p>
        </div>
      </footer>
    </div>
  )
}

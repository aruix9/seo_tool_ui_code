import type { Metadata } from 'next'
import { Outfit, Lato } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'
import AuthProvider from '@/context/AuthProvider'

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
})

const lato = Lato({
  weight: ['100', '400', '700'],
  variable: '--font-lato',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Butterswipe',
  description: 'SEO tools for your website',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <AuthProvider>
        <body className={`${outfit.variable} ${lato.variable} antialiased`}>
          {children}
          <Toaster
            position='top-right'
            toastOptions={{
              unstyled: true,
              classNames: {
                error: 'bg-rose-600',
                info: 'bg-cyan-600',
                success: 'bg-emerald-800',
                warning: 'bg-orange-600',
                toast:
                  'text-white bg-blue-400 rounded-lg border p-3 items-center flex gap-2 w-full !h-auto',
                title: 'font-semibold text-base',
                actionButton: 'bg-zinc-400',
                cancelButton: 'bg-orange-400',
                closeButton: 'bg-lime-400',
              },
            }}
          />
        </body>
      </AuthProvider>
    </html>
  )
}

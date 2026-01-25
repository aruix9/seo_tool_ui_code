import DashboardHeader from '@/components/shared/header/dashboardHeader'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex min-h-screen min-w-screen'>
      <DashboardHeader />
      {children}
    </div>
  )
}

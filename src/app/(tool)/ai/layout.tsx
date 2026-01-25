import CommonLayout from '@/components/shared/layout/commonLayout'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <CommonLayout>{children}</CommonLayout>
}

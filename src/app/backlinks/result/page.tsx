import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

const BackLinkResults = () => {
  return (
    <div className='container'>
      <Breadcrumb className='my-4'>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href='/backlinks'>Audit Backlink</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Result</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Card className='my-8'>
        <CardHeader className='h2-bold'>
          <CardTitle>Backlink Audit Results</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='flex w-full items-center gap-8 max-md:flex-col'>
            <div className='border p-4 rounded-lg bg-purple-50 text-center grow'>
              <h3 className='font-bold text-lg'>Total Backlinks</h3>
              <p className='font-bold text-2xl'>1,223</p>
            </div>
            <div className='border p-4 rounded-lg bg-purple-50 text-center grow'>
              <h3 className='font-bold text-lg'>Total Backlinks</h3>
              <p className='font-bold text-2xl'>1,223</p>
            </div>
            <div className='border p-4 rounded-lg bg-purple-50 text-center grow'>
              <h3 className='font-bold text-lg'>Total Backlinks</h3>
              <p className='font-bold text-2xl'>1,223</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className='my-8'>
        <CardHeader className='h2-bold'>
          <CardTitle>Detailed Backlink Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='flex w-full gap-8 flex-col'>
            <div className='border p-4 rounded-lg bg-purple-50 grow flex justify-between items-center'>
              <div>
                <h3 className='font-bold text-lg'>Wesbite</h3>
                <p>https://www.example.com</p>
                <p className='text-xs'>High Authority</p>
              </div>
              <strong className='text-green-600'>Safe</strong>
            </div>
            <div className='border p-4 rounded-lg bg-purple-50 grow flex justify-between items-center'>
              <div>
                <h3 className='font-bold text-lg'>Wesbite</h3>
                <p>https://www.example.com</p>
                <p className='text-xs'>High Authority</p>
              </div>
              <strong className='text-rose-600'>Safe</strong>
            </div>
            <div className='border p-4 rounded-lg bg-purple-50 grow flex justify-between items-center'>
              <div>
                <h3 className='font-bold text-lg'>Wesbite</h3>
                <p>https://www.example.com</p>
                <p className='text-xs'>High Authority</p>
              </div>
              <strong>Safe</strong>
            </div>
            <div className='border p-4 rounded-lg bg-purple-50 grow flex justify-between items-center'>
              <div>
                <h3 className='font-bold text-lg'>Wesbite</h3>
                <p>https://www.example.com</p>
                <p className='text-xs'>High Authority</p>
              </div>
              <strong>Safe</strong>
            </div>
            <div className='border p-4 rounded-lg bg-purple-50 grow flex justify-between items-center'>
              <div>
                <h3 className='font-bold text-lg'>Wesbite</h3>
                <p>https://www.example.com</p>
                <p className='text-xs'>High Authority</p>
              </div>
              <strong>Safe</strong>
            </div>
            <div className='border p-4 rounded-lg bg-purple-50 grow flex justify-between items-center'>
              <div>
                <h3 className='font-bold text-lg'>Wesbite</h3>
                <p>https://www.example.com</p>
                <p className='text-xs'>High Authority</p>
              </div>
              <strong>Safe</strong>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default BackLinkResults

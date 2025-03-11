import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Clock,
  FileWarning,
  FolderArchive,
  Trash,
  List,
  Search,
  Upload,
  User,
  Link,
} from 'lucide-react'
import Image from 'next/image'

const DashboardPage = () => {
  return (
    <div className='grow p-4'>
      <Breadcrumb className='mb-4'>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Dashboard</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className='h1-bold'>Dashboard</h1>
      <Card className='my-8'>
        <CardContent className='flex justify-between items-center gap-6'>
          <Input placeholder='Enter URL...' className='h-10 bg-purple-50' />
          <div>
            <Button>
              <Search />
              Start Audit
            </Button>
          </div>
        </CardContent>
      </Card>
      <div className='flex gap-8'>
        <div className='w-1/2 sm:w-full'>
          <Card className='my-8'>
            <CardHeader className='h2-bold flex flex-row justify-between items-center'>
              <CardTitle>Recent Audit Updates</CardTitle>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              >
                <path d='M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8' />
                <path d='M3 3v5h5' />
                <path d='M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16' />
                <path d='M16 16h5v5' />
              </svg>
            </CardHeader>
            <CardContent className='p-0'>
              <div className='border-t p-4 grow flex justify-between items-center border-l-5 border-l-transparent hover:border-l-purple-500'>
                <div>
                  <h3 className='font-bold text-lg'>Backlink Analysis</h3>
                  <p className='text-xs text-blue-600'>Audit in Progress</p>
                </div>
                <Image
                  src='/images/logo-dummy.svg'
                  alt='dummy logo'
                  width={30}
                  height={30}
                />
              </div>
              <div className='border-t p-4 grow flex justify-between items-center border-l-5 border-l-transparent hover:border-l-purple-500'>
                <div>
                  <h3 className='font-bold text-lg'>Backlink Analysis</h3>
                  <p className='text-xs text-green-700'>
                    Audit completed successfully
                  </p>
                </div>
                <Image
                  src='/images/logo-dummy.svg'
                  alt='dummy logo'
                  width={30}
                  height={30}
                />
              </div>
              <div className='border-t p-4 grow flex justify-between items-center border-l-5 border-l-transparent hover:border-l-purple-500'>
                <div>
                  <h3 className='font-bold text-lg'>Backlink Analysis</h3>
                  <p className='text-xs text-green-700'>
                    Audit completed successfully
                  </p>
                </div>
                <Image
                  src='/images/logo-dummy.svg'
                  alt='dummy logo'
                  width={30}
                  height={30}
                />
              </div>
              <div className='border-t p-4 grow flex justify-between items-center border-l-5 border-l-transparent hover:border-l-purple-500'>
                <div>
                  <h3 className='font-bold text-lg'>Backlink Analysis</h3>
                  <p className='text-xs text-green-700'>
                    Audit completed successfully
                  </p>
                </div>
                <Image
                  src='/images/logo-dummy.svg'
                  alt='dummy logo'
                  width={30}
                  height={30}
                />
              </div>
              <div className='border-t p-4 grow flex justify-between items-center border-l-5 border-l-transparent hover:border-l-purple-500'>
                <div>
                  <h3 className='font-bold text-lg'>Backlink Analysis</h3>
                  <p className='text-xs text-green-700'>
                    Audit completed successfully
                  </p>
                </div>
                <Image
                  src='/images/logo-dummy.svg'
                  alt='dummy logo'
                  width={30}
                  height={30}
                />
              </div>
            </CardContent>
          </Card>
        </div>
        <div className='w-1/2 sm:w-full'>
          <Card className='my-8'>
            <CardHeader className='h2-bold flex flex-row justify-between items-center'>
              <CardTitle>Backlink analysis report</CardTitle>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              >
                <circle cx='12' cy='12' r='10' />
                <path d='m15 9-6 6' />
                <path d='m9 9 6 6' />
              </svg>
            </CardHeader>
            <CardContent className='p-0'>
              <div className='p-4 grow'>
                <ul className='space-y-2'>
                  <li className='flex gap-16 text-md items-center'>
                    <span className='flex gap-4 w-[180px]'>
                      <User />
                      Assigned to
                    </span>
                    <span className='border py-2 px-4 rounded-md bg-purple-50'>
                      Me
                    </span>
                  </li>
                  <li className='flex gap-16 text-md items-center'>
                    <span className='flex gap-4 w-[180px]'>
                      <Clock />
                      Due date
                    </span>
                    <span className='border py-2 px-4 rounded-md bg-purple-50'>
                      Today
                    </span>
                  </li>
                  <li className='flex gap-16 text-md items-center'>
                    <span className='flex gap-4 w-[180px]'>
                      <List />
                      Project List
                    </span>
                    <span className='border py-2 px-4 rounded-md bg-purple-50'>
                      New Project
                    </span>
                  </li>
                  <li className='flex gap-16 text-md items-center'>
                    <span className='flex gap-4 w-[180px]'>
                      <FileWarning />
                      Importance
                    </span>
                    <span className='border py-2 px-4 rounded-md bg-purple-50'>
                      High
                    </span>
                  </li>
                </ul>
              </div>
              <div className='p-4 mt-4'>
                <h3 className='font-bold text-lg'>File Attached</h3>
                <div className='py-2 flex justify-between items-center'>
                  <p className='text-gray-400'>No File Attached</p>
                  <div className='flex-row items-center'>
                    <label
                      htmlFor={`attachment-1`}
                      className='inline-flex gap-2 border border-primary py-1 px-3 h-[36px] rounded-md cursor-pointer text-base text-primary hover:bg-primary hover:text-purple-50'
                      title='Upload an Attachment'
                    >
                      <Upload className='w-[16px]' />
                      Upload File
                    </label>
                    <Input
                      type='file'
                      id={`attachment-1`}
                      name={`attachment-1`}
                      className='hidden'
                    />
                  </div>
                </div>
              </div>
              <div className='px-4'>
                <h3 className='font-bold text-lg'>Related Links</h3>
                <div className='py-2 flex justify-between items-center'>
                  <p className='text-gray-400'>No Links available</p>
                  <Button className='text-base bg-transparent text-primary border border-primary hover:bg-primary hover:text-purple-50 cursor-pointer'>
                    <Link />
                    Add Link
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className='flex flex-row justify-end items-center gap-6 mt-16'>
              <Button
                variant='secondary'
                size={'lg'}
                className='bg-rose-200 hover:bg-rose-200/90 cursor-pointer'
              >
                <FolderArchive />
                Archive Audit
              </Button>
              <Button
                variant='secondary'
                size={'lg'}
                className='bg-rose-600 text-white hover:bg-rose-600/90 cursor-pointer'
              >
                <Trash />
                Delete Audit
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage

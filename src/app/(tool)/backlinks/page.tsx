'use client'

import { Button } from '@/components/ui/button'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardContent,
} from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { BacklinkSchema } from '@/schemas/zodBacklinkSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const BacklinksPage = () => {
  const form = useForm<z.infer<typeof BacklinkSchema>>({
    resolver: zodResolver(BacklinkSchema),
    defaultValues: {
      backlinkType: '',
      url: '',
    },
  })
  const onSubmit = (values: z.infer<typeof BacklinkSchema>) => {
    console.log(values)
  }
  return (
    <div className='container grow flex flex-col'>
      <Breadcrumb className='my-4'>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Audit Backlink</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className='grow w-full flex justify-center items-center my-8'>
        <Card className='w-3xl max-w-full'>
          <CardHeader className='text-center h2-bold mb-4'>
            <CardTitle>Audit Your Website Backlinks</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='space-y-8'
              >
                <div className='grid w-full items-center gap-6'>
                  <div className='flex flex-col space-y-1.5'>
                    <Label htmlFor='url'>Website URL</Label>
                    <Input
                      id='url'
                      name='url'
                      placeholder='https://www.example.com'
                    />
                  </div>
                  <div className='flex flex-col space-y-1.5'>
                    <Label htmlFor='url' className='mb-2'>
                      Select Backlink Types
                    </Label>
                    <div className='flex space-x-8'>
                      <FormField
                        control={form.control}
                        name='backlinkType'
                        render={() => (
                          <>
                            <FormItem className='flex flex-row items-center space-x space-y-0'>
                              <FormControl>
                                <Checkbox />
                              </FormControl>
                              <FormLabel className='text-sm font-normal'>
                                Dofollow
                              </FormLabel>
                            </FormItem>
                            <FormItem className='flex flex-row items-center space-x space-y-0'>
                              <FormControl>
                                <Checkbox />
                              </FormControl>
                              <FormLabel className='text-sm font-normal'>
                                Nofollow
                              </FormLabel>
                            </FormItem>
                            <FormItem className='flex flex-row items-center space-x space-y-0'>
                              <FormControl>
                                <Checkbox />
                              </FormControl>
                              <FormLabel className='text-sm font-normal'>
                                Sponsored
                              </FormLabel>
                            </FormItem>
                          </>
                        )}
                      />
                    </div>
                  </div>
                  <div className='flex flex-col space-y-2'>
                    <Label htmlFor='url'>Additional Preferences</Label>
                    <div className='flex items-center space-x-2'>
                      <Switch id='preferences' />
                      <Label htmlFor='preferences'>
                        Include historical data
                      </Label>
                    </div>
                  </div>
                </div>
              </form>
            </Form>
          </CardContent>
          <CardFooter className='flex justify-between'>
            <Button className='w-full'>
              <Link href='/backlinks/result' className='w-full block'>
                Start Audit
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default BacklinksPage

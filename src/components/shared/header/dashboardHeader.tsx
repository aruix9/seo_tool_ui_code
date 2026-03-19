'use client'

import { Button } from '@/components/ui/button'
import Logo from '../logo'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { data } from '../../../../data'
import { NavigationLink } from '../../../../types/type'
import { JSX } from 'react'
import Image from 'next/image'

const DashboardHeader = () => {
  return (
    <div className='w-3xs border-r flex flex-col border-purple-200'>
      <div className='px-4 py-2 h-[56px]'>
        <Logo />
      </div>
      <div className='mt-4 px-4'>
        <NavigationMenu className='max-w-none block'>
          <NavigationMenuList className='flex flex-col items-start gap-0 w-full '>
            {data &&
              data.dashboardNavigation.map(
                (
                  navItem: NavigationLink | undefined,
                  index: number
                ): JSX.Element => (
                  <NavigationMenuItem
                    className='w-full py-3 flex gap-3'
                    key={index}
                  >
                    <>
                      <Image
                        src={navItem?.icon || ''}
                        width={20}
                        height={20}
                        alt={`${navItem?.title} icon`}
                      />
                      <Link
                        className='hover:text-purple-500'
                        href={navItem?.slug || '#'}
                        passHref
                      >
                        {navItem?.title}
                      </Link>
                    </>
                  </NavigationMenuItem>
                )
              )}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className='p-4 mt-auto'>
        <Button className='w-full'>
          <Link href='javascript:void(0)' onClick={() => signOut()}>
            Sign Out
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default DashboardHeader

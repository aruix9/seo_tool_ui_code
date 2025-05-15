'use client'

import { JSX } from 'react'
import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { NavigationLink } from '../../../../types/type'
import { data } from '../../../../data'
import AuthLinks from './authLinks'

const PrimaryNavigation = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className='flex gap-8'>
        {data &&
          data.primaryNavigation.map(
            (
              navItem: NavigationLink | undefined,
              index: number
            ): JSX.Element => (
              <NavigationMenuItem key={index}>
                <Link href={navItem?.slug || '#'} passHref>
                  {navItem?.title}
                </Link>
              </NavigationMenuItem>
            )
          )}
        <AuthLinks />
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default PrimaryNavigation

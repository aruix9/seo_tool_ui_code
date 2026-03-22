'use client'

import { JSX, SetStateAction } from 'react'
import Link from 'next/link'
import { NavigationLink } from '../../../types/type'
import { data } from '../../../data'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import { usePathname } from 'next/navigation'

const PrimaryNavigation = ({ openMenu, setOpenMenu }: { openMenu: boolean; setOpenMenu: (value: SetStateAction<boolean>) => void }) => {
  const pathname = usePathname();

  return (
    <div className={`max-lg:mr-auto max-lg:fixed max-lg:z-50 max-lg:bg-white left-0 top-0 max-lg:h-screen max-lg:w-screen lg:block ${openMenu ? 'block' : 'hidden'}`}>
      <Button className="max-lg:block hidden p-0 !bg-transparent text-primary absolute top-0 right-0 z-50 w-16 h-16" onClick={() => setOpenMenu(!openMenu)}>
        <X className="size-6" absoluteStrokeWidth />
      </Button>
      <nav className='lg:flex max-lg:flex-col gap-8'>
        <ul className='flex max-lg:flex-col max-lg:pt-8'>
          {data &&
            data.primaryNavigation.map(
              (
                link: NavigationLink | undefined,
                index: number
              ): JSX.Element => {
                const isActive = pathname === link?.slug;
                console.log(isActive, pathname, link?.slug)
                return (
                  <li key={index}>
                    <Link href={link?.slug || '#'} passHref className={`px-4 py-2 text-sm max-lg:hover:bg-slate-100 block ${isActive ? 'text-primary font-bold' : 'text-slate-500 font-medium'}`}>
                      {link?.title}
                    </Link>
                  </li>
                )
              })}
        </ul>
      </nav>
    </div>
  )
}

export default PrimaryNavigation

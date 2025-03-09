'use client'

import { Button } from '@/components/ui/button'
import { NavigationMenuItem } from '@/components/ui/navigation-menu'
import { User } from 'next-auth'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const AuthLinks = () => {
  const { data: session } = useSession()
  const user: User = session?.user
  return (
    <>
      {session ? (
        <NavigationMenuItem>
          <>
            <span className='mr-4'>Welcome {user.name}</span>
            <Button onClick={() => signOut()}>Sign Out</Button>
          </>
        </NavigationMenuItem>
      ) : (
        <>
          <NavigationMenuItem>
            <Button>
              <Link href='/auth/signin' legacyBehavior passHref>
                Sign In
              </Link>
            </Button>
          </NavigationMenuItem>
        </>
      )}
    </>
  )
}

export default AuthLinks

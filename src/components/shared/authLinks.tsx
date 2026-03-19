'use client'

import { Button } from '@/components/ui/button'
import { User } from 'next-auth'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { ShoppingCart, UserRound } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const AuthLinks = () => {
  const { data: session } = useSession()
  
  // user
  const user: User = session?.user
  const userName = user?.name;
  const nameParts = userName?.split(" ");
  const initials = nameParts ? nameParts[0][0] + nameParts[nameParts.length - 1][0] : '';

  return (
    <>
      {session ? (
        <div className="flex items-center gap-6">
          <Link href="/cart" className="relative text-slate-400 hover:text-primary transition-colors">
            <ShoppingCart className="size-7" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 border-2 border-white rounded-full flex items-center justify-center text-[8px] font-bold text-white">4</span>
          </Link>
          <div className="sm:border-l border-slate-200 sm:pl-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild className='flex items-center'>
                <Button className='!p-0 !bg-transparent h-auto cursor-pointer text-slate-400'>
                  <div className="max-sm:hidden w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-purple-400 flex items-center justify-center text-white font-bold text-sm border-2 border-white shadow-sm">
                    {initials}
                  </div>
                  <div className="max-sm:hidden text-left">
                    <p className="text-xs font-bold text-slate-900">{userName}</p>
                    <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Upgrade</span>
                  </div>
                  <UserRound className="size-7 sm:hidden" absoluteStrokeWidth />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  <DropdownMenuLabel onClick={() => signOut()} className='cursor-pointer'>Sign Out</DropdownMenuLabel>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      ) : (
        <Button>
          <Link href='/auth/signin' passHref>
            Sign In
          </Link>
        </Button>
      )}
    </>
  )
}

export default AuthLinks

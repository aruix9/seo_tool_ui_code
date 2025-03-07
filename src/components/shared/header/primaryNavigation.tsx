'use client'

import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import Link from "next/link";

const PrimaryNavigation = () => {
    return (
        <NavigationMenu>
          <NavigationMenuList className="flex gap-8">
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>Home</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>Cart</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>Orders</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>Sign Up</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>Sign In</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>Forgot Password</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>Reset Password</Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
    )
}

export default PrimaryNavigation;
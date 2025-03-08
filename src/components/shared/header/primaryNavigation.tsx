'use client'

import { JSX } from "react";
import Link from "next/link";
import { data } from "!@/data";
import { NavigationLink } from "!@/types/type";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";

const PrimaryNavigation = () => {
    return (
        <NavigationMenu>
          <NavigationMenuList className="flex gap-8">
            {data && data.primaryNavigation.map((navItem: NavigationLink | undefined, index:number): JSX.Element => (
              <NavigationMenuItem key={index}>
                <Link href={navItem?.slug || '#'} legacyBehavior passHref>{navItem?.title}</Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
    )
}

export default PrimaryNavigation;
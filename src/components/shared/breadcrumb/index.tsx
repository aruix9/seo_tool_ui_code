import React from 'react'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

interface BreadcrumbItem {
  name: string;
  link: string;
}

interface BreadcrumbsProps {
  list: BreadcrumbItem[];
}

const Breadcrumbs = ({list}: BreadcrumbsProps) => {
  return (
    <Breadcrumb className='mt-4'>
        <BreadcrumbList>
            {list.map((link, index) => (
                <React.Fragment key={index}>
                    <BreadcrumbItem>
                        {
                            link.link === '' ?
                                <BreadcrumbPage>{link.name}</BreadcrumbPage> :
                                <BreadcrumbLink href={link.link}>{link.name}</BreadcrumbLink>
                        }                        
                    </BreadcrumbItem>
                    {index < list.length -1 && <BreadcrumbSeparator />}
                </React.Fragment>
            ))}
        </BreadcrumbList>
    </Breadcrumb>
  )
}

export default Breadcrumbs
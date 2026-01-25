'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  Link2,
  BarChart3,
  DollarSign,
  FileText,
  Settings,
  Search,
  Bell
} from 'lucide-react'

const sidebarItems = [
  {
    title: 'Dashboard',
    href: '/admin',
    icon: LayoutDashboard,
    description: 'Overview and key metrics'
  },
  {
    title: 'Users',
    href: '/admin/users',
    icon: Users,
    description: 'Manage platform users'
  },
  {
    title: 'Orders',
    href: '/admin/orders',
    icon: ShoppingCart,
    description: 'Order management'
  },
  {
    title: 'Products',
    href: '/admin/products',
    icon: Link2,
    description: 'Backlink inventory'
  },
  {
    title: 'Audits',
    href: '/admin/audits',
    icon: Search,
    description: 'Audit management'
  },
  {
    title: 'Analytics',
    href: '/admin/analytics',
    icon: BarChart3,
    description: 'Reports and insights'
  },
  {
    title: 'Finance',
    href: '/admin/finance',
    icon: DollarSign,
    description: 'Revenue and payments'
  },
  {
    title: 'Content',
    href: '/admin/content',
    icon: FileText,
    description: 'CMS and pages'
  },
  {
    title: 'Settings',
    href: '/admin/settings',
    icon: Settings,
    description: 'System configuration'
  }
]

export default function AdminSidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-full">
      {/* Logo/Brand Section */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">BS</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-900">ButterSwipe</h1>
            <p className="text-xs text-gray-500">Admin Panel</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4">
        <div className="space-y-1">
          {sidebarItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href || 
              (item.href !== '/admin' && pathname?.startsWith(item.href))
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors group',
                  isActive
                    ? 'bg-purple-50 text-purple-700 border-l-4 border-purple-600'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                )}
              >
                <Icon 
                  className={cn(
                    'w-5 h-5',
                    isActive ? 'text-purple-600' : 'text-gray-400 group-hover:text-gray-600'
                  )} 
                />
                <div className="flex-1">
                  <div className="font-medium">{item.title}</div>
                  <div className="text-xs text-gray-500 group-hover:text-gray-600">
                    {item.description}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </nav>

      {/* Quick Actions */}
      <div className="p-4 border-t border-gray-200 mt-auto">
        <div className="space-y-2">
          <button className="w-full flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
            <Bell className="w-4 h-4" />
            <span>Notifications</span>
            <span className="ml-auto bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
              3
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
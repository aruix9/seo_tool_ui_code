'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  ShoppingCart,
  DollarSign,
  User,
  Shield,
  Clock,
  Edit,
  Trash2
} from 'lucide-react'
import { formatDate, formatDateTime, getUserStatusColor, getUserRoleBadgeVariant } from '../data/userMockData'

interface User {
  id: string
  name: string
  email: string
  role: 'user' | 'admin'
  isActive: boolean
  avatar: string | null
  joinDate: string
  lastActive: string
  totalOrders: number
  totalSpent: number
  location: string
  phone: string
}

interface UserDetailsModalProps {
  user: User | null
  isOpen: boolean
  onClose: () => void
  onEdit: (userId: string) => void
  onDelete: (userId: string) => void
  onToggleStatus: (userId: string) => void
}

export default function UserDetailsModal({
  user,
  isOpen,
  onClose,
  onEdit,
  onDelete,
  onToggleStatus
}: UserDetailsModalProps) {
  if (!user) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
              <span className="text-purple-600 font-bold text-xl">
                {user.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div>
              <DialogTitle className="text-2xl">{user.name}</DialogTitle>
              <DialogDescription className="text-base">
                {user.email}
              </DialogDescription>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant={getUserRoleBadgeVariant(user.role)}>
                  {user.role === 'admin' && <Shield className="w-3 h-3 mr-1" />}
                  {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                </Badge>
                <div className={`flex items-center ${getUserStatusColor(user.isActive)}`}>
                  <div className={`w-2 h-2 rounded-full mr-2 ${user.isActive ? 'bg-green-500' : 'bg-red-500'}`}></div>
                  {user.isActive ? 'Active' : 'Inactive'}
                </div>
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6">
          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900 flex items-center">
              <User className="w-4 h-4 mr-2" />
              Contact Information
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="text-sm">{user.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gray-400" />
                <span className="text-sm">{user.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-sm">{user.location}</span>
              </div>
            </div>
          </div>

          {/* Account Information */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900 flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              Account Information
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Calendar className="w-4 h-4 text-gray-400" />
                <div>
                  <div className="text-sm font-medium">Joined</div>
                  <div className="text-sm text-gray-500">{formatDate(user.joinDate)}</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-gray-400" />
                <div>
                  <div className="text-sm font-medium">Last Active</div>
                  <div className="text-sm text-gray-500">{formatDateTime(user.lastActive)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Order Statistics */}
        <div className="py-6">
          <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Order Statistics
          </h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2">
                <ShoppingCart className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="text-2xl font-bold">{user.totalOrders}</div>
                  <div className="text-sm text-gray-600">Total Orders</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2">
                <DollarSign className="w-5 h-5 text-green-600" />
                <div>
                  <div className="text-2xl font-bold">${user.totalSpent.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Total Spent</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <DialogFooter className="flex gap-2">
          <Button variant="outline" onClick={() => onEdit(user.id)}>
            <Edit className="w-4 h-4 mr-2" />
            Edit User
          </Button>
          <Button 
            variant="outline" 
            onClick={() => onToggleStatus(user.id)}
            className={user.isActive ? 'text-red-600 hover:text-red-700' : 'text-green-600 hover:text-green-700'}
          >
            {user.isActive ? 'Deactivate' : 'Activate'}
          </Button>
          <Button 
            variant="destructive" 
            onClick={() => onDelete(user.id)}
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
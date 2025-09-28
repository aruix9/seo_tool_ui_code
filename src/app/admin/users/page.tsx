'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select'
import {
  Users,
  UserCheck,
  UserX,
  Shield,
  Search,
  Filter,
  MoreHorizontal,
  Eye,
  Edit,
  Trash2,
  Download,
  UserPlus,
  Mail,
  Phone,
  ShoppingBag,
  CreditCard,
  UserCircle,
  LogIn,
  FileText,
  TrendingUp,
  TrendingDown
} from 'lucide-react'
import StatsCard from '../components/StatsCard'
import UserDetailsModal from '../components/UserDetailsModal'
import { EditUserModal, DeleteConfirmModal, EmailModal, AddUserModal } from '../components/UserActionModals'
import { userManagementMockData, formatDate, formatDateTime, getTimeAgo, getUserStatusColor, getUserRoleBadgeVariant } from '../data/userMockData'

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

export default function UserManagement() {
  const { userStats, users: initialUsers, recentUserActivities } = userManagementMockData
  
  // User data state (to allow real-time updates)
  const [users, setUsers] = useState<User[]>(initialUsers as User[])
  
  // Filter and search state
  const [searchQuery, setSearchQuery] = useState('')
  const [roleFilter, setRoleFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')
  const [selectedUsers, setSelectedUsers] = useState<string[]>([])
  
  // Modal and action states
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [isUserModalOpen, setIsUserModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false)
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false)
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false)
  const [userToDelete, setUserToDelete] = useState<string | null>(null)
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1)
  const [usersPerPage] = useState(10)
  
  // Edit form state
  const [editFormData, setEditFormData] = useState<Partial<User>>({})

  // Filter users based on search and filters
  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesRole = roleFilter === 'all' || user.role === roleFilter
    const matchesStatus = statusFilter === 'all' || 
                         (statusFilter === 'active' && user.isActive) ||
                         (statusFilter === 'inactive' && !user.isActive)
    
    return matchesSearch && matchesRole && matchesStatus
  })

  // Pagination logic
  const totalUsers = filteredUsers.length
  const totalPages = Math.ceil(totalUsers / usersPerPage)
  const startIndex = (currentPage - 1) * usersPerPage
  const endIndex = startIndex + usersPerPage
  const paginatedUsers = filteredUsers.slice(startIndex, endIndex)

  // Reset to first page when filters change
  const resetPagination = () => {
    setCurrentPage(1)
  }

  // Update search query and reset pagination
  const handleSearchChange = (value: string) => {
    setSearchQuery(value)
    resetPagination()
  }

  // Update role filter and reset pagination
  const handleRoleFilterChange = (role: string) => {
    setRoleFilter(role)
    resetPagination()
  }

  // Update status filter and reset pagination
  const handleStatusFilterChange = (status: string) => {
    setStatusFilter(status)
    resetPagination()
  }

  // Comprehensive user action handlers
  const handleUserAction = (userId: string, action: string) => {
    const user = users.find(u => u.id === userId)
    if (!user) return

    switch (action) {
      case 'view':
        setSelectedUser(user)
        setIsUserModalOpen(true)
        break
        
      case 'edit':
        setSelectedUser(user)
        setEditFormData(user)
        setIsEditModalOpen(true)
        break
        
      case 'contact':
        setSelectedUser(user)
        setIsEmailModalOpen(true)
        break
        
      case 'activate':
      case 'deactivate':
        toggleUserStatus(userId)
        break
        
      case 'delete':
        setUserToDelete(userId)
        setIsDeleteConfirmOpen(true)
        break
        
      default:
        console.log(`Unknown action: ${action}`)
    }
  }

  // Toggle user active status
  const toggleUserStatus = (userId: string) => {
    setUsers(prevUsers => 
      prevUsers.map(user => {
        if (user.id === userId) {
          const newStatus = !user.isActive
          toast.success(
            `User ${newStatus ? 'activated' : 'deactivated'} successfully`,
            { description: `${user.name} is now ${newStatus ? 'active' : 'inactive'}` }
          )
          return { ...user, isActive: newStatus }
        }
        return user
      })
    )
  }

  // Delete user with confirmation
  const confirmDeleteUser = () => {
    if (!userToDelete) return
    
    const user = users.find(u => u.id === userToDelete)
    if (user) {
      setUsers(prevUsers => prevUsers.filter(u => u.id !== userToDelete))
      toast.success('User deleted successfully', {
        description: `${user.name} has been removed from the system`
      })
    }
    
    setIsDeleteConfirmOpen(false)
    setUserToDelete(null)
  }

  // Save edited user
  const handleSaveEdit = () => {
    if (!selectedUser || !editFormData) return
    
    setUsers(prevUsers => 
      prevUsers.map(user => {
        if (user.id === selectedUser.id) {
          const updatedUser = { ...user, ...editFormData }
          toast.success('User updated successfully', {
            description: `${updatedUser.name}'s profile has been updated`
          })
          return updatedUser
        }
        return user
      })
    )
    
    setIsEditModalOpen(false)
    setSelectedUser(null)
    setEditFormData({})
  }

  // Send email (frontend simulation)
  const handleSendEmail = (subject: string, message: string) => {
    if (!selectedUser) return
    
    // Simulate sending email
    toast.success('Email sent successfully', {
      description: `Email sent to ${selectedUser.name} at ${selectedUser.email}`
    })
    
    setIsEmailModalOpen(false)
    setSelectedUser(null)
  }

  // Add new user
  const handleAddUser = (newUserData: Partial<User>) => {
    const newUser: User = {
      id: (users.length + 1).toString(),
      name: newUserData.name || '',
      email: newUserData.email || '',
      role: newUserData.role || 'user',
      isActive: newUserData.isActive ?? true,
      avatar: null,
      joinDate: new Date().toISOString(),
      lastActive: new Date().toISOString(),
      totalOrders: 0,
      totalSpent: 0,
      location: newUserData.location || '',
      phone: newUserData.phone || ''
    }
    
    setUsers(prevUsers => [...prevUsers, newUser])
    toast.success('User added successfully', {
      description: `${newUser.name} has been added to the system`
    })
    
    setIsAddUserModalOpen(false)
  }

  // Modal close handlers
  const handleCloseModal = () => {
    setIsUserModalOpen(false)
    setSelectedUser(null)
  }

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false)
    setSelectedUser(null)
    setEditFormData({})
  }

  const handleCloseEmailModal = () => {
    setIsEmailModalOpen(false)
    setSelectedUser(null)
  }

  const handleCloseDeleteConfirm = () => {
    setIsDeleteConfirmOpen(false)
    setUserToDelete(null)
  }

  const handleCloseAddUserModal = () => {
    setIsAddUserModalOpen(false)
  }

  // Export users to CSV
  const handleExportUsers = () => {
    const csvContent = [
      // CSV Headers
      ['Name', 'Email', 'Role', 'Status', 'Phone', 'Location', 'Join Date', 'Orders', 'Total Spent'].join(','),
      // CSV Data
      ...filteredUsers.map(user => [
        `"${user.name}"`,
        `"${user.email}"`,
        user.role,
        user.isActive ? 'Active' : 'Inactive',
        `"${user.phone}"`,
        `"${user.location}"`,
        formatDate(user.joinDate),
        user.totalOrders,
        user.totalSpent
      ].join(','))
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)
    link.setAttribute('href', url)
    link.setAttribute('download', `users-export-${new Date().toISOString().split('T')[0]}.csv`)
    link.style.visibility = 'hidden'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    toast.success('Users exported successfully', {
      description: `${filteredUsers.length} users exported to CSV file`
    })
  }

  const getActivityIcon = (action: string) => {
    switch (action) {
      case 'placed_order':
        return <ShoppingBag className="h-10 w-6 text-blue-500" />
      case 'registered':
        return <UserPlus className="h-10 w-6 text-green-500" />
      case 'payment_completed':
        return <CreditCard className="h-10 w-6 text-yellow-500" />
      case 'profile_updated':
        return <UserCircle className="h-10 w-6 text-purple-500" />
      case 'logged_in':
        return <LogIn className="h-10 w-6 text-gray-500" />
      default:
        return <FileText className="h-10 w-6 text-gray-500" />
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
          <p className="text-gray-600 mt-1">Manage and monitor all platform users</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleExportUsers}>
            <Download className="w-4 h-4 mr-2" />
            Export Users
          </Button>
          <Button onClick={() => setIsAddUserModalOpen(true)}>
            <UserPlus className="w-4 h-4 mr-2" />
            Add User
          </Button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userStats.totalUsers.toLocaleString()}</div>
            <p className="text-xs text-blue-500">
              <TrendingUp className="h-3 w-3 inline mr-1" />
              {userStats.newUsersThisMonth} this month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <UserCheck className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userStats.activeUsers.toLocaleString()}</div>
            <p className="text-xs text-green-500">
              <TrendingUp className="h-3 w-3 inline mr-1" />
              {((userStats.activeUsers / userStats.totalUsers) * 100).toFixed(1)}% active rate
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Inactive Users</CardTitle>
            <UserX className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userStats.inactiveUsers.toLocaleString()}</div>
            <p className="text-xs text-red-500">
              <TrendingDown className="h-3 w-3 inline mr-1" />
              {((userStats.inactiveUsers / userStats.totalUsers) * 100).toFixed(1)}% inactive rate
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Admin Users</CardTitle>
            <Shield className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userStats.adminUsers.toLocaleString()}</div>
            <p className="text-xs text-purple-500">
              System administrators
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main User Table */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>All Users</CardTitle>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    placeholder="Search users..."
                    value={searchQuery}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    className="pl-10 w-64"
                  />
                </div>
                {/* Temporary button filters until Select component is installed */}
                <div className="flex gap-2">
                  <Button 
                    variant={roleFilter === 'all' ? 'default' : 'outline'} 
                    size="sm"
                    onClick={() => handleRoleFilterChange('all')}
                  >
                    All Roles
                  </Button>
                  <Button 
                    variant={roleFilter === 'user' ? 'default' : 'outline'} 
                    size="sm"
                    onClick={() => handleRoleFilterChange('user')}
                  >
                    Users
                  </Button>
                  <Button 
                    variant={roleFilter === 'admin' ? 'default' : 'outline'} 
                    size="sm"
                    onClick={() => handleRoleFilterChange('admin')}
                  >
                    Admins
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant={statusFilter === 'all' ? 'default' : 'outline'} 
                    size="sm"
                    onClick={() => handleStatusFilterChange('all')}
                  >
                    All Status
                  </Button>
                  <Button 
                    variant={statusFilter === 'active' ? 'default' : 'outline'} 
                    size="sm"
                    onClick={() => handleStatusFilterChange('active')}
                  >
                    Active
                  </Button>
                  <Button 
                    variant={statusFilter === 'inactive' ? 'default' : 'outline'} 
                    size="sm"
                    onClick={() => handleStatusFilterChange('inactive')}
                  >
                    Inactive
                  </Button>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Joined</TableHead>
                  <TableHead>Last Active</TableHead>
                  <TableHead>Orders</TableHead>
                  <TableHead>Spent</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="text-purple-600 font-medium text-sm">
                            {user.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-sm text-gray-500">{user.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={getUserRoleBadgeVariant(user.role)}>
                        {user.role === 'admin' && <Shield className="w-3 h-3 mr-1" />}
                        {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className={`flex items-center ${getUserStatusColor(user.isActive)}`}>
                        <div className={`w-2 h-2 rounded-full mr-2 ${user.isActive ? 'bg-green-500' : 'bg-red-500'}`}></div>
                        {user.isActive ? 'Active' : 'Inactive'}
                      </div>
                    </TableCell>
                    <TableCell>{formatDate(user.joinDate)}</TableCell>
                    <TableCell>
                      <div>
                        <div className="text-sm">{getTimeAgo(user.lastActive)}</div>
                        <div className="text-xs text-gray-500">{formatDate(user.lastActive)}</div>
                      </div>
                    </TableCell>
                    <TableCell>{user.totalOrders}</TableCell>
                    <TableCell>${user.totalSpent.toLocaleString()}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem onClick={() => handleUserAction(user.id, 'view')}>
                            <Eye className="w-4 h-4 mr-2" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleUserAction(user.id, 'edit')}>
                            <Edit className="w-4 h-4 mr-2" />
                            Edit User
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleUserAction(user.id, 'contact')}>
                            <Mail className="w-4 h-4 mr-2" />
                            Send Email
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem 
                            onClick={() => handleUserAction(user.id, user.isActive ? 'deactivate' : 'activate')}
                          >
                            {user.isActive ? (
                              <>
                                <UserX className="w-4 h-4 mr-2" />
                                Deactivate
                              </>
                            ) : (
                              <>
                                <UserCheck className="w-4 h-4 mr-2" />
                                Activate
                              </>
                            )}
                          </DropdownMenuItem>
                          <DropdownMenuItem 
                            onClick={() => handleUserAction(user.id, 'delete')}
                            className="text-red-600"
                          >
                            <Trash2 className="w-4 h-4 mr-2" />
                            Delete User
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            
            {paginatedUsers.length === 0 && filteredUsers.length === 0 && (
              <div className="text-center py-12">
                <Users className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No users found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </div>
            )}
            
            {paginatedUsers.length === 0 && filteredUsers.length > 0 && (
              <div className="text-center py-12">
                <Users className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No users on this page</h3>
                <p className="text-gray-500">Go back to see available users</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Recent Activities Sidebar */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Recent User Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentUserActivities.map((activity) => (
                <div key={activity.id} className="flex items-center justify-center space-x-3">
                  <div className="text-xl">
                    {getActivityIcon(activity.action)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">
                      {activity.userName}
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      {activity.description}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {getTimeAgo(activity.timestamp)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="ghost" className="w-full mt-4">
              View All Activities
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Functional Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          Showing {startIndex + 1} to {Math.min(endIndex, totalUsers)} of {totalUsers} users
        </p>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </Button>
          
          {/* Page Numbers */}
          {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
            let pageNumber;
            if (totalPages <= 5) {
              pageNumber = i + 1;
            } else if (currentPage <= 3) {
              pageNumber = i + 1;
            } else if (currentPage >= totalPages - 2) {
              pageNumber = totalPages - 4 + i;
            } else {
              pageNumber = currentPage - 2 + i;
            }
            
            return (
              <Button
                key={pageNumber}
                variant={currentPage === pageNumber ? 'default' : 'outline'}
                size="sm"
                onClick={() => setCurrentPage(pageNumber)}
              >
                {pageNumber}
              </Button>
            );
          })}
          
          <Button 
            variant="outline" 
            size="sm" 
            disabled={currentPage === totalPages || totalPages === 0}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </Button>
        </div>
      </div>

      {/* User Details Modal */}
      <UserDetailsModal
        user={selectedUser}
        isOpen={isUserModalOpen}
        onClose={handleCloseModal}
        onEdit={(userId) => handleUserAction(userId, 'edit')}
        onDelete={(userId) => handleUserAction(userId, 'delete')}
        onToggleStatus={(userId) => handleUserAction(userId, selectedUser?.isActive ? 'deactivate' : 'activate')}
      />

      {/* Edit User Modal */}
      <EditUserModal
        user={selectedUser}
        isOpen={isEditModalOpen}
        formData={editFormData}
        onClose={handleCloseEditModal}
        onSave={handleSaveEdit}
        onFormChange={setEditFormData}
      />

      {/* Delete Confirmation Modal */}
      <DeleteConfirmModal
        userName={userToDelete ? users.find(u => u.id === userToDelete)?.name || null : null}
        isOpen={isDeleteConfirmOpen}
        onClose={handleCloseDeleteConfirm}
        onConfirm={confirmDeleteUser}
      />

      {/* Email Modal */}
      <EmailModal
        user={selectedUser}
        isOpen={isEmailModalOpen}
        onClose={handleCloseEmailModal}
        onSend={handleSendEmail}
      />

      {/* Add User Modal */}
      <AddUserModal
        isOpen={isAddUserModalOpen}
        onClose={handleCloseAddUserModal}
        onAdd={handleAddUser}
      />
    </div>
  )
}
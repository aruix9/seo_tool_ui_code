// User Management Mock Data
export const userManagementMockData = {
  // User statistics
  userStats: {
    totalUsers: 1247,
    activeUsers: 1089,
    inactiveUsers: 158,
    adminUsers: 12,
    newUsersThisMonth: 89,
    newUsersLastMonth: 67
  },

  // All users data
  users: [
    {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'user',
      isActive: true,
      avatar: null,
      joinDate: '2024-01-15T10:30:00Z',
      lastActive: '2024-12-25T14:30:00Z',
      totalOrders: 12,
      totalSpent: 2450.00,
      location: 'New York, USA',
      phone: '+1-555-0123'
    },
    {
      id: '2',
      name: 'Sarah Wilson',
      email: 'sarah.wilson@example.com',
      role: 'user',
      isActive: true,
      avatar: null,
      joinDate: '2024-02-20T09:15:00Z',
      lastActive: '2024-12-25T11:20:00Z',
      totalOrders: 8,
      totalSpent: 1680.00,
      location: 'London, UK',
      phone: '+44-7700-900123'
    },
    {
      id: '3',
      name: 'Mike Johnson',
      email: 'mike.johnson@example.com',
      role: 'admin',
      isActive: true,
      avatar: null,
      joinDate: '2023-08-10T14:45:00Z',
      lastActive: '2024-12-25T16:10:00Z',
      totalOrders: 25,
      totalSpent: 5250.00,
      location: 'Toronto, Canada',
      phone: '+1-416-555-0198'
    },
    {
      id: '4',
      name: 'Emily Brown',
      email: 'emily.brown@example.com',
      role: 'user',
      isActive: false,
      avatar: null,
      joinDate: '2024-03-12T11:20:00Z',
      lastActive: '2024-11-15T09:30:00Z',
      totalOrders: 3,
      totalSpent: 420.00,
      location: 'Sydney, Australia',
      phone: '+61-2-9876-5432'
    },
    {
      id: '5',
      name: 'David Chen',
      email: 'david.chen@example.com',
      role: 'user',
      isActive: true,
      avatar: null,
      joinDate: '2024-04-05T16:30:00Z',
      lastActive: '2024-12-24T20:45:00Z',
      totalOrders: 18,
      totalSpent: 3780.00,
      location: 'Singapore',
      phone: '+65-8123-4567'
    },
    {
      id: '6',
      name: 'Lisa Garcia',
      email: 'lisa.garcia@example.com',
      role: 'user',
      isActive: true,
      avatar: null,
      joinDate: '2024-05-18T13:15:00Z',
      lastActive: '2024-12-25T08:30:00Z',
      totalOrders: 6,
      totalSpent: 990.00,
      location: 'Madrid, Spain',
      phone: '+34-612-345-678'
    },
    {
      id: '7',
      name: 'Alex Thompson',
      email: 'alex.thompson@example.com',
      role: 'admin',
      isActive: true,
      avatar: null,
      joinDate: '2023-11-22T10:00:00Z',
      lastActive: '2024-12-25T15:20:00Z',
      totalOrders: 31,
      totalSpent: 6420.00,
      location: 'Berlin, Germany',
      phone: '+49-30-12345678'
    },
    {
      id: '8',
      name: 'Maria Rodriguez',
      email: 'maria.rodriguez@example.com',
      role: 'user',
      isActive: false,
      avatar: null,
      joinDate: '2024-06-30T12:45:00Z',
      lastActive: '2024-10-20T14:15:00Z',
      totalOrders: 2,
      totalSpent: 280.00,
      location: 'Mexico City, Mexico',
      phone: '+52-55-1234-5678'
    },
    {
      id: '9',
      name: 'James Wilson',
      email: 'james.wilson@example.com',
      role: 'user',
      isActive: true,
      avatar: null,
      joinDate: '2024-07-08T15:30:00Z',
      lastActive: '2024-12-25T12:10:00Z',
      totalOrders: 14,
      totalSpent: 2940.00,
      location: 'Dublin, Ireland',
      phone: '+353-1-234-5678'
    },
    {
      id: '10',
      name: 'Anna Kowalski',
      email: 'anna.kowalski@example.com',
      role: 'user',
      isActive: true,
      avatar: null,
      joinDate: '2024-08-14T09:20:00Z',
      lastActive: '2024-12-24T18:45:00Z',
      totalOrders: 9,
      totalSpent: 1575.00,
      location: 'Warsaw, Poland',
      phone: '+48-22-123-4567'
    },
    {
      id: '11',
      name: 'Robert Kim',
      email: 'robert.kim@example.com',
      role: 'user',
      isActive: false,
      avatar: null,
      joinDate: '2024-09-03T14:10:00Z',
      lastActive: '2024-11-28T16:20:00Z',
      totalOrders: 1,
      totalSpent: 150.00,
      location: 'Seoul, South Korea',
      phone: '+82-2-1234-5678'
    },
    {
      id: '12',
      name: 'Sophie Martin',
      email: 'sophie.martin@example.com',
      role: 'user',
      isActive: true,
      avatar: null,
      joinDate: '2024-09-20T11:40:00Z',
      lastActive: '2024-12-25T13:30:00Z',
      totalOrders: 7,
      totalSpent: 1330.00,
      location: 'Paris, France',
      phone: '+33-1-23-45-67-89'
    },
    {
      id: '13',
      name: 'Tom Anderson',
      email: 'tom.anderson@example.com',
      role: 'admin',
      isActive: true,
      avatar: null,
      joinDate: '2023-12-05T16:25:00Z',
      lastActive: '2024-12-25T17:00:00Z',
      totalOrders: 42,
      totalSpent: 8820.00,
      location: 'Melbourne, Australia',
      phone: '+61-3-9876-5432'
    },
    {
      id: '14',
      name: 'Nina Petrov',
      email: 'nina.petrov@example.com',
      role: 'user',
      isActive: true,
      avatar: null,
      joinDate: '2024-10-12T08:15:00Z',
      lastActive: '2024-12-25T10:40:00Z',
      totalOrders: 5,
      totalSpent: 875.00,
      location: 'Moscow, Russia',
      phone: '+7-495-123-4567'
    },
    {
      id: '15',
      name: 'Carlos Silva',
      email: 'carlos.silva@example.com',
      role: 'user',
      isActive: false,
      avatar: null,
      joinDate: '2024-11-08T13:50:00Z',
      lastActive: '2024-12-10T19:25:00Z',
      totalOrders: 0,
      totalSpent: 0.00,
      location: 'São Paulo, Brazil',
      phone: '+55-11-1234-5678'
    }
  ],

  // Recent user activities
  recentUserActivities: [
    {
      id: '1',
      userId: '1',
      userName: 'John Doe',
      action: 'placed_order',
      description: 'Placed order #ORD-2024-156',
      timestamp: '2024-12-25T14:30:00Z'
    },
    {
      id: '2',
      userId: '6',
      userName: 'Lisa Garcia',
      action: 'registered',
      description: 'Created new account',
      timestamp: '2024-12-25T08:30:00Z'
    },
    {
      id: '3',
      userId: '9',
      userName: 'James Wilson',
      action: 'payment_completed',
      description: 'Completed payment for order #ORD-2024-157',
      timestamp: '2024-12-25T12:10:00Z'
    },
    {
      id: '4',
      userId: '12',
      userName: 'Sophie Martin',
      action: 'profile_updated',
      description: 'Updated profile information',
      timestamp: '2024-12-25T13:30:00Z'
    },
    {
      id: '5',
      userId: '14',
      userName: 'Nina Petrov',
      action: 'logged_in',
      description: 'Logged into account',
      timestamp: '2024-12-25T10:40:00Z'
    }
  ]
}

// Helper functions for user management
export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

export const formatDateTime = (dateString: string): string => {
  return new Date(dateString).toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

export const getTimeAgo = (dateString: string): string => {
  const now = new Date()
  const past = new Date(dateString)
  const diffMs = now.getTime() - past.getTime()
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
  const diffMinutes = Math.floor(diffMs / (1000 * 60))

  if (diffDays > 0) {
    return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`
  } else if (diffHours > 0) {
    return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`
  } else if (diffMinutes > 0) {
    return `${diffMinutes} minute${diffMinutes > 1 ? 's' : ''} ago`
  } else {
    return 'Just now'
  }
}

export const getUserStatusColor = (isActive: boolean): string => {
  return isActive ? 'text-green-600' : 'text-red-600'
}

export const getUserRoleBadgeVariant = (role: string) => {
  switch (role) {
    case 'admin':
      return 'default'
    case 'user':
      return 'secondary'
    default:
      return 'outline'
  }
}
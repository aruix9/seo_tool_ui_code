// Mock data for admin dashboard
export const adminMockData = {
  // Dashboard overview stats
  dashboardStats: {
    totalUsers: 1247,
    totalUsersGrowth: 12.5, // percentage
    activeUsers: 892,
    activeUsersGrowth: 8.3,
    totalOrders: 456,
    totalOrdersGrowth: 15.2,
    totalRevenue: 125670.50,
    totalRevenueGrowth: 23.1,
    pendingAudits: 23,
    completedAudits: 178,
    totalLinks: 345,
    activeLinks: 298
  },

  // Recent activities
  recentActivities: [
    {
      id: '1',
      type: 'order',
      title: 'New order placed',
      description: 'Order #ORD-2024-001 by John Doe',
      timestamp: '2024-12-25T10:30:00Z',
      status: 'pending'
    },
    {
      id: '2',
      type: 'user',
      title: 'New user registered',
      description: 'Sarah Wilson joined the platform',
      timestamp: '2024-12-25T09:45:00Z',
      status: 'completed'
    },
    {
      id: '3',
      type: 'audit',
      title: 'Audit completed',
      description: 'Backlink audit for example.com finished',
      timestamp: '2024-12-25T09:15:00Z',
      status: 'completed'
    },
    {
      id: '4',
      type: 'payment',
      title: 'Payment received',
      description: '$250.00 payment for Order #ORD-2024-002',
      timestamp: '2024-12-25T08:30:00Z',
      status: 'completed'
    },
    {
      id: '5',
      type: 'audit',
      title: 'Audit requested',
      description: 'New audit request for techblog.com',
      timestamp: '2024-12-25T08:00:00Z',
      status: 'pending'
    }
  ],

  // Revenue chart data (last 7 days)
  revenueChartData: [
    { day: 'Mon', revenue: 12500, orders: 45 },
    { day: 'Tue', revenue: 15600, orders: 52 },
    { day: 'Wed', revenue: 8900, orders: 31 },
    { day: 'Thu', revenue: 18200, orders: 67 },
    { day: 'Fri', revenue: 22100, orders: 78 },
    { day: 'Sat', revenue: 19800, orders: 69 },
    { day: 'Sun', revenue: 16400, orders: 58 }
  ],

  // User growth data (last 6 months)
  userGrowthData: [
    { month: 'Jul', users: 856, newUsers: 23 },
    { month: 'Aug', users: 923, newUsers: 67 },
    { month: 'Sep', users: 1045, newUsers: 122 },
    { month: 'Oct', users: 1156, newUsers: 111 },
    { month: 'Nov', users: 1203, newUsers: 47 },
    { month: 'Dec', users: 1247, newUsers: 44 }
  ],

  // Top performing links
  topPerformingLinks: [
    {
      id: '1',
      website: 'techcrunch.com',
      url: 'https://techcrunch.com/guest-post',
      orders: 45,
      revenue: 11250,
      conversionRate: 23.5
    },
    {
      id: '2',
      website: 'forbes.com',
      url: 'https://forbes.com/sponsored-content',
      orders: 38,
      revenue: 19000,
      conversionRate: 31.2
    },
    {
      id: '3',
      website: 'entrepreneur.com',
      url: 'https://entrepreneur.com/backlink-placement',
      orders: 34,
      revenue: 8500,
      conversionRate: 18.7
    },
    {
      id: '4',
      website: 'mashable.com',
      url: 'https://mashable.com/link-building',
      orders: 29,
      revenue: 7250,
      conversionRate: 22.1
    },
    {
      id: '5',
      website: 'wired.com',
      url: 'https://wired.com/editorial-links',
      orders: 25,
      revenue: 12500,
      conversionRate: 35.8
    }
  ],

  // Recent orders summary
  recentOrders: [
    {
      id: 'ORD-2024-001',
      customer: 'John Doe',
      email: 'john.doe@example.com',
      amount: 250.00,
      status: 'pending',
      items: 2,
      createdAt: '2024-12-25T10:30:00Z'
    },
    {
      id: 'ORD-2024-002',
      customer: 'Jane Smith',
      email: 'jane.smith@example.com',
      amount: 500.00,
      status: 'completed',
      items: 4,
      createdAt: '2024-12-25T09:15:00Z'
    },
    {
      id: 'ORD-2024-003',
      customer: 'Mike Johnson',
      email: 'mike.johnson@example.com',
      amount: 150.00,
      status: 'processing',
      items: 1,
      createdAt: '2024-12-25T08:45:00Z'
    },
    {
      id: 'ORD-2024-004',
      customer: 'Sarah Wilson',
      email: 'sarah.wilson@example.com',
      amount: 350.00,
      status: 'completed',
      items: 3,
      createdAt: '2024-12-25T08:00:00Z'
    },
    {
      id: 'ORD-2024-005',
      customer: 'David Brown',
      email: 'david.brown@example.com',
      amount: 200.00,
      status: 'cancelled',
      items: 2,
      createdAt: '2024-12-25T07:30:00Z'
    }
  ],

  // Pending audits
  pendingAudits: [
    {
      id: 'AUD-001',
      website: 'example.com',
      requestedBy: 'John Doe',
      requestedAt: '2024-12-25T10:00:00Z',
      priority: 'high',
      status: 'pending'
    },
    {
      id: 'AUD-002',
      website: 'techblog.com',
      requestedBy: 'Jane Smith',
      requestedAt: '2024-12-25T09:30:00Z',
      priority: 'medium',
      status: 'processing'
    },
    {
      id: 'AUD-003',
      website: 'startupnews.io',
      requestedBy: 'Mike Johnson',
      requestedAt: '2024-12-25T09:00:00Z',
      priority: 'low',
      status: 'pending'
    }
  ]
}

// Helper functions
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount)
}

export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('en-US').format(num)
}

export const formatPercentage = (num: number): string => {
  return `${num > 0 ? '+' : ''}${num.toFixed(1)}%`
}

export const getGrowthColor = (growth: number): string => {
  return growth > 0 ? 'text-green-600' : growth < 0 ? 'text-red-600' : 'text-gray-600'
}

export const getGrowthIcon = (growth: number): string => {
  return growth > 0 ? 'trending-up' : growth < 0 ? 'trending-down' : 'minus'
}
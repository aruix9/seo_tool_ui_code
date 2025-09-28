export interface Order {
  id: string
  orderNumber: string
  customer: {
    id: string
    name: string
    email: string
    avatar?: string
  }
  items: OrderItem[]
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled' | 'refunded'
  total: number
  subtotal: number
  tax: number
  shipping: number
  discount?: number
  paymentMethod: string
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded'
  shippingAddress: {
    street: string
    city: string
    state: string
    zipCode: string
    country: string
  }
  billingAddress: {
    street: string
    city: string
    state: string
    zipCode: string
    country: string
  }
  orderDate: string
  shippedDate?: string
  deliveredDate?: string
  notes?: string
  trackingNumber?: string
  createdAt: string
  updatedAt: string
}

export interface OrderItem {
  id: string
  productId: string
  productName: string
  productImage?: string
  quantity: number
  unitPrice: number
  totalPrice: number
  sku?: string
}

// Mock data for orders
export const mockOrders: Order[] = [
  {
    id: '1',
    orderNumber: 'ORD-2024-0001',
    customer: {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      avatar: '/images/avatars/john.jpg'
    },
    items: [
      {
        id: '1',
        productId: 'p1',
        productName: 'Premium Backlink Package (DA 80+)',
        quantity: 1,
        unitPrice: 299.00,
        totalPrice: 299.00,
        sku: 'BL-PREM-001'
      },
      {
        id: '2',
        productId: 'p2',
        productName: 'Guest Post Service',
        quantity: 2,
        unitPrice: 149.00,
        totalPrice: 298.00,
        sku: 'GP-STD-001'
      }
    ],
    status: 'delivered',
    total: 642.73,
    subtotal: 597.00,
    tax: 35.73,
    shipping: 10.00,
    discount: 0,
    paymentMethod: 'Credit Card',
    paymentStatus: 'paid',
    shippingAddress: {
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'United States'
    },
    billingAddress: {
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'United States'
    },
    orderDate: '2024-01-15T10:30:00Z',
    shippedDate: '2024-01-16T14:00:00Z',
    deliveredDate: '2024-01-18T16:45:00Z',
    trackingNumber: 'TRK123456789',
    notes: 'Customer requested expedited shipping',
    createdAt: '2024-01-15T10:30:00Z',
    updatedAt: '2024-01-18T16:45:00Z'
  },
  {
    id: '2',
    orderNumber: 'ORD-2024-0002',
    customer: {
      id: '2',
      name: 'Sarah Johnson',
      email: 'sarah@example.com'
    },
    items: [
      {
        id: '3',
        productId: 'p3',
        productName: 'Standard Backlink Package (DA 50-70)',
        quantity: 3,
        unitPrice: 99.00,
        totalPrice: 297.00,
        sku: 'BL-STD-001'
      }
    ],
    status: 'processing',
    total: 322.83,
    subtotal: 297.00,
    tax: 17.83,
    shipping: 8.00,
    paymentMethod: 'PayPal',
    paymentStatus: 'paid',
    shippingAddress: {
      street: '456 Oak Ave',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90210',
      country: 'United States'
    },
    billingAddress: {
      street: '456 Oak Ave',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90210',
      country: 'United States'
    },
    orderDate: '2024-01-20T14:15:00Z',
    notes: 'Rush order - customer needs links active within 48 hours',
    createdAt: '2024-01-20T14:15:00Z',
    updatedAt: '2024-01-21T09:30:00Z'
  },
  {
    id: '3',
    orderNumber: 'ORD-2024-0003',
    customer: {
      id: '3',
      name: 'Mike Wilson',
      email: 'mike@example.com'
    },
    items: [
      {
        id: '4',
        productId: 'p4',
        productName: 'SEO Audit Report',
        quantity: 1,
        unitPrice: 199.00,
        totalPrice: 199.00,
        sku: 'SEO-AUD-001'
      },
      {
        id: '5',
        productId: 'p5',
        productName: 'Competitor Analysis',
        quantity: 1,
        unitPrice: 249.00,
        totalPrice: 249.00,
        sku: 'COMP-ANA-001'
      }
    ],
    status: 'shipped',
    total: 488.24,
    subtotal: 448.00,
    tax: 26.88,
    shipping: 13.36,
    paymentMethod: 'Bank Transfer',
    paymentStatus: 'paid',
    shippingAddress: {
      street: '789 Pine Rd',
      city: 'Chicago',
      state: 'IL',
      zipCode: '60601',
      country: 'United States'
    },
    billingAddress: {
      street: '789 Pine Rd',
      city: 'Chicago',
      state: 'IL',
      zipCode: '60601',
      country: 'United States'
    },
    orderDate: '2024-01-22T11:00:00Z',
    shippedDate: '2024-01-23T16:30:00Z',
    trackingNumber: 'TRK987654321',
    createdAt: '2024-01-22T11:00:00Z',
    updatedAt: '2024-01-23T16:30:00Z'
  },
  {
    id: '4',
    orderNumber: 'ORD-2024-0004',
    customer: {
      id: '4',
      name: 'Emily Chen',
      email: 'emily@example.com'
    },
    items: [
      {
        id: '6',
        productId: 'p6',
        productName: 'Basic Backlink Package (DA 30-50)',
        quantity: 5,
        unitPrice: 49.00,
        totalPrice: 245.00,
        sku: 'BL-BAS-001'
      }
    ],
    status: 'pending',
    total: 270.25,
    subtotal: 245.00,
    tax: 14.70,
    shipping: 10.55,
    paymentMethod: 'Credit Card',
    paymentStatus: 'pending',
    shippingAddress: {
      street: '321 Elm St',
      city: 'Miami',
      state: 'FL',
      zipCode: '33101',
      country: 'United States'
    },
    billingAddress: {
      street: '321 Elm St',
      city: 'Miami',
      state: 'FL',
      zipCode: '33101',
      country: 'United States'
    },
    orderDate: '2024-01-25T09:45:00Z',
    createdAt: '2024-01-25T09:45:00Z',
    updatedAt: '2024-01-25T09:45:00Z'
  },
  {
    id: '5',
    orderNumber: 'ORD-2024-0005',
    customer: {
      id: '5',
      name: 'David Brown',
      email: 'david@example.com'
    },
    items: [
      {
        id: '7',
        productId: 'p7',
        productName: 'Content Marketing Package',
        quantity: 1,
        unitPrice: 399.00,
        totalPrice: 399.00,
        sku: 'CONT-MKT-001'
      }
    ],
    status: 'cancelled',
    total: 399.00,
    subtotal: 399.00,
    tax: 0,
    shipping: 0,
    paymentMethod: 'PayPal',
    paymentStatus: 'refunded',
    shippingAddress: {
      street: '654 Maple Dr',
      city: 'Seattle',
      state: 'WA',
      zipCode: '98101',
      country: 'United States'
    },
    billingAddress: {
      street: '654 Maple Dr',
      city: 'Seattle',
      state: 'WA',
      zipCode: '98101',
      country: 'United States'
    },
    orderDate: '2024-01-28T13:20:00Z',
    notes: 'Customer requested cancellation due to budget constraints',
    createdAt: '2024-01-28T13:20:00Z',
    updatedAt: '2024-01-29T10:15:00Z'
  },
  {
    id: '6',
    orderNumber: 'ORD-2024-0006',
    customer: {
      id: '6',
      name: 'Lisa Anderson',
      email: 'lisa@example.com'
    },
    items: [
      {
        id: '8',
        productId: 'p8',
        productName: 'Link Building Consultation',
        quantity: 1,
        unitPrice: 149.00,
        totalPrice: 149.00,
        sku: 'LB-CONS-001'
      },
      {
        id: '9',
        productId: 'p9',
        productName: 'Website Technical Audit',
        quantity: 1,
        unitPrice: 199.00,
        totalPrice: 199.00,
        sku: 'WEB-AUD-001'
      }
    ],
    status: 'delivered',
    total: 374.84,
    subtotal: 348.00,
    tax: 20.88,
    shipping: 5.96,
    discount: 0,
    paymentMethod: 'Credit Card',
    paymentStatus: 'paid',
    shippingAddress: {
      street: '987 Broadway',
      city: 'Boston',
      state: 'MA',
      zipCode: '02101',
      country: 'United States'
    },
    billingAddress: {
      street: '987 Broadway',
      city: 'Boston',
      state: 'MA',
      zipCode: '02101',
      country: 'United States'
    },
    orderDate: '2024-02-01T08:30:00Z',
    shippedDate: '2024-02-02T12:00:00Z',
    deliveredDate: '2024-02-05T14:20:00Z',
    trackingNumber: 'TRK456789123',
    createdAt: '2024-02-01T08:30:00Z',
    updatedAt: '2024-02-05T14:20:00Z'
  },
  {
    id: '7',
    orderNumber: 'ORD-2024-0007',
    customer: {
      id: '7',
      name: 'Robert Taylor',
      email: 'robert@example.com'
    },
    items: [
      {
        id: '10',
        productId: 'p10',
        productName: 'Enterprise Backlink Package',
        quantity: 1,
        unitPrice: 799.00,
        totalPrice: 799.00,
        sku: 'BL-ENT-001'
      }
    ],
    status: 'processing',
    total: 863.93,
    subtotal: 799.00,
    tax: 47.94,
    shipping: 16.99,
    paymentMethod: 'Bank Transfer',
    paymentStatus: 'paid',
    shippingAddress: {
      street: '147 Central Ave',
      city: 'Phoenix',
      state: 'AZ',
      zipCode: '85001',
      country: 'United States'
    },
    billingAddress: {
      street: '147 Central Ave',
      city: 'Phoenix',
      state: 'AZ',
      zipCode: '85001',
      country: 'United States'
    },
    orderDate: '2024-02-03T15:45:00Z',
    notes: 'VIP customer - priority handling required',
    createdAt: '2024-02-03T15:45:00Z',
    updatedAt: '2024-02-04T11:20:00Z'
  },
  {
    id: '8',
    orderNumber: 'ORD-2024-0008',
    customer: {
      id: '8',
      name: 'Jennifer White',
      email: 'jennifer@example.com'
    },
    items: [
      {
        id: '11',
        productId: 'p11',
        productName: 'Social Media Backlinks',
        quantity: 2,
        unitPrice: 89.00,
        totalPrice: 178.00,
        sku: 'SM-BL-001'
      }
    ],
    status: 'refunded',
    total: 192.34,
    subtotal: 178.00,
    tax: 10.68,
    shipping: 3.66,
    paymentMethod: 'Credit Card',
    paymentStatus: 'refunded',
    shippingAddress: {
      street: '258 River Rd',
      city: 'Denver',
      state: 'CO',
      zipCode: '80201',
      country: 'United States'
    },
    billingAddress: {
      street: '258 River Rd',
      city: 'Denver',
      state: 'CO',
      zipCode: '80201',
      country: 'United States'
    },
    orderDate: '2024-02-05T10:15:00Z',
    notes: 'Customer requested refund - quality concerns',
    createdAt: '2024-02-05T10:15:00Z',
    updatedAt: '2024-02-06T16:45:00Z'
  },
  {
    id: '9',
    orderNumber: 'ORD-2024-0009',
    customer: {
      id: '9',
      name: 'David Miller',
      email: 'david@example.com'
    },
    items: [
      {
        id: '12',
        productId: 'p12',
        productName: 'Directory Submission Service',
        quantity: 1,
        unitPrice: 59.00,
        totalPrice: 59.00,
        sku: 'DIR-SUB-001'
      }
    ],
    status: 'delivered',
    total: 68.27,
    subtotal: 59.00,
    tax: 3.54,
    shipping: 5.73,
    paymentMethod: 'PayPal',
    paymentStatus: 'paid',
    shippingAddress: {
      street: '741 Park Ave',
      city: 'Seattle',
      state: 'WA',
      zipCode: '98101',
      country: 'United States'
    },
    billingAddress: {
      street: '741 Park Ave',
      city: 'Seattle',
      state: 'WA',
      zipCode: '98101',
      country: 'United States'
    },
    orderDate: '2024-02-10T14:30:00Z',
    deliveredDate: '2024-02-15T16:45:00Z',
    createdAt: '2024-02-10T14:30:00Z',
    updatedAt: '2024-02-15T16:45:00Z'
  },
  {
    id: '10',
    orderNumber: 'ORD-2024-0010',
    customer: {
      id: '10',
      name: 'Lisa Anderson',
      email: 'lisa@example.com'
    },
    items: [
      {
        id: '13',
        productId: 'p13',
        productName: 'Content Marketing Package',
        quantity: 1,
        unitPrice: 399.00,
        totalPrice: 399.00,
        sku: 'CM-PKG-001'
      }
    ],
    status: 'processing',
    total: 432.93,
    subtotal: 399.00,
    tax: 23.94,
    shipping: 9.99,
    paymentMethod: 'Credit Card',
    paymentStatus: 'paid',
    shippingAddress: {
      street: '852 Broadway',
      city: 'Portland',
      state: 'OR',
      zipCode: '97201',
      country: 'United States'
    },
    billingAddress: {
      street: '852 Broadway',
      city: 'Portland',
      state: 'OR',
      zipCode: '97201',
      country: 'United States'
    },
    orderDate: '2024-02-12T09:15:00Z',
    createdAt: '2024-02-12T09:15:00Z',
    updatedAt: '2024-02-12T11:30:00Z'
  },
  {
    id: '11',
    orderNumber: 'ORD-2024-0011',
    customer: {
      id: '11',
      name: 'Thomas Wilson',
      email: 'thomas@example.com'
    },
    items: [
      {
        id: '14',
        productId: 'p14',
        productName: 'SEO Audit Report',
        quantity: 1,
        unitPrice: 199.00,
        totalPrice: 199.00,
        sku: 'SEO-AUD-001'
      }
    ],
    status: 'shipped',
    total: 220.92,
    subtotal: 199.00,
    tax: 11.94,
    shipping: 9.98,
    paymentMethod: 'Debit Card',
    paymentStatus: 'paid',
    shippingAddress: {
      street: '963 Fifth St',
      city: 'Nashville',
      state: 'TN',
      zipCode: '37201',
      country: 'United States'
    },
    billingAddress: {
      street: '963 Fifth St',
      city: 'Nashville',
      state: 'TN',
      zipCode: '37201',
      country: 'United States'
    },
    orderDate: '2024-02-14T16:20:00Z',
    shippedDate: '2024-02-16T10:00:00Z',
    trackingNumber: 'TN789012345',
    createdAt: '2024-02-14T16:20:00Z',
    updatedAt: '2024-02-16T10:00:00Z'
  },
  {
    id: '12',
    orderNumber: 'ORD-2024-0012',
    customer: {
      id: '12',
      name: 'Karen Davis',
      email: 'karen@example.com'
    },
    items: [
      {
        id: '15',
        productId: 'p15',
        productName: 'Local SEO Package',
        quantity: 2,
        unitPrice: 299.00,
        totalPrice: 598.00,
        sku: 'LSEO-PKG-001'
      }
    ],
    status: 'pending',
    total: 647.86,
    subtotal: 598.00,
    tax: 35.88,
    shipping: 13.98,
    paymentMethod: 'Credit Card',
    paymentStatus: 'pending',
    shippingAddress: {
      street: '159 Market St',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94102',
      country: 'United States'
    },
    billingAddress: {
      street: '159 Market St',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94102',
      country: 'United States'
    },
    orderDate: '2024-02-18T13:45:00Z',
    createdAt: '2024-02-18T13:45:00Z',
    updatedAt: '2024-02-18T13:45:00Z'
  },
  {
    id: '13',
    orderNumber: 'ORD-2024-0013',
    customer: {
      id: '13',
      name: 'Robert Taylor',
      email: 'robert@example.com'
    },
    items: [
      {
        id: '16',
        productId: 'p16',
        productName: 'Link Building Campaign',
        quantity: 1,
        unitPrice: 499.00,
        totalPrice: 499.00,
        sku: 'LBC-001'
      }
    ],
    status: 'delivered',
    total: 538.92,
    subtotal: 499.00,
    tax: 29.94,
    shipping: 9.98,
    paymentMethod: 'Bank Transfer',
    paymentStatus: 'paid',
    shippingAddress: {
      street: '753 Oak Street',
      city: 'Austin',
      state: 'TX',
      zipCode: '73301',
      country: 'United States'
    },
    billingAddress: {
      street: '753 Oak Street',
      city: 'Austin',
      state: 'TX',
      zipCode: '73301',
      country: 'United States'
    },
    orderDate: '2024-02-20T11:00:00Z',
    deliveredDate: '2024-02-25T14:30:00Z',
    createdAt: '2024-02-20T11:00:00Z',
    updatedAt: '2024-02-25T14:30:00Z'
  },
  {
    id: '14',
    orderNumber: 'ORD-2024-0014',
    customer: {
      id: '14',
      name: 'Amanda Brown',
      email: 'amanda@example.com'
    },
    items: [
      {
        id: '17',
        productId: 'p17',
        productName: 'Press Release Distribution',
        quantity: 1,
        unitPrice: 149.00,
        totalPrice: 149.00,
        sku: 'PRD-001'
      }
    ],
    status: 'cancelled',
    total: 0,
    subtotal: 149.00,
    tax: 8.94,
    shipping: 7.49,
    paymentMethod: 'Credit Card',
    paymentStatus: 'failed',
    shippingAddress: {
      street: '456 Elm Ave',
      city: 'Miami',
      state: 'FL',
      zipCode: '33101',
      country: 'United States'
    },
    billingAddress: {
      street: '456 Elm Ave',
      city: 'Miami',
      state: 'FL',
      zipCode: '33101',
      country: 'United States'
    },
    orderDate: '2024-02-22T08:30:00Z',
    notes: 'Payment failed - order cancelled automatically',
    createdAt: '2024-02-22T08:30:00Z',
    updatedAt: '2024-02-22T09:15:00Z'
  },
  {
    id: '15',
    orderNumber: 'ORD-2024-0015',
    customer: {
      id: '15',
      name: 'Christopher Lee',
      email: 'christopher@example.com'
    },
    items: [
      {
        id: '18',
        productId: 'p18',
        productName: 'Website Analysis Report',
        quantity: 1,
        unitPrice: 99.00,
        totalPrice: 99.00,
        sku: 'WEB-ANA-001'
      },
      {
        id: '19',
        productId: 'p19',
        productName: 'Competitor Analysis',
        quantity: 1,
        unitPrice: 179.00,
        totalPrice: 179.00,
        sku: 'COMP-ANA-001'
      }
    ],
    status: 'processing',
    total: 300.66,
    subtotal: 278.00,
    tax: 16.68,
    shipping: 5.98,
    paymentMethod: 'PayPal',
    paymentStatus: 'paid',
    shippingAddress: {
      street: '321 Pine Road',
      city: 'Phoenix',
      state: 'AZ',
      zipCode: '85001',
      country: 'United States'
    },
    billingAddress: {
      street: '321 Pine Road',
      city: 'Phoenix',
      state: 'AZ',
      zipCode: '85001',
      country: 'United States'
    },
    orderDate: '2024-02-25T15:45:00Z',
    createdAt: '2024-02-25T15:45:00Z',
    updatedAt: '2024-02-26T09:20:00Z'
  }
]

// Helper functions
export const getStatusColor = (status: Order['status']) => {
  switch (status) {
    case 'pending':
      return 'bg-yellow-100 text-yellow-800'
    case 'processing':
      return 'bg-blue-100 text-blue-800'
    case 'shipped':
      return 'bg-purple-100 text-purple-800'
    case 'delivered':
      return 'bg-green-100 text-green-800'
    case 'cancelled':
      return 'bg-gray-100 text-gray-800'
    case 'refunded':
      return 'bg-red-100 text-red-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

export const getPaymentStatusColor = (status: Order['paymentStatus']) => {
  switch (status) {
    case 'pending':
      return 'bg-yellow-100 text-yellow-800'
    case 'paid':
      return 'bg-green-100 text-green-800'
    case 'failed':
      return 'bg-red-100 text-red-800'
    case 'refunded':
      return 'bg-gray-100 text-gray-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount)
}

export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export const calculateOrderStats = () => {
  const totalOrders = mockOrders.length
  const totalRevenue = mockOrders.reduce((sum, order) => sum + order.total, 0)
  const pendingOrders = mockOrders.filter(order => order.status === 'pending').length
  const completedOrders = mockOrders.filter(order => order.status === 'delivered').length
  const averageOrderValue = totalRevenue / totalOrders
  
  return {
    totalOrders,
    totalRevenue,
    pendingOrders,
    completedOrders,
    averageOrderValue
  }
}
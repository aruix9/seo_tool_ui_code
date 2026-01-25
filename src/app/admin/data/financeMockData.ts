export interface Transaction {
  id: string
  transactionId: string
  type: 'payment' | 'refund' | 'payout' | 'fee' | 'chargeback'
  status: 'completed' | 'pending' | 'failed' | 'cancelled'
  amount: number
  currency: string
  customer: {
    id: string
    name: string
    email: string
  }
  paymentMethod: {
    type: 'card' | 'paypal' | 'bank_transfer' | 'crypto'
    last4?: string
    brand?: string
  }
  description: string
  orderId?: string
  createdAt: string
  processedAt?: string
  fee: number
  netAmount: number
}

export interface RevenueMetric {
  label: string
  amount: number
  change: number
  trend: 'up' | 'down' | 'neutral'
  period: string
}

export interface PayoutSchedule {
  id: string
  amount: number
  scheduledDate: string
  status: 'scheduled' | 'processing' | 'completed' | 'failed'
  bankAccount: string
  transactionCount: number
}

export interface FinancialSummary {
  totalRevenue: number
  netRevenue: number
  totalFees: number
  pendingPayouts: number
  availableBalance: number
  processingFees: number
}

export interface RevenueByPeriod {
  period: string
  revenue: number
  fees: number
  netRevenue: number
  transactionCount: number
}

export interface TopCustomer {
  id: string
  name: string
  email: string
  totalSpent: number
  orderCount: number
  averageOrderValue: number
  lastOrderDate: string
}

// Financial Summary
export const financialSummary: FinancialSummary = {
  totalRevenue: 487320,
  netRevenue: 462450,
  totalFees: 24870,
  pendingPayouts: 125680,
  availableBalance: 336770,
  processingFees: 12450
}

// Revenue Metrics
export const revenueMetrics: RevenueMetric[] = [
  {
    label: 'Monthly Revenue',
    amount: 145620,
    change: 12.5,
    trend: 'up',
    period: 'vs last month'
  },
  {
    label: 'Weekly Revenue',
    amount: 34280,
    change: 8.3,
    trend: 'up',
    period: 'vs last week'
  },
  {
    label: 'Daily Revenue',
    amount: 4890,
    change: -2.1,
    trend: 'down',
    period: 'vs yesterday'
  },
  {
    label: 'Average Order Value',
    amount: 245.80,
    change: 5.7,
    trend: 'up',
    period: 'vs last month'
  }
]

// Recent Transactions
export const recentTransactions: Transaction[] = [
  {
    id: '1',
    transactionId: 'TXN_2024120801',
    type: 'payment',
    status: 'completed',
    amount: 299.00,
    currency: 'USD',
    customer: {
      id: '1',
      name: 'John Smith',
      email: 'john.smith@example.com'
    },
    paymentMethod: {
      type: 'card',
      last4: '4242',
      brand: 'Visa'
    },
    description: 'Premium Backlink Package - TechCrunch',
    orderId: 'ORD_001',
    createdAt: '2024-12-08T10:30:00Z',
    processedAt: '2024-12-08T10:30:15Z',
    fee: 8.97,
    netAmount: 290.03
  },
  {
    id: '2',
    transactionId: 'TXN_2024120802',
    type: 'payment',
    status: 'completed',
    amount: 599.00,
    currency: 'USD',
    customer: {
      id: '2',
      name: 'Sarah Johnson',
      email: 'sarah.johnson@example.com'
    },
    paymentMethod: {
      type: 'paypal'
    },
    description: 'High DA Guest Post - Forbes',
    orderId: 'ORD_002',
    createdAt: '2024-12-08T09:15:00Z',
    processedAt: '2024-12-08T09:15:23Z',
    fee: 17.97,
    netAmount: 581.03
  },
  {
    id: '3',
    transactionId: 'TXN_2024120803',
    type: 'refund',
    status: 'completed',
    amount: -150.00,
    currency: 'USD',
    customer: {
      id: '3',
      name: 'Mike Davis',
      email: 'mike.davis@example.com'
    },
    paymentMethod: {
      type: 'card',
      last4: '1234',
      brand: 'Mastercard'
    },
    description: 'Refund for cancelled order',
    orderId: 'ORD_003',
    createdAt: '2024-12-08T08:45:00Z',
    processedAt: '2024-12-08T08:45:45Z',
    fee: -4.50,
    netAmount: -145.50
  },
  {
    id: '4',
    transactionId: 'TXN_2024120804',
    type: 'payment',
    status: 'pending',
    amount: 199.00,
    currency: 'USD',
    customer: {
      id: '4',
      name: 'Emily Wilson',
      email: 'emily.wilson@example.com'
    },
    paymentMethod: {
      type: 'bank_transfer'
    },
    description: 'Niche Edit Backlink - Entrepreneur',
    orderId: 'ORD_004',
    createdAt: '2024-12-08T07:20:00Z',
    fee: 5.97,
    netAmount: 193.03
  },
  {
    id: '5',
    transactionId: 'TXN_2024120805',
    type: 'payment',
    status: 'failed',
    amount: 399.00,
    currency: 'USD',
    customer: {
      id: '5',
      name: 'Robert Brown',
      email: 'robert.brown@example.com'
    },
    paymentMethod: {
      type: 'card',
      last4: '5678',
      brand: 'Visa'
    },
    description: 'Resource Page Link - Inc.com',
    orderId: 'ORD_005',
    createdAt: '2024-12-08T06:10:00Z',
    fee: 0,
    netAmount: 0
  },
  {
    id: '6',
    transactionId: 'TXN_2024120806',
    type: 'payout',
    status: 'completed',
    amount: -25000.00,
    currency: 'USD',
    customer: {
      id: 'internal',
      name: 'ButterSwipe Inc',
      email: 'finance@butterswipe.com'
    },
    paymentMethod: {
      type: 'bank_transfer'
    },
    description: 'Weekly payout to bank account',
    createdAt: '2024-12-07T15:00:00Z',
    processedAt: '2024-12-07T15:02:30Z',
    fee: 25.00,
    netAmount: -25025.00
  }
]

// Payout Schedule
export const payoutSchedule: PayoutSchedule[] = [
  {
    id: '1',
    amount: 45680.00,
    scheduledDate: '2024-12-15',
    status: 'scheduled',
    bankAccount: '****1234',
    transactionCount: 156
  },
  {
    id: '2',
    amount: 38920.00,
    scheduledDate: '2024-12-08',
    status: 'completed',
    bankAccount: '****1234',
    transactionCount: 128
  },
  {
    id: '3',
    amount: 42150.00,
    scheduledDate: '2024-12-01',
    status: 'completed',
    bankAccount: '****1234',
    transactionCount: 142
  },
  {
    id: '4',
    amount: 55230.00,
    scheduledDate: '2024-12-22',
    status: 'scheduled',
    bankAccount: '****1234',
    transactionCount: 189
  }
]

// Revenue by Period (last 12 months)
export const revenueByPeriod: RevenueByPeriod[] = [
  { period: '2024-01', revenue: 125000, fees: 3750, netRevenue: 121250, transactionCount: 420 },
  { period: '2024-02', revenue: 138000, fees: 4140, netRevenue: 133860, transactionCount: 465 },
  { period: '2024-03', revenue: 152000, fees: 4560, netRevenue: 147440, transactionCount: 512 },
  { period: '2024-04', revenue: 168000, fees: 5040, netRevenue: 162960, transactionCount: 567 },
  { period: '2024-05', revenue: 182000, fees: 5460, netRevenue: 176540, transactionCount: 614 },
  { period: '2024-06', revenue: 195000, fees: 5850, netRevenue: 189150, transactionCount: 658 },
  { period: '2024-07', revenue: 208000, fees: 6240, netRevenue: 201760, transactionCount: 702 },
  { period: '2024-08', revenue: 225000, fees: 6750, netRevenue: 218250, transactionCount: 759 },
  { period: '2024-09', revenue: 240000, fees: 7200, netRevenue: 232800, transactionCount: 810 },
  { period: '2024-10', revenue: 258000, fees: 7740, netRevenue: 250260, transactionCount: 871 },
  { period: '2024-11', revenue: 275000, fees: 8250, netRevenue: 266750, transactionCount: 928 },
  { period: '2024-12', revenue: 145620, fees: 4369, netRevenue: 141251, transactionCount: 492 }
]

// Top Customers by Revenue
export const topCustomers: TopCustomer[] = [
  {
    id: '1',
    name: 'Digital Marketing Pro',
    email: 'contact@digitalmarketingpro.com',
    totalSpent: 15680.00,
    orderCount: 42,
    averageOrderValue: 373.33,
    lastOrderDate: '2024-12-07'
  },
  {
    id: '2',
    name: 'SEO Masters Inc',
    email: 'orders@seomasters.com',
    totalSpent: 12450.00,
    orderCount: 35,
    averageOrderValue: 355.71,
    lastOrderDate: '2024-12-06'
  },
  {
    id: '3',
    name: 'Growth Hackers LLC',
    email: 'team@growthhackers.com',
    totalSpent: 9870.00,
    orderCount: 28,
    averageOrderValue: 352.50,
    lastOrderDate: '2024-12-05'
  },
  {
    id: '4',
    name: 'Content Kings',
    email: 'hello@contentkings.com',
    totalSpent: 8320.00,
    orderCount: 24,
    averageOrderValue: 346.67,
    lastOrderDate: '2024-12-04'
  },
  {
    id: '5',
    name: 'Link Building Experts',
    email: 'info@linkbuildingexperts.com',
    totalSpent: 7890.00,
    orderCount: 22,
    averageOrderValue: 358.64,
    lastOrderDate: '2024-12-03'
  }
]

// Payment Methods Distribution
export const paymentMethodsDistribution = [
  { method: 'Credit Card', count: 1240, revenue: 285600, percentage: 68.2 },
  { method: 'PayPal', count: 420, revenue: 89250, percentage: 21.3 },
  { method: 'Bank Transfer', count: 180, revenue: 38470, percentage: 8.1 },
  { method: 'Cryptocurrency', count: 45, revenue: 10080, percentage: 2.4 }
]

// Financial Goals & Targets
export const financialTargets = {
  monthlyRevenueTarget: 300000,
  currentMonthRevenue: 145620,
  quarterlyTarget: 850000,
  currentQuarterRevenue: 678620,
  annualTarget: 3500000,
  currentAnnualRevenue: 2511620
}
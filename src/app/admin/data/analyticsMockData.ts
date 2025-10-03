export interface AnalyticsMetric {
  label: string
  value: number
  change: number
  trend: 'up' | 'down' | 'neutral'
  period: string
}

export interface ChartDataPoint {
  date: string
  revenue: number
  orders: number
  users: number
  audits: number
}

export interface TopProduct {
  id: string
  name: string
  domain: string
  sales: number
  revenue: number
  conversionRate: number
}

export interface UserActivity {
  date: string
  newUsers: number
  activeUsers: number
  returningUsers: number
}

export interface TrafficSource {
  source: string
  visitors: number
  percentage: number
  conversionRate: number
}

export interface RegionalData {
  country: string
  countryCode: string
  users: number
  revenue: number
  orders: number
}

// Key Metrics Data
export const keyMetrics: AnalyticsMetric[] = [
  {
    label: 'Total Revenue',
    value: 287543,
    change: 12.5,
    trend: 'up',
    period: 'vs last month'
  },
  {
    label: 'Total Orders',
    value: 1240,
    change: 8.2,
    trend: 'up',
    period: 'vs last month'
  },
  {
    label: 'Active Users',
    value: 5420,
    change: -2.1,
    trend: 'down',
    period: 'vs last month'
  },
  {
    label: 'Conversion Rate',
    value: 3.42,
    change: 0.8,
    trend: 'up',
    period: 'vs last month'
  },
  {
    label: 'Avg Order Value',
    value: 231.78,
    change: 5.3,
    trend: 'up',
    period: 'vs last month'
  },
  {
    label: 'Customer Satisfaction',
    value: 4.6,
    change: 0.2,
    trend: 'up',
    period: 'vs last month'
  }
]

// Chart Data for Revenue/Orders/Users Trends
export const chartData: ChartDataPoint[] = [
  { date: '2024-01', revenue: 145000, orders: 580, users: 1200, audits: 45 },
  { date: '2024-02', revenue: 162000, orders: 640, users: 1350, audits: 52 },
  { date: '2024-03', revenue: 178000, orders: 720, users: 1480, audits: 58 },
  { date: '2024-04', revenue: 195000, orders: 780, users: 1620, audits: 65 },
  { date: '2024-05', revenue: 210000, orders: 820, users: 1750, audits: 72 },
  { date: '2024-06', revenue: 225000, orders: 890, users: 1880, audits: 78 },
  { date: '2024-07', revenue: 240000, orders: 950, users: 2010, audits: 85 },
  { date: '2024-08', revenue: 255000, orders: 1020, users: 2140, audits: 92 },
  { date: '2024-09', revenue: 270000, orders: 1100, users: 2280, audits: 98 },
  { date: '2024-10', revenue: 285000, orders: 1180, users: 2420, audits: 105 },
  { date: '2024-11', revenue: 298000, orders: 1240, users: 2550, audits: 112 },
  { date: '2024-12', revenue: 315000, orders: 1300, users: 2680, audits: 120 }
]

// Top Performing Products
export const topProducts: TopProduct[] = [
  {
    id: '1',
    name: 'Premium Backlink Package',
    domain: 'techcrunch.com',
    sales: 145,
    revenue: 34500,
    conversionRate: 8.5
  },
  {
    id: '2',
    name: 'High DA Guest Post',
    domain: 'forbes.com',
    sales: 128,
    revenue: 51200,
    conversionRate: 7.2
  },
  {
    id: '3',
    name: 'Niche Edit Backlink',
    domain: 'entrepreneur.com',
    sales: 102,
    revenue: 20400,
    conversionRate: 6.8
  },
  {
    id: '4',
    name: 'Resource Page Link',
    domain: 'inc.com',
    sales: 89,
    revenue: 13350,
    conversionRate: 5.9
  },
  {
    id: '5',
    name: 'HARO Link Building',
    domain: 'businessinsider.com',
    sales: 76,
    revenue: 22800,
    conversionRate: 5.4
  }
]

// User Activity Data
export const userActivityData: UserActivity[] = [
  { date: '2024-12-01', newUsers: 45, activeUsers: 320, returningUsers: 125 },
  { date: '2024-12-02', newUsers: 52, activeUsers: 342, returningUsers: 138 },
  { date: '2024-12-03', newUsers: 38, activeUsers: 298, returningUsers: 112 },
  { date: '2024-12-04', newUsers: 61, activeUsers: 378, returningUsers: 156 },
  { date: '2024-12-05', newUsers: 48, activeUsers: 335, returningUsers: 142 },
  { date: '2024-12-06', newUsers: 55, activeUsers: 365, returningUsers: 149 },
  { date: '2024-12-07', newUsers: 42, activeUsers: 312, returningUsers: 128 }
]

// Traffic Sources
export const trafficSources: TrafficSource[] = [
  {
    source: 'Organic Search',
    visitors: 2840,
    percentage: 42.3,
    conversionRate: 4.2
  },
  {
    source: 'Direct',
    visitors: 1950,
    percentage: 29.1,
    conversionRate: 6.8
  },
  {
    source: 'Social Media',
    visitors: 980,
    percentage: 14.6,
    conversionRate: 2.1
  },
  {
    source: 'Email Marketing',
    visitors: 640,
    percentage: 9.5,
    conversionRate: 8.5
  },
  {
    source: 'Paid Ads',
    visitors: 300,
    percentage: 4.5,
    conversionRate: 12.3
  }
]

// Regional Performance Data
export const regionalData: RegionalData[] = [
  {
    country: 'United States',
    countryCode: 'US',
    users: 2840,
    revenue: 145000,
    orders: 580
  },
  {
    country: 'United Kingdom',
    countryCode: 'GB',
    users: 1250,
    revenue: 62500,
    orders: 245
  },
  {
    country: 'Canada',
    countryCode: 'CA',
    users: 890,
    revenue: 44500,
    orders: 178
  },
  {
    country: 'Australia',
    countryCode: 'AU',
    users: 670,
    revenue: 33500,
    orders: 134
  },
  {
    country: 'Germany',
    countryCode: 'DE',
    users: 520,
    revenue: 26000,
    orders: 104
  },
  {
    country: 'France',
    countryCode: 'FR',
    users: 480,
    revenue: 24000,
    orders: 96
  },
  {
    country: 'Netherlands',
    countryCode: 'NL',
    users: 350,
    revenue: 17500,
    orders: 70
  },
  {
    country: 'India',
    countryCode: 'IN',
    users: 320,
    revenue: 8000,
    orders: 128
  }
]

// Revenue by Category
export const revenueByCategory = [
  { category: 'Guest Posts', revenue: 125000, percentage: 43.5 },
  { category: 'Niche Edits', revenue: 78000, percentage: 27.1 },
  { category: 'Resource Links', revenue: 45000, percentage: 15.7 },
  { category: 'Directory Submissions', revenue: 25000, percentage: 8.7 },
  { category: 'Press Releases', revenue: 14500, percentage: 5.0 }
]

// Audit Performance Metrics
export const auditMetrics = {
  totalAudits: 1250,
  completedAudits: 1180,
  avgCompletionTime: 3.2, // days
  customerSatisfaction: 4.6,
  issuesFound: 8420,
  issuesResolved: 7890,
  avgIssuesPerAudit: 6.7
}
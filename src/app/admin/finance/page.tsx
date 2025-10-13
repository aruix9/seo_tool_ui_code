'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  DollarSign,
  TrendingUp,
  CreditCard,
  Download,
  Filter,
  ArrowUpRight,
  ArrowDownRight,
  Minus,
  Calendar,
  Users,
  Target,
  PiggyBank,
  Banknote,
  Receipt,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle
} from 'lucide-react'
import {
  financialSummary,
  revenueMetrics,
  recentTransactions,
  payoutSchedule,
  revenueByPeriod,
  topCustomers,
  paymentMethodsDistribution,
  financialTargets
} from '../data/financeMockData'

export default function FinancePage() {
  const [dateRange, setDateRange] = useState('30d')
  const [transactionFilter, setTransactionFilter] = useState('all')

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(amount)
  }

  // const formatNumber = (num: number) => {
  //   return new Intl.NumberFormat('en-US').format(num)
  // }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  const getTrendIcon = (trend: 'up' | 'down' | 'neutral') => {
    switch (trend) {
      case 'up':
        return <ArrowUpRight className="w-4 h-4 text-green-600" />
      case 'down':
        return <ArrowDownRight className="w-4 h-4 text-red-600" />
      default:
        return <Minus className="w-4 h-4 text-gray-600" />
    }
  }

  const getTrendColor = (trend: 'up' | 'down' | 'neutral') => {
    switch (trend) {
      case 'up':
        return 'text-green-600'
      case 'down':
        return 'text-red-600'
      default:
        return 'text-gray-600'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-600" />
      case 'pending':
        return <Clock className="w-4 h-4 text-yellow-600" />
      case 'failed':
        return <XCircle className="w-4 h-4 text-red-600" />
      case 'cancelled':
        return <XCircle className="w-4 h-4 text-gray-600" />
      default:
        return <AlertCircle className="w-4 h-4 text-gray-600" />
    }
  }

  const getStatusBadge = (status: string) => {
    const variants: { [key: string]: "default" | "secondary" | "destructive" | "outline" } = {
      completed: "default",
      pending: "secondary",
      failed: "destructive",
      cancelled: "outline"
    }
    return variants[status] || "outline"
  }

  const getTransactionTypeColor = (type: string) => {
    switch (type) {
      case 'payment':
        return 'text-green-600'
      case 'refund':
        return 'text-red-600'
      case 'payout':
        return 'text-blue-600'
      case 'fee':
        return 'text-orange-600'
      default:
        return 'text-gray-600'
    }
  }

  const filteredTransactions = recentTransactions.filter(transaction => {
    if (transactionFilter === 'all') return true
    return transaction.type === transactionFilter
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Finance Dashboard</h1>
          <p className="text-gray-600">Manage revenue, payments, and financial analytics</p>
        </div>
        
        <div className="flex items-center gap-3">
          <Select value={dateRange} onValueChange={setDateRange}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="1y">Last year</SelectItem>
            </SelectContent>
          </Select>
          
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Financial Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Available Balance</p>
                <p className="text-2xl font-bold text-green-600">
                  {formatCurrency(financialSummary.availableBalance)}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <PiggyBank className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                <p className="text-2xl font-bold text-gray-900">
                  {formatCurrency(financialSummary.totalRevenue)}
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Payouts</p>
                <p className="text-2xl font-bold text-orange-600">
                  {formatCurrency(financialSummary.pendingPayouts)}
                </p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <Banknote className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Revenue Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {revenueMetrics.map((metric, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{metric.label}</p>
                  <p className="text-xl font-bold text-gray-900">
                    {formatCurrency(metric.amount)}
                  </p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1">
                    {getTrendIcon(metric.trend)}
                    <span className={`text-sm font-medium ${getTrendColor(metric.trend)}`}>
                      {metric.change > 0 ? '+' : ''}{metric.change}%
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{metric.period}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts and Analytics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Trend */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
              Revenue Trend (12 Months)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {revenueByPeriod.slice(-6).map((data, index) => {
                const maxRevenue = Math.max(...revenueByPeriod.map(d => d.revenue))
                const percentage = (data.revenue / maxRevenue) * 100

                return (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">{data.period}</span>
                      <div className="text-right">
                        <span className="font-medium">{formatCurrency(data.revenue)}</span>
                        <p className="text-xs text-gray-500">{data.transactionCount} transactions</p>
                      </div>
                    </div>
                    <Progress value={percentage} className="h-2" />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Fees: {formatCurrency(data.fees)}</span>
                      <span>Net: {formatCurrency(data.netRevenue)}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Financial Targets */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="w-5 h-5 mr-2 text-purple-600" />
              Financial Targets
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Monthly Target</span>
                  <span className="text-sm text-gray-600">
                    {formatCurrency(financialTargets.currentMonthRevenue)} / {formatCurrency(financialTargets.monthlyRevenueTarget)}
                  </span>
                </div>
                <Progress 
                  value={(financialTargets.currentMonthRevenue / financialTargets.monthlyRevenueTarget) * 100} 
                  className="h-2"
                />
                <p className="text-xs text-gray-500 mt-1">
                  {((financialTargets.currentMonthRevenue / financialTargets.monthlyRevenueTarget) * 100).toFixed(1)}% achieved
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Quarterly Target</span>
                  <span className="text-sm text-gray-600">
                    {formatCurrency(financialTargets.currentQuarterRevenue)} / {formatCurrency(financialTargets.quarterlyTarget)}
                  </span>
                </div>
                <Progress 
                  value={(financialTargets.currentQuarterRevenue / financialTargets.quarterlyTarget) * 100} 
                  className="h-2"
                />
                <p className="text-xs text-gray-500 mt-1">
                  {((financialTargets.currentQuarterRevenue / financialTargets.quarterlyTarget) * 100).toFixed(1)}% achieved
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Annual Target</span>
                  <span className="text-sm text-gray-600">
                    {formatCurrency(financialTargets.currentAnnualRevenue)} / {formatCurrency(financialTargets.annualTarget)}
                  </span>
                </div>
                <Progress 
                  value={(financialTargets.currentAnnualRevenue / financialTargets.annualTarget) * 100} 
                  className="h-2"
                />
                <p className="text-xs text-gray-500 mt-1">
                  {((financialTargets.currentAnnualRevenue / financialTargets.annualTarget) * 100).toFixed(1)}% achieved
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Customers & Payment Methods */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Customers */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="w-5 h-5 mr-2 text-blue-600" />
              Top Customers by Revenue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topCustomers.map((customer, index) => (
                <div key={customer.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">#{index + 1}</Badge>
                      <h4 className="font-medium text-sm">{customer.name}</h4>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">{customer.email}</p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-gray-600">
                      <span>{customer.orderCount} orders</span>
                      <span>Avg: {formatCurrency(customer.averageOrderValue)}</span>
                      <span>Last: {formatDate(customer.lastOrderDate)}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-sm">{formatCurrency(customer.totalSpent)}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Payment Methods */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CreditCard className="w-5 h-5 mr-2 text-indigo-600" />
              Payment Methods Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {paymentMethodsDistribution.map((method, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{method.method}</span>
                    <div className="text-right">
                      <span className="text-sm font-semibold">{formatCurrency(method.revenue)}</span>
                      <p className="text-xs text-gray-500">{method.count} transactions</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress value={method.percentage} className="flex-1 h-2" />
                    <span className="text-xs text-gray-500 w-12">{method.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Payout Schedule */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="w-5 h-5 mr-2 text-green-600" />
            Payout Schedule
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {payoutSchedule.map((payout) => (
              <div key={payout.id} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant={getStatusBadge(payout.status)}>
                    {payout.status}
                  </Badge>
                  <span className="text-xs text-gray-500">{formatDate(payout.scheduledDate)}</span>
                </div>
                <p className="text-lg font-semibold">{formatCurrency(payout.amount)}</p>
                <p className="text-sm text-gray-600">Bank: {payout.bankAccount}</p>
                <p className="text-xs text-gray-500 mt-1">{payout.transactionCount} transactions</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center">
              <Receipt className="w-5 h-5 mr-2 text-gray-600" />
              Recent Transactions
            </CardTitle>
            <Select value={transactionFilter} onValueChange={setTransactionFilter}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="payment">Payments</SelectItem>
                <SelectItem value="refund">Refunds</SelectItem>
                <SelectItem value="payout">Payouts</SelectItem>
                <SelectItem value="fee">Fees</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Transaction ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Payment Method</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Net Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTransactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell className="font-mono text-sm">
                      {transaction.transactionId}
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium text-sm">{transaction.customer.name}</p>
                        <p className="text-xs text-gray-600">{transaction.customer.email}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className={getTransactionTypeColor(transaction.type)}>
                        {transaction.type}
                      </Badge>
                    </TableCell>
                    <TableCell className={`font-semibold ${transaction.amount < 0 ? 'text-red-600' : 'text-green-600'}`}>
                      {formatCurrency(transaction.amount)}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {getStatusIcon(transaction.status)}
                        <Badge variant={getStatusBadge(transaction.status)}>
                          {transaction.status}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        {transaction.paymentMethod.type}
                        {transaction.paymentMethod.last4 && (
                          <span className="text-gray-500">
                            {' '}•••• {transaction.paymentMethod.last4}
                          </span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="text-sm">
                      {formatDate(transaction.createdAt)}
                    </TableCell>
                    <TableCell className="font-semibold">
                      {formatCurrency(transaction.netAmount)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
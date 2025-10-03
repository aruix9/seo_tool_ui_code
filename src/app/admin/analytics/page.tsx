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
  BarChart3,
  TrendingUp,
  TrendingDown,
  Users,
  DollarSign,
  ShoppingCart,
  Search,
  Globe,
  Calendar,
  Download,
  Filter,
  ArrowUpRight,
  ArrowDownRight,
  Minus
} from 'lucide-react'
import {
  keyMetrics,
  chartData,
  topProducts,
  userActivityData,
  trafficSources,
  regionalData,
  revenueByCategory,
  auditMetrics
} from '../data/analyticsMockData'

export default function AnalyticsPage() {
  const [dateRange, setDateRange] = useState('30d')
  const [chartType, setChartType] = useState('revenue')

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num)
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

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="text-gray-600">Track performance metrics and business insights</p>
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

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {keyMetrics.map((metric, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{metric.label}</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {metric.label.includes('Revenue') || metric.label.includes('Value') 
                      ? formatCurrency(metric.value)
                      : metric.label.includes('Rate') || metric.label.includes('Satisfaction')
                      ? `${metric.value}${metric.label.includes('Rate') ? '%' : '/5'}`
                      : formatNumber(metric.value)
                    }
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

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Trend Chart */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
                Performance Trends
              </CardTitle>
              <Select value={chartType} onValueChange={setChartType}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="revenue">Revenue</SelectItem>
                  <SelectItem value="orders">Orders</SelectItem>
                  <SelectItem value="users">Users</SelectItem>
                  <SelectItem value="audits">Audits</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {chartData.slice(-6).map((data, index) => {
                const value = chartType === 'revenue' ? data.revenue :
                            chartType === 'orders' ? data.orders :
                            chartType === 'users' ? data.users : data.audits
                const maxValue = Math.max(...chartData.map(d => 
                  chartType === 'revenue' ? d.revenue :
                  chartType === 'orders' ? d.orders :
                  chartType === 'users' ? d.users : d.audits
                ))
                const percentage = (value / maxValue) * 100

                return (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">{data.date}</span>
                      <span className="font-medium">
                        {chartType === 'revenue' ? formatCurrency(value) : formatNumber(value)}
                      </span>
                    </div>
                    <Progress value={percentage} className="h-2" />
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Top Products */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
              Top Performing Products
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={product.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">#{index + 1}</Badge>
                      <h4 className="font-medium text-sm">{product.name}</h4>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">{product.domain}</p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-gray-600">
                      <span>{product.sales} sales</span>
                      <span>{product.conversionRate}% CVR</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-sm">{formatCurrency(product.revenue)}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Traffic Sources & Regional Data */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Traffic Sources */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Globe className="w-5 h-5 mr-2 text-purple-600" />
              Traffic Sources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {trafficSources.map((source, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{source.source}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">{source.conversionRate}% CVR</span>
                      <span className="text-sm font-semibold">{formatNumber(source.visitors)}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress value={source.percentage} className="flex-1 h-2" />
                    <span className="text-xs text-gray-500 w-12">{source.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Regional Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Globe className="w-5 h-5 mr-2 text-indigo-600" />
              Regional Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {regionalData.slice(0, 6).map((region, index) => (
                <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-4 bg-gray-200 rounded text-xs flex items-center justify-center font-semibold">
                      {region.countryCode}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{region.country}</p>
                      <p className="text-xs text-gray-600">{formatNumber(region.users)} users</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold">{formatCurrency(region.revenue)}</p>
                    <p className="text-xs text-gray-600">{region.orders} orders</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Revenue by Category & Audit Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue by Category */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <DollarSign className="w-5 h-5 mr-2 text-green-600" />
              Revenue by Category
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {revenueByCategory.map((category, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{category.category}</span>
                    <span className="text-sm font-semibold">{formatCurrency(category.revenue)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress value={category.percentage} className="flex-1 h-2" />
                    <span className="text-xs text-gray-500 w-12">{category.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Audit Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Search className="w-5 h-5 mr-2 text-orange-600" />
              Audit Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <p className="text-2xl font-bold text-blue-600">{formatNumber(auditMetrics.totalAudits)}</p>
                <p className="text-sm text-gray-600">Total Audits</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <p className="text-2xl font-bold text-green-600">{formatNumber(auditMetrics.completedAudits)}</p>
                <p className="text-sm text-gray-600">Completed</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <p className="text-2xl font-bold text-purple-600">{auditMetrics.avgCompletionTime}d</p>
                <p className="text-sm text-gray-600">Avg Completion</p>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <p className="text-2xl font-bold text-yellow-600">{auditMetrics.customerSatisfaction}/5</p>
                <p className="text-sm text-gray-600">Satisfaction</p>
              </div>
            </div>
            
            <div className="mt-4 space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">Issues Found</span>
                <span className="font-semibold">{formatNumber(auditMetrics.issuesFound)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Issues Resolved</span>
                <span className="font-semibold">{formatNumber(auditMetrics.issuesResolved)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Avg Issues per Audit</span>
                <span className="font-semibold">{auditMetrics.avgIssuesPerAudit}</span>
              </div>
              <div className="mt-2">
                <div className="flex justify-between text-sm mb-1">
                  <span>Resolution Rate</span>
                  <span>{((auditMetrics.issuesResolved / auditMetrics.issuesFound) * 100).toFixed(1)}%</span>
                </div>
                <Progress value={(auditMetrics.issuesResolved / auditMetrics.issuesFound) * 100} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="w-5 h-5 mr-2 text-gray-600" />
            Recent Activity Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <p className="text-lg font-semibold">{formatNumber(userActivityData.reduce((sum, day) => sum + day.newUsers, 0))}</p>
              <p className="text-sm text-gray-600">New Users (7 days)</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <ShoppingCart className="w-8 h-8 text-green-600" />
              </div>
              <p className="text-lg font-semibold">{formatNumber(chartData[chartData.length - 1].orders)}</p>
              <p className="text-sm text-gray-600">Orders This Month</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Search className="w-8 h-8 text-purple-600" />
              </div>
              <p className="text-lg font-semibold">{formatNumber(chartData[chartData.length - 1].audits)}</p>
              <p className="text-sm text-gray-600">Audits Completed</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
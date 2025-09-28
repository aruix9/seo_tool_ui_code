import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { LucideIcon, TrendingUp, TrendingDown, Minus } from 'lucide-react'

interface StatsCardProps {
  title: string
  value: string | number
  change?: number
  changeText?: string
  icon: LucideIcon
  iconColor?: string
  trend?: 'up' | 'down' | 'neutral'
  className?: string
}

export default function StatsCard({
  title,
  value,
  change,
  changeText,
  icon: Icon,
  iconColor = 'text-purple-600',
  trend,
  className
}: StatsCardProps) {
  const getTrendIcon = () => {
    if (trend === 'up' || (change && change > 0)) return TrendingUp
    if (trend === 'down' || (change && change < 0)) return TrendingDown
    return Minus
  }

  const getTrendColor = () => {
    if (trend === 'up' || (change && change > 0)) return 'text-green-600'
    if (trend === 'down' || (change && change < 0)) return 'text-red-600'
    return 'text-gray-600'
  }

  const formatChange = () => {
    if (changeText) return changeText
    if (change !== undefined) {
      const sign = change > 0 ? '+' : ''
      return `${sign}${change.toFixed(1)}%`
    }
    return ''
  }

  const TrendIcon = getTrendIcon()

  return (
    <Card className={cn('hover:shadow-md transition-shadow', className)}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
            <div className="flex items-baseline space-x-2">
              <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
              {(change !== undefined || changeText) && (
                <div className={cn('flex items-center space-x-1 text-sm', getTrendColor())}>
                  <TrendIcon className="w-4 h-4" />
                  <span>{formatChange()}</span>
                </div>
              )}
            </div>
          </div>
          <div className={cn('p-3 rounded-full bg-gray-50', iconColor)}>
            <Icon className="w-6 h-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
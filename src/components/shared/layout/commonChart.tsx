'use client'

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'

import { ChartConfig, ChartContainer } from '@/components/ui/chart'

const chartData = [
  { month: 'January', desktop: 186 },
  { month: 'February', desktop: 305 },
  { month: 'March', desktop: 237 },
  { month: 'April', desktop: 73 },
  { month: 'May', desktop: 209 },
  { month: 'June', desktop: 214 },
]

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: '#ad46ff',
  },
} satisfies ChartConfig

const CommonChart = () => {
  return (
    <ChartContainer config={chartConfig} className='h-[300px] w-full'>
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey='month'
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis tickLine={false} axisLine={false} />
        <Bar dataKey='desktop' fill='var(--color-desktop)' radius={4} />
      </BarChart>
    </ChartContainer>
  )
}

export default CommonChart

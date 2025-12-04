import React from 'react'

import { CartesianGrid, LabelList, Line, LineChart, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartConfig = { 
  backlinks: {
    label: "Backlinks",
    color: "#8B5CF6",
  },
} satisfies ChartConfig

// 💜 Purple theme colors
  const colors = {
    chart1: "#A78BFA",
    chart2: "#8B5CF6",
    chart3: "#7C3AED",
    chart4: "#6D28D9",
    chart5: "#581C87",
  };

   const formatNumber = (num: number) =>
    num.toLocaleString("en-IN");

const SummaryLineChart = ({summaryData}) => {
  return (
    <Card className="flex flex-col gap-2 col-span-2">
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <LineChart
          accessibilityLayer
            data={summaryData}
            margin={{
              left: 12,
              right: 54,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis
              dataKey="target"
              tick={{ fontSize: 12 }}
            />
            <YAxis tick={{ fontSize: 12 }} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey={'backlinks'}
              name={'Backlinks - '}
              type="monotone"
              strokeWidth={2}
              stroke={colors.chart1}
              dot={{fill: colors.chart1}}
              activeDot={{r: 6,}}
            />
            <Line
              dataKey={'dofollow_backlinks'}
              name={'Dofollow - '}
              type="monotone"
              strokeWidth={2}
              stroke={colors.chart2}
              dot={{fill: colors.chart2}}
              activeDot={{r: 6,}}
            />
            <Line
              dataKey={'nofollow_backlinks'}
              name={'Nofollow - '}
              type="monotone"
              strokeWidth={2}
              stroke={colors.chart3}
              dot={{fill: colors.chart3}}
              activeDot={{r: 6,}}
            />
            <Line
              dataKey={'refdomains'}
              name={'Refdomains - '}
              type="monotone"
              strokeWidth={2}
              stroke={colors.chart3}
              dot={{fill: colors.chart4}}
              activeDot={{r: 6,}}
            />
            <Line
              dataKey={'dofollow_refdomains'}
              name={'Dofollow Ref. - '}
              type="monotone"
              strokeWidth={2}
              stroke={colors.chart3}
              dot={{fill: colors.chart5}}
              activeDot={{r: 6,}}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex justify-between items-start gap-2 text-sm">
        {/* <div className="flex flex-col grow justify-between">
          <span>Backlinks - <b>{summaryData?.backlinks.toLocaleString("en-IN")}</b></span>
          <span>Dofollow - <b>{summaryData?.dofollow_backlinks.toLocaleString("en-IN")}</b></span>
          <span>Nofollow - <b>{summaryData?.nofollow_backlinks.toLocaleString("en-IN")}</b></span>
        </div>
        <div className="flex flex-col grow justify-between">
          <span>Anchors - <b>{summaryData?.anchors.toLocaleString("en-IN")}</b></span>
          <span>Refdomains - <b>{summaryData?.refdomains.toLocaleString("en-IN")}</b></span>
          <span>Inlink Rank - <b>{summaryData?.inlink_rank.toLocaleString("en-IN")}</b></span>
        </div> */}
      </CardFooter>
    </Card>
  )
}

export default SummaryLineChart
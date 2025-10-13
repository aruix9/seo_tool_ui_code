import React from 'react'

import { TrendingUp } from "lucide-react"
import { Cell, LabelList, Pie, PieChart } from "recharts"

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

interface DataObj {
  anchors: number;
  dofollow_anchors: number;
  dofollow_refdomains: number;
  refdomains: number;
  target: string;
  backlinks: number;
  [key: string]: any;
  // possibly other fields
}

interface PieChartProps {
  summaryData: DataObj[];
  typeColor: string
  typeName: string
  type: string
}

const SummaryPieChart = ({summaryData, type, typeName, typeColor}: PieChartProps) => {
  console.log(summaryData)
  // 💜 Purple theme colors
  const colors = ["#A78BFA", "#8B5CF6", "#7C3AED", "#6D28D9", "#581C87"];

const chartConfig = {
  [type]: {
    label: typeName,
    color: typeColor,
  }
} satisfies ChartConfig

 // Helper to generate chart data for a specific metric
  const getChartData = (metric: keyof DataObj) =>
    summaryData.map((item, index) => ({
      name: item.target,
      value: item[metric] as number,
      fill: colors[index % colors.length],
    }));
  return (
    <Card className="flex flex-col gap-2">
      <CardHeader className="items-center pb-0">
        <CardTitle>{`${typeName}`}</CardTitle>
        <CardDescription>{summaryData[0].target + ' - ' + summaryData[0][type].toLocaleString("en-IN")}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel formatter={(value, name) => <>{name} - <b>{new Intl.NumberFormat("en-IN").format(Number(value))}</b></>} />}
            />
            <Pie
              data={getChartData(type)}
              dataKey="value"
              nameKey="name"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter className="flex justify-between items-start gap-2 text-sm">
        <div className="flex flex-col grow justify-between">
          <span>Backlinks - <b>{summaryData?.backlinks.toLocaleString("en-IN")}</b></span>
          <span>Dofollow - <b>{summaryData?.dofollow_backlinks.toLocaleString("en-IN")}</b></span>
          <span>Nofollow - <b>{summaryData?.nofollow_backlinks.toLocaleString("en-IN")}</b></span>
        </div>
        <div className="flex flex-col grow justify-between">
          <span>Anchors - <b>{summaryData?.anchors.toLocaleString("en-IN")}</b></span>
          <span>Refdomains - <b>{summaryData?.refdomains.toLocaleString("en-IN")}</b></span>
          <span>Inlink Rank - <b>{summaryData?.inlink_rank.toLocaleString("en-IN")}</b></span>
        </div>
      </CardFooter> */}
    </Card>
  )
}

export default SummaryPieChart
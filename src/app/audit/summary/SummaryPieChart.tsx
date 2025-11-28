import React from 'react'

import { Pie, PieChart } from "recharts"

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
  backlinks: number;
  refdomains: number;
  anchors: number;
  dofollow_anchors: number;
  dofollow_refdomains: number;
  target: string;
  [key: string]: any;
  // possibly other fields
}

interface PieChartProps {
  summaryData: DataObj[];
  typeName: string
  type: string
}

const SummaryPieChart = ({summaryData, type, typeName}: PieChartProps) => {
  const colors = ["#030712", "#6a994e", "#003049", "#d62828", "#7b2cbf", "#669bbc"];

  const chartConfig = {
    [type]: {
      label: typeName,
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
    <Card className="flex flex-col gap-2 grow">
      <CardHeader className="items-center pb-0">
        <CardTitle className='capitalize'>{type.replace("_", ' ')}</CardTitle>
        <CardDescription>{summaryData[0].target}</CardDescription>
        <h2 className='text-2xl font-bold'>{summaryData[0][type].toLocaleString("en-IN")}</h2>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto w-full my-4 w-full max-h-[300px] overflow-visible auditSummary"
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
              label={({value}) => new Intl.NumberFormat("en-IN").format(Number(value))}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex flex-col items-stretch">
        {
          summaryData.map((item, index) => {
            return (
              index> 0 && <div className="flex justify-between grow">
                <span><span className='w-3 h-3 inline-block rounded-full mr-2' style={{backgroundColor: colors[index]}}></span>{item.target}</span><span>{new Intl.NumberFormat("en-IN").format(Number(item[type]))}</span>
              </div>
            )})
        }
      </CardFooter>
    </Card>
  )
}

export default SummaryPieChart
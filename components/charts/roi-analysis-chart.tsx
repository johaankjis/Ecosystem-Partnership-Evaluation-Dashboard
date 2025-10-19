"use client"

import { Area, AreaChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { month: "Jan", investment: 45, returns: 12 },
  { month: "Feb", investment: 52, returns: 28 },
  { month: "Mar", investment: 48, returns: 42 },
  { month: "Apr", investment: 61, returns: 58 },
  { month: "May", investment: 55, returns: 72 },
  { month: "Jun", investment: 67, returns: 88 },
]

export function ROIAnalysisChart() {
  return (
    <ChartContainer
      config={{
        investment: {
          label: "Investment",
          color: "hsl(var(--chart-5))",
        },
        returns: {
          label: "Returns",
          color: "hsl(var(--chart-4))",
        },
      }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
          <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Area
            type="monotone"
            dataKey="investment"
            stackId="1"
            stroke="hsl(var(--chart-5))"
            fill="hsl(var(--chart-5))"
            fillOpacity={0.6}
          />
          <Area
            type="monotone"
            dataKey="returns"
            stackId="2"
            stroke="hsl(var(--chart-4))"
            fill="hsl(var(--chart-4))"
            fillOpacity={0.6}
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

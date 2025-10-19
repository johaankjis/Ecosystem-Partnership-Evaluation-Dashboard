"use client"

import { Line, LineChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { month: "Jan", amount: 45 },
  { month: "Feb", amount: 52 },
  { month: "Mar", amount: 48 },
  { month: "Apr", amount: 61 },
  { month: "May", amount: 55 },
  { month: "Jun", amount: 67 },
  { month: "Jul", amount: 72 },
  { month: "Aug", amount: 68 },
]

export function InvestmentTrendChart() {
  return (
    <ChartContainer
      config={{
        amount: {
          label: "Investment ($K)",
          color: "hsl(var(--chart-1))",
        },
      }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
          <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line
            type="monotone"
            dataKey="amount"
            stroke="hsl(var(--chart-1))"
            strokeWidth={2}
            dot={{ fill: "hsl(var(--chart-1))" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

"use client"

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { metric: "AI Compatibility", value: 95 },
  { metric: "SoC Integration", value: 88 },
  { metric: "API Support", value: 92 },
  { metric: "Performance", value: 90 },
  { metric: "Scalability", value: 85 },
  { metric: "Documentation", value: 87 },
]

export function TechnicalFitChart() {
  return (
    <ChartContainer
      config={{
        value: {
          label: "Score",
          color: "hsl(var(--chart-2))",
        },
      }}
      className="h-[400px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data}>
          <PolarGrid stroke="hsl(var(--border))" />
          <PolarAngleAxis dataKey="metric" stroke="hsl(var(--muted-foreground))" fontSize={12} />
          <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="hsl(var(--muted-foreground))" fontSize={12} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Radar
            name="Technical Fit"
            dataKey="value"
            stroke="hsl(var(--chart-2))"
            fill="hsl(var(--chart-2))"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

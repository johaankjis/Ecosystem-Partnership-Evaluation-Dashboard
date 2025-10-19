import { Card } from "@/components/ui/card"
import { TrendingUp, TrendingDown, DollarSign, Users, Target, Zap } from "lucide-react"

const stats = [
  {
    label: "Total Partners Evaluated",
    value: "52",
    change: "+8",
    trend: "up",
    icon: Users,
  },
  {
    label: "Investment Decisions",
    value: "$520K",
    change: "+12%",
    trend: "up",
    icon: DollarSign,
  },
  {
    label: "Avg. Evaluation Time",
    value: "4.2 days",
    change: "-35%",
    trend: "down",
    icon: Zap,
  },
  {
    label: "High-Priority Partners",
    value: "18",
    change: "+3",
    trend: "up",
    icon: Target,
  },
]

export function PartnerOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        const TrendIcon = stat.trend === "up" ? TrendingUp : TrendingDown
        const trendColor = stat.trend === "up" ? "text-chart-4" : "text-chart-1"

        return (
          <Card key={stat.label} className="p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                <div className="flex items-center gap-1">
                  <TrendIcon className={`h-4 w-4 ${trendColor}`} />
                  <span className={`text-sm font-medium ${trendColor}`}>{stat.change}</span>
                  <span className="text-sm text-muted-foreground">vs last month</span>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-primary/10">
                <Icon className="h-6 w-6 text-primary" />
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}

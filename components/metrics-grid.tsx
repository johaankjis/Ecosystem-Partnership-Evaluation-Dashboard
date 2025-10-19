"use client"

import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PartnerScoreChart } from "@/components/charts/partner-score-chart"
import { ROIAnalysisChart } from "@/components/charts/roi-analysis-chart"
import { TechnicalFitChart } from "@/components/charts/technical-fit-chart"
import { InvestmentTrendChart } from "@/components/charts/investment-trend-chart"

export function MetricsGrid() {
  return (
    <div className="space-y-4">
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="bg-muted">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="technical">Technical Metrics</TabsTrigger>
          <TabsTrigger value="business">Business Metrics</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4 mt-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Partner Score Distribution</h3>
              <PartnerScoreChart />
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-foreground">ROI Analysis</h3>
              <ROIAnalysisChart />
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="technical" className="space-y-4 mt-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Technical Compatibility Matrix</h3>
            <TechnicalFitChart />
          </Card>
        </TabsContent>

        <TabsContent value="business" className="space-y-4 mt-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Market Reach & Revenue Potential</h3>
            <ROIAnalysisChart />
          </Card>
        </TabsContent>

        <TabsContent value="trends" className="space-y-4 mt-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Investment Trends Over Time</h3>
            <InvestmentTrendChart />
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

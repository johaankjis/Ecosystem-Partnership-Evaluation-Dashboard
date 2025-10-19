"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { FileText, Download, TrendingUp, Cpu, DollarSign, Users } from "lucide-react"

interface Partner {
  id: number
  name: string
  category: string
  score: number
  technicalFit: number
  marketReach: number
  roi: string
  status: string
  investment: string
  compatibility: string[]
}

interface PartnerDetailDialogProps {
  partner: Partner | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function PartnerDetailDialog({ partner, open, onOpenChange }: PartnerDetailDialogProps) {
  if (!partner) return null

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved":
        return "bg-chart-4/20 text-chart-4 border-chart-4/30"
      case "Recommended":
        return "bg-chart-2/20 text-chart-2 border-chart-2/30"
      case "Under Review":
        return "bg-chart-5/20 text-chart-5 border-chart-5/30"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div>
              <DialogTitle className="text-2xl mb-2">{partner.name}</DialogTitle>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className={getStatusColor(partner.status)}>
                  {partner.status}
                </Badge>
                <span className="text-sm text-muted-foreground">{partner.category}</span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button size="sm">
                <FileText className="h-4 w-4 mr-2" />
                Generate Memo
              </Button>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          <div className="grid grid-cols-4 gap-4">
            <Card className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">Overall Score</span>
              </div>
              <p className="text-3xl font-bold text-foreground">{partner.score}</p>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Cpu className="h-4 w-4 text-chart-2" />
                <span className="text-sm text-muted-foreground">Technical Fit</span>
              </div>
              <p className="text-3xl font-bold text-foreground">{partner.technicalFit}%</p>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Users className="h-4 w-4 text-chart-5" />
                <span className="text-sm text-muted-foreground">Market Reach</span>
              </div>
              <p className="text-3xl font-bold text-foreground">{partner.marketReach}%</p>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="h-4 w-4 text-chart-4" />
                <span className="text-sm text-muted-foreground">Investment</span>
              </div>
              <p className="text-2xl font-bold text-foreground">{partner.investment}</p>
            </Card>
          </div>

          <Tabs defaultValue="technical" className="w-full">
            <TabsList className="bg-muted">
              <TabsTrigger value="technical">Technical Analysis</TabsTrigger>
              <TabsTrigger value="business">Business Metrics</TabsTrigger>
              <TabsTrigger value="memo">Investment Memo</TabsTrigger>
            </TabsList>

            <TabsContent value="technical" className="space-y-4 mt-4">
              <Card className="p-6">
                <h3 className="font-semibold mb-4 text-foreground">Platform Compatibility</h3>
                <div className="space-y-3">
                  {partner.compatibility.map((platform) => (
                    <div key={platform} className="flex items-center justify-between p-3 rounded-lg bg-accent/50">
                      <span className="text-sm font-medium text-foreground">{platform}</span>
                      <Badge variant="outline" className="bg-chart-4/20 text-chart-4 border-chart-4/30">
                        Compatible
                      </Badge>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-4 text-foreground">Technical Metrics</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-muted-foreground">AI Model Performance</span>
                      <span className="text-sm font-medium text-foreground">94%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-chart-2" style={{ width: "94%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-muted-foreground">SoC Integration</span>
                      <span className="text-sm font-medium text-foreground">91%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-chart-2" style={{ width: "91%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-muted-foreground">API Compatibility</span>
                      <span className="text-sm font-medium text-foreground">88%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-chart-2" style={{ width: "88%" }} />
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="business" className="space-y-4 mt-4">
              <Card className="p-6">
                <h3 className="font-semibold mb-4 text-foreground">Market Analysis</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Target Market Size</p>
                    <p className="text-2xl font-bold text-foreground">$2.4B</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Expected Growth</p>
                    <p className="text-2xl font-bold text-chart-4">+42%</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Customer Base</p>
                    <p className="text-2xl font-bold text-foreground">850K+</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Revenue Potential</p>
                    <p className="text-2xl font-bold text-chart-4">$180K/yr</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-4 text-foreground">ROI Projection</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Year 1 Return</span>
                    <span className="text-lg font-semibold text-foreground">$95K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Year 2 Return</span>
                    <span className="text-lg font-semibold text-foreground">$180K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Break-even Period</span>
                    <span className="text-lg font-semibold text-chart-4">11 months</span>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="memo" className="space-y-4 mt-4">
              <Card className="p-6">
                <h3 className="font-semibold mb-4 text-foreground">Executive Summary</h3>
                <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
                  <p>
                    <strong className="text-foreground">{partner.name}</strong> presents a compelling partnership
                    opportunity for Qualcomm's AI platform ecosystem. With an overall evaluation score of{" "}
                    <strong className="text-foreground">{partner.score}/100</strong>, this partner demonstrates strong
                    technical compatibility and significant market potential.
                  </p>
                  <p>
                    <strong className="text-foreground">Technical Fit ({partner.technicalFit}%):</strong> The partner's
                    technology stack shows excellent compatibility with Qualcomm's Snapdragon platform, particularly in
                    AI acceleration and edge computing capabilities. Integration complexity is assessed as
                    low-to-moderate.
                  </p>
                  <p>
                    <strong className="text-foreground">Market Opportunity ({partner.marketReach}%):</strong> Target
                    market analysis indicates strong growth potential with an addressable market of $2.4B and projected
                    42% YoY growth. The partner's existing customer base of 850K+ users provides immediate market
                    access.
                  </p>
                  <p>
                    <strong className="text-foreground">Investment Recommendation:</strong> Based on comprehensive
                    technical and business analysis, we recommend proceeding with a {partner.investment} strategic
                    investment. Projected ROI indicates break-even within 11 months with strong revenue potential
                    thereafter.
                  </p>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  )
}

"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, FileText } from "lucide-react"
import { PartnerDetailDialog } from "@/components/partner-detail-dialog"

const partners = [
  {
    id: 1,
    name: "NeuralTech AI",
    category: "AI/ML Platform",
    score: 92,
    technicalFit: 95,
    marketReach: 88,
    roi: "High",
    status: "Recommended",
    investment: "$85K",
    compatibility: ["Snapdragon 8 Gen 3", "AI Engine 2.0"],
  },
  {
    id: 2,
    name: "EdgeCompute Systems",
    category: "Edge Computing",
    score: 88,
    technicalFit: 90,
    marketReach: 85,
    roi: "High",
    status: "Under Review",
    investment: "$120K",
    compatibility: ["Snapdragon 8 Gen 2", "AI Engine 1.5"],
  },
  {
    id: 3,
    name: "VisionCore Labs",
    category: "Computer Vision",
    score: 85,
    technicalFit: 88,
    marketReach: 82,
    roi: "Medium",
    status: "Recommended",
    investment: "$65K",
    compatibility: ["Snapdragon 8 Gen 3", "Hexagon NPU"],
  },
  {
    id: 4,
    name: "AutoDrive Intelligence",
    category: "Automotive AI",
    score: 91,
    technicalFit: 93,
    marketReach: 89,
    roi: "High",
    status: "Approved",
    investment: "$150K",
    compatibility: ["Snapdragon Ride", "AI Engine 2.0"],
  },
  {
    id: 5,
    name: "CloudML Partners",
    category: "Cloud Infrastructure",
    score: 78,
    technicalFit: 75,
    marketReach: 80,
    roi: "Medium",
    status: "Under Review",
    investment: "$45K",
    compatibility: ["Snapdragon 8 Gen 2"],
  },
  {
    id: 6,
    name: "SmartDevice Innovations",
    category: "IoT Platform",
    score: 82,
    technicalFit: 85,
    marketReach: 78,
    roi: "Medium",
    status: "Recommended",
    investment: "$55K",
    compatibility: ["Snapdragon 7 Gen 1", "AI Engine 1.5"],
  },
]

export function PartnerList() {
  const [selectedPartner, setSelectedPartner] = useState<(typeof partners)[0] | null>(null)

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

  const getROIColor = (roi: string) => {
    switch (roi) {
      case "High":
        return "text-chart-4"
      case "Medium":
        return "text-chart-5"
      case "Low":
        return "text-muted-foreground"
      default:
        return "text-muted-foreground"
    }
  }

  return (
    <>
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-foreground">Partner Evaluations</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <FileText className="h-4 w-4 mr-2" />
              Export Report
            </Button>
            <Button size="sm">Add Partner</Button>
          </div>
        </div>

        <div className="space-y-3">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors cursor-pointer"
              onClick={() => setSelectedPartner(partner)}
            >
              <div className="flex items-center gap-4 flex-1">
                <div className="flex flex-col items-center justify-center w-16 h-16 rounded-lg bg-primary/10">
                  <span className="text-2xl font-bold text-primary">{partner.score}</span>
                  <span className="text-xs text-muted-foreground">Score</span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-foreground">{partner.name}</h3>
                    <Badge variant="outline" className={getStatusColor(partner.status)}>
                      {partner.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{partner.category}</p>
                  <div className="flex gap-4 text-sm">
                    <span className="text-muted-foreground">
                      Technical Fit: <span className="text-foreground font-medium">{partner.technicalFit}%</span>
                    </span>
                    <span className="text-muted-foreground">
                      Market Reach: <span className="text-foreground font-medium">{partner.marketReach}%</span>
                    </span>
                    <span className="text-muted-foreground">
                      ROI: <span className={`font-medium ${getROIColor(partner.roi)}`}>{partner.roi}</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Investment</p>
                  <p className="text-lg font-semibold text-foreground">{partner.investment}</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <PartnerDetailDialog
        partner={selectedPartner}
        open={!!selectedPartner}
        onOpenChange={(open) => !open && setSelectedPartner(null)}
      />
    </>
  )
}

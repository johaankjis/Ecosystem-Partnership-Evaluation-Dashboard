import { DashboardHeader } from "@/components/dashboard-header"
import { PartnerOverview } from "@/components/partner-overview"
import { MetricsGrid } from "@/components/metrics-grid"
import { PartnerList } from "@/components/partner-list"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="container mx-auto px-4 py-6 space-y-6">
        <PartnerOverview />
        <MetricsGrid />
        <PartnerList />
      </main>
    </div>
  )
}

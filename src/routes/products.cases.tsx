import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { ProductPage } from "@/components/site/ProductPage";
import { DashboardMockup } from "@/components/site/DashboardMockup";
import { FileText } from "lucide-react";

export const Route = createFileRoute("/products/cases")({
  head: () => ({
    meta: [
      { title: "Bankxio Cases — Unified operational case management" },
      { name: "description", content: "Manage every KYC exception, transaction alert, dispute and complaint from a single operational workspace." },
      { property: "og:title", content: "Bankxio Cases — Unified operational case management" },
      { property: "og:description", content: "One queue for every operational case. Assign, investigate and resolve without switching systems." },
    ],
  }),
  component: Page,
});

function CaseHero() {
  return (
    <div className="rounded-2xl bg-white border border-[color:var(--color-hairline)] shadow-[0_30px_80px_rgba(0,55,112,0.12)] p-5">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-7 h-7 rounded-md bg-[color:var(--color-brand-primary-subdued)] flex items-center justify-center">
          <FileText className="w-3.5 h-3.5 text-[color:var(--color-brand-primary-deep)]" />
        </span>
        <span className="text-[13px] text-[color:var(--color-ink)]">Case queue · Compliance</span>
        <span className="ml-auto text-[10px] tnum text-[color:var(--color-ink-mute)]">142 open</span>
      </div>
      <div className="space-y-2">
        {[
          { id: "#3241", t: "KYC Exception", a: "€ 12,400.00", tone: "indigo", s: "Under review" },
          { id: "#3240", t: "Transaction Alert", a: "€ 84,220.00", tone: "ruby", s: "High priority" },
          { id: "#3239", t: "Customer Dispute", a: "€ 1,940.00", tone: "magenta", s: "Escalated" },
          { id: "#3238", t: "Complaint", a: "€ 320.00", tone: "green", s: "Resolved" },
        ].map((r) => (
          <div key={r.id} className="flex items-center gap-3 p-3 rounded-lg border border-[color:var(--color-hairline)]">
            <span className="text-[11px] tnum text-[color:var(--color-ink-mute)] w-12">{r.id}</span>
            <span className="text-[13px] text-[color:var(--color-ink)] flex-1">{r.t}</span>
            <span className="text-[12px] tnum text-[color:var(--color-ink)]">{r.a}</span>
            <span
              className={`text-[10px] px-2 py-0.5 rounded-full ${
                r.tone === "indigo" ? "bg-[#eeeafd] text-[#533afd]" : r.tone === "ruby" ? "bg-[#fde8ee] text-[#ea2261]" : r.tone === "magenta" ? "bg-[#fee6fc] text-[#c634bd]" : "bg-[#e6f7ec] text-[#16a34a]"
              }`}
            >
              {r.s}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Page() {
  return (
    <SiteShell>
      <ProductPage
        eyebrow="Bankxio Cases"
        title="Every operational case, one workspace."
        description="Track KYC exceptions, transaction alerts, disputes, complaints and investigations from a single unified queue — with the full timeline, evidence and decisions in one place."
        heroVisual={<CaseHero />}
        overviewTitle="A single operational queue built for financial teams."
        overviewBody="Bankxio Cases replaces the tangle of spreadsheets, shared inboxes and ticketing tools with one purpose-built workspace. Assign work, collaborate across compliance, fraud and support teams, and keep a complete audit-ready record of every decision."
        features={[
          { title: "Unified case queue", body: "One inbox for KYC, AML, disputes, complaints and internal investigations." },
          { title: "Smart assignment", body: "Route cases automatically based on skill, workload and priority." },
          { title: "Timeline history", body: "Every action, comment and decision preserved as an audit trail." },
          { title: "Rich case objects", body: "Attach transactions, documents, customers and communications to a single case." },
          { title: "Cross-team collaboration", body: "Compliance, fraud and support work from the same case without email chains." },
          { title: "Search & filter", body: "Find any case by customer, amount, rule or free-text search in milliseconds." },
        ]}
        benefits={[
          "Cut context switching between compliance, fraud and support tools.",
          "Reduce time-to-decision with a single canonical case record.",
          "Onboard new operations hires 3x faster with a consistent workspace.",
          "Produce audit exports on demand from complete case histories.",
        ]}
        faqs={[
          { q: "Which case types are supported?", a: "KYC exceptions, transaction alerts, customer disputes, complaints, chargebacks and internal investigations — with custom types available." },
          { q: "Can multiple teams work on the same case?", a: "Yes. Cases support shared ownership across compliance, fraud, support and legal teams with granular permissions." },
          { q: "Is Bankxio Cases suitable for regulated institutions?", a: "Yes. Every action is logged with actor, timestamp and reason. Exports are audit-ready." },
          { q: "Can I import existing case history?", a: "Yes. We provide CSV and API-based import from legacy tools and spreadsheets." },
        ]}
        dashboardMockup={<DashboardMockup />}
      />
    </SiteShell>
  );
}
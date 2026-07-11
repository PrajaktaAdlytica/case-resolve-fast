import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { ProductPage } from "@/components/site/ProductPage";
import { DashboardMockup } from "@/components/site/DashboardMockup";
import { Sparkles } from "lucide-react";

export const Route = createFileRoute("/products/summaries")({
  head: () => ({
    meta: [
      { title: "Bankxio Summaries — AI summaries for compliance cases" },
      { name: "description", content: "Turn complex investigations into concise operational summaries generated automatically from case activity." },
      { property: "og:title", content: "Bankxio Summaries — AI summaries for compliance cases" },
      { property: "og:description", content: "AI-generated case summaries with decision highlights and full audit history preserved." },
    ],
  }),
  component: Page,
});

function SummaryHero() {
  return (
    <div className="rounded-2xl bg-white border border-[color:var(--color-hairline)] shadow-[0_30px_80px_rgba(0,55,112,0.12)] p-5">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-7 h-7 rounded-md flex items-center justify-center" style={{ background: "linear-gradient(135deg,#c634bd,#533afd)" }}>
          <Sparkles className="w-3.5 h-3.5 text-white" />
        </span>
        <span className="text-[13px] text-[color:var(--color-ink)]">AI Summary · Case #3241</span>
        <span className="ml-auto text-[10px] px-2 py-0.5 rounded-full bg-[#fee6fc] text-[#c634bd] animate-pulse-dot">Generating</span>
      </div>
      <div className="space-y-2 text-[13px]">
        <div className="p-3 rounded-lg bg-[color:var(--color-canvas-soft)] text-[color:var(--color-ink)]">
          <div className="text-[10px] uppercase tracking-wider text-[color:var(--color-ink-mute)] mb-1">Overview</div>
          KYC exception opened for high-value customer verification. Secondary document requires manual review.
        </div>
        <div className="p-3 rounded-lg bg-[color:var(--color-canvas-soft)] text-[color:var(--color-ink)]">
          <div className="text-[10px] uppercase tracking-wider text-[color:var(--color-ink-mute)] mb-1">Key events</div>
          <span className="bg-[#fff3a3]/70 px-0.5">Customer verified</span> secondary ID at 14:32 UTC. Transaction <span className="tnum">€ 12,400.00</span> flagged by AML rule 4.2.
        </div>
        <div className="p-3 rounded-lg bg-[color:var(--color-canvas-soft)] text-[color:var(--color-ink)]">
          <div className="text-[10px] uppercase tracking-wider text-[color:var(--color-ink-mute)] mb-1">Recommendation</div>
          <span className="text-[#533afd]">Approve with ongoing monitoring.</span> Confidence 92%.
        </div>
      </div>
    </div>
  );
}

function Page() {
  return (
    <SiteShell>
      <ProductPage
        eyebrow="Bankxio Summaries"
        title="Turn complex investigations into clear summaries."
        description="Bankxio Summaries reads across a case timeline and produces a concise operational summary — key events, decisions and recommendations — while preserving the complete investigation history."
        heroVisual={<SummaryHero />}
        overviewTitle="Faster decisions, without losing the audit trail."
        overviewBody="Investigations often involve dozens of events and notes. Bankxio Summaries condenses them into a decision-ready brief that any reviewer or approver can act on in seconds — with a single click to expand the underlying evidence."
        features={[
          { title: "AI summaries", body: "Concise briefs generated from case activity, updated as new events arrive." },
          { title: "Timeline extraction", body: "Key events surfaced automatically with links back to source records." },
          { title: "Decision highlights", body: "Recommendation and rationale surfaced at the top of every summary." },
          { title: "Full history preserved", body: "Every underlying event stays intact for audit and review." },
          { title: "Multi-language", body: "Summaries produced in the language of your operations team." },
          { title: "Reviewer feedback loop", body: "Approve, edit or reject — the model learns your team's tone." },
        ]}
        benefits={[
          "Reduce case review time by up to 60%.",
          "Give escalation reviewers a consistent, decision-ready brief.",
          "Onboard new investigators with instant context on any case.",
          "Improve regulator responses with clear, structured narratives.",
        ]}
        faqs={[
          { q: "Which LLM powers Bankxio Summaries?", a: "Bankxio uses enterprise-grade models hosted in EU regions with strict data-processing agreements." },
          { q: "Do summaries replace investigator judgement?", a: "No. Summaries assist reviewers — every decision is still owned by your operations team, with full evidence available." },
          { q: "Is customer data used to train models?", a: "No. Bankxio Summaries runs on tenant-isolated inference and does not use your data for training." },
          { q: "Can summaries be customised per case type?", a: "Yes. Templates and tone-of-voice can be configured per team and case type." },
        ]}
        dashboardMockup={<DashboardMockup />}
      />
    </SiteShell>
  );
}
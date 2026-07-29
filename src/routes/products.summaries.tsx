import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { ProductPage } from "@/components/site/ProductPage";
import { DashboardMockup } from "@/components/site/DashboardMockup";
import { ProductDepth } from "@/components/site/ProductDepth";
import { ArrowRight, BookOpenCheck, Database, FileCheck2, ShieldCheck, Sparkles, UserRoundCheck } from "lucide-react";

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

function AITransparency() {
  const safeguards = [
    {
      icon: BookOpenCheck,
      title: "Grounded in case evidence",
      body: "Every material statement links back to the event, document or note that supports it.",
    },
    {
      icon: UserRoundCheck,
      title: "Human decision ownership",
      body: "Summaries prepare the case. Investigators review, edit and own every operational decision.",
    },
    {
      icon: Database,
      title: "No customer-data training",
      body: "Tenant data is used only to generate the requested summary and is not used to train shared models.",
    },
    {
      icon: ShieldCheck,
      title: "Controlled enterprise inference",
      body: "Model access, output history and reviewer actions remain logged inside the case record.",
    },
  ];

  return (
    <section id="ai-transparency" className="py-24 bg-[color:var(--color-brand-dark-900)] text-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-12 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <div className="text-[11px] uppercase tracking-[0.12em] text-[#b9b9f9] mb-3">Responsible AI</div>
            <h2 className="text-[36px] md:text-[44px] leading-[1.08] font-light" style={{ letterSpacing: "-1px" }}>
              Clear about what the AI does — and what it never decides.
            </h2>
            <p className="mt-5 text-[16px] leading-[1.65] text-white/68 max-w-lg">
              Bankxio Summaries turns case evidence into a reviewable draft. It does not replace policy, investigator judgement or maker-checker approval.
            </p>
            <div className="mt-8 rounded-xl border border-white/12 bg-white/6 p-5">
              <div className="flex items-center gap-2 text-[12px] uppercase tracking-[0.09em] text-white/58">
                <FileCheck2 className="w-4 h-4 text-[#b9b9f9]" />
                Output contract
              </div>
              <p className="mt-3 text-[15px] leading-[1.55] text-white/88">
                Draft summary + source citations + open questions + reviewer status
              </p>
            </div>
          </div>

          <div>
            <div className="grid sm:grid-cols-2 gap-5">
              {safeguards.map((item) => (
                <div key={item.title} className="rounded-xl border border-white/12 bg-white/6 p-6">
                  <span className="w-10 h-10 rounded-lg bg-white/9 flex items-center justify-center">
                    <item.icon className="w-4.5 h-4.5 text-[#b9b9f9]" />
                  </span>
                  <h3 className="mt-5 text-[19px] font-light">{item.title}</h3>
                  <p className="mt-2 text-[14px] leading-[1.6] text-white/62">{item.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-xl bg-white text-[color:var(--color-ink)] p-6 md:p-8">
              <div className="text-[11px] uppercase tracking-[0.1em] text-[color:var(--color-brand-primary-deep)]">
                Summary lifecycle
              </div>
              <div className="mt-5 grid md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 items-center">
                {[
                  ["01", "Evidence selected", "Only authorised case material"],
                  ["02", "Draft generated", "Claims linked to their sources"],
                  ["03", "Human reviewed", "Edits and approval are logged"],
                ].map(([number, title, body], index) => (
                  <div key={title} className="contents">
                    <div className="rounded-lg bg-[color:var(--color-canvas-soft)] p-4">
                      <div className="text-[10px] tnum text-[color:var(--color-ink-mute-2)]">{number}</div>
                      <div className="mt-2 text-[14px] text-[color:var(--color-ink)]">{title}</div>
                      <div className="mt-1 text-[12px] leading-[1.45] text-[color:var(--color-ink-mute-2)]">{body}</div>
                    </div>
                    {index < 2 && <ArrowRight className="hidden md:block w-4 h-4 text-[color:var(--color-brand-primary)]" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
        afterOverview={
          <>
            <ProductDepth kind="summaries" />
            <AITransparency />
          </>
        }
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

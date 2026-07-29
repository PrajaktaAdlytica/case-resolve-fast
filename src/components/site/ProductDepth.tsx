import { useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock3,
  Download,
  FileCheck2,
  Filter,
  History,
  Link2,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
  TimerReset,
  UserRoundCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ProductKind = "cases" | "summaries" | "sla";

type ProductView = {
  label: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const PRODUCT_VIEWS: Record<ProductKind, ProductView[]> = {
  cases: [
    {
      label: "Queue control",
      title: "Prioritise work with operational context",
      description:
        "Filter by risk, owner, deadline and case type without losing the customer or transaction context.",
      icon: Filter,
    },
    {
      label: "Case timeline",
      title: "Keep evidence, actions and rationale together",
      description:
        "Every event stays attributable, timestamped and available to the next reviewer.",
      icon: History,
    },
    {
      label: "Audit export",
      title: "Package the complete decision record",
      description: "Prepare a reconstructable record with evidence, approvals and SLA history.",
      icon: Download,
    },
  ],
  summaries: [
    {
      label: "Evidence-linked draft",
      title: "Trace every generated statement to its source",
      description:
        "Review citations, open questions and confidence signals before using the summary.",
      icon: Link2,
    },
    {
      label: "Review controls",
      title: "Keep the investigator in control",
      description: "Edit, reject or approve the draft while preserving the original model output.",
      icon: UserRoundCheck,
    },
    {
      label: "Version history",
      title: "Reconstruct how the brief changed",
      description: "Compare generated, edited and approved versions with actor and timestamp.",
      icon: History,
    },
  ],
  sla: [
    {
      label: "Rule builder",
      title: "Configure deadlines without code",
      description: "Set targets by case type, priority, calendar and customer segment.",
      icon: TimerReset,
    },
    {
      label: "Escalation preview",
      title: "See who is notified before a breach",
      description:
        "Preview team, manager and compliance escalation paths before publishing a rule.",
      icon: AlertTriangle,
    },
    {
      label: "Performance report",
      title: "Explain where operational time goes",
      description: "Break down resolution time and breaches by queue, rule and operating team.",
      icon: FileCheck2,
    },
  ],
};

export function ProductDepth({ kind }: { kind: ProductKind }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const views = PRODUCT_VIEWS[kind];
  const active = views[activeIndex];
  const ActiveIcon = active.icon;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-10 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <div className="text-[11px] uppercase tracking-[0.12em] text-[color:var(--color-brand-primary-deep)] mb-3">
              Interactive product view · Demo
            </div>
            <h2
              className="text-[36px] md:text-[44px] leading-[1.08] font-light text-[color:var(--color-ink)]"
              style={{ letterSpacing: "-1px" }}
            >
              Go beyond the dashboard.
            </h2>
            <p className="mt-5 text-[16px] leading-[1.6] text-[color:var(--color-ink-mute-2)]">
              Explore realistic controls and operational states using illustrative case data.
            </p>
            <div className="mt-8 space-y-2" role="tablist" aria-label="Product views">
              {views.map((view, index) => {
                const Icon = view.icon;
                const selected = index === activeIndex;
                return (
                  <button
                    key={view.label}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setActiveIndex(index)}
                    className={`w-full rounded-xl border px-4 py-4 text-left flex items-center gap-3 transition-all ${
                      selected
                        ? "bg-[color:var(--color-brand-dark-900)] border-transparent text-white shadow-[0_12px_32px_rgba(28,30,84,0.18)]"
                        : "bg-white border-[color:var(--color-hairline)] text-[color:var(--color-ink)] hover:border-[color:var(--color-brand-primary)]"
                    }`}
                  >
                    <span
                      className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                        selected
                          ? "bg-white/10 text-[#b9b9f9]"
                          : "bg-[color:var(--color-canvas-soft)] text-[color:var(--color-brand-primary)]"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </span>
                    <span className="text-[14px]">{view.label}</span>
                    <ArrowRight
                      className={`ml-auto w-4 h-4 transition-transform ${selected ? "translate-x-1" : ""}`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <div
            role="tabpanel"
            className="overflow-hidden rounded-2xl border border-[color:var(--color-hairline)] bg-[color:var(--color-canvas-soft)] shadow-[0_30px_80px_rgba(0,55,112,0.12)]"
          >
            <div className="h-11 px-4 border-b border-[color:var(--color-hairline)] bg-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ea2261]" />
              <span className="w-2 h-2 rounded-full bg-[#f2bb44]" />
              <span className="w-2 h-2 rounded-full bg-[#39b871]" />
              <div className="ml-3 flex-1 rounded-md bg-[color:var(--color-canvas-soft)] px-3 py-1 text-[10px] text-[color:var(--color-ink-mute-2)]">
                app.bankxio.com/demo/{kind}/{activeIndex + 1}
              </div>
            </div>
            <div className="p-5 md:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <span className="w-10 h-10 rounded-lg bg-[color:var(--color-brand-primary-subdued)] flex items-center justify-center">
                    <ActiveIcon className="w-4.5 h-4.5 text-[color:var(--color-brand-primary-press)]" />
                  </span>
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.1em] text-[color:var(--color-brand-primary-deep)]">
                      {active.label}
                    </div>
                    <h3 className="mt-1 text-[22px] md:text-[26px] font-light text-[color:var(--color-ink)]">
                      {active.title}
                    </h3>
                  </div>
                </div>
                <span className="rounded-full bg-white border border-[color:var(--color-hairline)] px-3 py-1 text-[10px] text-[color:var(--color-ink-mute-2)]">
                  Illustrative data
                </span>
              </div>
              <p className="mt-4 text-[14px] leading-[1.55] text-[color:var(--color-ink-mute-2)] max-w-2xl">
                {active.description}
              </p>
              <div className="mt-7">
                <ProductPanel kind={kind} view={activeIndex} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductPanel({ kind, view }: { kind: ProductKind; view: number }) {
  if (kind === "cases") return <CasesPanel view={view} />;
  if (kind === "summaries") return <SummariesPanel view={view} />;
  return <SlaPanel view={view} />;
}

function CasesPanel({ view }: { view: number }) {
  if (view === 1) {
    return (
      <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-4">
        <PanelCard title="Case context">
          <Meta label="Customer" value="PL-88291" />
          <Meta label="Alert" value="Rule 4.2 · High value" />
          <Meta label="Owner" value="Marta · FinCrime Ops" />
          <Meta label="SLA" value="01:42 remaining" />
        </PanelCard>
        <PanelCard title="Investigation timeline">
          <TimelineItem
            icon={AlertTriangle}
            time="14:08"
            title="Transaction alert received"
            body="€12,400 outbound transfer flagged."
          />
          <TimelineItem
            icon={ShieldCheck}
            time="14:17"
            title="KYC evidence linked"
            body="Secondary ID and prior review added."
          />
          <TimelineItem
            icon={MessageSquareText}
            time="14:31"
            title="Investigator rationale"
            body="Customer activity matches stated purpose."
          />
        </PanelCard>
      </div>
    );
  }

  if (view === 2) {
    return (
      <PanelCard title="Audit package · Case #3241">
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            ["Evidence index", "8 linked records"],
            ["Decision history", "2 reviews · 1 approval"],
            ["SLA record", "Resolved 38 min early"],
            ["Export format", "PDF + JSON manifest"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg bg-[color:var(--color-canvas-soft)] p-4">
              <div className="text-[10px] uppercase tracking-[0.08em] text-[color:var(--color-ink-mute-2)]">
                {label}
              </div>
              <div className="mt-2 text-[13px] text-[color:var(--color-ink)]">{value}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-2 rounded-lg border border-[#bde8ca] bg-[#f1fbf4] p-3 text-[12px] text-[#176b36]">
          <CheckCircle2 className="w-4 h-4" /> Export validation complete
        </div>
      </PanelCard>
    );
  }

  return (
    <PanelCard title="Compliance queue · 142 open">
      <div className="grid grid-cols-[1fr_auto_auto] gap-x-4 text-[10px] uppercase tracking-[0.08em] text-[color:var(--color-ink-mute-2)] px-3 pb-2">
        <span>Case</span>
        <span>Deadline</span>
        <span>Status</span>
      </div>
      {[
        ["#3241 · KYC exception", "01:42", "Under review"],
        ["#3240 · Transaction alert", "00:18", "Escalated"],
        ["#3239 · Customer dispute", "04:12", "Assigned"],
        ["#3238 · Complaint", "Closed", "Resolved"],
      ].map(([title, deadline, status]) => (
        <div
          key={title}
          className="grid grid-cols-[1fr_auto_auto] gap-x-4 items-center rounded-lg bg-[color:var(--color-canvas-soft)] px-3 py-3 mt-2 text-[12px]"
        >
          <span className="text-[color:var(--color-ink)]">{title}</span>
          <span className="tnum text-[color:var(--color-ink-mute-2)]">{deadline}</span>
          <span className="rounded-full bg-white px-2 py-1 text-[10px] text-[color:var(--color-brand-primary-press)]">
            {status}
          </span>
        </div>
      ))}
    </PanelCard>
  );
}

function SummariesPanel({ view }: { view: number }) {
  if (view === 1) {
    return (
      <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-4">
        <PanelCard title="Reviewer workspace">
          <div className="rounded-lg bg-[color:var(--color-canvas-soft)] p-4 text-[13px] leading-[1.6] text-[color:var(--color-ink)]">
            Customer identity evidence is consistent with the account profile. The transfer was
            flagged because the amount exceeded the configured threshold.
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {["Edit draft", "Request evidence", "Approve summary"].map((label, index) => (
              <span
                key={label}
                className={`rounded-full px-3 py-1.5 text-[11px] ${index === 2 ? "bg-[color:var(--color-brand-primary)] text-white" : "bg-white border border-[color:var(--color-hairline)] text-[color:var(--color-ink)]"}`}
              >
                {label}
              </span>
            ))}
          </div>
        </PanelCard>
        <PanelCard title="Decision ownership">
          <Meta label="Drafted by" value="Bankxio Summaries" />
          <Meta label="Reviewed by" value="Marta · FinCrime Ops" />
          <Meta label="Approved by" value="Tomasz · Compliance" />
          <Meta label="AI action" value="No case closure rights" />
        </PanelCard>
      </div>
    );
  }

  if (view === 2) {
    return (
      <PanelCard title="Summary versions">
        {[
          ["v3 · Approved", "14:46 UTC", "Tomasz · Compliance", "Current"],
          ["v2 · Investigator edit", "14:39 UTC", "Marta · FinCrime Ops", "Compared"],
          ["v1 · Generated draft", "14:34 UTC", "Bankxio Summaries", "Preserved"],
        ].map(([version, time, actor, status]) => (
          <div
            key={version}
            className="grid sm:grid-cols-[1fr_auto_auto] gap-3 items-center border-b border-[color:var(--color-hairline)] py-3 last:border-0 text-[12px]"
          >
            <div>
              <div className="text-[color:var(--color-ink)]">{version}</div>
              <div className="mt-1 text-[11px] text-[color:var(--color-ink-mute-2)]">{actor}</div>
            </div>
            <span className="tnum text-[color:var(--color-ink-mute-2)]">{time}</span>
            <span className="rounded-full bg-[color:var(--color-canvas-soft)] px-2 py-1 text-[10px] text-[color:var(--color-brand-primary-press)]">
              {status}
            </span>
          </div>
        ))}
      </PanelCard>
    );
  }

  return (
    <div className="grid md:grid-cols-[1.18fr_0.82fr] gap-4">
      <PanelCard title="Decision-ready brief">
        <div className="space-y-3 text-[13px] leading-[1.55]">
          <div className="rounded-lg bg-[color:var(--color-canvas-soft)] p-4 text-[color:var(--color-ink)]">
            <span className="text-[10px] uppercase tracking-[0.08em] text-[color:var(--color-ink-mute-2)] block mb-1">
              Material fact
            </span>
            Transaction amount exceeded the customer segment threshold.
            <span className="ml-2 rounded bg-[#eeeafd] px-1.5 py-0.5 text-[10px] text-[#4434d4]">
              Source 04
            </span>
          </div>
          <div className="rounded-lg bg-[color:var(--color-canvas-soft)] p-4 text-[color:var(--color-ink)]">
            <span className="text-[10px] uppercase tracking-[0.08em] text-[color:var(--color-ink-mute-2)] block mb-1">
              Recommendation
            </span>
            Approve with ongoing monitoring and record the rationale.
            <span className="ml-2 rounded bg-[#eeeafd] px-1.5 py-0.5 text-[10px] text-[#4434d4]">
              Sources 05–08
            </span>
          </div>
        </div>
      </PanelCard>
      <PanelCard title="Evidence index">
        <Meta label="Customer profile" value="Source 01" />
        <Meta label="Secondary ID" value="Source 02" />
        <Meta label="Transaction event" value="Source 04" />
        <Meta label="Prior activity" value="Sources 05–08" />
      </PanelCard>
    </div>
  );
}

function SlaPanel({ view }: { view: number }) {
  if (view === 1) {
    return (
      <PanelCard title="Escalation preview · High-priority KYC">
        <div className="grid sm:grid-cols-[1fr_auto_1fr_auto_1fr] gap-3 items-center">
          {[
            ["T−45 min", "Queue owner", "Marta"],
            ["T−15 min", "Team lead", "Piotr"],
            ["At breach", "Compliance", "Duty officer"],
          ].map(([time, role, actor], index) => (
            <div key={time} className="contents">
              <div className="rounded-lg bg-[color:var(--color-canvas-soft)] p-4">
                <div className="text-[10px] tnum text-[color:var(--color-brand-primary-deep)]">
                  {time}
                </div>
                <div className="mt-2 text-[13px] text-[color:var(--color-ink)]">{role}</div>
                <div className="mt-1 text-[11px] text-[color:var(--color-ink-mute-2)]">{actor}</div>
              </div>
              {index < 2 && (
                <ArrowRight className="hidden sm:block w-4 h-4 text-[color:var(--color-brand-primary)]" />
              )}
            </div>
          ))}
        </div>
      </PanelCard>
    );
  }

  if (view === 2) {
    return (
      <div className="grid md:grid-cols-3 gap-4">
        {[
          ["Within SLA", "95.2%", "+3.4 pts"],
          ["Median resolution", "41 min", "−18 min"],
          ["Escalations", "34", "−12%"],
        ].map(([label, value, change]) => (
          <PanelCard key={label} title={label}>
            <div className="text-[34px] font-light tnum text-[color:var(--color-ink)]">{value}</div>
            <div className="mt-2 text-[11px] text-[#176b36]">{change} · demo period</div>
          </PanelCard>
        ))}
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-4">
      <PanelCard title="Rule definition">
        <Meta label="Case type" value="KYC exception" />
        <Meta label="Priority" value="High" />
        <Meta label="Target" value="2 business hours" />
        <Meta label="Calendar" value="EU Operations · CET" />
      </PanelCard>
      <PanelCard title="Rule status">
        <div className="flex items-center gap-3 rounded-lg border border-[#bde8ca] bg-[#f1fbf4] p-4">
          <CheckCircle2 className="w-5 h-5 text-[#176b36]" />
          <div>
            <div className="text-[13px] text-[#176b36]">Validation passed</div>
            <div className="mt-1 text-[11px] text-[#176b36]/75">
              No uncovered priority combinations
            </div>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-2 text-[12px] text-[color:var(--color-ink-mute-2)]">
          <Clock3 className="w-4 h-4 text-[color:var(--color-brand-primary)]" /> Effective from next
          business day
        </div>
      </PanelCard>
    </div>
  );
}

function PanelCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-[color:var(--color-hairline)] bg-white p-5">
      <div className="text-[12px] font-normal text-[color:var(--color-ink)]">{title}</div>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-[color:var(--color-hairline)] py-2.5 last:border-0 text-[12px]">
      <span className="text-[color:var(--color-ink-mute-2)]">{label}</span>
      <span className="text-right text-[color:var(--color-ink)]">{value}</span>
    </div>
  );
}

function TimelineItem({
  icon: Icon,
  time,
  title,
  body,
}: {
  icon: LucideIcon;
  time: string;
  title: string;
  body: string;
}) {
  return (
    <div className="flex gap-3 border-b border-[color:var(--color-hairline)] py-3 first:pt-0 last:border-0">
      <span className="w-8 h-8 rounded-lg bg-[color:var(--color-canvas-soft)] flex items-center justify-center flex-shrink-0">
        <Icon className="w-3.5 h-3.5 text-[color:var(--color-brand-primary)]" />
      </span>
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-x-2">
          <span className="text-[12px] text-[color:var(--color-ink)]">{title}</span>
          <span className="text-[10px] tnum text-[color:var(--color-ink-mute-2)]">{time}</span>
        </div>
        <p className="mt-1 text-[11px] leading-[1.45] text-[color:var(--color-ink-mute-2)]">
          {body}
        </p>
      </div>
    </div>
  );
}

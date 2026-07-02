import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Check, FileText, Sparkles, Timer } from "lucide-react";

type Card = {
  id: string;
  badge: string;
  title: string;
  desc: string;
  features: string[];
  href: "/products/cases" | "/products/summaries" | "/products/sla";
  visual: React.ReactNode;
  span?: string;
};

function CasesVisual() {
  return (
    <div className="rounded-xl bg-white border border-[color:var(--color-hairline)] shadow-[0_10px_30px_rgba(0,55,112,0.08)] p-4 w-full max-w-[300px]">
      <div className="flex items-center justify-between">
        <span className="text-[11px] tnum text-[color:var(--color-ink-mute)]">Case #3241</span>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#eeeafd] text-[#533afd]">Assigned</span>
      </div>
      <div className="mt-3 text-[14px] text-[color:var(--color-ink)] font-normal">KYC Exception</div>
      <div className="mt-1 text-[12px] text-[color:var(--color-ink-mute)]">Customer verification requires manual review of secondary ID document.</div>
      <div className="mt-4 flex items-center justify-between pt-3 border-t border-[color:var(--color-hairline)]">
        <span className="text-[10px] text-[color:var(--color-ink-mute)]">Under Review</span>
        <div className="flex -space-x-1">
          {["#ea2261", "#533afd", "#f96bee"].map((c) => (
            <span key={c} className="w-5 h-5 rounded-full border-2 border-white" style={{ background: c }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function SummaryVisual() {
  return (
    <div className="rounded-xl bg-white border border-[color:var(--color-hairline)] shadow-[0_10px_30px_rgba(0,55,112,0.08)] p-4 w-full max-w-[300px]">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: "linear-gradient(135deg,#c634bd,#533afd)" }}>
          <Sparkles className="w-3 h-3 text-white" />
        </span>
        <span className="text-[12px] font-normal text-[color:var(--color-ink)]">AI Summary</span>
        <span className="ml-auto text-[10px] px-2 py-0.5 rounded-full bg-[#fee6fc] text-[#c634bd]">Live</span>
      </div>
      <div className="space-y-1.5 text-[11px]">
        <div className="bg-[color:var(--color-canvas-soft)] rounded p-2 text-[color:var(--color-ink)]">
          <span className="bg-[#fff3a3]/70 px-0.5">Customer verified</span> secondary ID at 14:32 UTC.
        </div>
        <div className="bg-[color:var(--color-canvas-soft)] rounded p-2 text-[color:var(--color-ink)]">
          Transaction <span className="tnum">€ 12,400.00</span> flagged by AML rule 4.2.
        </div>
        <div className="bg-[color:var(--color-canvas-soft)] rounded p-2 text-[color:var(--color-ink)]">
          Recommendation: <span className="text-[#533afd]">approve with monitoring</span>.
        </div>
      </div>
    </div>
  );
}

function SlaVisual() {
  return (
    <div className="rounded-xl bg-white border border-[color:var(--color-hairline)] shadow-[0_10px_30px_rgba(0,55,112,0.08)] p-5 w-full max-w-[300px]">
      <div className="flex items-center gap-4">
        <div className="relative w-20 h-20">
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
            <circle cx="50" cy="50" r="42" strokeWidth="8" stroke="#eef1f6" fill="none" />
            <circle cx="50" cy="50" r="42" strokeWidth="8" stroke="#533afd" fill="none" strokeLinecap="round" strokeDasharray="264" strokeDashoffset="70" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-[16px] font-light tnum text-[color:var(--color-ink)]">02:14</span>
            <span className="text-[9px] text-[color:var(--color-ink-mute)]">Remaining</span>
          </div>
        </div>
        <div>
          <div className="text-[12px] text-[color:var(--color-ink)]">Queue: KYC</div>
          <div className="text-[10px] text-[color:var(--color-ink-mute)] mt-1">Priority High</div>
          <div className="mt-2 flex items-center gap-1 text-[10px]">
            <span className="tnum text-[color:var(--color-ink)]">142</span>
            <span className="text-[color:var(--color-ink-mute)]">open</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const cards: Card[] = [
  {
    id: "cases",
    badge: "Case management",
    title: "Bankza Cases",
    desc: "Manage every operational case from a single workspace. Track KYC exceptions, transaction alerts, disputes, complaints and investigations without switching between systems.",
    features: ["Unified case queue", "Case assignment", "Timeline history"],
    href: "/products/cases",
    visual: <CasesVisual />,
    span: "lg:col-span-2",
  },
  {
    id: "summaries",
    badge: "AI insights",
    title: "Bankza Summaries",
    desc: "Turn complex investigations into clear operational summaries. AI automatically generates concise case summaries while preserving the complete investigation history.",
    features: ["AI summaries", "Timeline extraction", "Decision highlights"],
    href: "/products/summaries",
    visual: <SummaryVisual />,
  },
  {
    id: "sla",
    badge: "Deadline monitoring",
    title: "Bankza SLA",
    desc: "Never miss another operational deadline. Monitor response times with configurable SLAs, escalation rules and queue monitoring.",
    features: ["SLA timers", "Queue monitoring", "Escalation rules"],
    href: "/products/sla",
    visual: <SlaVisual />,
  },
];

const iconMap = { cases: FileText, summaries: Sparkles, sla: Timer } as const;

export function ProductsBento() {
  const [expanded, setExpanded] = useState<string | null>(null);
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {cards.map((c) => {
        const Icon = iconMap[c.id as keyof typeof iconMap];
        const isOpen = expanded === c.id;
        return (
          <div
            key={c.id}
            onClick={() => setExpanded(isOpen ? null : c.id)}
            className={`card-base overflow-hidden group cursor-pointer hover-lift relative ${c.span ?? ""}`}
          >
            <div className="p-8 flex flex-col h-full">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.1em] text-[color:var(--color-brand-primary-deep)] bg-[color:var(--color-brand-primary-subdued)] px-2.5 py-1 rounded-full">
                  <Icon className="w-3 h-3" /> {c.badge}
                </span>
              </div>
              <h3 className="text-[26px] font-light text-[color:var(--color-ink)]" style={{ letterSpacing: "-0.5px" }}>{c.title}</h3>
              <p className={`mt-3 text-[15px] leading-[1.55] text-[color:var(--color-ink-mute)] max-w-md transition-all duration-300 ${isOpen ? "" : "line-clamp-2"}`}>{c.desc}</p>
              <ul className={`mt-5 space-y-1.5 overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                {c.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-[14px] text-[color:var(--color-ink)]">
                    <Check className="w-3.5 h-3.5 text-[color:var(--color-brand-primary)]" /> {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex-1 flex items-end transition-transform duration-500 group-hover:-translate-y-2">
                {c.visual}
              </div>
              <Link
                to={c.href}
                onClick={(e) => e.stopPropagation()}
                className="mt-6 inline-flex items-center gap-1 text-[13px] text-[color:var(--color-brand-primary)] opacity-0 group-hover:opacity-100 transition-opacity"
              >
                Explore product <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
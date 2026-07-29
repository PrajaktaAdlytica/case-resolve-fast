import { useEffect, useRef, useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock3,
  FileCheck2,
  Gavel,
  IdCard,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const TOUR_STEPS = [
  {
    label: "Alert intake",
    title: "Bring the exception into one controlled queue.",
    description:
      "A high-value transaction alert arrives from the monitoring stack with the customer, rule, amount and source evidence already attached.",
    actor: "Monitoring system",
    evidence: "Customer · Transaction · Rule 4.2",
    sla: "15 min triage target",
    status: "New",
    icon: AlertTriangle,
    tone: "bg-[#fde8ee] text-[#ea2261]",
  },
  {
    label: "Investigation",
    title: "Give the analyst the full operational context.",
    description:
      "Bankxio links the alert to the customer profile, KYC documents and prior activity so the investigator can review evidence without switching systems.",
    actor: "Marta · FinCrime Ops",
    evidence: "4 evidence sources linked",
    sla: "01:42 remaining",
    status: "In review",
    icon: IdCard,
    tone: "bg-[#eeeafd] text-[#533afd]",
  },
  {
    label: "AI case brief",
    title: "Prepare an evidence-linked summary for review.",
    description:
      "Bankxio Summaries organises the material facts, flags missing evidence and drafts a recommendation. Every statement links back to the source timeline.",
    actor: "Bankxio Summaries",
    evidence: "8 citations · 1 open question",
    sla: "Human review required",
    status: "Draft ready",
    icon: Sparkles,
    tone: "bg-[#fee6fc] text-[#c634bd]",
  },
  {
    label: "Controlled decision",
    title: "Keep accountability with the operations team.",
    description:
      "A senior reviewer checks the evidence, records the rationale and approves the decision through a maker-checker step. AI never closes the case.",
    actor: "Tomasz · Compliance",
    evidence: "Rationale and approval logged",
    sla: "Decision at 14:46 UTC",
    status: "Approved",
    icon: Gavel,
    tone: "bg-[#eeeafd] text-[#533afd]",
  },
  {
    label: "Resolution & audit",
    title: "Close the case with a reconstructable history.",
    description:
      "The source system is updated, the SLA stops and Bankxio preserves the evidence, actions and approvals as one exportable investigation record.",
    actor: "Bankxio Cases + SLA",
    evidence: "Audit record complete",
    sla: "Resolved 38 min early",
    status: "Resolved",
    icon: CheckCircle2,
    tone: "bg-[#e6f7ec] text-[#15803d]",
  },
] as const;

export function ProductTour() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visibleEntry) return;
        const index = Number((visibleEntry.target as HTMLElement).dataset.tourStep);
        if (!Number.isNaN(index)) setActiveStep(index);
      },
      { rootMargin: "-28% 0px -48% 0px", threshold: [0.1, 0.4, 0.7] },
    );

    stepRefs.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => observer.disconnect();
  }, []);

  const active = TOUR_STEPS[activeStep];
  const ActiveIcon = active.icon;

  return (
    <section
      id="platform-tour"
      className="relative bg-[color:var(--color-canvas-soft)] py-24 scroll-mt-16"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-3xl mb-14">
          <div className="text-[11px] uppercase tracking-[0.12em] text-[color:var(--color-brand-primary-deep)] mb-3">
            Platform tour · Case #3241
          </div>
          <h2
            className="text-[36px] md:text-[46px] leading-[1.08] font-light text-[color:var(--color-ink)]"
            style={{ letterSpacing: "-1.1px" }}
          >
            Follow one regulated case from alert to audit-ready resolution.
          </h2>
          <p className="mt-5 text-[16px] leading-[1.55] text-[color:var(--color-ink-mute-2)] max-w-2xl">
            Scroll through a realistic payment-institution workflow to see how Bankxio Cases,
            Summaries and SLA work together without replacing the systems that detect risk.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-10 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-24">
            <div className="overflow-hidden rounded-2xl border border-[color:var(--color-hairline)] bg-white shadow-[0_30px_80px_rgba(0,55,112,0.12)]">
              <div className="h-11 border-b border-[color:var(--color-hairline)] px-4 flex items-center gap-2 bg-white">
                <span className="w-2 h-2 rounded-full bg-[#ea2261]" />
                <span className="w-2 h-2 rounded-full bg-[#f2bb44]" />
                <span className="w-2 h-2 rounded-full bg-[#39b871]" />
                <div className="ml-3 flex-1 rounded-md bg-[color:var(--color-canvas-soft)] px-3 py-1 text-[10px] text-[color:var(--color-ink-mute-2)]">
                  app.bankxio.com/cases/3241
                </div>
                <span className="hidden sm:inline text-[10px] text-[color:var(--color-ink-mute-2)]">
                  Live demo
                </span>
              </div>

              <div className="p-5 md:p-7">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-[11px] text-[color:var(--color-ink-mute-2)]">
                      <span className="tnum">#3241</span>
                      <ArrowRight className="w-3 h-3" />
                      Transaction alert
                    </div>
                    <h3 className="mt-2 text-[24px] md:text-[28px] font-light text-[color:var(--color-ink)]">
                      High-value transfer review
                    </h3>
                  </div>
                  <span className="rounded-full bg-[color:var(--color-brand-primary-subdued)] px-3 py-1 text-[11px] text-[color:var(--color-brand-primary-press)]">
                    {active.status}
                  </span>
                </div>

                <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    ["Customer", "PL-88291"],
                    ["Amount", "€12,400.00"],
                    ["Risk", "High"],
                    ["Owner", activeStep < 1 ? "Unassigned" : "FinCrime Ops"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-lg bg-[color:var(--color-canvas-soft)] p-3">
                      <div className="text-[10px] uppercase tracking-[0.08em] text-[color:var(--color-ink-mute-2)]">
                        {label}
                      </div>
                      <div className="mt-1 text-[13px] tnum text-[color:var(--color-ink)]">
                        {value}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 grid md:grid-cols-[0.72fr_1.28fr] gap-5">
                  <div className="rounded-xl border border-[color:var(--color-hairline)] p-4">
                    <div className="text-[11px] uppercase tracking-[0.09em] text-[color:var(--color-ink-mute-2)] mb-3">
                      Case progress
                    </div>
                    <div className="space-y-1">
                      {TOUR_STEPS.map((step, index) => {
                        const Icon = step.icon;
                        const complete = index < activeStep;
                        const current = index === activeStep;
                        return (
                          <div
                            key={step.label}
                            className={`flex items-center gap-3 rounded-lg px-2.5 py-2.5 transition-colors ${
                              current ? "bg-[color:var(--color-brand-primary-subdued)]/45" : ""
                            }`}
                          >
                            <span
                              className={`w-7 h-7 rounded-md flex items-center justify-center ${
                                complete
                                  ? "bg-[#e6f7ec] text-[#15803d]"
                                  : current
                                    ? step.tone
                                    : "bg-[color:var(--color-canvas-soft)] text-[color:var(--color-ink-mute-2)]"
                              }`}
                            >
                              {complete ? (
                                <CheckCircle2 className="w-3.5 h-3.5" />
                              ) : (
                                <Icon className="w-3.5 h-3.5" />
                              )}
                            </span>
                            <span
                              className={`text-[12px] ${current ? "text-[color:var(--color-ink)]" : "text-[color:var(--color-ink-mute-2)]"}`}
                            >
                              {step.label}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="rounded-xl border border-[color:var(--color-brand-primary)]/25 bg-[linear-gradient(145deg,#ffffff_0%,#f6f9fc_100%)] p-5 min-h-[285px] flex flex-col">
                    <div className="flex items-center justify-between gap-3">
                      <span
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${active.tone}`}
                      >
                        <ActiveIcon className="w-4.5 h-4.5" />
                      </span>
                      <span className="text-[11px] tnum text-[color:var(--color-ink-mute-2)]">
                        Step {activeStep + 1} of {TOUR_STEPS.length}
                      </span>
                    </div>
                    <div className="mt-5 text-[11px] uppercase tracking-[0.1em] text-[color:var(--color-brand-primary-deep)]">
                      {active.label}
                    </div>
                    <div className="mt-2 text-[20px] font-light leading-[1.25] text-[color:var(--color-ink)]">
                      {active.title}
                    </div>
                    <div className="mt-auto pt-6 space-y-2">
                      <MetaRow icon={UserRoundCheck} label={active.actor} />
                      <MetaRow icon={FileCheck2} label={active.evidence} />
                      <MetaRow icon={Clock3} label={active.sla} />
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[color:var(--color-hairline)] pt-4 text-[11px] text-[color:var(--color-ink-mute-2)]">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[color:var(--color-brand-primary)]" />{" "}
                    Evidence preserved
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MessageSquareText className="w-3.5 h-3.5 text-[color:var(--color-brand-primary)]" />{" "}
                    Rationale required
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FileCheck2 className="w-3.5 h-3.5 text-[color:var(--color-brand-primary)]" />{" "}
                    Full audit history
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {TOUR_STEPS.map((step, index) => {
              const Icon = step.icon;
              const selected = index === activeStep;
              return (
                <button
                  key={step.label}
                  ref={(node) => {
                    stepRefs.current[index] = node;
                  }}
                  data-tour-step={index}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setActiveStep(index)}
                  onFocus={() => setActiveStep(index)}
                  className={`w-full text-left min-h-[42vh] lg:min-h-[58vh] rounded-2xl border p-7 md:p-9 flex flex-col justify-center transition-all duration-300 ${
                    selected
                      ? "bg-white border-[color:var(--color-brand-primary)] shadow-[0_18px_50px_rgba(0,55,112,0.09)]"
                      : "bg-white/55 border-[color:var(--color-hairline)]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span
                      className={`w-11 h-11 rounded-xl flex items-center justify-center ${step.tone}`}
                    >
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="text-[12px] tnum text-[color:var(--color-ink-mute-2)]">
                      0{index + 1}
                    </span>
                  </div>
                  <div className="mt-7 text-[11px] uppercase tracking-[0.12em] text-[color:var(--color-brand-primary-deep)]">
                    {step.label}
                  </div>
                  <h3
                    className="mt-3 text-[27px] md:text-[32px] leading-[1.15] font-light text-[color:var(--color-ink)]"
                    style={{ letterSpacing: "-0.6px" }}
                  >
                    {step.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-[1.65] text-[color:var(--color-ink-mute-2)]">
                    {step.description}
                  </p>
                  <div className="mt-7 flex items-center gap-2 text-[13px] text-[color:var(--color-brand-primary-deep)]">
                    See this step in the case
                    <ArrowRight
                      className={`w-4 h-4 transition-transform ${selected ? "translate-x-1" : ""}`}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function MetaRow({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <div className="flex items-center gap-2 text-[12px] text-[color:var(--color-ink-secondary)]">
      <Icon className="w-3.5 h-3.5 text-[color:var(--color-brand-primary)] flex-shrink-0" />
      <span>{label}</span>
    </div>
  );
}

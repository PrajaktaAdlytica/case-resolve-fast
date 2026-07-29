import { createFileRoute, Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock3,
  CreditCard,
  FileCheck2,
  FileWarning,
  Flag,
  IdCard,
  MessageSquareText,
  Scale,
  ShieldAlert,
  Sparkles,
  TimerReset,
  UserRoundCheck,
  UsersRound,
  WalletCards,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { GradientMesh } from "@/components/site/GradientMesh";
import { SiteShell } from "@/components/site/SiteShell";

export const Route = createFileRoute("/solutions/$solutionId")({
  head: () => ({
    meta: [
      { title: "Financial operations use cases — Bankxio" },
      {
        name: "description",
        content:
          "Explore realistic Bankxio workflows for KYC exceptions, transaction alerts, disputes, payment institutions and SLA operations.",
      },
    ],
  }),
  component: SolutionPage,
});

type Solution = {
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  caseType: string;
  queue: string;
  trigger: string;
  amount: string;
  outcomes: string[];
  steps: { title: string; body: string; owner: string; icon: LucideIcon }[];
  metrics: { value: string; label: string }[];
  controls: { title: string; body: string; icon: LucideIcon }[];
};

const SOLUTIONS = {
  "kyc-exceptions": {
    eyebrow: "KYC exception operations",
    title: "Turn verification exceptions into controlled review work.",
    description:
      "Bring identity evidence, policy context, ownership and deadlines into one reviewable case without replacing the KYC provider.",
    icon: IdCard,
    caseType: "KYC exception",
    queue: "Customer Due Diligence",
    trigger: "Secondary document requires review",
    amount: "Customer PL-88291",
    outcomes: ["Consistent review path", "Evidence-linked decisions", "Controlled escalation"],
    steps: [
      {
        title: "Receive the exception",
        body: "Create the case with customer, verification and document context attached.",
        owner: "KYC provider",
        icon: FileWarning,
      },
      {
        title: "Review the evidence",
        body: "Assign an investigator and surface the missing or conflicting evidence.",
        owner: "CDD Operations",
        icon: IdCard,
      },
      {
        title: "Record the decision",
        body: "Require rationale and maker-checker approval for the final disposition.",
        owner: "Compliance reviewer",
        icon: UserRoundCheck,
      },
      {
        title: "Synchronise the outcome",
        body: "Update the source workflow and preserve the complete case history.",
        owner: "Bankxio Cases",
        icon: CheckCircle2,
      },
    ],
    metrics: [
      { value: "01:42", label: "Demo time remaining" },
      { value: "8", label: "Evidence records" },
      { value: "2", label: "Human approvals" },
    ],
    controls: [
      {
        title: "Policy context",
        body: "Show the applicable verification rule beside the evidence.",
        icon: FileCheck2,
      },
      {
        title: "Decision ownership",
        body: "Keep approvals with authorised operations roles.",
        icon: UserRoundCheck,
      },
      {
        title: "Deadline control",
        body: "Escalate before the operational target is missed.",
        icon: Clock3,
      },
    ],
  },
  "transaction-alerts": {
    eyebrow: "Transaction alert operations",
    title: "Move from detection signal to defensible disposition.",
    description:
      "Accept alerts from the monitoring stack, gather operational context and guide the human investigation through a controlled outcome.",
    icon: ShieldAlert,
    caseType: "Transaction alert",
    queue: "FinCrime Operations",
    trigger: "Rule 4.2 · High-value transfer",
    amount: "€12,400.00",
    outcomes: ["Faster triage", "Consistent evidence review", "Complete disposition history"],
    steps: [
      {
        title: "Ingest the signal",
        body: "Attach the triggering transaction, customer and rule context to the case.",
        owner: "AML monitoring",
        icon: AlertTriangle,
      },
      {
        title: "Enrich the investigation",
        body: "Bring KYC, prior activity and payment context into one view.",
        owner: "FinCrime analyst",
        icon: WalletCards,
      },
      {
        title: "Prepare the brief",
        body: "Generate an evidence-linked draft with open questions for human review.",
        owner: "Bankxio Summaries",
        icon: Sparkles,
      },
      {
        title: "Disposition the alert",
        body: "Record rationale, approval and the outcome returned to the source system.",
        owner: "Senior reviewer",
        icon: CheckCircle2,
      },
    ],
    metrics: [
      { value: "4", label: "Systems connected" },
      { value: "38 min", label: "Illustrative resolution" },
      { value: "0", label: "Unowned decisions" },
    ],
    controls: [
      {
        title: "Evidence lineage",
        body: "Trace every material fact to the event that supports it.",
        icon: FileCheck2,
      },
      {
        title: "Human disposition",
        body: "AI can draft but cannot close the investigation.",
        icon: UserRoundCheck,
      },
      {
        title: "Outcome sync",
        body: "Return the approved disposition to monitoring systems.",
        icon: ArrowRight,
      },
    ],
  },
  "disputes-complaints": {
    eyebrow: "Disputes & complaints",
    title: "Keep customer communication and regulated response work together.",
    description:
      "Coordinate evidence, internal review, customer communication and response deadlines from one operational case.",
    icon: MessageSquareText,
    caseType: "Customer complaint",
    queue: "Customer Operations",
    trigger: "Payment dispute escalated",
    amount: "€1,940.00",
    outcomes: [
      "Single communication history",
      "Deadline-aware ownership",
      "Reviewable final response",
    ],
    steps: [
      {
        title: "Open the case",
        body: "Link the customer message, payment and dispute reason.",
        owner: "Support platform",
        icon: MessageSquareText,
      },
      {
        title: "Collect evidence",
        body: "Request transaction, merchant and customer-service records.",
        owner: "Disputes team",
        icon: FileCheck2,
      },
      {
        title: "Review the response",
        body: "Route the proposed resolution through the required approval.",
        owner: "Complaints officer",
        icon: Scale,
      },
      {
        title: "Close and communicate",
        body: "Send the approved outcome and retain the response history.",
        owner: "Customer Operations",
        icon: CheckCircle2,
      },
    ],
    metrics: [
      { value: "3", label: "Teams collaborating" },
      { value: "5d", label: "Demo response target" },
      { value: "1", label: "Canonical timeline" },
    ],
    controls: [
      {
        title: "Customer context",
        body: "Keep messages, evidence and actions in chronological order.",
        icon: MessageSquareText,
      },
      {
        title: "Response approval",
        body: "Require the right reviewer before external communication.",
        icon: UserRoundCheck,
      },
      {
        title: "Deadline history",
        body: "Preserve pauses, escalations and final response time.",
        icon: Clock3,
      },
    ],
  },
  "payment-institutions": {
    eyebrow: "Payment institution operations",
    title: "Coordinate the operational work around every payment exception.",
    description:
      "Connect payment events with compliance, fraud, support and customer-response workflows while retaining clear ownership.",
    icon: CreditCard,
    caseType: "Payment exception",
    queue: "Payment Operations",
    trigger: "Outbound transfer under review",
    amount: "€84,220.00",
    outcomes: ["Cross-team coordination", "Fewer handoff gaps", "Audit-ready operational history"],
    steps: [
      {
        title: "Receive the payment event",
        body: "Create a case with transaction, account and risk context.",
        owner: "Payment processor",
        icon: CreditCard,
      },
      {
        title: "Coordinate the review",
        body: "Assign compliance, fraud or support tasks within one case.",
        owner: "Payment Operations",
        icon: UsersRound,
      },
      {
        title: "Control the action",
        body: "Require approval for release, restriction or customer communication.",
        owner: "Duty manager",
        icon: Flag,
      },
      {
        title: "Update connected systems",
        body: "Synchronise the approved action and close the operational loop.",
        owner: "Bankxio platform",
        icon: CheckCircle2,
      },
    ],
    metrics: [
      { value: "4", label: "Operational teams" },
      { value: "1", label: "Case owner" },
      { value: "100%", label: "Demo actions logged" },
    ],
    controls: [
      {
        title: "Task orchestration",
        body: "Assign work without splitting the case history.",
        icon: UsersRound,
      },
      {
        title: "Payment action gates",
        body: "Restrict sensitive actions to authorised roles.",
        icon: UserRoundCheck,
      },
      {
        title: "Full event record",
        body: "Retain what changed in Bankxio and connected systems.",
        icon: FileCheck2,
      },
    ],
  },
  "sla-operations": {
    eyebrow: "SLA & deadline operations",
    title: "Make every operational deadline visible before it becomes a breach.",
    description:
      "Define targets by case type and priority, preview escalation paths and explain performance at the queue and case level.",
    icon: TimerReset,
    caseType: "High-priority exception",
    queue: "EU Operations",
    trigger: "45-minute warning threshold",
    amount: "01:42 remaining",
    outcomes: ["Proactive escalation", "Working-hours awareness", "Case-level reporting"],
    steps: [
      {
        title: "Apply the rule",
        body: "Select the target based on case type, priority and calendar.",
        owner: "Bankxio SLA",
        icon: TimerReset,
      },
      {
        title: "Warn the owner",
        body: "Surface the approaching threshold in the queue and case.",
        owner: "Assigned investigator",
        icon: Clock3,
      },
      {
        title: "Escalate by policy",
        body: "Notify the team lead and compliance owner at defined stages.",
        owner: "Operations manager",
        icon: AlertTriangle,
      },
      {
        title: "Explain performance",
        body: "Preserve elapsed time, pauses, escalations and resolution.",
        owner: "SLA reporting",
        icon: FileCheck2,
      },
    ],
    metrics: [
      { value: "95.2%", label: "Illustrative within SLA" },
      { value: "3", label: "Escalation stages" },
      { value: "0", label: "Hidden deadline changes" },
    ],
    controls: [
      {
        title: "Rule validation",
        body: "Detect gaps before a target is published.",
        icon: CheckCircle2,
      },
      {
        title: "Escalation ownership",
        body: "Show exactly who receives each warning.",
        icon: UsersRound,
      },
      {
        title: "Performance evidence",
        body: "Explain the timing history behind every result.",
        icon: Clock3,
      },
    ],
  },
} satisfies Record<string, Solution>;

type SolutionId = keyof typeof SOLUTIONS;

function SolutionPage() {
  const { solutionId } = Route.useParams();
  const solution = SOLUTIONS[solutionId as SolutionId] ?? SOLUTIONS["transaction-alerts"];
  const Icon = solution.icon;

  return (
    <SiteShell>
      <section className="relative overflow-hidden">
        <GradientMesh />
        <div className="relative max-w-[1200px] mx-auto px-6 pt-20 pb-24 grid lg:grid-cols-[0.92fr_1.08fr] gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] text-[color:var(--color-brand-primary-deep)] bg-[color:var(--color-brand-primary-subdued)] px-3 py-1.5 rounded-full">
              <Icon className="w-3.5 h-3.5" />
              {solution.eyebrow}
            </div>
            <h1
              className="mt-6 text-[46px] md:text-[58px] leading-[1.02] font-light text-[color:var(--color-ink)]"
              style={{ letterSpacing: "-1.5px" }}
            >
              {solution.title}
            </h1>
            <p className="mt-6 text-[17px] leading-[1.55] text-[color:var(--color-ink-secondary)] max-w-xl">
              {solution.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/request-demo" className="btn-pill btn-primary">
                See the workflow
              </Link>
              <a href="#workflow" className="btn-pill btn-secondary">
                Follow the case
              </a>
            </div>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
              {solution.outcomes.map((outcome) => (
                <span
                  key={outcome}
                  className="flex items-center gap-2 text-[12px] text-[color:var(--color-ink-mute-2)]"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[color:var(--color-brand-primary)]" />{" "}
                  {outcome}
                </span>
              ))}
            </div>
          </div>
          <CasePreview solution={solution} />
        </div>
      </section>

      <section id="workflow" className="py-24 bg-white scroll-mt-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-[0.12em] text-[color:var(--color-brand-primary-deep)] mb-3">
              End-to-end workflow · Illustrative
            </div>
            <h2
              className="text-[36px] md:text-[44px] leading-[1.08] font-light text-[color:var(--color-ink)]"
              style={{ letterSpacing: "-1px" }}
            >
              One operational record from trigger to resolution.
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {solution.steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-xl border border-[color:var(--color-hairline)] p-7 hover-lift"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="w-11 h-11 rounded-xl bg-[color:var(--color-brand-primary-subdued)] flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-[color:var(--color-brand-primary-press)]" />
                  </span>
                  <span className="text-[11px] tnum text-[color:var(--color-ink-mute-2)]">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-[22px] font-light text-[color:var(--color-ink)]">
                  {step.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-[color:var(--color-ink-mute-2)]">
                  {step.body}
                </p>
                <div className="mt-5 pt-4 border-t border-[color:var(--color-hairline)] text-[11px] text-[color:var(--color-brand-primary-deep)]">
                  Owner · {step.owner}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[color:var(--color-canvas-soft)]">
        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-start">
          <div>
            <div className="text-[11px] uppercase tracking-[0.12em] text-[color:var(--color-brand-primary-deep)] mb-3">
              Operational controls
            </div>
            <h2
              className="text-[36px] md:text-[44px] leading-[1.08] font-light text-[color:var(--color-ink)]"
              style={{ letterSpacing: "-1px" }}
            >
              Keep the workflow fast without losing accountability.
            </h2>
            <p className="mt-5 text-[15px] leading-[1.65] text-[color:var(--color-ink-mute-2)]">
              Bankxio combines operational clarity with the ownership, evidence and time controls
              required for regulated work.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {solution.controls.map((control) => (
              <div
                key={control.title}
                className="rounded-xl border border-[color:var(--color-hairline)] bg-white p-6 hover-lift"
              >
                <control.icon className="w-5 h-5 text-[color:var(--color-brand-primary)]" />
                <h3 className="mt-5 text-[18px] font-light text-[color:var(--color-ink)]">
                  {control.title}
                </h3>
                <p className="mt-2 text-[12px] leading-[1.55] text-[color:var(--color-ink-mute-2)]">
                  {control.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[color:var(--color-brand-dark-900)] text-white">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <h2 className="text-[36px] md:text-[46px] font-light" style={{ letterSpacing: "-1px" }}>
            Bring one real workflow to the demo.
          </h2>
          <p className="mt-4 text-[16px] text-white/70">
            We will map the trigger, evidence, roles, deadlines and resolution path using
            illustrative data.
          </p>
          <Link to="/request-demo" className="btn-pill btn-on-dark mt-8">
            Request a workflow review <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}

function CasePreview({ solution }: { solution: Solution }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-[color:var(--color-hairline)] bg-white shadow-[0_30px_80px_rgba(0,55,112,0.12)]">
      <div className="h-11 bg-[color:var(--color-brand-dark-900)] px-4 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#ea2261]" />
        <span className="w-2 h-2 rounded-full bg-[#f2bb44]" />
        <span className="w-2 h-2 rounded-full bg-[#39b871]" />
        <span className="ml-3 text-[10px] text-white/58">Demo scenario · Case #3241</span>
      </div>
      <div className="p-5 md:p-7">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <div className="text-[10px] uppercase tracking-[0.09em] text-[color:var(--color-ink-mute-2)]">
              {solution.queue}
            </div>
            <div className="mt-2 text-[22px] font-light text-[color:var(--color-ink)]">
              {solution.caseType}
            </div>
          </div>
          <span className="rounded-full bg-[#fff4f7] px-3 py-1 text-[10px] text-[#9f1744]">
            Needs review
          </span>
        </div>
        <div className="mt-5 grid sm:grid-cols-2 gap-3">
          <div className="rounded-lg bg-[color:var(--color-canvas-soft)] p-4">
            <div className="text-[10px] uppercase tracking-[0.08em] text-[color:var(--color-ink-mute-2)]">
              Trigger
            </div>
            <div className="mt-2 text-[13px] text-[color:var(--color-ink)]">{solution.trigger}</div>
          </div>
          <div className="rounded-lg bg-[color:var(--color-canvas-soft)] p-4">
            <div className="text-[10px] uppercase tracking-[0.08em] text-[color:var(--color-ink-mute-2)]">
              Context
            </div>
            <div className="mt-2 text-[13px] tnum text-[color:var(--color-ink)]">
              {solution.amount}
            </div>
          </div>
        </div>
        <div className="mt-5 space-y-2">
          {solution.steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-lg border border-[color:var(--color-hairline)] px-4 py-3 flex items-center gap-3"
            >
              <span
                className={`w-7 h-7 rounded-md flex items-center justify-center ${index === 0 ? "bg-[color:var(--color-brand-primary)] text-white" : "bg-[color:var(--color-canvas-soft)] text-[color:var(--color-brand-primary)]"}`}
              >
                <step.icon className="w-3.5 h-3.5" />
              </span>
              <span className="text-[12px] text-[color:var(--color-ink)] flex-1">{step.title}</span>
              <span className="text-[10px] text-[color:var(--color-ink-mute-2)]">
                {index === 0 ? "Active" : "Pending"}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-5 grid grid-cols-3 gap-3">
          {solution.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-lg bg-[color:var(--color-canvas-soft)] p-3 text-center"
            >
              <div className="text-[17px] font-light tnum text-[color:var(--color-ink)]">
                {metric.value}
              </div>
              <div className="mt-1 text-[9px] leading-[1.35] text-[color:var(--color-ink-mute-2)]">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

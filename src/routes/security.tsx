import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Database,
  FileCheck2,
  Fingerprint,
  Globe2,
  KeyRound,
  LockKeyhole,
  ScrollText,
  Server,
  ShieldCheck,
  UserRoundCheck,
  UsersRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { GradientMesh } from "@/components/site/GradientMesh";
import { SiteShell } from "@/components/site/SiteShell";

export const Route = createFileRoute("/security")({
  head: () => ({
    meta: [
      { title: "Security & control design — Bankxio" },
      {
        name: "description",
        content:
          "Explore the illustrative security, access, audit and data-control design of the Bankxio operations platform.",
      },
      { property: "og:title", content: "Security & control design — Bankxio" },
      {
        property: "og:description",
        content: "An enterprise-ready control model for regulated financial operations workflows.",
      },
    ],
  }),
  component: SecurityPage,
});

const controlGroups = [
  {
    icon: LockKeyhole,
    title: "Data protection",
    body: "Encryption boundaries, tenant separation, retention controls and restricted data movement.",
    controls: [
      "Encryption in transit and at rest",
      "Tenant-scoped records",
      "Configurable retention",
      "Controlled export paths",
    ],
  },
  {
    icon: UsersRound,
    title: "Identity and access",
    body: "Role-aware access built around operational responsibility and separation of duties.",
    controls: [
      "Role-based permissions",
      "SSO-ready access model",
      "Maker-checker approvals",
      "Session and access history",
    ],
  },
  {
    icon: ScrollText,
    title: "Auditability",
    body: "A reconstructable record of evidence, decisions, changes and approvals.",
    controls: [
      "Actor and timestamp history",
      "Reason-required decisions",
      "Versioned AI outputs",
      "Exportable audit package",
    ],
  },
  {
    icon: Server,
    title: "Operational resilience",
    body: "Controls designed to support monitored service operation and recoverable workflows.",
    controls: [
      "Environment separation",
      "Backup and recovery model",
      "Incident workflow",
      "Operational monitoring",
    ],
  },
] as const;

function SecurityPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden">
        <GradientMesh />
        <div className="relative max-w-[1200px] mx-auto px-6 pt-20 pb-24 grid lg:grid-cols-[0.92fr_1.08fr] gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] text-[color:var(--color-brand-primary-deep)] bg-[color:var(--color-brand-primary-subdued)] px-3 py-1.5 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5" />
              Security & control design · Demo
            </div>
            <h1
              className="mt-6 text-[46px] md:text-[58px] leading-[1.02] font-light text-[color:var(--color-ink)]"
              style={{ letterSpacing: "-1.5px" }}
            >
              Control every action around the case.
            </h1>
            <p className="mt-6 text-[17px] leading-[1.55] text-[color:var(--color-ink-secondary)] max-w-xl">
              Bankxio is designed to help regulated operations teams protect case data, enforce
              decision ownership and preserve a reviewable history across the workflow.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/request-demo" className="btn-pill btn-primary">
                Review the control model
              </Link>
              <Link to="/implementation" className="btn-pill btn-secondary">
                See implementation
              </Link>
            </div>
            <p className="mt-6 text-[11px] leading-[1.5] text-[color:var(--color-ink-mute-2)] max-w-lg">
              Illustrative product-security content for this demo. Certifications and formal
              assurance reports are not claimed.
            </p>
          </div>
          <SecurityControlVisual />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-[0.12em] text-[color:var(--color-brand-primary-deep)] mb-3">
              Control framework
            </div>
            <h2
              className="text-[36px] md:text-[44px] leading-[1.08] font-light text-[color:var(--color-ink)]"
              style={{ letterSpacing: "-1px" }}
            >
              Built around the responsibilities of regulated operations.
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {controlGroups.map((group) => (
              <ControlGroup key={group.title} {...group} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[color:var(--color-canvas-soft)]">
        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <div className="text-[11px] uppercase tracking-[0.12em] text-[color:var(--color-brand-primary-deep)] mb-3">
              Data boundaries
            </div>
            <h2
              className="text-[36px] md:text-[44px] leading-[1.08] font-light text-[color:var(--color-ink)]"
              style={{ letterSpacing: "-1px" }}
            >
              Make the flow of operational data explainable.
            </h2>
            <p className="mt-5 text-[16px] leading-[1.6] text-[color:var(--color-ink-mute-2)]">
              The example architecture separates source systems, the Bankxio tenant boundary and
              authorised outputs so procurement teams can understand where data moves.
            </p>
          </div>
          <DataBoundaryVisual />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-start">
            <div>
              <div className="text-[11px] uppercase tracking-[0.12em] text-[color:var(--color-brand-primary-deep)] mb-3">
                Procurement readiness
              </div>
              <h2
                className="text-[34px] md:text-[42px] leading-[1.1] font-light text-[color:var(--color-ink)]"
                style={{ letterSpacing: "-0.9px" }}
              >
                Give security reviewers a clear starting point.
              </h2>
              <p className="mt-5 text-[15px] leading-[1.6] text-[color:var(--color-ink-mute-2)]">
                A production engagement can package the documents, ownership and technical detail
                required for a structured vendor review.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                ["Architecture overview", "System boundaries and deployment model"],
                ["Data-flow inventory", "Inputs, outputs and retention points"],
                ["Access-control matrix", "Roles, permissions and approvals"],
                ["AI system note", "Purpose, limitations and review controls"],
                ["Subprocessor register", "Illustrative procurement artifact"],
                ["Incident process", "Escalation and communication ownership"],
              ].map(([title, body]) => (
                <div
                  key={title}
                  className="rounded-xl border border-[color:var(--color-hairline)] p-5 hover-lift"
                >
                  <FileCheck2 className="w-4 h-4 text-[color:var(--color-brand-primary)]" />
                  <div className="mt-4 text-[14px] text-[color:var(--color-ink)]">{title}</div>
                  <div className="mt-1 text-[12px] leading-[1.5] text-[color:var(--color-ink-mute-2)]">
                    {body}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[color:var(--color-brand-dark-900)] text-white">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <h2 className="text-[36px] md:text-[46px] font-light" style={{ letterSpacing: "-1px" }}>
            Review security in the context of your workflow.
          </h2>
          <p className="mt-4 text-[16px] text-white/70">
            Walk through case access, AI review controls, audit history and integration boundaries.
          </p>
          <Link to="/request-demo" className="btn-pill btn-on-dark mt-8">
            Request a security walkthrough <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}

function SecurityControlVisual() {
  const controls = [
    {
      icon: Fingerprint,
      label: "Authenticated actor",
      value: "Marta · FinCrime Ops",
      status: "Verified",
    },
    { icon: KeyRound, label: "Permission check", value: "KYC reviewer", status: "Allowed" },
    { icon: UserRoundCheck, label: "Decision control", value: "Maker-checker", status: "Required" },
    { icon: ScrollText, label: "Audit event", value: "Reason + timestamp", status: "Recorded" },
  ];
  return (
    <div className="rounded-2xl overflow-hidden bg-white border border-[color:var(--color-hairline)] shadow-[0_30px_80px_rgba(0,55,112,0.12)]">
      <div className="h-11 px-4 bg-[color:var(--color-brand-dark-900)] flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#ea2261]" />
        <span className="w-2 h-2 rounded-full bg-[#f2bb44]" />
        <span className="w-2 h-2 rounded-full bg-[#39b871]" />
        <span className="ml-3 text-[10px] text-white/58">Control event · Case #3241</span>
      </div>
      <div className="p-5 md:p-7">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-[11px] uppercase tracking-[0.09em] text-[color:var(--color-brand-primary-deep)]">
              Decision request
            </div>
            <div className="mt-2 text-[22px] font-light text-[color:var(--color-ink)]">
              Approve with monitoring
            </div>
          </div>
          <span className="rounded-full bg-[#fff4f7] px-3 py-1 text-[10px] text-[#9f1744]">
            Control check
          </span>
        </div>
        <div className="mt-6 space-y-3">
          {controls.map((control) => (
            <div
              key={control.label}
              className="rounded-xl border border-[color:var(--color-hairline)] p-4 flex items-center gap-3"
            >
              <span className="w-9 h-9 rounded-lg bg-[color:var(--color-canvas-soft)] flex items-center justify-center">
                <control.icon className="w-4 h-4 text-[color:var(--color-brand-primary)]" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="text-[10px] uppercase tracking-[0.08em] text-[color:var(--color-ink-mute-2)]">
                  {control.label}
                </div>
                <div className="mt-1 text-[13px] text-[color:var(--color-ink)]">
                  {control.value}
                </div>
              </div>
              <span className="text-[10px] rounded-full bg-[#f1fbf4] px-2 py-1 text-[#176b36]">
                {control.status}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-2 rounded-lg bg-[color:var(--color-canvas-soft)] p-3 text-[11px] text-[color:var(--color-ink-mute-2)]">
          <Clock3 className="w-3.5 h-3.5 text-[color:var(--color-brand-primary)]" />
          Decision event stored at 14:46:12 UTC · Illustrative
        </div>
      </div>
    </div>
  );
}

function ControlGroup({
  icon: Icon,
  title,
  body,
  controls,
}: {
  icon: LucideIcon;
  title: string;
  body: string;
  controls: readonly string[];
}) {
  return (
    <div className="rounded-xl border border-[color:var(--color-hairline)] p-7 hover-lift">
      <span className="w-11 h-11 rounded-xl bg-[color:var(--color-brand-primary-subdued)] flex items-center justify-center">
        <Icon className="w-5 h-5 text-[color:var(--color-brand-primary-press)]" />
      </span>
      <h3 className="mt-6 text-[22px] font-light text-[color:var(--color-ink)]">{title}</h3>
      <p className="mt-2 text-[14px] leading-[1.6] text-[color:var(--color-ink-mute-2)]">{body}</p>
      <ul className="mt-5 grid sm:grid-cols-2 gap-2">
        {controls.map((control) => (
          <li
            key={control}
            className="flex items-start gap-2 text-[12px] leading-[1.45] text-[color:var(--color-ink)]"
          >
            <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 text-[color:var(--color-brand-primary)] flex-shrink-0" />
            {control}
          </li>
        ))}
      </ul>
    </div>
  );
}

function DataBoundaryVisual() {
  const stages = [
    {
      icon: Database,
      eyebrow: "Source systems",
      title: "KYC, AML, payments",
      body: "Authorised records and events",
    },
    {
      icon: ShieldCheck,
      eyebrow: "Tenant boundary",
      title: "Bankxio workspace",
      body: "Cases, summaries and SLAs",
    },
    {
      icon: Globe2,
      eyebrow: "Controlled outputs",
      title: "API, export, notifications",
      body: "Policy-scoped destinations",
    },
  ];
  return (
    <div className="rounded-2xl border border-[color:var(--color-hairline)] bg-white p-6 md:p-8 shadow-[0_18px_50px_rgba(0,55,112,0.08)]">
      <div className="grid md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 items-center">
        {stages.map((stage, index) => (
          <div key={stage.title} className="contents">
            <div
              className={`rounded-xl border p-5 ${index === 1 ? "border-[color:var(--color-brand-primary)] bg-[color:var(--color-brand-dark-900)] text-white" : "border-[color:var(--color-hairline)] bg-[color:var(--color-canvas-soft)]"}`}
            >
              <stage.icon
                className={`w-5 h-5 ${index === 1 ? "text-[#b9b9f9]" : "text-[color:var(--color-brand-primary)]"}`}
              />
              <div
                className={`mt-5 text-[10px] uppercase tracking-[0.08em] ${index === 1 ? "text-white/58" : "text-[color:var(--color-ink-mute-2)]"}`}
              >
                {stage.eyebrow}
              </div>
              <div
                className={`mt-2 text-[15px] ${index === 1 ? "text-white" : "text-[color:var(--color-ink)]"}`}
              >
                {stage.title}
              </div>
              <div
                className={`mt-1 text-[11px] leading-[1.45] ${index === 1 ? "text-white/62" : "text-[color:var(--color-ink-mute-2)]"}`}
              >
                {stage.body}
              </div>
            </div>
            {index < 2 && (
              <ArrowRight className="hidden md:block w-4 h-4 text-[color:var(--color-brand-primary)]" />
            )}
          </div>
        ))}
      </div>
      <div className="mt-6 grid sm:grid-cols-3 gap-3">
        {["Authorisation checked", "Data movement logged", "Retention policy applied"].map(
          (item) => (
            <div
              key={item}
              className="flex items-center gap-2 rounded-lg border border-[color:var(--color-hairline)] px-3 py-2.5 text-[11px] text-[color:var(--color-ink)]"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-[#176b36]" /> {item}
            </div>
          ),
        )}
      </div>
    </div>
  );
}

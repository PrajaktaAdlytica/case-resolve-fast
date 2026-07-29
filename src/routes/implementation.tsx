import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Blocks,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Code2,
  FileSearch2,
  Flag,
  GitPullRequestArrow,
  KeyRound,
  LifeBuoy,
  Network,
  Rocket,
  Settings2,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { GradientMesh } from "@/components/site/GradientMesh";
import { SiteShell } from "@/components/site/SiteShell";

export const Route = createFileRoute("/implementation")({
  head: () => ({
    meta: [
      { title: "Implementation — Bankxio" },
      {
        name: "description",
        content:
          "Explore an illustrative Bankxio implementation plan from workflow discovery through controlled launch.",
      },
      { property: "og:title", content: "Implementation — Bankxio" },
      {
        property: "og:description",
        content:
          "A structured rollout model for integrating Bankxio into regulated financial operations.",
      },
    ],
  }),
  component: ImplementationPage,
});

const phases = [
  {
    number: "01",
    icon: FileSearch2,
    title: "Discover",
    duration: "Week 1",
    body: "Map case types, evidence sources, decision owners, deadlines and control requirements.",
    outputs: ["Workflow map", "Integration inventory", "Control owners"],
  },
  {
    number: "02",
    icon: Network,
    title: "Connect",
    duration: "Weeks 2–3",
    body: "Configure the data flow from source systems into cases and return controlled outcomes.",
    outputs: ["Sandbox connection", "Field mappings", "Event validation"],
  },
  {
    number: "03",
    icon: Settings2,
    title: "Configure",
    duration: "Weeks 3–4",
    body: "Set queues, permissions, maker-checker steps, summaries, SLAs and escalation paths.",
    outputs: ["Workflow rules", "Role matrix", "Acceptance scenarios"],
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch",
    duration: "Week 5+",
    body: "Run a controlled pilot, train operators, review outcomes and expand by case type.",
    outputs: ["Pilot cohort", "Go-live checklist", "Review cadence"],
  },
] as const;

function ImplementationPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden">
        <GradientMesh />
        <div className="relative max-w-[1200px] mx-auto px-6 pt-20 pb-24 grid lg:grid-cols-[0.92fr_1.08fr] gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] text-[color:var(--color-brand-primary-deep)] bg-[color:var(--color-brand-primary-subdued)] px-3 py-1.5 rounded-full">
              <GitPullRequestArrow className="w-3.5 h-3.5" />
              Implementation plan · Demo
            </div>
            <h1
              className="mt-6 text-[46px] md:text-[58px] leading-[1.02] font-light text-[color:var(--color-ink)]"
              style={{ letterSpacing: "-1.5px" }}
            >
              Move from one workflow to an operational platform.
            </h1>
            <p className="mt-6 text-[17px] leading-[1.55] text-[color:var(--color-ink-secondary)] max-w-xl">
              Start with a bounded case type, prove the data and controls, then expand through a
              repeatable rollout model built for regulated teams.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/request-demo" className="btn-pill btn-primary">
                Plan a rollout
              </Link>
              <Link to="/integrations" className="btn-pill btn-secondary">
                Review integrations
              </Link>
            </div>
            <p className="mt-6 text-[11px] text-[color:var(--color-ink-mute-2)]">
              Timeline and deliverables are illustrative and would be scoped to the institution.
            </p>
          </div>
          <LaunchPlanVisual />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-[0.12em] text-[color:var(--color-brand-primary-deep)] mb-3">
              Example rollout
            </div>
            <h2
              className="text-[36px] md:text-[44px] leading-[1.08] font-light text-[color:var(--color-ink)]"
              style={{ letterSpacing: "-1px" }}
            >
              Four stages with a clear operational owner at each step.
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {phases.map((phase) => (
              <PhaseCard key={phase.number} {...phase} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[color:var(--color-canvas-soft)]">
        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-[0.86fr_1.14fr] gap-12 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <div className="text-[11px] uppercase tracking-[0.12em] text-[color:var(--color-brand-primary-deep)] mb-3">
              Readiness checklist
            </div>
            <h2
              className="text-[36px] md:text-[44px] leading-[1.08] font-light text-[color:var(--color-ink)]"
              style={{ letterSpacing: "-1px" }}
            >
              Make procurement and delivery part of one plan.
            </h2>
            <p className="mt-5 text-[15px] leading-[1.65] text-[color:var(--color-ink-mute-2)]">
              A serious rollout aligns operational, security, technical and change-management work
              before production data enters the platform.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                icon: ClipboardCheck,
                title: "Operations",
                items: ["Named case owner", "Decision policy", "Acceptance scenarios"],
              },
              {
                icon: Code2,
                title: "Technology",
                items: ["Source-system access", "Sandbox events", "Output destinations"],
              },
              {
                icon: ShieldCheck,
                title: "Security",
                items: ["Data classification", "Access model", "Vendor review inputs"],
              },
              {
                icon: UsersRound,
                title: "Change",
                items: ["Pilot team", "Training plan", "Success review"],
              },
            ].map((group) => (
              <div
                key={group.title}
                className="rounded-xl border border-[color:var(--color-hairline)] bg-white p-6 hover-lift"
              >
                <group.icon className="w-5 h-5 text-[color:var(--color-brand-primary)]" />
                <h3 className="mt-5 text-[19px] font-light text-[color:var(--color-ink)]">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-[12px] text-[color:var(--color-ink)]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#176b36]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-14 items-center">
            <div>
              <div className="text-[11px] uppercase tracking-[0.12em] text-[color:var(--color-brand-primary-deep)] mb-3">
                Environment and ownership
              </div>
              <h2
                className="text-[36px] md:text-[44px] leading-[1.08] font-light text-[color:var(--color-ink)]"
                style={{ letterSpacing: "-1px" }}
              >
                Prove the workflow before widening the blast radius.
              </h2>
              <p className="mt-5 text-[15px] leading-[1.65] text-[color:var(--color-ink-mute-2)]">
                The illustrative rollout separates configuration, testing and launch, with explicit
                approval gates between environments.
              </p>
            </div>
            <EnvironmentFlow />
          </div>
        </div>
      </section>

      <section className="py-24 bg-[color:var(--color-canvas-cream)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: LifeBuoy,
                title: "Delivery support",
                body: "A named implementation owner coordinates workflow, integration and launch decisions.",
              },
              {
                icon: KeyRound,
                title: "Access review",
                body: "Permissions and approval responsibilities are reviewed before pilot access.",
              },
              {
                icon: Flag,
                title: "Success review",
                body: "Pilot outcomes are compared with agreed queue, time and quality measures.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-[#e8dcc3] bg-white/75 p-7 hover-lift"
              >
                <item.icon className="w-5 h-5 text-[color:var(--color-brand-primary)]" />
                <h3 className="mt-5 text-[20px] font-light text-[color:var(--color-ink)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[13px] leading-[1.6] text-[color:var(--color-ink-mute-2)]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[color:var(--color-brand-dark-900)] text-white">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <h2 className="text-[36px] md:text-[46px] font-light" style={{ letterSpacing: "-1px" }}>
            Start with one high-friction workflow.
          </h2>
          <p className="mt-4 text-[16px] text-white/70">
            Bring a case type, the systems involved and the deadline that matters most.
          </p>
          <Link to="/request-demo" className="btn-pill btn-on-dark mt-8">
            Plan the first rollout <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}

function LaunchPlanVisual() {
  return (
    <div className="rounded-2xl border border-[color:var(--color-hairline)] bg-white p-5 md:p-7 shadow-[0_30px_80px_rgba(0,55,112,0.12)]">
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="text-[10px] uppercase tracking-[0.09em] text-[color:var(--color-ink-mute-2)]">
            Pilot plan
          </div>
          <div className="mt-1 text-[18px] font-light text-[color:var(--color-ink)]">
            High-priority KYC exceptions
          </div>
        </div>
        <span className="rounded-full bg-[color:var(--color-brand-primary-subdued)] px-3 py-1 text-[10px] text-[color:var(--color-brand-primary-press)]">
          Illustrative
        </span>
      </div>
      <div className="mt-6 space-y-2">
        {phases.map((phase, index) => (
          <div
            key={phase.number}
            className={`rounded-xl border p-4 flex items-center gap-3 ${index === 0 ? "border-[color:var(--color-brand-primary)] bg-[color:var(--color-canvas-soft)]" : "border-[color:var(--color-hairline)]"}`}
          >
            <span
              className={`w-9 h-9 rounded-lg flex items-center justify-center ${index === 0 ? "bg-[color:var(--color-brand-primary)] text-white" : "bg-[color:var(--color-canvas-soft)] text-[color:var(--color-brand-primary)]"}`}
            >
              <phase.icon className="w-4 h-4" />
            </span>
            <div className="flex-1">
              <div className="text-[13px] text-[color:var(--color-ink)]">{phase.title}</div>
              <div className="mt-0.5 text-[10px] text-[color:var(--color-ink-mute-2)]">
                {phase.outputs[0]}
              </div>
            </div>
            <span className="text-[10px] tnum text-[color:var(--color-ink-mute-2)]">
              {phase.duration}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-2 rounded-lg bg-[#f1fbf4] p-3 text-[11px] text-[#176b36]">
        <CheckCircle2 className="w-3.5 h-3.5" /> Launch gate requires operations and control-owner
        approval
      </div>
    </div>
  );
}

function PhaseCard({
  number,
  icon: Icon,
  title,
  duration,
  body,
  outputs,
}: {
  number: string;
  icon: LucideIcon;
  title: string;
  duration: string;
  body: string;
  outputs: readonly string[];
}) {
  return (
    <div className="rounded-xl border border-[color:var(--color-hairline)] p-7 hover-lift">
      <div className="flex items-center justify-between gap-4">
        <span className="w-11 h-11 rounded-xl bg-[color:var(--color-brand-primary-subdued)] flex items-center justify-center">
          <Icon className="w-5 h-5 text-[color:var(--color-brand-primary-press)]" />
        </span>
        <div className="text-right">
          <div className="text-[10px] tnum text-[color:var(--color-ink-mute-2)]">{number}</div>
          <div className="mt-1 text-[11px] text-[color:var(--color-brand-primary-deep)]">
            {duration}
          </div>
        </div>
      </div>
      <h3 className="mt-6 text-[23px] font-light text-[color:var(--color-ink)]">{title}</h3>
      <p className="mt-2 text-[14px] leading-[1.6] text-[color:var(--color-ink-mute-2)]">{body}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {outputs.map((output) => (
          <span
            key={output}
            className="rounded-full bg-[color:var(--color-canvas-soft)] px-3 py-1.5 text-[10px] text-[color:var(--color-ink)]"
          >
            {output}
          </span>
        ))}
      </div>
    </div>
  );
}

function EnvironmentFlow() {
  const environments = [
    {
      icon: Blocks,
      title: "Configure",
      owner: "Implementation team",
      status: "No production data",
    },
    {
      icon: ClipboardCheck,
      title: "Validate",
      owner: "Pilot operators",
      status: "Acceptance scenarios",
    },
    { icon: Rocket, title: "Launch", owner: "Operations owner", status: "Controlled cohort" },
  ];
  return (
    <div className="rounded-2xl border border-[color:var(--color-hairline)] bg-[color:var(--color-canvas-soft)] p-6 md:p-8">
      <div className="space-y-3">
        {environments.map((environment, index) => (
          <div
            key={environment.title}
            className="rounded-xl bg-white border border-[color:var(--color-hairline)] p-4 flex items-center gap-3"
          >
            <span className="w-10 h-10 rounded-lg bg-[color:var(--color-brand-primary-subdued)] flex items-center justify-center">
              <environment.icon className="w-4 h-4 text-[color:var(--color-brand-primary-press)]" />
            </span>
            <div className="min-w-0 flex-1">
              <div className="text-[13px] text-[color:var(--color-ink)]">{environment.title}</div>
              <div className="mt-1 text-[11px] text-[color:var(--color-ink-mute-2)]">
                {environment.owner}
              </div>
            </div>
            <span className="hidden sm:inline rounded-full bg-[color:var(--color-canvas-soft)] px-2.5 py-1 text-[10px] text-[color:var(--color-ink-mute-2)]">
              {environment.status}
            </span>
            {index < 2 && (
              <ArrowRight className="w-4 h-4 text-[color:var(--color-brand-primary)]" />
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-2 text-[11px] text-[color:var(--color-ink-mute-2)]">
        <Clock3 className="w-3.5 h-3.5 text-[color:var(--color-brand-primary)]" /> Every gate
        records owner, evidence and approval time
      </div>
    </div>
  );
}

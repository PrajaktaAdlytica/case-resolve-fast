import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  Blocks,
  Building2,
  CheckCircle2,
  Code2,
  CreditCard,
  Database,
  FileKey2,
  Headphones,
  IdCard,
  PlugZap,
  RefreshCw,
  ShieldCheck,
  UsersRound,
  Webhook,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { GradientMesh } from "@/components/site/GradientMesh";
import { SiteShell } from "@/components/site/SiteShell";

export const Route = createFileRoute("/integrations")({
  head: () => ({
    meta: [
      { title: "Integrations — Bankxio" },
      {
        name: "description",
        content:
          "See how Bankxio can connect case workflows to KYC, AML, payment, banking, support and data systems.",
      },
      { property: "og:title", content: "Integrations — Bankxio" },
      {
        property: "og:description",
        content:
          "Illustrative connectors and integration patterns for financial operations workflows.",
      },
    ],
  }),
  component: IntegrationsPage,
});

const categories = ["All", "Detection", "KYC", "Payments", "Collaboration", "Data"] as const;
type Category = (typeof categories)[number];

type Integration = {
  name: string;
  category: Exclude<Category, "All">;
  description: string;
  direction: string;
  icon: LucideIcon;
  events: string[];
};

const integrations: Integration[] = [
  {
    name: "Core banking API",
    category: "Data",
    description: "Bring customer, account and transaction context into the case.",
    direction: "Read context · Write resolution",
    icon: Building2,
    events: ["customer.updated", "account.restricted", "case.resolved"],
  },
  {
    name: "KYC provider",
    category: "KYC",
    description: "Open exceptions with identity evidence and verification status attached.",
    direction: "Inbound exception · Status sync",
    icon: IdCard,
    events: ["verification.review", "document.updated", "decision.recorded"],
  },
  {
    name: "AML monitoring",
    category: "Detection",
    description: "Convert transaction alerts into assigned, deadline-controlled investigations.",
    direction: "Inbound alert · Outcome sync",
    icon: ShieldCheck,
    events: ["alert.created", "alert.enriched", "alert.dispositioned"],
  },
  {
    name: "Payment processor",
    category: "Payments",
    description: "Attach payment events, dispute evidence and operational actions.",
    direction: "Bidirectional workflow",
    icon: CreditCard,
    events: ["payment.flagged", "dispute.opened", "payment.released"],
  },
  {
    name: "CRM and support",
    category: "Collaboration",
    description: "Keep customer communication and complaint handling connected to the case.",
    direction: "Conversation sync",
    icon: Headphones,
    events: ["ticket.created", "message.received", "reply.approved"],
  },
  {
    name: "Data warehouse",
    category: "Data",
    description: "Send operational metrics and audit events into governed analytics.",
    direction: "Outbound events · Scheduled export",
    icon: Database,
    events: ["case.snapshot", "sla.metric", "audit.exported"],
  },
  {
    name: "Identity directory",
    category: "Collaboration",
    description: "Map users, teams and permission groups into operational roles.",
    direction: "Directory sync",
    icon: UsersRound,
    events: ["user.provisioned", "role.changed", "user.disabled"],
  },
  {
    name: "Risk decision engine",
    category: "Detection",
    description: "Accept rule signals and return a controlled investigation outcome.",
    direction: "Decision exchange",
    icon: Activity,
    events: ["signal.created", "review.requested", "decision.completed"],
  },
];

function IntegrationsPage() {
  const [category, setCategory] = useState<Category>("All");
  const [selected, setSelected] = useState(0);
  const visible =
    category === "All" ? integrations : integrations.filter((item) => item.category === category);
  const active = integrations[selected] ?? integrations[0];
  const selectCategory = (nextCategory: Category) => {
    setCategory(nextCategory);
    if (nextCategory === "All") return;
    const firstMatch = integrations.findIndex((item) => item.category === nextCategory);
    if (firstMatch >= 0) setSelected(firstMatch);
  };

  return (
    <SiteShell>
      <section className="relative overflow-hidden">
        <GradientMesh />
        <div className="relative max-w-[1200px] mx-auto px-6 pt-20 pb-24 grid lg:grid-cols-[0.92fr_1.08fr] gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] text-[color:var(--color-brand-primary-deep)] bg-[color:var(--color-brand-primary-subdued)] px-3 py-1.5 rounded-full">
              <PlugZap className="w-3.5 h-3.5" />
              Integration patterns · Demo
            </div>
            <h1
              className="mt-6 text-[46px] md:text-[58px] leading-[1.02] font-light text-[color:var(--color-ink)]"
              style={{ letterSpacing: "-1.5px" }}
            >
              Connect the systems that detect risk to the teams that resolve it.
            </h1>
            <p className="mt-6 text-[17px] leading-[1.55] text-[color:var(--color-ink-secondary)] max-w-xl">
              Bankxio sits between source platforms and human operations, carrying the context,
              ownership, deadlines and outcomes needed to complete the case.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/request-demo" className="btn-pill btn-primary">
                Map my stack
              </Link>
              <a href="#catalogue" className="btn-pill btn-secondary">
                Explore integrations
              </a>
            </div>
            <p className="mt-6 text-[11px] text-[color:var(--color-ink-mute-2)]">
              All connectors and event names shown are illustrative for this demo.
            </p>
          </div>
          <IntegrationFlow active={active} />
        </div>
      </section>

      <section id="catalogue" className="py-24 bg-white scroll-mt-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-[0.12em] text-[color:var(--color-brand-primary-deep)] mb-3">
              Integration catalogue
            </div>
            <h2
              className="text-[36px] md:text-[44px] leading-[1.08] font-light text-[color:var(--color-ink)]"
              style={{ letterSpacing: "-1px" }}
            >
              Design around the stack you already operate.
            </h2>
            <p className="mt-5 text-[16px] leading-[1.6] text-[color:var(--color-ink-mute-2)]">
              Filter the demo catalogue, then select an integration to preview its role in the
              operational data flow.
            </p>
          </div>
          <div
            className="mt-9 flex flex-wrap gap-2"
            role="tablist"
            aria-label="Integration categories"
          >
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={category === item}
                onClick={() => selectCategory(item)}
                className={`rounded-full border px-4 py-2 text-[13px] transition-colors ${
                  category === item
                    ? "bg-[color:var(--color-brand-dark-900)] border-transparent text-white"
                    : "bg-white border-[color:var(--color-hairline)] text-[color:var(--color-ink)] hover:border-[color:var(--color-brand-primary)]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {visible.map((item) => {
              const originalIndex = integrations.indexOf(item);
              const isSelected = originalIndex === selected;
              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setSelected(originalIndex)}
                  className={`rounded-xl border p-6 text-left hover-lift ${
                    isSelected
                      ? "border-[color:var(--color-brand-primary)] bg-[color:var(--color-canvas-soft)]"
                      : "border-[color:var(--color-hairline)] bg-white"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="w-10 h-10 rounded-lg bg-[color:var(--color-brand-primary-subdued)] flex items-center justify-center">
                      <item.icon className="w-4.5 h-4.5 text-[color:var(--color-brand-primary-press)]" />
                    </span>
                    <span className="rounded-full bg-white border border-[color:var(--color-hairline)] px-2.5 py-1 text-[10px] text-[color:var(--color-ink-mute-2)]">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="mt-5 text-[19px] font-light text-[color:var(--color-ink)]">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-[13px] leading-[1.55] text-[color:var(--color-ink-mute-2)]">
                    {item.description}
                  </p>
                  <div className="mt-5 pt-4 border-t border-[color:var(--color-hairline)] text-[11px] text-[color:var(--color-brand-primary-deep)]">
                    {item.direction}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-8">
            <IntegrationFlow active={active} compact />
          </div>
        </div>
      </section>

      <section className="py-24 bg-[color:var(--color-canvas-soft)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-[0.12em] text-[color:var(--color-brand-primary-deep)] mb-3">
              Connection methods
            </div>
            <h2
              className="text-[36px] md:text-[44px] leading-[1.08] font-light text-[color:var(--color-ink)]"
              style={{ letterSpacing: "-1px" }}
            >
              Choose the integration pattern that fits the control environment.
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: Code2,
                title: "REST API",
                body: "Create, enrich and update cases through scoped endpoints.",
              },
              {
                icon: Webhook,
                title: "Webhooks",
                body: "Send operational events when ownership, status or SLA changes.",
              },
              {
                icon: FileKey2,
                title: "Secure batch",
                body: "Import structured records through a controlled scheduled process.",
              },
              {
                icon: RefreshCw,
                title: "Managed connector",
                body: "Configure repeatable mappings for common operational systems.",
              },
            ].map((method) => (
              <div
                key={method.title}
                className="rounded-xl border border-[color:var(--color-hairline)] bg-white p-6 hover-lift"
              >
                <method.icon className="w-5 h-5 text-[color:var(--color-brand-primary)]" />
                <h3 className="mt-5 text-[18px] font-light text-[color:var(--color-ink)]">
                  {method.title}
                </h3>
                <p className="mt-2 text-[13px] leading-[1.55] text-[color:var(--color-ink-mute-2)]">
                  {method.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[color:var(--color-brand-dark-900)] text-white">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <h2 className="text-[36px] md:text-[46px] font-light" style={{ letterSpacing: "-1px" }}>
            Bring your stack to the walkthrough.
          </h2>
          <p className="mt-4 text-[16px] text-white/70">
            We will map the event sources, required evidence, ownership and resolution outputs in
            one example flow.
          </p>
          <Link to="/request-demo" className="btn-pill btn-on-dark mt-8">
            Map an integration <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}

function IntegrationFlow({ active, compact = false }: { active: Integration; compact?: boolean }) {
  return (
    <div
      className={`rounded-2xl border border-[color:var(--color-hairline)] bg-white shadow-[0_24px_70px_rgba(0,55,112,0.11)] ${compact ? "p-5 md:p-7" : "p-5 md:p-7"}`}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="w-10 h-10 rounded-lg bg-[color:var(--color-brand-primary-subdued)] flex items-center justify-center">
            <active.icon className="w-4.5 h-4.5 text-[color:var(--color-brand-primary-press)]" />
          </span>
          <div>
            <div className="text-[10px] uppercase tracking-[0.09em] text-[color:var(--color-ink-mute-2)]">
              Selected source
            </div>
            <div className="mt-1 text-[14px] text-[color:var(--color-ink)]">{active.name}</div>
          </div>
        </div>
        <span className="rounded-full bg-[color:var(--color-canvas-soft)] px-3 py-1 text-[10px] text-[color:var(--color-ink-mute-2)]">
          Illustrative flow
        </span>
      </div>

      <div
        className={`mt-6 grid ${compact ? "md:grid-cols-[1fr_auto_1fr_auto_1fr]" : "sm:grid-cols-[1fr_auto_1fr]"} gap-3 items-center`}
      >
        <FlowNode icon={active.icon} label="Source event" value={active.events[0]} />
        <ArrowDirection vertical={!compact} />
        <FlowNode icon={Blocks} label="Bankxio case" value="Context + owner + SLA" emphasis />
        {compact && (
          <>
            <ArrowDirection />
            <FlowNode icon={CheckCircle2} label="Controlled outcome" value={active.events[2]} />
          </>
        )}
      </div>

      {!compact && (
        <div className="mt-5 rounded-xl bg-[color:var(--color-canvas-soft)] p-4">
          <div className="text-[10px] uppercase tracking-[0.08em] text-[color:var(--color-ink-mute-2)]">
            Example events
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {active.events.map((event) => (
              <span
                key={event}
                className="rounded-md bg-white border border-[color:var(--color-hairline)] px-2.5 py-1.5 text-[10px] tnum text-[color:var(--color-ink)]"
              >
                {event}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function FlowNode({
  icon: Icon,
  label,
  value,
  emphasis = false,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  emphasis?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-4 ${emphasis ? "border-transparent bg-[color:var(--color-brand-dark-900)] text-white" : "border-[color:var(--color-hairline)] bg-[color:var(--color-canvas-soft)]"}`}
    >
      <Icon
        className={`w-4 h-4 ${emphasis ? "text-[#b9b9f9]" : "text-[color:var(--color-brand-primary)]"}`}
      />
      <div
        className={`mt-4 text-[10px] uppercase tracking-[0.08em] ${emphasis ? "text-white/55" : "text-[color:var(--color-ink-mute-2)]"}`}
      >
        {label}
      </div>
      <div
        className={`mt-1 text-[12px] tnum ${emphasis ? "text-white" : "text-[color:var(--color-ink)]"}`}
      >
        {value}
      </div>
    </div>
  );
}

function ArrowDirection({ vertical = false }: { vertical?: boolean }) {
  if (vertical) {
    return (
      <ArrowDown className="w-4 h-4 mx-auto text-[color:var(--color-brand-primary)] sm:rotate-[-90deg]" />
    );
  }
  return <ArrowRight className="hidden md:block w-4 h-4 text-[color:var(--color-brand-primary)]" />;
}

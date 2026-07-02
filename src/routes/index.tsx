import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Play, ChevronRight, IdCard, AlertTriangle, MessageSquare, Timer, Check } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { GradientMesh } from "@/components/site/GradientMesh";
import { WorkflowAnimation } from "@/components/site/WorkflowAnimation";
import { TrustedBy } from "@/components/site/TrustedBy";
import { ProductsBento } from "@/components/site/ProductsBento";
import { DashboardMockup } from "@/components/site/DashboardMockup";
import { IntegrationDiagram } from "@/components/site/IntegrationDiagram";
import { CountUp } from "@/components/site/CountUp";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <SiteShell>
      <Hero />
      <TrustedBy />
      <Problem />
      <Solution />
      <Products />
      <Dashboard />
      <Integrations />
      <Benefits />
      <Pricing />
      <Statistics />
      <Testimonial />
      <FAQ />
      <FinalCTA />
    </SiteShell>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <GradientMesh className="h-[80vh]" />
      <div className="relative max-w-[1200px] mx-auto px-6 pt-16 pb-24 grid lg:grid-cols-[1.05fr_1fr] gap-14 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] text-[color:var(--color-brand-primary-deep)] bg-[color:var(--color-brand-primary-subdued)] px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 bg-[color:var(--color-brand-primary)] rounded-full" />
            Operations platform for financial institutions
          </div>
          <h1 className="mt-6 text-[44px] md:text-[56px] lg:text-[60px] leading-[1.02] font-light text-[color:var(--color-ink)]" style={{ letterSpacing: "-1.6px" }}>
            Resolve compliance cases at operational speed.
          </h1>
          <p className="mt-6 text-[17px] leading-[1.5] text-[color:var(--color-ink-secondary)] max-w-xl">
            Bankza helps fintechs, neobanks, lenders and payment institutions manage KYC exceptions, transaction alerts, customer disputes, complaints and compliance queues from one intelligent operations platform.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/request-demo" className="btn-pill btn-primary">Request Demo</Link>
            <button className="btn-pill btn-secondary"><Play className="w-3.5 h-3.5" /> Watch Platform Tour</button>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-[13px] text-[color:var(--color-ink-mute)]">
            <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[color:var(--color-brand-primary)]" /> SOC 2 Type II</div>
            <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[color:var(--color-brand-primary)]" /> ISO 27001</div>
            <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[color:var(--color-brand-primary)]" /> GDPR aligned</div>
          </div>
        </div>
        <div>
          <WorkflowAnimation />
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const cards = [
    { icon: IdCard, title: "KYC Exceptions", badge: "Manual Review", tone: "indigo", body: "Customer verification requests managed manually across multiple disconnected systems." },
    { icon: AlertTriangle, title: "Transaction Alerts", badge: "High Priority", tone: "ruby", body: "Fraud and AML alerts reviewed using disconnected tools and spreadsheets." },
    { icon: MessageSquare, title: "Customer Disputes", badge: "Pending", tone: "magenta", body: "Evidence, communication and decisions scattered across emails and internal notes." },
    { icon: Timer, title: "SLA Tracking", badge: "At Risk", tone: "amber", body: "Response deadlines monitored manually, increasing operational risk." },
  ] as const;
  const toneMap: Record<string, string> = {
    indigo: "bg-[#eeeafd] text-[#533afd]",
    ruby: "bg-[#fde8ee] text-[#ea2261]",
    magenta: "bg-[#fee6fc] text-[#c634bd]",
    amber: "bg-[#fef3d5] text-[#9b6829]",
  };
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
        <div className="lg:sticky lg:top-28">
          <h2 className="text-[36px] md:text-[44px] leading-[1.08] font-light text-[color:var(--color-ink)]" style={{ letterSpacing: "-1px" }}>
            Operations teams spend too much time switching between systems.
          </h2>
          <p className="mt-5 text-[16px] leading-[1.55] text-[color:var(--color-ink-mute)] max-w-md">
            A single customer case often requires information from compliance, fraud, customer support, payments and core banking systems. Teams waste valuable time navigating disconnected workflows instead of resolving issues.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {cards.map((c) => (
            <div key={c.title} className="card-base p-6 hover-lift group cursor-pointer">
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${toneMap[c.tone]}`}>
                <c.icon className="w-4 h-4" />
              </div>
              <div className="mt-5 flex items-center justify-between">
                <h3 className="text-[17px] font-normal text-[color:var(--color-ink)]">{c.title}</h3>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${toneMap[c.tone]}`}>{c.badge}</span>
              </div>
              <p className="mt-2 text-[14px] leading-[1.55] text-[color:var(--color-ink-mute)]">{c.body}</p>
              <div className="mt-4 pt-4 border-t border-[color:var(--color-hairline)] flex items-center gap-1 text-[13px] text-[color:var(--color-brand-primary)] opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solution() {
  return (
    <section id="solutions" className="py-24 bg-[color:var(--color-canvas-soft)]">
      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <WorkflowAnimation />
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-[0.12em] text-[color:var(--color-brand-primary-deep)] mb-3">The solution</div>
          <h2 className="text-[36px] md:text-[44px] leading-[1.08] font-light text-[color:var(--color-ink)]" style={{ letterSpacing: "-1px" }}>
            One workspace for every operational case.
          </h2>
          <p className="mt-5 text-[16px] leading-[1.55] text-[color:var(--color-ink-mute)] max-w-lg">
            Bankza centralises case management, AI-generated summaries and SLA monitoring into one unified platform so operations teams can investigate, collaborate and resolve issues faster.
          </p>
          <ul className="mt-6 space-y-3">
            {["Unified queue across every case type", "AI summaries surface the next best action", "SLA automation with escalation paths", "Complete audit-ready investigation history"].map((f) => (
              <li key={f} className="flex items-center gap-3 text-[15px] text-[color:var(--color-ink)]">
                <span className="w-5 h-5 rounded-full bg-[color:var(--color-brand-primary)] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-3xl mb-14">
          <div className="text-[11px] uppercase tracking-[0.12em] text-[color:var(--color-brand-primary-deep)] mb-3">Products</div>
          <h2 className="text-[36px] md:text-[46px] leading-[1.08] font-light text-[color:var(--color-ink)]" style={{ letterSpacing: "-1.1px" }}>
            Three products. One operational platform.
          </h2>
        </div>
        <ProductsBento />
      </div>
    </section>
  );
}

function Dashboard() {
  return (
    <section className="py-24 bg-[color:var(--color-canvas-soft)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <div className="text-[11px] uppercase tracking-[0.12em] text-[color:var(--color-brand-primary-deep)] mb-3">Platform</div>
          <h2 className="text-[36px] md:text-[44px] leading-[1.08] font-light text-[color:var(--color-ink)]" style={{ letterSpacing: "-1px" }}>
            Every investigation. Every decision. One operational view.
          </h2>
          <p className="mt-5 text-[16px] leading-[1.55] text-[color:var(--color-ink-mute)]">
            Monitor active investigations, workload, AI summaries and SLA performance from a single command centre designed for modern fintech operations.
          </p>
        </div>
        <DashboardMockup />
      </div>
    </section>
  );
}

function Integrations() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-4">
          <div className="text-[11px] uppercase tracking-[0.12em] text-[color:var(--color-brand-primary-deep)] mb-3">Integrations</div>
          <h2 className="text-[36px] md:text-[44px] leading-[1.08] font-light text-[color:var(--color-ink)]" style={{ letterSpacing: "-1px" }}>
            Connect to your existing operations stack.
          </h2>
          <p className="mt-5 text-[16px] leading-[1.55] text-[color:var(--color-ink-mute)]">
            Bankza works alongside your existing financial systems so your teams never need to change how they operate.
          </p>
        </div>
        <IntegrationDiagram />
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    "Reduce investigation time with AI-assisted workflows.",
    "Centralise operational knowledge across teams.",
    "Meet compliance deadlines with automated SLA tracking.",
    "Improve audit readiness with complete investigation histories.",
  ];
  return (
    <section className="py-24 bg-[color:var(--color-canvas-cream)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-[36px] md:text-[44px] leading-[1.08] font-light text-[color:var(--color-ink)] mb-12" style={{ letterSpacing: "-1px" }}>
          Designed for operational efficiency.
        </h2>
        <div className="grid md:grid-cols-2 gap-5">
          {items.map((it, i) => (
            <div key={it} className="bg-white/70 backdrop-blur border border-[#e8dcc3] rounded-xl p-7 hover-lift">
              <div className="text-[11px] tnum text-[color:var(--color-ink-mute)]">0{i + 1}</div>
              <p className="mt-3 text-[19px] font-light leading-[1.35] text-[color:var(--color-ink)]" style={{ letterSpacing: "-0.3px" }}>{it}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const tiers = [
    {
      name: "Professional",
      price: "€ 1,490",
      cadence: "per month",
      desc: "Everything needed to manage operational cases.",
      features: ["Unlimited cases", "AI summaries", "SLA monitoring", "Team collaboration", "Dashboard", "Email support"],
      cta: "Request Demo",
      to: "/request-demo" as const,
    },
    {
      name: "Business",
      price: "€ 3,900",
      cadence: "per month",
      desc: "Includes everything in Professional plus advanced controls.",
      features: ["Advanced workflows", "Custom SLAs", "API access", "Role permissions", "Audit exports", "Priority support"],
      cta: "Request Demo",
      to: "/request-demo" as const,
      featured: true,
      badge: "Most popular",
    },
    {
      name: "Enterprise",
      price: "Custom",
      cadence: "annual contract",
      desc: "Includes everything in Business plus enterprise controls.",
      features: ["Dedicated environment", "SSO", "Custom integrations", "Compliance consulting", "Enterprise support", "Account manager"],
      cta: "Contact Sales",
      to: "/request-demo" as const,
    },
  ];
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <div className="text-[11px] uppercase tracking-[0.12em] text-[color:var(--color-brand-primary-deep)] mb-3">Pricing</div>
          <h2 className="text-[36px] md:text-[44px] leading-[1.08] font-light text-[color:var(--color-ink)]" style={{ letterSpacing: "-1px" }}>
            Pricing built for growing financial operations teams.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t) => {
            const dark = t.featured;
            return (
              <div key={t.name} className={`relative rounded-xl border p-8 flex flex-col hover-lift ${dark ? "bg-[color:var(--color-brand-dark-900)] text-white border-transparent" : "bg-white border-[color:var(--color-hairline)]"}`}>
                {t.badge && (
                  <span className="absolute -top-3 left-8 text-[10px] uppercase tracking-[0.1em] bg-[color:var(--color-brand-primary)] text-white px-3 py-1 rounded-full">{t.badge}</span>
                )}
                <div className="text-[22px] font-light" style={{ letterSpacing: "-0.3px" }}>{t.name}</div>
                <p className={`mt-2 text-[14px] leading-[1.5] ${dark ? "text-white/70" : "text-[color:var(--color-ink-mute)]"}`}>{t.desc}</p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-[36px] font-light tnum" style={{ letterSpacing: "-1px" }}>{t.price}</span>
                  <span className={`text-[13px] ${dark ? "text-white/60" : "text-[color:var(--color-ink-mute)]"}`}>{t.cadence}</span>
                </div>
                <ul className="mt-6 space-y-2.5 flex-1">
                  {t.features.map((f) => (
                    <li key={f} className={`flex items-center gap-2 text-[14px] ${dark ? "text-white/90" : "text-[color:var(--color-ink)]"}`}>
                      <Check className={`w-4 h-4 ${dark ? "text-[#665efd]" : "text-[color:var(--color-brand-primary)]"}`} /> {f}
                    </li>
                  ))}
                </ul>
                <Link to={t.to} className={`btn-pill mt-8 w-full justify-center ${dark ? "btn-on-dark" : "btn-primary"}`}>{t.cta}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Statistics() {
  const stats = [
    { v: 250, s: "K+", label: "Cases processed monthly" },
    { v: 95, s: "%", label: "Resolved within SLA" },
    { v: 68, s: "%", label: "Faster investigation time" },
    { v: 99.9, s: "%", label: "Platform availability", d: 1 },
  ];
  return (
    <section className="py-24 bg-[color:var(--color-canvas-soft)]">
      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="card-base p-8 hover-lift">
            <div className="text-[46px] font-light text-[color:var(--color-ink)]" style={{ letterSpacing: "-1.4px" }}>
              <CountUp value={s.v} suffix={s.s} decimals={s.d ?? 0} />
            </div>
            <p className="mt-2 text-[14px] text-[color:var(--color-ink-mute)]">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[900px] mx-auto px-6 text-center">
        <div className="text-[11px] uppercase tracking-[0.12em] text-[color:var(--color-brand-primary-deep)] mb-6">Testimonial</div>
        <blockquote className="text-[28px] md:text-[34px] font-light leading-[1.35] text-[color:var(--color-ink)]" style={{ letterSpacing: "-0.6px" }}>
          &ldquo;Bankza transformed how our operations team manages compliance cases. Investigations that previously required multiple systems are now completed from one unified workspace, significantly reducing response times.&rdquo;
        </blockquote>
        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="w-11 h-11 rounded-full flex items-center justify-center text-white font-light" style={{ background: "linear-gradient(135deg,#533afd,#ea2261)" }}>AK</div>
          <div className="text-left">
            <div className="text-[15px] text-[color:var(--color-ink)]">Anna Kowalska</div>
            <div className="text-[13px] text-[color:var(--color-ink-mute)]">Head of Operations · European Payment Institution</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "What types of cases can Bankza manage?", a: "Bankza supports KYC exceptions, transaction alerts, customer disputes, complaints, fraud investigations and operational compliance workflows." },
    { q: "Does Bankza integrate with existing banking systems?", a: "Yes. Bankza connects with core banking platforms, KYC providers, AML systems, CRMs, customer support platforms and payment processors." },
    { q: "How do AI summaries work?", a: "Bankza automatically generates concise summaries from case activity while maintaining complete audit history." },
    { q: "Can SLA rules be customised?", a: "Yes. Teams can define response targets, escalation rules and priority levels." },
  ];
  return (
    <section className="py-24 bg-[color:var(--color-canvas-soft)]">
      <div className="max-w-[820px] mx-auto px-6">
        <h2 className="text-[36px] md:text-[42px] font-light text-[color:var(--color-ink)] mb-10" style={{ letterSpacing: "-1px" }}>
          Frequently asked questions
        </h2>
        <div className="divide-y divide-[color:var(--color-hairline)] border-y border-[color:var(--color-hairline)] bg-white rounded-xl">
          {faqs.map((f) => (
            <details key={f.q} className="group px-6 py-5">
              <summary className="flex items-center justify-between cursor-pointer list-none text-[16px] text-[color:var(--color-ink)]">
                {f.q}
                <ChevronRight className="w-4 h-4 transition-transform group-open:rotate-90 text-[color:var(--color-ink-mute)]" />
              </summary>
              <p className="mt-3 text-[15px] leading-[1.6] text-[color:var(--color-ink-mute)]">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-[color:var(--color-brand-dark-900)] text-white">
      <div aria-hidden className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(60% 100% at 20% 0%, #533afd 0%, transparent 60%), radial-gradient(60% 100% at 90% 100%, #ea2261 0%, transparent 60%)" }} />
      <div className="relative max-w-[900px] mx-auto px-6 text-center">
        <h2 className="text-[40px] md:text-[52px] font-light" style={{ letterSpacing: "-1.2px" }}>
          Modernise your financial operations.
        </h2>
        <p className="mt-5 text-[17px] text-white/70 max-w-2xl mx-auto">
          See how Bankza helps operations teams resolve compliance cases faster with intelligent workflows, AI summaries and real-time SLA management.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link to="/request-demo" className="btn-pill btn-on-dark">Request Demo</Link>
        </div>
      </div>
    </section>
  );
}

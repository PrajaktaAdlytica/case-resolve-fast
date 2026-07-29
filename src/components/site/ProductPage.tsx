import { Link } from "@tanstack/react-router";
import { ChevronRight, Check } from "lucide-react";
import type { ReactNode } from "react";
import { GradientMesh } from "./GradientMesh";

export interface ProductPageProps {
  eyebrow: string;
  title: string;
  description: string;
  heroVisual: ReactNode;
  overviewTitle: string;
  overviewBody: string;
  features: { title: string; body: string }[];
  benefits: string[];
  faqs: { q: string; a: string }[];
  dashboardMockup: ReactNode;
  afterOverview?: ReactNode;
}

export function ProductPage(p: ProductPageProps) {
  return (
    <>
      <section className="relative overflow-hidden">
        <GradientMesh />
        <div className="relative max-w-[1200px] mx-auto px-6 pt-20 pb-24 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] text-[color:var(--color-brand-primary-deep)] bg-[color:var(--color-brand-primary-subdued)] px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 bg-[color:var(--color-brand-primary)] rounded-full" />
              {p.eyebrow}
            </div>
            <h1 className="mt-5 text-[46px] md:text-[54px] leading-[1.03] font-light text-[color:var(--color-ink)]" style={{ letterSpacing: "-1.3px" }}>
              {p.title}
            </h1>
            <p className="mt-5 text-[17px] leading-[1.5] text-[color:var(--color-ink-secondary)] max-w-lg">{p.description}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/request-demo" className="btn-pill btn-primary">Request Demo</Link>
              <Link to="/signin" className="btn-pill btn-secondary">Sign In</Link>
            </div>
          </div>
          <div>{p.heroVisual}</div>
        </div>
      </section>

      <section className="bg-[color:var(--color-canvas-soft)] py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-2xl">
            <h2 className="text-[36px] md:text-[42px] leading-[1.1] font-light text-[color:var(--color-ink)]" style={{ letterSpacing: "-0.9px" }}>
              {p.overviewTitle}
            </h2>
            <p className="mt-5 text-[16px] leading-[1.55] text-[color:var(--color-ink-secondary)]">{p.overviewBody}</p>
          </div>
          <div className="mt-12">{p.dashboardMockup}</div>
        </div>
      </section>

      {p.afterOverview}

      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[32px] md:text-[38px] leading-[1.1] font-light text-[color:var(--color-ink)] mb-14" style={{ letterSpacing: "-0.7px" }}>
            Built for financial operations teams
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {p.features.map((f) => (
              <div key={f.title} className="card-base p-8 hover-lift">
                <div className="w-10 h-10 rounded-lg bg-[color:var(--color-brand-primary-subdued)] flex items-center justify-center mb-5">
                  <Check className="w-4 h-4 text-[color:var(--color-brand-primary-deep)]" />
                </div>
                <h3 className="text-[19px] font-light text-[color:var(--color-ink)]" style={{ letterSpacing: "-0.2px" }}>{f.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.55] text-[color:var(--color-ink-mute)]">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[color:var(--color-canvas-cream)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[32px] md:text-[38px] font-light text-[color:var(--color-ink)] mb-12" style={{ letterSpacing: "-0.7px" }}>
            Why teams choose Bankxio
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {p.benefits.map((b) => (
              <div key={b} className="bg-white/60 border border-[#e8dcc3] rounded-xl p-6 hover-lift flex items-start gap-3">
                <span className="w-8 h-8 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-[color:var(--color-brand-primary)]" />
                </span>
                <p className="text-[15px] leading-[1.5] text-[color:var(--color-ink)]">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[820px] mx-auto px-6">
          <h2 className="text-[32px] md:text-[38px] font-light text-[color:var(--color-ink)] mb-10" style={{ letterSpacing: "-0.7px" }}>
            Frequently asked questions
          </h2>
          <div className="divide-y divide-[color:var(--color-hairline)] border-y border-[color:var(--color-hairline)]">
            {p.faqs.map((f) => (
              <details key={f.q} className="group py-5">
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

      <section className="py-24 bg-[color:var(--color-brand-dark-900)] text-white">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <h2 className="text-[36px] md:text-[44px] font-light" style={{ letterSpacing: "-0.9px" }}>
            See {p.eyebrow.toLowerCase()} in action
          </h2>
          <p className="mt-4 text-[16px] text-white/70">Book a personalised walkthrough with our team.</p>
          <div className="mt-8 flex justify-center gap-3">
            <Link to="/request-demo" className="btn-pill btn-on-dark">Request Demo</Link>
          </div>
        </div>
      </section>
    </>
  );
}

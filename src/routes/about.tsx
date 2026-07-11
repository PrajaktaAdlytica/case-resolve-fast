import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { GradientMesh } from "@/components/site/GradientMesh";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Bankxio — Modern operations for financial institutions" },
      { name: "description", content: "Bankxio builds the operations platform used by fintechs, neobanks, lenders and payment institutions across Europe." },
      { property: "og:title", content: "About Bankxio" },
      { property: "og:description", content: "Building the operations platform for modern financial institutions." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden">
        <GradientMesh />
        <div className="relative max-w-[900px] mx-auto px-6 py-24 text-center">
          <div className="text-[11px] uppercase tracking-[0.12em] text-[color:var(--color-brand-primary-deep)] mb-4">About</div>
          <h1 className="text-[44px] md:text-[56px] leading-[1.05] font-light text-[color:var(--color-ink)]" style={{ letterSpacing: "-1.4px" }}>
            Building the operations platform for modern financial institutions.
          </h1>
          <p className="mt-6 text-[17px] leading-[1.55] text-[color:var(--color-ink-secondary)]">
            Bankxio is an Odra Venture company headquartered in Warsaw. We help fintechs, neobanks, lenders and payment institutions across Europe run their compliance and operations teams on a single, intelligent workspace.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Link to="/request-demo" className="btn-pill btn-primary">Request Demo</Link>
            <Link to="/" className="btn-pill btn-secondary">Explore the platform</Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1000px] mx-auto px-6 grid md:grid-cols-3 gap-6">
          {[
            { t: "Operations-first", d: "We build for the teams doing the daily work — compliance, fraud, support, risk — not for slide decks." },
            { t: "European by design", d: "GDPR-aligned data residency, EU-hosted infrastructure and a team that understands local regulation." },
            { t: "AI that assists", d: "AI accelerates investigators without replacing their judgement — every decision stays with your team." },
          ].map((v) => (
            <div key={v.t} className="card-base p-8 hover-lift">
              <h3 className="text-[19px] font-light text-[color:var(--color-ink)]" style={{ letterSpacing: "-0.2px" }}>{v.t}</h3>
              <p className="mt-3 text-[14px] leading-[1.55] text-[color:var(--color-ink-mute)]">{v.d}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
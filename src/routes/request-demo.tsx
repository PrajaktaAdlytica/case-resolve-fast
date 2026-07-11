import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { GradientMesh } from "@/components/site/GradientMesh";
import { Check } from "lucide-react";

export const Route = createFileRoute("/request-demo")({
  head: () => ({
    meta: [
      { title: "Request a demo — Bankxio" },
      { name: "description", content: "Book a personalised walkthrough of the Bankxio operations platform." },
      { property: "og:title", content: "Request a demo — Bankxio" },
      { property: "og:description", content: "See Bankxio in action with a personalised platform walkthrough." },
    ],
  }),
  component: RequestDemo,
});

function RequestDemo() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden">
        <GradientMesh />
        <div className="relative max-w-[1200px] mx-auto px-6 py-20 grid lg:grid-cols-[1fr_1.1fr] gap-14 items-start">
          <div>
            <div className="text-[11px] uppercase tracking-[0.12em] text-[color:var(--color-brand-primary-deep)] mb-3">Request demo</div>
            <h1 className="text-[40px] md:text-[52px] leading-[1.05] font-light text-[color:var(--color-ink)]" style={{ letterSpacing: "-1.4px" }}>
              See Bankxio in action.
            </h1>
            <p className="mt-5 text-[16px] leading-[1.55] text-[color:var(--color-ink-secondary)] max-w-md">
              A 30-minute personalised walkthrough of the operations platform, tailored to how your team manages compliance cases today.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Live demo of case management, AI summaries and SLA monitoring",
                "Q&A with a Bankxio operations specialist",
                "Custom-fit review of your workflows and integrations",
                "No credit card, no commitment",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-[15px] text-[color:var(--color-ink)]">
                  <span className="w-5 h-5 rounded-full bg-[color:var(--color-brand-primary)] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-10 card-base p-6 bg-white/80 backdrop-blur">
              <blockquote className="text-[15px] leading-[1.5] text-[color:var(--color-ink)]">
                &ldquo;Bankxio transformed how our operations team manages compliance cases. Investigations now happen in one workspace.&rdquo;
              </blockquote>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-[13px]" style={{ background: "linear-gradient(135deg,#533afd,#ea2261)" }}>AK</div>
                <div>
                  <div className="text-[13px] text-[color:var(--color-ink)]">Anna Kowalska</div>
                  <div className="text-[12px] text-[color:var(--color-ink-mute)]">Head of Operations · European Payment Institution</div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-base p-8 md:p-10 shadow-[0_30px_80px_rgba(0,55,112,0.1)]">
            <h2 className="text-[22px] font-light text-[color:var(--color-ink)]" style={{ letterSpacing: "-0.3px" }}>Tell us about your team</h2>
            <form className="mt-6 grid grid-cols-2 gap-4">
              <Field label="Full name" placeholder="Anna Kowalska" span={2} />
              <Field label="Work email" type="email" placeholder="you@company.com" span={2} />
              <Field label="Company" placeholder="Acme Payments" />
              <Field label="Job title" placeholder="Head of Operations" />
              <SelectField label="Country" options={["Poland", "Germany", "United Kingdom", "France", "Netherlands", "Spain", "Italy", "Other"]} />
              <SelectField label="Company size" options={["1–50", "51–200", "201–500", "501–1,000", "1,000+"]} />
              <label className="col-span-2 block">
                <span className="text-[13px] text-[color:var(--color-ink)]">Message</span>
                <textarea rows={4} placeholder="Tell us about your operational challenges" className="mt-1.5 w-full rounded-md border border-[color:var(--color-hairline-input)] px-3 py-2.5 text-[15px] text-[color:var(--color-ink)] focus:outline-none focus:border-[color:var(--color-brand-primary)] focus:ring-2 focus:ring-[color:var(--color-brand-primary)]/15 transition" />
              </label>
              <button type="button" className="btn-pill btn-primary col-span-2 justify-center">Request Demo</button>
              <p className="col-span-2 text-[12px] text-[color:var(--color-ink-mute)] text-center">
                By submitting, you agree to our <a href="#" className="text-[color:var(--color-brand-primary)] hover:underline">privacy policy</a>.
              </p>
            </form>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

function Field({ label, span = 1, ...rest }: { label: string; span?: 1 | 2 } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className={`block ${span === 2 ? "col-span-2" : ""}`}>
      <span className="text-[13px] text-[color:var(--color-ink)]">{label}</span>
      <input {...rest} className="mt-1.5 w-full h-11 rounded-md border border-[color:var(--color-hairline-input)] px-3 text-[15px] text-[color:var(--color-ink)] focus:outline-none focus:border-[color:var(--color-brand-primary)] focus:ring-2 focus:ring-[color:var(--color-brand-primary)]/15 transition" />
    </label>
  );
}

function SelectField({ label, options }: { label: string; options: string[] }) {
  return (
    <label className="block">
      <span className="text-[13px] text-[color:var(--color-ink)]">{label}</span>
      <select className="mt-1.5 w-full h-11 rounded-md border border-[color:var(--color-hairline-input)] px-3 text-[15px] text-[color:var(--color-ink)] bg-white focus:outline-none focus:border-[color:var(--color-brand-primary)] focus:ring-2 focus:ring-[color:var(--color-brand-primary)]/15 transition">
        <option value="">Select…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );
}
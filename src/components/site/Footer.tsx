import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

const DLABS_PORTFOLIO_URL = "https://d-labs-site.vercel.app/companies";
const LINKEDIN_URL = "https://www.linkedin.com/company/bankxio/";
const CRUNCHBASE_URL = "https://www.crunchbase.com/organization/bankxio";

const cols = [
  {
    title: "Products",
    links: [
      { label: "Bankxio Cases", to: "/products/cases" },
      { label: "Bankxio Summaries", to: "/products/summaries" },
      { label: "Bankxio SLA", to: "/products/sla" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Funding announcement", to: "/news/funding-announcement" },
      { label: "Solutions", to: "/", hash: "solutions" },
      { label: "Pricing", to: "/", hash: "pricing" },
      { label: "Request Demo", to: "/request-demo" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", to: "/" },
      { label: "API", to: "/" },
      { label: "Privacy Policy", to: "/" },
      { label: "Terms of Service", to: "/" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-white border-t border-[color:var(--color-hairline)]">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          <div className="col-span-2 lg:col-span-2 pr-8">
            <Logo />
            <p className="mt-4 text-[14px] leading-[1.6] text-[color:var(--color-ink-mute)] max-w-xs">
              Modern operations platform for fintechs, neobanks, lenders and payment institutions
              managing compliance cases, AI summaries and SLA monitoring.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-[11px] uppercase tracking-[0.1em] text-[color:var(--color-ink-mute)] font-medium mb-4">
                {c.title}
              </div>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      hash={"hash" in l ? l.hash : undefined}
                      className="text-[14px] text-[color:var(--color-ink)] hover:text-[color:var(--color-brand-primary)] transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <div className="text-[11px] uppercase tracking-[0.1em] text-[color:var(--color-ink-mute)] font-medium mb-4">
              Contact
            </div>
            <ul className="space-y-2.5 text-[14px] text-[color:var(--color-ink)]">
              <li>Warsaw, Poland</li>
              <li>
                <a
                  href="mailto:contact@bankxio.com"
                  className="hover:text-[color:var(--color-brand-primary)] transition-colors"
                >
                  contact@bankxio.com
                </a>
              </li>
              <li className="tnum">+48 22 000 0000</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 rounded-xl border border-[color:var(--color-hairline)] bg-[color:var(--color-canvas-soft)] px-5 py-4 sm:px-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <span className="text-[14px] text-[color:var(--color-ink)]">Backed by Dlabs</span>
              <span className="hidden h-1 w-1 rounded-full bg-[color:var(--color-brand-primary)] sm:block" />
              <span className="tnum text-[14px] text-[color:var(--color-ink)]">$525K funding</span>
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-[color:var(--color-ink-mute)]">
              <a
                href={DLABS_PORTFOLIO_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="transition-colors hover:text-[color:var(--color-brand-primary)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--color-brand-primary)]"
              >
                Dlabs portfolio
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="transition-colors hover:text-[color:var(--color-brand-primary)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--color-brand-primary)]"
              >
                LinkedIn
              </a>
              <a
                href={CRUNCHBASE_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="transition-colors hover:text-[color:var(--color-brand-primary)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--color-brand-primary)]"
              >
                Crunchbase
              </a>
            </div>
          </div>
        </div>
        <div className="mt-14 pt-6 border-t border-[color:var(--color-hairline)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[13px] text-[color:var(--color-ink-mute)]">
            © 2026 Bankxio. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[13px] text-[color:var(--color-ink-mute)]">
            <a href="#" className="hover:text-[color:var(--color-brand-primary)] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[color:var(--color-brand-primary)] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-[color:var(--color-brand-primary)] transition-colors">
              Security
            </a>
            <a href="#" className="hover:text-[color:var(--color-brand-primary)] transition-colors">
              Status
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

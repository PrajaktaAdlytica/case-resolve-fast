import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

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
              Modern operations platform for fintechs, neobanks, lenders and payment institutions managing compliance cases, AI summaries and SLA monitoring.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-[11px] uppercase tracking-[0.1em] text-[color:var(--color-ink-mute)] font-medium mb-4">{c.title}</div>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      hash={(l as any).hash}
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
            <div className="text-[11px] uppercase tracking-[0.1em] text-[color:var(--color-ink-mute)] font-medium mb-4">Contact</div>
            <ul className="space-y-2.5 text-[14px] text-[color:var(--color-ink)]">
              <li>Warsaw, Poland</li>
              <li><a href="mailto:contact@bankxio.com" className="hover:text-[color:var(--color-brand-primary)] transition-colors">contact@bankxio.com</a></li>
              <li className="tnum">+48 22 000 0000</li>
            </ul>
          </div>
        </div>
        <div className="mt-14 pt-6 border-t border-[color:var(--color-hairline)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[13px] text-[color:var(--color-ink-mute)]">© 2026 Bankxio. All rights reserved.</p>
          <div className="flex items-center gap-6 text-[13px] text-[color:var(--color-ink-mute)]">
            <a href="#" className="hover:text-[color:var(--color-brand-primary)] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[color:var(--color-brand-primary)] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[color:var(--color-brand-primary)] transition-colors">Security</a>
            <a href="#" className="hover:text-[color:var(--color-brand-primary)] transition-colors">Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const DLABS_PORTFOLIO_URL = "https://d-labs-site.vercel.app/companies";

export function FundingAnnouncement() {
  return (
    <section aria-labelledby="funding-announcement-title" className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="relative overflow-hidden rounded-2xl border border-[color:var(--color-hairline)] bg-[color:var(--color-canvas-soft)]">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--color-brand-primary)] to-transparent"
          />

          <div className="grid lg:grid-cols-[1.35fr_0.65fr]">
            <div className="p-8 sm:p-10 lg:p-14">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-medium uppercase tracking-[0.12em] text-[color:var(--color-brand-primary-deep)]">
                <span>Funding announcement</span>
                <span className="h-1 w-1 rounded-full bg-[color:var(--color-brand-primary)]" />
                <time dateTime="2025-12-11" className="tnum text-[color:var(--color-ink-mute)]">
                  Dec 11, 2025
                </time>
              </div>

              <h2
                id="funding-announcement-title"
                className="mt-6 max-w-[760px] text-[36px] font-light leading-[1.08] tracking-[-0.035em] text-[color:var(--color-ink)] md:text-[48px]"
              >
                Bankxio secures $525K in funding from Dlabs.
              </h2>

              <p className="mt-5 max-w-[680px] text-[16px] leading-[1.65] text-[color:var(--color-ink-secondary)]">
                Bankxio is part of Dlabs’ global portfolio of companies building banking operations
                for complex operating environments.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={DLABS_PORTFOLIO_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn-pill btn-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--color-brand-primary)]"
                >
                  View Dlabs portfolio
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <Link
                  to="/news/funding-announcement"
                  className="btn-pill btn-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--color-brand-primary)]"
                >
                  Read announcement
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            <div className="border-t border-[color:var(--color-hairline)] bg-white/70 p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <div className="text-[10px] font-medium uppercase tracking-[0.12em] text-[color:var(--color-ink-mute)]">
                Company record
              </div>
              <dl className="mt-7 divide-y divide-[color:var(--color-hairline)] border-y border-[color:var(--color-hairline)]">
                <div className="flex items-center justify-between gap-6 py-4">
                  <dt className="text-[13px] text-[color:var(--color-ink-mute)]">Sector</dt>
                  <dd className="text-right text-[14px] text-[color:var(--color-ink)]">
                    Banking operations
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-6 py-4">
                  <dt className="text-[13px] text-[color:var(--color-ink-mute)]">Investor</dt>
                  <dd className="text-right text-[14px] text-[color:var(--color-ink)]">Dlabs</dd>
                </div>
                <div className="flex items-center justify-between gap-6 py-4">
                  <dt className="text-[13px] text-[color:var(--color-ink-mute)]">Funding</dt>
                  <dd className="tnum text-right text-[22px] font-light text-[color:var(--color-ink)]">
                    $525K
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";

const DLABS_PORTFOLIO_URL = "https://d-labs-site.vercel.app/companies";
const LINKEDIN_URL = "https://www.linkedin.com/company/bankxio/";
const CRUNCHBASE_URL = "https://www.crunchbase.com/organization/bankxio";

export const Route = createFileRoute("/news/funding-announcement")({
  head: () => ({
    meta: [
      { title: "Bankxio secures $525K in funding from Dlabs" },
      {
        name: "description",
        content:
          "Bankxio has secured $525K in funding from Dlabs. Announcement dated Dec 11, 2025.",
      },
      { property: "og:title", content: "Bankxio secures $525K in funding from Dlabs" },
      {
        property: "og:description",
        content:
          "Bankxio is part of Dlabs’ global portfolio of companies building banking operations for complex operating environments.",
      },
      { property: "og:type", content: "article" },
      { property: "article:published_time", content: "2025-12-11" },
    ],
  }),
  component: FundingAnnouncementArticle,
});

function FundingAnnouncementArticle() {
  return (
    <SiteShell>
      <article className="bg-white">
        <header className="border-b border-[color:var(--color-hairline)] bg-[color:var(--color-canvas-soft)]">
          <div className="mx-auto max-w-[920px] px-6 py-20 md:py-28">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[13px] text-[color:var(--color-ink-mute)] transition-colors hover:text-[color:var(--color-brand-primary)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--color-brand-primary)]"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to Bankxio
            </Link>

            <div className="mt-12 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-medium uppercase tracking-[0.12em] text-[color:var(--color-brand-primary-deep)]">
              <span>Funding announcement</span>
              <span className="h-1 w-1 rounded-full bg-[color:var(--color-brand-primary)]" />
              <time dateTime="2025-12-11" className="tnum text-[color:var(--color-ink-mute)]">
                Dec 11, 2025
              </time>
            </div>

            <h1 className="mt-6 max-w-[860px] text-[44px] font-light leading-[1.04] tracking-[-0.04em] text-[color:var(--color-ink)] md:text-[64px]">
              Bankxio secures $525K in funding from Dlabs.
            </h1>

            <p className="mt-7 max-w-[720px] text-[18px] leading-[1.65] text-[color:var(--color-ink-secondary)]">
              Bankxio is part of Dlabs’ global portfolio of companies building banking operations
              for complex operating environments.
            </p>
          </div>
        </header>

        <div className="mx-auto grid max-w-[920px] gap-12 px-6 py-16 md:grid-cols-[1fr_280px] md:py-20">
          <div>
            <p className="text-[21px] font-light leading-[1.65] text-[color:var(--color-ink)]">
              Bankxio has secured $525K in funding from Dlabs.
            </p>
            <a
              href={DLABS_PORTFOLIO_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-pill btn-primary mt-8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--color-brand-primary)]"
            >
              View Dlabs portfolio
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <aside
            aria-label="Announcement details"
            className="rounded-xl border border-[color:var(--color-hairline)] bg-[color:var(--color-canvas-soft)] p-6"
          >
            <div className="text-[10px] font-medium uppercase tracking-[0.12em] text-[color:var(--color-ink-mute)]">
              Company record
            </div>
            <dl className="mt-5 space-y-5">
              <div>
                <dt className="text-[12px] text-[color:var(--color-ink-mute)]">Company</dt>
                <dd className="mt-1 text-[15px] text-[color:var(--color-ink)]">Bankxio</dd>
              </div>
              <div>
                <dt className="text-[12px] text-[color:var(--color-ink-mute)]">Sector</dt>
                <dd className="mt-1 text-[15px] text-[color:var(--color-ink)]">
                  Banking operations
                </dd>
              </div>
              <div>
                <dt className="text-[12px] text-[color:var(--color-ink-mute)]">Investor</dt>
                <dd className="mt-1 text-[15px] text-[color:var(--color-ink)]">Dlabs</dd>
              </div>
              <div>
                <dt className="text-[12px] text-[color:var(--color-ink-mute)]">Funding</dt>
                <dd className="tnum mt-1 text-[24px] font-light text-[color:var(--color-ink)]">
                  $525K
                </dd>
              </div>
            </dl>
          </aside>
        </div>

        <footer className="border-t border-[color:var(--color-hairline)] bg-[color:var(--color-canvas-soft)]">
          <div className="mx-auto flex max-w-[920px] flex-col gap-4 px-6 py-8 text-[13px] text-[color:var(--color-ink-mute)] sm:flex-row sm:items-center sm:justify-between">
            <span>Official company profiles</span>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
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
        </footer>
      </article>
    </SiteShell>
  );
}

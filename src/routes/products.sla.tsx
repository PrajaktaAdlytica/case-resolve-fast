import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { ProductPage } from "@/components/site/ProductPage";
import { DashboardMockup } from "@/components/site/DashboardMockup";

export const Route = createFileRoute("/products/sla")({
  head: () => ({
    meta: [
      { title: "Bankza SLA — Deadline monitoring for operations teams" },
      { name: "description", content: "Monitor response times with configurable SLAs, escalation rules and real-time queue monitoring." },
      { property: "og:title", content: "Bankza SLA — Deadline monitoring for operations teams" },
      { property: "og:description", content: "Never miss another operational deadline. SLA timers, escalations and queue analytics." },
    ],
  }),
  component: Page,
});

function SlaHero() {
  const queues = [
    { n: "KYC Exceptions", v: 82, remaining: "02:14", tone: "#533afd" },
    { n: "Transaction Alerts", v: 46, remaining: "08:41", tone: "#ea2261" },
    { n: "Customer Disputes", v: 91, remaining: "00:38", tone: "#c634bd" },
  ];
  return (
    <div className="rounded-2xl bg-white border border-[color:var(--color-hairline)] shadow-[0_30px_80px_rgba(0,55,112,0.12)] p-5">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[13px] text-[color:var(--color-ink)]">SLA overview · Live</span>
        <span className="text-[10px] tnum text-[color:var(--color-ink-mute)]">Updated 12s ago</span>
      </div>
      <div className="space-y-3">
        {queues.map((q) => (
          <div key={q.n} className="flex items-center gap-4 p-3 rounded-lg border border-[color:var(--color-hairline)]">
            <div className="relative w-14 h-14 flex-shrink-0">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                <circle cx="50" cy="50" r="42" strokeWidth="10" stroke="#eef1f6" fill="none" />
                <circle cx="50" cy="50" r="42" strokeWidth="10" stroke={q.tone} fill="none" strokeLinecap="round" strokeDasharray="264" strokeDashoffset={264 - (264 * q.v) / 100} />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-[10px] tnum text-[color:var(--color-ink)]">{q.v}%</div>
            </div>
            <div className="flex-1">
              <div className="text-[13px] text-[color:var(--color-ink)]">{q.n}</div>
              <div className="text-[11px] text-[color:var(--color-ink-mute)] mt-0.5">Next breach in <span className="tnum">{q.remaining}</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Page() {
  return (
    <SiteShell>
      <ProductPage
        eyebrow="Bankza SLA"
        title="Never miss another operational deadline."
        description="Bankza SLA gives operations leaders live visibility on response times, escalations and workload — with configurable rules per case type, team and priority."
        heroVisual={<SlaHero />}
        overviewTitle="Real-time deadline monitoring across every queue."
        overviewBody="Set SLA targets per case type and priority, define escalation chains, and let Bankza monitor every deadline in real time. Managers see risk before it becomes a breach; investigators see what needs their attention next."
        features={[
          { title: "SLA timers", body: "Countdown timers on every case with clear time-to-breach visibility." },
          { title: "Queue monitoring", body: "Live health metrics per queue, team and case type." },
          { title: "Escalation rules", body: "Automatic escalation to the right reviewer when thresholds approach." },
          { title: "Working-hours aware", body: "SLAs respect team calendars, holidays and time zones." },
          { title: "Breach analytics", body: "Root-cause analysis of breaches with drill-down by team and rule." },
          { title: "Regulator reporting", body: "Export SLA performance reports for regulators and auditors." },
        ]}
        benefits={[
          "Cut SLA breaches with proactive escalation, not reactive firefighting.",
          "Give team leads a live pulse on operational risk.",
          "Meet regulator expectations for response-time transparency.",
          "Right-size teams with clear workload and throughput data.",
        ]}
        faqs={[
          { q: "Can SLA rules differ per case type?", a: "Yes. Every case type can have its own targets, escalation paths and priority definitions." },
          { q: "Do SLAs respect working hours?", a: "Yes. Team calendars, public holidays and time zones are respected by default." },
          { q: "Can breaches trigger external actions?", a: "Yes. Escalations can notify Slack, email or your incident-management system via webhooks." },
          { q: "Are SLA reports auditor-ready?", a: "Yes. All SLA data is exportable in CSV or PDF with full case-level attribution." },
        ]}
        dashboardMockup={<DashboardMockup />}
      />
    </SiteShell>
  );
}
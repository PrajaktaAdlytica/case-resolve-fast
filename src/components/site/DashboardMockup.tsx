import { AlertTriangle, ShieldCheck, Sparkles, Timer, TrendingUp, Users, Bell } from "lucide-react";

export function DashboardMockup() {
  return (
    <div className="rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,55,112,0.15),0_2px_6px_rgba(0,55,112,0.04)] border border-[color:var(--color-hairline)] bg-white">
      <div className="bg-[color:var(--color-brand-dark-900)] px-4 py-3 flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-[11px] text-white/60 tracking-tight">app.bankza.io/operations</span>
      </div>
      <div className="p-6 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          {[
            { label: "Active cases", value: "1,284", change: "+12", icon: AlertTriangle, color: "#533afd" },
            { label: "Pending reviews", value: "342", change: "+4", icon: ShieldCheck, color: "#ea2261" },
            { label: "AI summaries", value: "8,914", change: "+128", icon: Sparkles, color: "#c634bd" },
            { label: "SLA breaches", value: "6", change: "-2", icon: Timer, color: "#16a34a" },
          ].map((w) => (
            <div key={w.label} className="rounded-lg border border-[color:var(--color-hairline)] p-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-[color:var(--color-ink-mute)]">{w.label}</span>
                <w.icon className="w-3.5 h-3.5" style={{ color: w.color }} />
              </div>
              <div className="mt-2 flex items-baseline gap-1.5">
                <span className="text-[22px] font-light tnum text-[color:var(--color-ink)]" style={{ letterSpacing: "-0.5px" }}>{w.value}</span>
                <span className="text-[10px] tnum text-[color:var(--color-ink-mute)]">{w.change}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-3">
          <div className="md:col-span-2 rounded-lg border border-[color:var(--color-hairline)]">
            <div className="px-4 py-3 border-b border-[color:var(--color-hairline)] flex items-center justify-between">
              <span className="text-[13px] font-normal text-[color:var(--color-ink)]">Recent investigations</span>
              <span className="text-[10px] text-[color:var(--color-ink-mute)] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a] animate-pulse-dot" /> Live
              </span>
            </div>
            <table className="w-full text-[12px]">
              <thead className="text-[10px] uppercase tracking-wider text-[color:var(--color-ink-mute)]">
                <tr>
                  <th className="text-left px-4 py-2 font-normal">Case</th>
                  <th className="text-left px-4 py-2 font-normal">Type</th>
                  <th className="text-left px-4 py-2 font-normal">Amount</th>
                  <th className="text-left px-4 py-2 font-normal">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[color:var(--color-hairline)] text-[color:var(--color-ink)]">
                {[
                  { id: "#3241", t: "KYC Exception", a: "€ 12,400.00", s: "Under review", tone: "indigo" },
                  { id: "#3240", t: "Transaction Alert", a: "€ 84,220.00", s: "AI summary", tone: "magenta" },
                  { id: "#3239", t: "Customer Dispute", a: "€ 1,940.00", s: "Escalated", tone: "ruby" },
                  { id: "#3238", t: "Complaint", a: "€ 320.00", s: "Resolved", tone: "green" },
                  { id: "#3237", t: "KYC Exception", a: "€ 6,800.00", s: "Assigned", tone: "indigo" },
                ].map((r) => (
                  <tr key={r.id}>
                    <td className="px-4 py-2.5 tnum text-[color:var(--color-ink-mute)]">{r.id}</td>
                    <td className="px-4 py-2.5">{r.t}</td>
                    <td className="px-4 py-2.5 tnum">{r.a}</td>
                    <td className="px-4 py-2.5">
                      <span
                        className={`inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full ${
                          r.tone === "indigo"
                            ? "bg-[#eeeafd] text-[#533afd]"
                            : r.tone === "ruby"
                              ? "bg-[#fde8ee] text-[#ea2261]"
                              : r.tone === "magenta"
                                ? "bg-[#fee6fc] text-[#c634bd]"
                                : "bg-[#e6f7ec] text-[#16a34a]"
                        }`}
                      >
                        <span className="w-1 h-1 rounded-full bg-current" /> {r.s}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="space-y-3">
            <div className="rounded-lg border border-[color:var(--color-hairline)] p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] text-[color:var(--color-ink-mute)]">Team workload</span>
                <Users className="w-3.5 h-3.5 text-[color:var(--color-ink-mute)]" />
              </div>
              {[
                { n: "Compliance", v: 72 },
                { n: "Fraud", v: 48 },
                { n: "Support", v: 61 },
              ].map((b) => (
                <div key={b.n} className="mt-2">
                  <div className="flex justify-between text-[11px] text-[color:var(--color-ink)]">
                    <span>{b.n}</span>
                    <span className="tnum text-[color:var(--color-ink-mute)]">{b.v}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-[color:var(--color-canvas-soft)] mt-1 overflow-hidden">
                    <div className="h-full rounded-full bg-[color:var(--color-brand-primary)]" style={{ width: `${b.v}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-lg border border-[color:var(--color-hairline)] p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] text-[color:var(--color-ink-mute)]">Resolution timeline</span>
                <TrendingUp className="w-3.5 h-3.5 text-[#16a34a]" />
              </div>
              <div className="flex items-end gap-1 h-16">
                {[30, 45, 38, 55, 62, 58, 72, 68, 80, 74, 88, 92].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: i > 8 ? "#533afd" : "#c9c4fc" }} />
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-[color:var(--color-hairline)] p-3 flex items-center gap-2 bg-[color:var(--color-canvas-soft)]">
              <span className="w-6 h-6 rounded-full bg-[color:var(--color-brand-primary)] flex items-center justify-center flex-shrink-0">
                <Bell className="w-3 h-3 text-white" />
              </span>
              <div className="text-[11px] text-[color:var(--color-ink)]">
                <span className="font-medium">New AI summary</span> generated for case #3241
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
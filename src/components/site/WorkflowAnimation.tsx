import { useEffect, useState } from "react";
import { AlertTriangle, ShieldCheck, Sparkles, Gavel, CheckCircle2 } from "lucide-react";

const STEPS = [
  { icon: AlertTriangle, title: "Transaction Alert", tag: "New", tone: "ruby" },
  { icon: ShieldCheck, title: "KYC Review", tag: "In Progress", tone: "indigo" },
  { icon: Sparkles, title: "AI Summary", tag: "Generated", tone: "magenta" },
  { icon: Gavel, title: "Compliance Decision", tag: "Approved", tone: "indigo" },
  { icon: CheckCircle2, title: "Resolved", tag: "Complete", tone: "green" },
] as const;

const toneMap: Record<string, string> = {
  ruby: "bg-[#fde8ee] text-[#ea2261]",
  indigo: "bg-[#eeeafd] text-[#533afd]",
  magenta: "bg-[#fee6fc] text-[#c634bd]",
  green: "bg-[#e6f7ec] text-[#16a34a]",
};

export function WorkflowAnimation() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((a) => (a + 1) % (STEPS.length + 2));
    }, 1300);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative card-base p-6 md:p-7 shadow-[0_20px_60px_rgba(0,55,112,0.08),0_2px_6px_rgba(0,55,112,0.04)]">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#ea2261] animate-pulse-dot" />
          <span className="text-[11px] uppercase tracking-[0.1em] text-[color:var(--color-ink-mute)]">Live case flow</span>
        </div>
        <span className="text-[11px] tnum text-[color:var(--color-ink-mute)]">Case #3241</span>
      </div>
      <div className="space-y-2.5">
        {STEPS.map((s, i) => {
          const isActive = i === active - 1;
          const done = i < active - 1 || active > STEPS.length;
          const Icon = s.icon;
          const seen = isActive || done;
          return (
            <div key={s.title} className="relative">
              <div
                className={`flex items-center gap-3 p-3 rounded-[10px] border transition-all duration-500 ${
                  seen
                    ? "border-[color:var(--color-brand-primary)]/40 bg-[color:var(--color-canvas-soft)] opacity-100"
                    : "border-[color:var(--color-hairline)] bg-white opacity-55"
                }`}
              >
                <span className={`w-9 h-9 rounded-lg flex items-center justify-center ${toneMap[s.tone]}`}>
                  <Icon className="w-4 h-4" />
                </span>
                <div className="flex-1 text-[14px] font-normal text-[color:var(--color-ink)]">{s.title}</div>
                <span
                  className={`text-[10px] px-2 py-1 rounded-full transition-opacity ${
                    done
                      ? "bg-[#e6f7ec] text-[#16a34a]"
                      : isActive
                        ? "bg-[color:var(--color-brand-primary-subdued)] text-[color:var(--color-brand-primary-deep)]"
                        : "bg-[color:var(--color-canvas-soft)] text-[color:var(--color-ink-mute)]"
                  }`}
                >
                  {done ? "Done" : isActive ? s.tag : "Waiting"}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div className="pl-[27px] py-0.5">
                  <div
                    className={`w-px h-3 transition-colors ${
                      i < active - 1 ? "bg-[color:var(--color-brand-primary)]" : "bg-[color:var(--color-hairline)]"
                    }`}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
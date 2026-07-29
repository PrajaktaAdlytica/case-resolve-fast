import { Link } from "@tanstack/react-router";
import { ArrowRight, Calculator, Clock3, TrendingUp, UsersRound } from "lucide-react";
import { useState } from "react";

const currency = new Intl.NumberFormat("en-IE", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

const number = new Intl.NumberFormat("en-IE", {
  maximumFractionDigits: 0,
});

export function RoiCalculator() {
  const [monthlyCases, setMonthlyCases] = useState(1800);
  const [minutesSaved, setMinutesSaved] = useState(18);
  const [hourlyCost, setHourlyCost] = useState(42);

  const monthlyHours = (monthlyCases * minutesSaved) / 60;
  const monthlyCapacity = monthlyHours / 160;
  const annualValue = monthlyHours * hourlyCost * 12;

  return (
    <section
      id="roi-calculator"
      className="py-24 bg-[color:var(--color-brand-dark-900)] text-white overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-[0.78fr_1.22fr] gap-12 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <div className="text-[11px] uppercase tracking-[0.12em] text-[#b9b9f9] mb-3">
              Operational impact · Illustrative
            </div>
            <h2
              className="text-[36px] md:text-[44px] leading-[1.08] font-light"
              style={{ letterSpacing: "-1px" }}
            >
              Model the capacity hidden in manual case work.
            </h2>
            <p className="mt-5 text-[16px] leading-[1.65] text-white/70 max-w-lg">
              Adjust the demo assumptions to estimate time and operating capacity that could be
              redirected from repetitive case administration.
            </p>
            <div className="mt-7 flex items-start gap-2.5 text-[12px] leading-[1.5] text-white/55">
              <Calculator className="w-4 h-4 mt-0.5 text-[#b9b9f9] flex-shrink-0" />
              This is an illustrative calculator, not a customer claim or guaranteed result.
            </div>
          </div>

          <div className="rounded-2xl border border-white/12 bg-white/7 p-5 md:p-8 backdrop-blur">
            <div className="grid md:grid-cols-3 gap-4">
              <RangeField
                label="Cases per month"
                value={monthlyCases}
                min={250}
                max={10000}
                step={50}
                display={number.format(monthlyCases)}
                onChange={setMonthlyCases}
              />
              <RangeField
                label="Minutes saved per case"
                value={minutesSaved}
                min={5}
                max={45}
                step={1}
                display={`${minutesSaved} min`}
                onChange={setMinutesSaved}
              />
              <RangeField
                label="Blended hourly cost"
                value={hourlyCost}
                min={20}
                max={100}
                step={1}
                display={`${currency.format(hourlyCost)}/h`}
                onChange={setHourlyCost}
              />
            </div>

            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              <ResultCard
                icon={Clock3}
                label="Hours redirected monthly"
                value={number.format(monthlyHours)}
                detail="Illustrative analyst time"
              />
              <ResultCard
                icon={UsersRound}
                label="Equivalent monthly capacity"
                value={`${monthlyCapacity.toFixed(1)} FTE`}
                detail="Based on 160 hours"
              />
              <ResultCard
                icon={TrendingUp}
                label="Illustrative annual value"
                value={currency.format(annualValue)}
                detail="Before software costs"
              />
            </div>

            <div className="mt-6 rounded-xl bg-white p-5 text-[color:var(--color-ink)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-[14px] text-[color:var(--color-ink)]">
                  Turn this model into a workflow review
                </div>
                <p className="mt-1 text-[12px] text-[color:var(--color-ink-mute-2)]">
                  Bring your queue volumes, process stages and SLA targets to a demo.
                </p>
              </div>
              <Link to="/request-demo" className="btn-pill btn-primary text-[13px]">
                Review my workflow <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RangeField({
  label,
  value,
  min,
  max,
  step,
  display,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  display: string;
  onChange: (value: number) => void;
}) {
  return (
    <label className="rounded-xl border border-white/12 bg-white/6 p-4">
      <span className="text-[11px] text-white/62">{label}</span>
      <span className="mt-2 block text-[24px] font-light tnum">{display}</span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="mt-4 w-full accent-[#b9b9f9]"
      />
    </label>
  );
}

function ResultCard({
  icon: Icon,
  label,
  value,
  detail,
}: {
  icon: typeof Clock3;
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="rounded-xl bg-white p-5 text-[color:var(--color-ink)]">
      <div className="flex items-center justify-between gap-3">
        <span className="text-[11px] leading-[1.35] text-[color:var(--color-ink-mute-2)]">
          {label}
        </span>
        <Icon className="w-4 h-4 text-[color:var(--color-brand-primary)] flex-shrink-0" />
      </div>
      <div className="mt-4 text-[28px] font-light tnum" style={{ letterSpacing: "-0.6px" }}>
        {value}
      </div>
      <div className="mt-1 text-[10px] text-[color:var(--color-ink-mute-2)]">{detail}</div>
    </div>
  );
}

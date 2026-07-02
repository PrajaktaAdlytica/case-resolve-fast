const orgs = [
  "Nordica Bank",
  "Payline",
  "Krona Fintech",
  "Vesta Ledger",
  "Meridian Pay",
  "Aventis Credit",
  "Solstice Neo",
  "Northlane",
  "Orbis Financial",
  "Halden Bank",
];

export function TrustedBy() {
  return (
    <section className="py-14 bg-white border-y border-[color:var(--color-hairline)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-center text-[13px] text-[color:var(--color-ink-mute)] mb-8 uppercase tracking-[0.1em]">
          Trusted by modern financial operations teams across Europe
        </p>
        <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-14 animate-marquee w-max">
            {[...orgs, ...orgs].map((o, i) => (
              <div key={i} className="flex items-center gap-2 text-[18px] text-[color:var(--color-ink-mute)] font-light whitespace-nowrap" style={{ letterSpacing: "-0.3px" }}>
                <span className="w-2 h-2 rounded-sm bg-[color:var(--color-ink-mute)] opacity-60" />
                {o}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
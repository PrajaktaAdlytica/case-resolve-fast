import { Building2, Users, ShieldCheck, IdCard, Headphones, CreditCard, Database } from "lucide-react";

const systems = [
  { name: "Core Banking", icon: Building2 },
  { name: "CRM", icon: Users },
  { name: "AML Platform", icon: ShieldCheck },
  { name: "KYC Provider", icon: IdCard },
  { name: "Customer Support", icon: Headphones },
  { name: "Payment Processor", icon: CreditCard },
  { name: "Data Warehouse", icon: Database },
];

function SystemChip({ name, icon: Icon }: { name: string; icon: any }) {
  return (
    <div className="card-base px-4 py-2.5 flex items-center gap-2 hover-lift">
      <Icon className="w-4 h-4 text-[color:var(--color-brand-primary)]" />
      <span className="text-[14px] text-[color:var(--color-ink)]">{name}</span>
    </div>
  );
}

export function IntegrationDiagram() {
  return (
    <div className="relative py-4">
      <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
        {systems.slice(0, 4).map((s) => <SystemChip key={s.name} name={s.name} icon={s.icon} />)}
      </div>
      <div className="my-8 flex justify-center">
        <div className="w-px h-10 bg-gradient-to-b from-transparent via-[color:var(--color-brand-primary)] to-transparent" />
      </div>
      <div className="mx-auto w-fit px-6 py-4 rounded-xl bg-[color:var(--color-brand-dark-900)] text-white flex items-center gap-3 shadow-[0_20px_50px_rgba(28,30,84,0.25)]">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg" style={{ background: "linear-gradient(135deg, #533afd, #ea2261)" }}>
          <span className="text-[13px] font-medium">B</span>
        </span>
        <span className="text-[15px]">Bankxio Operations Platform</span>
      </div>
      <div className="my-8 flex justify-center">
        <div className="w-px h-10 bg-gradient-to-b from-transparent via-[color:var(--color-brand-primary)] to-transparent" />
      </div>
      <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
        {systems.slice(4).map((s) => <SystemChip key={s.name} name={s.name} icon={s.icon} />)}
      </div>
    </div>
  );
}
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Logo } from "@/components/site/Logo";
import { GradientMesh } from "@/components/site/GradientMesh";

export const Route = createFileRoute("/signin")({
  head: () => ({
    meta: [
      { title: "Sign in — Bankza" },
      { name: "description", content: "Sign in to your Bankza operations workspace." },
      { property: "og:title", content: "Sign in — Bankza" },
      { property: "og:description", content: "Access your Bankza operations workspace." },
    ],
  }),
  component: SignIn,
});

function SignIn() {
  return (
    <SiteShell>
      <section className="relative min-h-[calc(100vh-68px)] flex items-center justify-center py-16 px-6 overflow-hidden">
        <GradientMesh className="h-2/3" />
        <div className="relative w-full max-w-md">
          <div className="card-base p-10 shadow-[0_30px_80px_rgba(0,55,112,0.1)]">
            <div className="flex justify-center mb-6"><Logo /></div>
            <h1 className="text-[28px] font-light text-center text-[color:var(--color-ink)]" style={{ letterSpacing: "-0.5px" }}>Welcome back</h1>
            <p className="mt-2 text-[14px] text-center text-[color:var(--color-ink-mute)]">Sign in to continue to your Bankza operations workspace.</p>
            <form className="mt-8 space-y-4">
              <Field label="Work email" type="email" placeholder="you@company.com" />
              <Field label="Password" type="password" placeholder="••••••••" />
              <div className="flex items-center justify-between text-[13px]">
                <label className="flex items-center gap-2 text-[color:var(--color-ink)]">
                  <input type="checkbox" className="rounded border-[color:var(--color-hairline-input)]" />
                  Remember me
                </label>
                <a href="#" className="text-[color:var(--color-brand-primary)] hover:underline">Forgot password?</a>
              </div>
              <button type="button" className="btn-pill btn-primary w-full justify-center">Sign in</button>
            </form>
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-[color:var(--color-hairline)]" /></div>
              <div className="relative flex justify-center"><span className="bg-white px-3 text-[12px] text-[color:var(--color-ink-mute)] uppercase tracking-[0.1em]">or</span></div>
            </div>
            <div className="space-y-2">
              <SocialButton label="Continue with Google" />
              <SocialButton label="Continue with Microsoft" />
            </div>
            <p className="mt-6 text-[13px] text-center text-[color:var(--color-ink-mute)]">
              Don&apos;t have an account? <Link to="/request-demo" className="text-[color:var(--color-brand-primary)] hover:underline">Request a demo</Link>
            </p>
          </div>
          <div className="mt-6 text-center text-[12px] text-[color:var(--color-ink-mute)]">
            <a href="#" className="hover:text-[color:var(--color-brand-primary)]">Terms</a> · <a href="#" className="hover:text-[color:var(--color-brand-primary)]">Privacy</a> · <a href="#" className="hover:text-[color:var(--color-brand-primary)]">Security</a>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-[13px] text-[color:var(--color-ink)]">{label}</span>
      <input {...rest} className="mt-1.5 w-full h-11 rounded-md border border-[color:var(--color-hairline-input)] px-3 text-[15px] text-[color:var(--color-ink)] focus:outline-none focus:border-[color:var(--color-brand-primary)] focus:ring-2 focus:ring-[color:var(--color-brand-primary)]/15 transition" />
    </label>
  );
}

function SocialButton({ label }: { label: string }) {
  return (
    <button type="button" className="w-full h-11 rounded-full border border-[color:var(--color-hairline)] flex items-center justify-center gap-2 text-[14px] text-[color:var(--color-ink)] hover:border-[color:var(--color-brand-primary)] hover:text-[color:var(--color-brand-primary)] transition">
      {label}
    </button>
  );
}
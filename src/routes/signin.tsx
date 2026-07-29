import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Logo } from "@/components/site/Logo";
import { GradientMesh } from "@/components/site/GradientMesh";
import { AlertCircle, CheckCircle2, LoaderCircle, MailCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/signin")({
  head: () => ({
    meta: [
      { title: "Sign in — Bankxio" },
      { name: "description", content: "Sign in to your Bankxio operations workspace." },
      { property: "og:title", content: "Sign in — Bankxio" },
      { property: "og:description", content: "Access your Bankxio operations workspace." },
    ],
  }),
  component: SignIn,
});

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "loading" | "recovery" | "confirmed">("idle");
  const confirmationTimer = useRef<number | null>(null);

  useEffect(() => () => {
    if (confirmationTimer.current !== null) window.clearTimeout(confirmationTimer.current);
  }, []);

  const showConfirmation = () => {
    if (confirmationTimer.current !== null) window.clearTimeout(confirmationTimer.current);
    setStatus("loading");
    confirmationTimer.current = window.setTimeout(() => setStatus("confirmed"), 900);
  };

  const previewSignIn = () => {
    if (!email.trim() || !password.trim()) {
      setStatus("error");
      return;
    }
    showConfirmation();
  };

  return (
    <SiteShell>
      <section className="relative min-h-[calc(100vh-68px)] flex items-center justify-center py-16 px-6 overflow-hidden">
        <GradientMesh className="h-2/3" />
        <div className="relative w-full max-w-md">
          <div className="card-base p-10 shadow-[0_30px_80px_rgba(0,55,112,0.1)]">
            <div className="flex justify-center mb-6"><Logo /></div>
            <h1 className="text-[28px] font-light text-center text-[color:var(--color-ink)]" style={{ letterSpacing: "-0.5px" }}>Welcome back</h1>
            <p className="mt-2 text-[14px] text-center text-[color:var(--color-ink-mute)]">Sign in to continue to your Bankxio operations workspace.</p>
            <form className="mt-8 space-y-4" onSubmit={(event) => event.preventDefault()}>
              <Field label="Work email" type="email" name="email" autoComplete="email" placeholder="you@company.com" value={email} onChange={(event) => setEmail(event.target.value)} />
              <Field label="Password" type="password" name="password" autoComplete="current-password" placeholder="••••••••" value={password} onChange={(event) => setPassword(event.target.value)} />
              <div className="flex items-center justify-between text-[13px]">
                <label className="flex items-center gap-2 text-[color:var(--color-ink)]">
                  <input type="checkbox" className="rounded border-[color:var(--color-hairline-input)]" />
                  Remember me
                </label>
                <a href="#recovery-preview" onClick={(event) => { event.preventDefault(); setStatus("recovery"); }} className="text-[color:var(--color-brand-primary)] hover:underline">Forgot password?</a>
              </div>
              <button type="button" onClick={previewSignIn} disabled={status === "loading"} className="btn-pill btn-primary w-full justify-center disabled:cursor-wait disabled:opacity-75">
                {status === "loading" && <LoaderCircle className="w-4 h-4 animate-spin" />}
                {status === "loading" ? "Checking workspace…" : "Sign in"}
              </button>
              <SignInStatus status={status} />
            </form>
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-[color:var(--color-hairline)]" /></div>
              <div className="relative flex justify-center"><span className="bg-white px-3 text-[12px] text-[color:var(--color-ink-mute)] uppercase tracking-[0.1em]">or</span></div>
            </div>
            <div className="space-y-2">
              <SocialButton label="Continue with Google" onClick={showConfirmation} disabled={status === "loading"} />
              <SocialButton label="Continue with Microsoft" onClick={showConfirmation} disabled={status === "loading"} />
            </div>
            <p className="mt-6 text-[13px] text-center text-[color:var(--color-ink-mute)]">
              Don&apos;t have an account? <Link to="/request-demo" className="text-[color:var(--color-brand-primary)] underline underline-offset-2">Request a demo</Link>
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

function SignInStatus({ status }: { status: "idle" | "error" | "loading" | "recovery" | "confirmed" }) {
  if (status === "idle" || status === "loading") return null;

  const content = {
    error: {
      icon: AlertCircle,
      title: "We couldn’t preview sign-in yet",
      body: "Enter a work email and password to continue with the demo state.",
      classes: "border-[#f3becd] bg-[#fff4f7] text-[#9f1744]",
    },
    recovery: {
      icon: MailCheck,
      title: "Recovery state ready",
      body: "In the live product, a secure reset link would be sent to your work email.",
      classes: "border-[#cfd3ff] bg-[#f5f4ff] text-[#4434d4]",
    },
    confirmed: {
      icon: CheckCircle2,
      title: "Demo workspace confirmed",
      body: "Authentication is simulated here. A production connection would now open the operations workspace.",
      classes: "border-[#bde8ca] bg-[#f1fbf4] text-[#176b36]",
    },
  }[status];

  const Icon = content.icon;
  return (
    <div id="recovery-preview" role="status" aria-live="polite" className={`rounded-lg border p-3.5 ${content.classes}`}>
      <div className="flex items-start gap-2.5">
        <Icon className="w-4 h-4 mt-0.5 flex-shrink-0" />
        <div>
          <div className="text-[13px] font-normal">{content.title}</div>
          <p className="mt-1 text-[12px] leading-[1.45] opacity-80">{content.body}</p>
        </div>
      </div>
    </div>
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

function SocialButton({ label, ...rest }: { label: string } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...rest} type="button" className="w-full h-11 rounded-full border border-[color:var(--color-hairline)] flex items-center justify-center gap-2 text-[14px] text-[color:var(--color-ink)] hover:border-[color:var(--color-brand-primary)] hover:text-[color:var(--color-brand-primary)] transition disabled:cursor-wait disabled:opacity-60">
      {label}
    </button>
  );
}

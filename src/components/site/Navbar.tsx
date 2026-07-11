import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const products = [
  { name: "Bankxio Cases", to: "/products/cases", desc: "Unified case management" },
  { name: "Bankxio Summaries", to: "/products/summaries", desc: "AI-generated case summaries" },
  { name: "Bankxio SLA", to: "/products/sla", desc: "Response deadline monitoring" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-white/80 border-b border-[color:var(--color-hairline)]" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-[68px] flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Logo />
          <nav className="hidden lg:flex items-center gap-7 text-[15px] text-[color:var(--color-ink)]">
            <div
              className="relative"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-[color:var(--color-brand-primary)] transition-colors py-4">
                Products <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {open && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="card-base p-2 min-w-[280px] shadow-[0_12px_32px_rgba(0,55,112,0.08)]">
                    {products.map((p) => (
                      <Link
                        key={p.to}
                        to={p.to}
                        className="block px-3 py-2.5 rounded-md hover:bg-[color:var(--color-canvas-soft)] transition-colors"
                      >
                        <div className="font-normal text-[color:var(--color-ink)]">{p.name}</div>
                        <div className="text-[13px] text-[color:var(--color-ink-mute)]">{p.desc}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link to="/" hash="solutions" className="hover:text-[color:var(--color-brand-primary)] transition-colors">Solutions</Link>
            <Link to="/" hash="pricing" className="hover:text-[color:var(--color-brand-primary)] transition-colors">Pricing</Link>
            <Link to="/about" className="hover:text-[color:var(--color-brand-primary)] transition-colors">About</Link>
          </nav>
        </div>
        <div className="hidden lg:flex items-center gap-4">
          <Link to="/signin" className="text-[15px] hover:text-[color:var(--color-brand-primary)] transition-colors">Sign In</Link>
          <Link to="/request-demo" className="btn-pill btn-primary text-[14px]">Request Demo</Link>
        </div>
        <button className="lg:hidden p-2" onClick={() => setMobile(!mobile)} aria-label="Menu">
          {mobile ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {mobile && (
        <div className="lg:hidden bg-white border-t border-[color:var(--color-hairline)] px-6 py-4 space-y-3">
          {products.map((p) => (
            <Link key={p.to} to={p.to} className="block py-1.5" onClick={() => setMobile(false)}>{p.name}</Link>
          ))}
          <Link to="/" hash="pricing" className="block py-1.5" onClick={() => setMobile(false)}>Pricing</Link>
          <Link to="/about" className="block py-1.5" onClick={() => setMobile(false)}>About</Link>
          <Link to="/signin" className="block py-1.5" onClick={() => setMobile(false)}>Sign In</Link>
          <Link to="/request-demo" className="btn-pill btn-primary text-[14px] w-full" onClick={() => setMobile(false)}>Request Demo</Link>
        </div>
      )}
    </header>
  );
}
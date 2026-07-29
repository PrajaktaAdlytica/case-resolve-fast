import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const menus = [
  {
    label: "Products",
    items: [
      { name: "Bankxio Cases", href: "/products/cases", desc: "Unified case management" },
      { name: "Bankxio Summaries", href: "/products/summaries", desc: "Evidence-linked AI briefs" },
      { name: "Bankxio SLA", href: "/products/sla", desc: "Deadline and escalation control" },
    ],
  },
  {
    label: "Solutions",
    items: [
      {
        name: "KYC exceptions",
        href: "/solutions/kyc-exceptions",
        desc: "Controlled verification review",
      },
      {
        name: "Transaction alerts",
        href: "/solutions/transaction-alerts",
        desc: "From signal to disposition",
      },
      {
        name: "Disputes & complaints",
        href: "/solutions/disputes-complaints",
        desc: "Evidence and response workflow",
      },
      {
        name: "Payment institutions",
        href: "/solutions/payment-institutions",
        desc: "Cross-team payment operations",
      },
      {
        name: "SLA operations",
        href: "/solutions/sla-operations",
        desc: "Deadline visibility and escalation",
      },
    ],
  },
  {
    label: "Platform",
    items: [
      { name: "Integrations", href: "/integrations", desc: "Connect the operations stack" },
      { name: "Security", href: "/security", desc: "Access, data and audit controls" },
      { name: "Implementation", href: "/implementation", desc: "A controlled rollout model" },
    ],
  },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveMenu(null);
        setMobile(false);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-white/88 border-b border-[color:var(--color-hairline)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-[68px] flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Logo />
          <nav
            className="hidden lg:flex items-center gap-6 text-[14px] text-[color:var(--color-ink)]"
            aria-label="Primary navigation"
          >
            {menus.map((menu) => {
              const open = activeMenu === menu.label;
              return (
                <div
                  key={menu.label}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(menu.label)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <button
                    type="button"
                    aria-haspopup="menu"
                    aria-expanded={open}
                    onClick={() => setActiveMenu(open ? null : menu.label)}
                    className="flex items-center gap-1 hover:text-[color:var(--color-brand-primary)] transition-colors py-4"
                  >
                    {menu.label}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`}
                    />
                  </button>
                  {open && (
                    <div className="absolute top-full left-0 pt-2" role="menu">
                      <div className="card-base p-2 min-w-[310px] shadow-[0_18px_48px_rgba(0,55,112,0.12)]">
                        {menu.items.map((item) => (
                          <a
                            key={item.href}
                            href={item.href}
                            role="menuitem"
                            onClick={() => setActiveMenu(null)}
                            className="block px-3 py-2.5 rounded-md hover:bg-[color:var(--color-canvas-soft)] transition-colors"
                          >
                            <div className="font-normal text-[color:var(--color-ink)]">
                              {item.name}
                            </div>
                            <div className="text-[12px] text-[color:var(--color-ink-mute-2)]">
                              {item.desc}
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
            <Link
              to="/"
              hash="pricing"
              className="hover:text-[color:var(--color-brand-primary)] transition-colors"
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className="hover:text-[color:var(--color-brand-primary)] transition-colors"
            >
              About
            </Link>
          </nav>
        </div>
        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/signin"
            className="text-[14px] hover:text-[color:var(--color-brand-primary)] transition-colors"
          >
            Sign In
          </Link>
          <Link to="/request-demo" className="btn-pill btn-primary text-[14px]">
            Request Demo
          </Link>
        </div>
        <button
          type="button"
          className="lg:hidden p-2"
          onClick={() => setMobile((current) => !current)}
          aria-expanded={mobile}
          aria-controls="mobile-navigation"
          aria-label={mobile ? "Close menu" : "Open menu"}
        >
          {mobile ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {mobile && (
        <nav
          id="mobile-navigation"
          className="lg:hidden max-h-[calc(100vh-68px)] overflow-y-auto bg-white border-t border-[color:var(--color-hairline)] px-6 py-5"
          aria-label="Mobile navigation"
        >
          <div className="space-y-5">
            {menus.map((menu) => (
              <div key={menu.label}>
                <div className="text-[10px] uppercase tracking-[0.1em] text-[color:var(--color-ink-mute-2)] mb-2">
                  {menu.label}
                </div>
                <div className="grid sm:grid-cols-2 gap-1">
                  {menu.items.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-[14px] text-[color:var(--color-ink)] hover:bg-[color:var(--color-canvas-soft)]"
                      onClick={() => setMobile(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
            <div className="border-t border-[color:var(--color-hairline)] pt-4 grid gap-2">
              <Link
                to="/"
                hash="pricing"
                className="block rounded-lg px-3 py-2"
                onClick={() => setMobile(false)}
              >
                Pricing
              </Link>
              <Link
                to="/about"
                className="block rounded-lg px-3 py-2"
                onClick={() => setMobile(false)}
              >
                About
              </Link>
              <Link
                to="/signin"
                className="block rounded-lg px-3 py-2"
                onClick={() => setMobile(false)}
              >
                Sign In
              </Link>
              <Link
                to="/request-demo"
                className="btn-pill btn-primary text-[14px] w-full mt-1"
                onClick={() => setMobile(false)}
              >
                Request Demo
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

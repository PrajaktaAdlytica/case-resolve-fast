import { Link } from "@tanstack/react-router";

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <span
        className="inline-flex items-center justify-center w-8 h-8 rounded-lg"
        style={{
          background:
            "linear-gradient(135deg, #533afd 0%, #665efd 50%, #ea2261 100%)",
        }}
      >
        <span className="text-white font-medium text-[15px] leading-none">B</span>
      </span>
      <span
        className="text-[20px] font-light tracking-tight"
        style={{
          color: dark ? "#ffffff" : "#0d253d",
          letterSpacing: "-0.4px",
        }}
      >
        Bankza
      </span>
    </Link>
  );
}
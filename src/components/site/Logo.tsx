import { Link } from "@tanstack/react-router";

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <img
        src="/bankxio-logo.svg"
        alt="Bankxio"
        className="h-8 w-auto"
        style={dark ? { filter: "brightness(0) invert(1)" } : undefined}
      />
    </Link>
  );
}

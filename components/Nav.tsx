"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/lib/content";

const tracks = [
  { href: "/quantum", label: "Quantum" },
  { href: "/data", label: "Data Engineering" },
];

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-cream/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <Link href="/" className="focus-ring font-display text-lg font-semibold tracking-tight text-navy">
          Yasmin Kasem
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          {tracks.map((t) => {
            const active = pathname === t.href;
            return (
              <Link
                key={t.href}
                href={t.href}
                className={`focus-ring rounded-full px-3 py-1.5 text-sm font-medium transition-colors sm:px-4 ${
                  active
                    ? "bg-navy text-cream-paper"
                    : "text-navy/70 hover:bg-navy/10 hover:text-navy"
                }`}
              >
                {t.label}
              </Link>
            );
          })}
          {!isHome && (
            <Link
              href="/#contact"
              className="focus-ring ml-1 hidden rounded-full border border-orange px-4 py-1.5 text-sm font-medium text-orange transition-colors hover:bg-orange hover:text-cream-paper sm:inline-block"
            >
              Contact
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}

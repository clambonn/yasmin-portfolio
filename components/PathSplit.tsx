"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const paths = [
  {
    id: "quantum",
    href: "/quantum",
    label: "Quantum",
    sub: "Circuits, algorithms, and physics research",
    bg: "#1A365D",
    text: "#F4EAE1",
    accent: "#E65F2B",
  },
  {
    id: "data",
    href: "/data",
    label: "Data Engineering",
    sub: "Pipelines, RAG systems, and applied ML",
    bg: "#F6D9C9",
    text: "#1A365D",
    accent: "#E65F2B",
  },
] as const;

export default function PathSplit() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [leaving, setLeaving] = useState<(typeof paths)[number] | null>(null);
  const router = useRouter();

  const go = (p: (typeof paths)[number]) => {
    if (leaving) return;
    setLeaving(p);
    setTimeout(() => router.push(p.href), 650);
  };

  return (
    <section id="paths" className="relative px-6 pb-24 sm:px-10">
      <div className="mx-auto mb-10 max-w-5xl">
        <h2 className="font-display text-3xl font-semibold text-navy sm:text-4xl">
          Pick a path to go deeper
        </h2>
        <p className="mt-3 max-w-lg text-navy/70">
          Each side of the work has its own projects, training, and experience. Choose one —
          you can switch anytime from the nav bar.
        </p>
      </div>

      <div className="mx-auto flex h-[420px] max-w-5xl flex-col overflow-hidden rounded-3xl border border-navy/10 shadow-sm sm:flex-row">
        {paths.map((p) => {
          const isHovered = hovered === p.id;
          const isOther = hovered && hovered !== p.id;
          return (
            <button
              key={p.id}
              onClick={() => go(p)}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(p.id)}
              onBlur={() => setHovered(null)}
              className="focus-ring group relative flex flex-1 flex-col justify-end overflow-hidden p-8 text-left transition-[flex-grow] duration-500 ease-out sm:p-10"
              style={{
                background: p.bg,
                color: p.text,
                flexGrow: isHovered ? 1.35 : isOther ? 0.75 : 1,
              }}
            >
              <span
                className="absolute right-8 top-8 text-xs font-medium uppercase tracking-wide opacity-60 transition-transform duration-500 group-hover:translate-x-1"
                style={{ color: p.text }}
              >
                Enter →
              </span>
              <h3 className="font-display text-3xl font-semibold sm:text-4xl">{p.label}</h3>
              <p className="mt-3 max-w-[22ch] text-sm opacity-80">{p.sub}</p>
              <span
                aria-hidden
                className="mt-6 h-1 w-10 rounded-full transition-all duration-500 group-hover:w-16"
                style={{ background: p.accent }}
              />
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        {leaving && (
          <motion.div
            className="fixed inset-0 z-50"
            style={{ background: leaving.bg }}
            initial={{ clipPath: "circle(0% at 50% 50%)" }}
            animate={{ clipPath: "circle(150% at 50% 50%)" }}
            transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex h-full items-center justify-center">
              <span
                className="font-display text-2xl font-semibold"
                style={{ color: leaving.text }}
              >
                {leaving.label}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

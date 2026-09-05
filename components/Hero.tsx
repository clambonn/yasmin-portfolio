"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-16 sm:px-10 sm:pt-24">
      {/* orbit motif — a single quiet, deliberate motion moment */}
      <motion.svg
        aria-hidden
        viewBox="0 0 400 400"
        className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] opacity-[0.16] sm:opacity-[0.22]"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <ellipse
          cx="200"
          cy="200"
          rx="180"
          ry="70"
          fill="none"
          stroke="#1A365D"
          strokeWidth="1.5"
        />
        <ellipse
          cx="200"
          cy="200"
          rx="180"
          ry="70"
          fill="none"
          stroke="#E65F2B"
          strokeWidth="1.5"
          transform="rotate(60 200 200)"
        />
        <ellipse
          cx="200"
          cy="200"
          rx="180"
          ry="70"
          fill="none"
          stroke="#1A365D"
          strokeWidth="1.5"
          transform="rotate(120 200 200)"
        />
        <circle cx="200" cy="200" r="10" fill="#E65F2B" />
      </motion.svg>

      {/* Main hero layout */}
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1fr_360px]">
        
        {/* Text content */}
        <div>
          <p className="mb-5 text-sm font-medium text-orange">
            {profile.location}
          </p>

          <h1 className="font-display text-[2.6rem] font-semibold leading-[1.08] tracking-tight text-navy sm:text-6xl">
            Physics, taken in two directions —
            <br />
            quantum systems and the data behind them.
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-navy/75">
            {profile.objective}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#foundation"
              className="focus-ring rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-cream-paper transition-transform hover:-translate-y-0.5"
            >
              Start with the foundation
            </a>

            <a
              href="#paths"
              className="focus-ring rounded-full border border-navy/25 px-5 py-2.5 text-sm font-medium text-navy transition-colors hover:border-orange hover:text-orange"
            >
              Jump to the two paths
            </a>
          </div>
        </div>

        {/* Profile photo */}
        <div className="relative mx-auto w-full max-w-[360px]">
          <div className="overflow-hidden rounded-[2rem] border border-navy/10 shadow-sm">
            <Image
              src="/yasmin.jpg"
              alt="Yasmin"
              width={720}
              height={900}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
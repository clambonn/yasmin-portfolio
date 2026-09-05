import type { experience } from "@/lib/content";

type Item = (typeof experience)[number];

export default function ExperienceList({ items, accent }: { items: Item[]; accent: string }) {
  return (
    <ol className="space-y-8">
      {items.map((e) => (
        <li key={e.role} className="relative pl-6">
          <span
            aria-hidden
            className="absolute left-0 top-1.5 h-2 w-2 rounded-full"
            style={{ background: accent }}
          />
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <p className="font-medium text-navy">{e.role}</p>
            <p className="text-xs font-medium text-navy/50">{e.period}</p>
          </div>
          <p className="text-sm text-navy/60">{e.org}</p>
          <ul className="mt-2 space-y-1">
            {e.bullets.map((b) => (
              <li key={b} className="text-sm leading-relaxed text-navy/75">
                {b}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}

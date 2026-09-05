import type { credentials } from "@/lib/content";

type Item = (typeof credentials)[number];

export default function Credentials({ items, accent }: { items: Item[]; accent: string }) {
  return (
    <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
      {items.map((c) => (
        <li key={c.title} className="flex items-start justify-between gap-3 border-b border-navy/10 py-2.5">
          <div>
            <p className="text-sm font-medium text-navy">{c.title}</p>
            <p className="text-xs text-navy/55">{c.org}</p>
          </div>
          <span className="shrink-0 text-xs font-medium" style={{ color: accent }}>
            {c.period}
          </span>
        </li>
      ))}
    </ul>
  );
}

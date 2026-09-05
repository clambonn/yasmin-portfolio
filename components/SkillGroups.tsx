import type { skillGroups } from "@/lib/content";

type Group = (typeof skillGroups)[number];

export default function SkillGroups({ groups, accent }: { groups: Group[]; accent: string }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {groups.map((g) => (
        <div key={g.title}>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide" style={{ color: accent }}>
            {g.title}
          </h3>
          <ul className="flex flex-wrap gap-2">
            {g.items.map((i) => (
              <li key={i} className="rounded-full bg-navy/[0.06] px-3 py-1.5 text-sm text-navy/80">
                {i}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

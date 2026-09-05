import type { projects } from "@/lib/content";

type Project = (typeof projects)[number];

export default function ProjectCard({ project, accent }: { project: Project; accent: string }) {
  return (
    <article className="rounded-2xl border border-navy/10 bg-cream-paper p-6 transition-shadow hover:shadow-md">
      <div className="mb-2 flex items-start justify-between gap-4">
        <h3 className="font-display text-xl font-semibold text-navy">{project.title}</h3>
        <span className="shrink-0 text-xs font-medium text-navy/50">{project.period}</span>
      </div>
      <p className="text-sm text-navy/70">{project.description}</p>
      <ul className="mt-4 space-y-1.5">
        {project.bullets.map((b) => (
          <li key={b} className="flex gap-2 text-sm leading-relaxed text-navy/75">
            <span aria-hidden style={{ color: accent }}>
              —
            </span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap items-center gap-2">
        {project.stack.map((s) => (
          <span key={s} className="rounded-full bg-navy/[0.06] px-2.5 py-1 text-xs text-navy/70">
            {s}
          </span>
        ))}
      </div>
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="focus-ring mt-5 inline-flex items-center gap-1.5 text-sm font-medium"
          style={{ color: accent }}
        >
          View on GitHub ↗
        </a>
      )}
    </article>
  );
}

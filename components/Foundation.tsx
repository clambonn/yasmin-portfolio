import { education, languages, skillGroups, profile } from "@/lib/content";

export default function Foundation() {
  const sharedSkills = skillGroups.find((g) => g.track === "shared");

  return (
    <section id="foundation" className="border-y border-navy/10 bg-cream-paper px-6 py-20 sm:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 max-w-xl">
          <h2 className="font-display text-3xl font-semibold text-navy sm:text-4xl">
            The foundation both paths share
          </h2>
          <p className="mt-4 text-navy/70">
            Physics, numerical methods, and scientific computing sit underneath everything else —
            before the work splits into quantum systems on one side and data pipelines on the other.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-orange">
              Education
            </h3>
            <ul className="space-y-5">
              {education.map((e) => (
                <li key={e.degree} className="border-l-2 border-navy/15 pl-4">
                  <p className="font-medium text-navy">{e.degree}</p>
                  <p className="text-sm text-navy/60">
                    {e.institution} · {e.period}
                  </p>
                  {e.detail && <p className="mt-1.5 text-sm text-navy/70">{e.detail}</p>}
                </li>
              ))}
            </ul>

            <h3 className="mb-3 mt-8 text-sm font-semibold uppercase tracking-wide text-orange">
              Languages
            </h3>
            <ul className="flex flex-wrap gap-2">
              {languages.map((l) => (
                <li
                  key={l.name}
                  className="rounded-full border border-navy/15 px-3 py-1 text-sm text-navy/75"
                >
                  {l.name} · {l.level}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-orange">
              Scientific Computing
            </h3>
            <ul className="flex flex-wrap gap-2">
              {sharedSkills?.items.map((s) => (
                <li
                  key={s}
                  className="rounded-full bg-navy/[0.06] px-3 py-1.5 text-sm text-navy/80"
                >
                  {s}
                </li>
              ))}
            </ul>

            <h3 className="mb-3 mt-8 text-sm font-semibold uppercase tracking-wide text-orange">
              Teaching &amp; Outreach
            </h3>
            <p className="text-sm leading-relaxed text-navy/70">
              High School Physics Lecturer at Resala STEM Training Centre — two outreach lectures
              introducing students to Quantum Mechanics &amp; Particle Physics, and to Quantum
              Computing (Apr 2026).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

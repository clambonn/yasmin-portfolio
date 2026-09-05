import Link from "next/link";

export default function TrackHero({
  eyebrow,
  title,
  description,
  bg,
  fg,
  accent,
  otherHref,
  otherLabel,
}: {
  eyebrow: string;
  title: string;
  description: string;
  bg: string;
  fg: string;
  accent: string;
  otherHref: string;
  otherLabel: string;
}) {
  return (
    <section className="px-6 py-16 sm:px-10 sm:py-24" style={{ background: bg, color: fg }}>
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-medium" style={{ color: accent }}>
          {eyebrow}
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed opacity-80">{description}</p>
        <Link
          href={otherHref}
          className="focus-ring mt-8 inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-colors"
          style={{ borderColor: accent, color: fg }}
        >
          Switch to {otherLabel} →
        </Link>
      </div>
    </section>
  );
}

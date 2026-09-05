import TrackHero from "@/components/TrackHero";
import ProjectCard from "@/components/ProjectCard";
import ExperienceList from "@/components/ExperienceList";
import SkillGroups from "@/components/SkillGroups";
import Credentials from "@/components/Credentials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { projects, experience, skillGroups, credentials } from "@/lib/content";

const ACCENT = "#E65F2B";

export default function QuantumPage() {
  const items = projects.filter((p) => p.track === "quantum");
  const exp = experience.filter((e) => e.track === "quantum" || e.track === "shared");
  const skills = skillGroups.filter((s) => s.track === "quantum" || s.track === "shared");
  const creds = credentials.filter((c) => c.track === "quantum");

  return (
    <main>
      <TrackHero
        eyebrow="Quantum path"
        title="Quantum systems, from circuits to condensed matter"
        description="Simulation and analysis across quantum computing and physics research — from Qiskit circuits to resonant tunneling diode transport and nuclear detector work."
        bg="#1A365D"
        fg="#F4EAE1"
        accent={ACCENT}
        otherHref="/data"
        otherLabel="Data Engineering"
      />

      <section className="px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-semibold text-navy sm:text-3xl">Projects</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {items.map((p) => (
              <ProjectCard key={p.title} project={p} accent={ACCENT} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-navy/10 bg-cream-paper px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-semibold text-navy sm:text-3xl">Skills</h2>
          <div className="mt-8">
            <SkillGroups groups={skills} accent={ACCENT} />
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-semibold text-navy sm:text-3xl">
            Research &amp; Teaching
          </h2>
          <div className="mt-8">
            <ExperienceList items={exp} accent={ACCENT} />
          </div>
        </div>
      </section>

      <section className="border-t border-navy/10 bg-cream-paper px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-semibold text-navy sm:text-3xl">
            Training &amp; Schools
          </h2>
          <div className="mt-8">
            <Credentials items={creds} accent={ACCENT} />
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}

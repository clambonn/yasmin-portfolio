import TrackHero from "@/components/TrackHero";
import ProjectCard from "@/components/ProjectCard";
import ExperienceList from "@/components/ExperienceList";
import SkillGroups from "@/components/SkillGroups";
import Credentials from "@/components/Credentials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { projects, experience, skillGroups, credentials } from "@/lib/content";

const ACCENT = "#1A365D";

export default function DataPage() {
  const items = projects.filter((p) => p.track === "data");
  const exp = experience.filter((e) => e.track === "data" || e.track === "shared");
  const skills = skillGroups.filter((s) => s.track === "data" || s.track === "shared");
  const creds = credentials.filter((c) => c.track === "data");

  return (
    <main>
      <TrackHero
        eyebrow="Data Engineering path"
        title="Pipelines, retrieval systems, and applied ML"
        description="Building full-stack data and AI systems — from RAG pipelines with cited answers to the current Data Engineering track with the Digital Egypt Pioneers Initiative."
        bg="#F4EAE1"
        fg="#1A365D"
        accent="#E65F2B"
        otherHref="/quantum"
        otherLabel="Quantum"
      />

      <section className="px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-semibold text-navy sm:text-3xl">Projects</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {items.map((p) => (
              <ProjectCard key={p.title} project={p} accent="#E65F2B" />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-navy/10 bg-cream-paper px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-semibold text-navy sm:text-3xl">Skills</h2>
          <div className="mt-8">
            <SkillGroups groups={skills} accent="#E65F2B" />
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-semibold text-navy sm:text-3xl">
            Experience &amp; Program
          </h2>
          <div className="mt-8">
            <ExperienceList items={exp} accent="#E65F2B" />
          </div>
        </div>
      </section>

      <section className="border-t border-navy/10 bg-cream-paper px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-semibold text-navy sm:text-3xl">
            Training &amp; Scholarships
          </h2>
          <div className="mt-8">
            <Credentials items={creds} accent="#E65F2B" />
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}

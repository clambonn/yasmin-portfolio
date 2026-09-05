import { profile } from "@/lib/content";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-navy px-6 py-20 text-cream-paper sm:px-10 sm:py-24"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">
          Get in touch
        </h2>

        <p className="mx-auto mt-4 max-w-md text-cream-paper/75">
          Open to research collaborations and opportunities in quantum
          information science, quantum machine learning, and data engineering.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          {/* Email */}
          <a
            href={`mailto:${profile.email}`}
            className="focus-ring rounded-full bg-orange px-5 py-2.5 text-sm font-medium text-cream-paper transition-transform hover:-translate-y-0.5"
          >
            {profile.email}
          </a>

          {/* LinkedIn */}
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="focus-ring rounded-full bg-orange px-5 py-2.5 text-sm font-medium text-cream-paper transition-transform hover:-translate-y-0.5"
          >
            LinkedIn
          </a>

          {/* GitHub */}
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="focus-ring rounded-full bg-orange px-5 py-2.5 text-sm font-medium text-cream-paper transition-transform hover:-translate-y-0.5"
          >
            GitHub
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${profile.phone.replace(/\D/g, "")}`}
            target="_blank"
            rel="noreferrer"
            className="focus-ring rounded-full bg-orange px-5 py-2.5 text-sm font-medium text-cream-paper transition-transform hover:-translate-y-0.5"
          >
            {profile.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
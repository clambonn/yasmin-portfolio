import { profile } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-navy-deep px-6 py-8 text-center text-xs text-cream-paper/50 sm:px-10">
      <p>
        {profile.name} · {profile.location} · Built with Next.js
      </p>
    </footer>
  );
}

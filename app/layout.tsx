import type { Metadata } from "next";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "./globals.css";
import Nav from "@/components/Nav";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Yasmin Kasem — Quantum Computing & Data Engineering",
  description:
    "Portfolio of Yasmin Kasem, physics graduate working across quantum computing and data engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Nav />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}

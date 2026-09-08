import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about-section";
import { ImpactSection } from "@/components/impact-section";
import { ExperienceSection } from "@/components/experience-section";
import { WorkSection } from "@/components/work-section";
import { CertificationsSection } from "@/components/certifications-section";
import { ContactSection } from "@/components/contact-section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chandrani Bera — Backend Software Engineer" },
      {
        name: "description",
        content:
          "Backend Software Engineer building enterprise banking systems, scalable APIs, and production-ready solutions.",
      },
      { property: "og:title", content: "Chandrani Bera — Backend Software Engineer" },
      {
        property: "og:description",
        content:
          "Backend Software Engineer building enterprise banking systems, scalable APIs, and production-ready solutions.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <Hero />
        <AboutSection />
        <ImpactSection />
        <ExperienceSection />
        <WorkSection />
        <CertificationsSection />
        <ContactSection />
        <footer className="border-t border-border/60">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-10 text-[12px] uppercase tracking-[0.28em] text-muted-foreground sm:flex-row sm:items-center lg:px-10">
            <span>© {new Date().getFullYear()} Chandrani Bera</span>
            <span>Made slowly, at golden hour.</span>
          </div>
        </footer>
      </main>
    </div>
  );
}

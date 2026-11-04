import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about-section";
import { PersonalTransitionGoa } from "@/components/personal-transition-goa";
import { ImpactSection } from "@/components/impact-section";
import { ExperienceSection } from "@/components/experience-section";
import { BeyondTerminalSection } from "@/components/beyond-terminal-section";
import { WorkSection } from "@/components/work-section";
import { CertificationsSection } from "@/components/certifications-section";
import { ContactSection } from "@/components/contact-section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chandrani Bera — Backend Software Engineer & Creative Mind" },
      {
        name: "description",
        content:
          "Chandrani Bera — Backend Software Engineer building enterprise banking systems, scalable microservices, and creative software with the precision of engineering and the patience of an artist.",
      },
      { property: "og:title", content: "Chandrani Bera — Backend Software Engineer" },
      {
        property: "og:description",
        content:
          "Backend Software Engineer building enterprise banking systems, scalable microservices, and creative software.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-[var(--golden)]/30 selection:text-foreground">
      <SiteNav />
      <main id="top">
        <Hero />
        <AboutSection />
        <PersonalTransitionGoa />
        <ImpactSection />
        <ExperienceSection />
        <BeyondTerminalSection />
        <WorkSection />
        <CertificationsSection />
        <ContactSection />
      </main>
    </div>
  );
}

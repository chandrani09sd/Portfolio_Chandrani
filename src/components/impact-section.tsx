import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "@/components/section-heading";

const ease = [0.22, 1, 0.36, 1] as const;

const categories = [
  {
    id: "backend",
    label: "Backend Engineering",
    caption: "The core of my day-to-day work.",
    items: [
      { name: "Java", note: "My primary language for enterprise backend services." },
      { name: "Spring Boot", note: "The framework behind the services I build and support." },
      { name: "Spring MVC", note: "Layered request handling for banking application modules." },
      { name: "Spring Security", note: "Securing authentication and access in enterprise applications." },
      { name: "Thymeleaf", note: "Server-side rendering in the Social Media Platform." },
    ],
    where: "Put to work in: the Social Media Platform, and across enterprise banking services.",
  },
  {
    id: "data",
    label: "Database & Persistence",
    caption: "Keeping data structured, reliable and close to the domain.",
    items: [
      { name: "Hibernate", note: "ORM mapping between domain entities and database tables." },
      { name: "Spring Data JPA", note: "Repositories that keep data access clean and declarative." },
      { name: "MySQL", note: "Relational store for the Social Media Platform." },
      { name: "Oracle SQL / PL-SQL", note: "Certified query and procedure work with Oracle databases." },
    ],
    where: "Certified in Oracle SQL / PL-SQL.",
  },
  {
    id: "api",
    label: "API & Architecture",
    caption: "Designing how services talk to each other.",
    items: [
      { name: "REST APIs", note: "Designing and integrating service endpoints end to end." },
      { name: "Microservices", note: "Distributed services for enterprise banking workloads." },
      { name: "API Design", note: "Contracts that stay predictable as systems grow." },
      { name: "Backend Integration", note: "Wiring services together without losing reliability." },
      { name: "Kong Gateway", note: "Gateway-level routing for service communication." },
      { name: "Service Communication", note: "Keeping distributed systems in honest conversation." },
    ],
    where: "Put to work in: enterprise banking microservices and platform integrations.",
  },
  {
    id: "quality",
    label: "Testing, Security & Tools",
    caption: "The quiet work that makes release day uneventful.",
    items: [
      { name: "JUnit", note: "Test coverage before anything ships." },
      { name: "Penetration Testing", note: "Validating findings and closing security gaps." },
      { name: "Root Cause Analysis", note: "Fixing production defects so they stay fixed." },
      { name: "Production Releases", note: "Standing with the system through every release." },
      { name: "Environment Validation", note: "Verifying environments before and after deploys." },
      { name: "Docker & Kubernetes", note: "Deployment support for containerized services." },
      { name: "Azure DevOps & CI/CD", note: "Pipelines that keep delivery steady." },
      { name: "Git", note: "Everyday version control discipline." },
      { name: "SonarQube", note: "Guarding code quality in the pipeline." },
    ],
    where: "Put to work in: production support, security remediation and release engineering.",
  },
];

export function ImpactSection() {
  const [active, setActive] = useState(0);
  const category = categories[active];

  return (
    <section id="skills" className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-28 lg:px-10 lg:py-40">
        <SectionHeading
          index="02"
          eyebrow="Skills"
          title="What I build, and how it holds up in production."
          intro="An explorer rather than a list — choose an area to see the technologies inside it and how I actually use them."
        />

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.9, ease, delay: 0.1 }}
          className="mt-16 lg:mt-20"
        >
          {/* Category tabs */}
          <div
            role="tablist"
            aria-label="Skill areas"
            className="-mx-6 flex gap-3 overflow-x-auto px-6 pb-2 sm:mx-0 sm:flex-wrap sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {categories.map((c, i) => {
              const isActive = i === active;
              return (
                <button
                  key={c.id}
                  role="tab"
                  id={`skill-tab-${c.id}`}
                  aria-selected={isActive}
                  aria-controls="skill-panel"
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  className={`shrink-0 rounded-full border px-5 py-2.5 text-[13px] tracking-wide transition-all duration-500 ${
                    isActive
                      ? "border-transparent bg-foreground text-background shadow-[0_14px_36px_-18px_rgba(60,40,20,0.5)]"
                      : "border-border/70 bg-cream/40 text-foreground/70 hover:bg-cream/80"
                  }`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>

          {/* Skill panel */}
          <div
            id="skill-panel"
            role="tabpanel"
            aria-labelledby={`skill-tab-${category.id}`}
            className="relative mt-6 overflow-hidden rounded-[28px] border border-border/70 bg-cream/60 shadow-[0_1px_2px_rgba(60,40,20,0.04)]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease }}
                className="p-8 sm:p-10"
              >
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-[2px]"
                  style={{ background: "linear-gradient(90deg, var(--golden), var(--ember))" }}
                />
                <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground">
                  {category.caption}
                </p>

                <ul className="mt-8 grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
                  {category.items.map((item, i) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease, delay: i * 0.05 }}
                      className="border-b border-border/50 pb-5"
                    >
                      <h3 className="font-display text-[17px] font-semibold tracking-[-0.01em] text-foreground">
                        {item.name}
                      </h3>
                      <p className="mt-1.5 text-[14px] leading-relaxed text-muted-foreground">
                        {item.note}
                      </p>
                    </motion.li>
                  ))}
                </ul>

                <p className="mt-8 text-[13px] tracking-wide text-foreground/70">{category.where}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

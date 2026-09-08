import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { MouseEvent } from "react";
import { SectionHeading } from "@/components/section-heading";

const ease = [0.22, 1, 0.36, 1] as const;

const capabilities = [
  {
    title: "Backend Engineering",
    level: 92,
    tech: ["Java", "Spring Boot", "Spring MVC", "Spring Security", "Hibernate", "Spring Data JPA", "REST APIs"],
    statement: "Building secure and scalable backend services for enterprise systems.",
  },
  {
    title: "Microservices",
    level: 78,
    tech: ["REST APIs", "API Design", "Backend Integration", "Kong Gateway", "Service Communication"],
    statement: "Designing distributed services that remain reliable under production workloads.",
  },
  {
    title: "Production Support",
    level: 96,
    tech: ["Production Releases", "Issue Resolution", "Root Cause Analysis", "Environment Validation", "Developer Support"],
    statement: "Supporting enterprise banking systems with stability and confidence.",
  },
  {
    title: "Security",
    level: 82,
    tech: ["Security Remediation", "Penetration Testing", "Validation", "Secure Development"],
    statement: "Helping enterprise applications remain secure and compliant.",
  },
  {
    title: "DevOps",
    level: 74,
    tech: ["Docker", "Kubernetes", "Azure DevOps", "Git", "CI/CD", "SonarQube"],
    statement: "Building reliable deployment pipelines and improving developer productivity.",
  },
];

function CapabilityCard({ c, i }: { c: (typeof capabilities)[number]; i: number }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const rotateX = useTransform(sy, (v) => `${v * -3}deg`);
  const rotateY = useTransform(sx, (v) => `${v * 3}deg`);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.95, ease, delay: (i % 2) * 0.08 }}
      onMouseMove={onMove}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      className="group rounded-[28px] border border-border/70 bg-cream/60 p-8 shadow-[0_1px_2px_rgba(60,40,20,0.04)] transition-shadow duration-500 hover:shadow-[0_30px_70px_-30px_rgba(120,80,30,0.3)] sm:p-10"
    >
      <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-[28px]">
        {c.title}
      </h3>

      <div className="mt-6 h-[3px] w-full overflow-hidden rounded-full bg-sand/70">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: c.level / 100 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1.4, ease, delay: 0.15 }}
          style={{ originX: 0, background: "linear-gradient(90deg, var(--golden), var(--ember))" }}
          className="h-full w-full rounded-full"
        />
      </div>

      <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
        {c.tech.map((t) => (
          <li key={t} className="text-[13px] tracking-wide text-muted-foreground">
            {t}
          </li>
        ))}
      </ul>

      <p className="mt-8 max-w-md text-[15px] leading-relaxed text-foreground/80">{c.statement}</p>
    </motion.div>
  );
}

export function ImpactSection() {
  return (
    <section id="skills" className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-28 lg:px-10 lg:py-40">
        <SectionHeading
          index="02"
          eyebrow="Engineering Impact"
          title="What I build, and how it holds up in production."
        />
        <div className="mt-16 grid grid-cols-1 gap-6 lg:mt-20 lg:grid-cols-2 lg:gap-8">
          {capabilities.map((c, i) => (
            <CapabilityCard key={c.title} c={c} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

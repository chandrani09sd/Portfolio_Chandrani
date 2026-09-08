import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "@/components/section-heading";
import socialShot from "@/assets/project-social.jpg";
import forecastShot from "@/assets/project-forecast.jpg";
import teaserArt from "@/assets/teaser-command-center.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

const projects = [
  {
    title: "Social Media Platform",
    line: "Because connection should never come at the cost of safety.",
    problem:
      "Creating meaningful social interactions while keeping user authentication and messaging secure.",
    solution:
      "A full-stack platform built using Java, Spring Boot, Thymeleaf and MySQL supporting authentication, messaging, profile management and REST APIs.",
    tech: ["Java", "Spring Boot", "REST APIs", "Thymeleaf", "MySQL"],
    features: ["Authentication", "Messaging", "Profile management", "REST APIs"],
    image: socialShot,
  },
  {
    title: "Sales Forecasting Application",
    line: "Because a good decision begins with a believable number.",
    problem: "Businesses struggle to make decisions without accurate sales predictions.",
    solution:
      "A React and Machine Learning application using regression models to generate prediction APIs and forecast future sales.",
    tech: ["React", "Python", "Machine Learning", "Regression", "Prediction APIs"],
    features: ["Regression models", "Prediction APIs", "Sales forecasting", "Interactive UI"],
    image: forecastShot,
  },
];

function Project({ p, index }: { p: (typeof projects)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);
  const flipped = index % 2 === 1;

  return (
    <div
      ref={ref}
      className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-24 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:py-36"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 1.2, ease }}
        style={{ y }}
        className={`lg:col-span-7 ${flipped ? "lg:order-2" : ""}`}
      >
        <div className="overflow-hidden rounded-[32px] border border-border/60 bg-cream/50 shadow-[0_40px_90px_-40px_rgba(120,80,30,0.4)]">
          <img
            src={p.image}
            alt={`${p.title} interface`}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 1, ease, delay: 0.1 }}
        className={`lg:col-span-5 ${flipped ? "lg:order-1" : ""}`}
      >
        <h3 className="font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-foreground sm:text-[40px]">
          {p.title}
        </h3>
        <p className="mt-4 max-w-md text-[16px] leading-relaxed text-foreground/75">{p.line}</p>

        <div className="mt-10 space-y-8">
          <div>
            <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground">
              The problem
            </span>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              {p.problem}
            </p>
          </div>
          <div>
            <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground">
              The solution
            </span>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              {p.solution}
            </p>
          </div>
        </div>

        <ul className="mt-10 flex flex-wrap gap-2">
          {p.features.map((f) => (
            <li
              key={f}
              className="rounded-full border border-border/70 bg-cream/60 px-4 py-1.5 text-[12px] tracking-wide text-foreground/70"
            >
              {f}
            </li>
          ))}
        </ul>

        <p className="mt-8 text-[12px] tracking-[0.18em] text-muted-foreground/80">
          {p.tech.join("  ·  ")}
        </p>

        <a
          href="#contact"
          className="group mt-10 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-[13px] tracking-wide text-background transition-all duration-500 hover:gap-3 hover:opacity-90"
        >
          Explore Project
          <span aria-hidden>→</span>
        </a>
      </motion.div>
    </div>
  );
}

export function WorkSection() {
  return (
    <section id="projects" className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 pt-28 lg:px-10 lg:pt-40">
        <SectionHeading
          index="04"
          eyebrow="Featured Work"
          title="Things I built, and the reasons they exist."
        />
      </div>

      {projects.map((p, i) => (
        <Project key={p.title} p={p} index={i} />
      ))}

      <div className="mx-auto max-w-6xl px-6 pb-28 lg:px-10 lg:pb-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1.1, ease }}
          className="relative overflow-hidden rounded-[36px] border border-border/50"
        >
          <img
            src={teaserArt}
            alt="Abstract illustration of an enterprise banking architecture"
            loading="lazy"
            className="h-[420px] w-full object-cover sm:h-[520px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,12,6,0.85)] via-[rgba(20,12,6,0.35)] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-8 sm:p-14">
            <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/70">
              Coming soon
            </span>
            <h3 className="mt-5 max-w-2xl font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-white sm:text-[44px]">
              Enterprise Banking Command Center
            </h3>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/75 sm:text-[16px]">
              Currently designing an interactive visualization inspired by real enterprise banking
              architecture.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

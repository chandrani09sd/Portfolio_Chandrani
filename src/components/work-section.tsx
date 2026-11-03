import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "@/components/section-heading";
import coldiumShot from "@/assets/coldium-preview.jpg";
import socialShot from "@/assets/project-social.jpg";
import forecastShot from "@/assets/project-forecast.jpg";
import teaserArt from "@/assets/teaser-command-center.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

const coldiumWorkflow = [
  "Discover relevant openings and save the ones worth pursuing",
  "Find the right people — hiring managers, engineers, tech leads, recruiters",
  "Draft a personalized referral or recruiter message",
  "Review, edit and copy it — then reach out on LinkedIn yourself",
  "Track applications and follow-ups from saved to offer",
];

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
      className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:py-32"
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

function ColdiumFeature() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <div ref={ref} className="mx-auto max-w-6xl px-6 pb-10 pt-4 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 1.1, ease }}
        className="overflow-hidden rounded-[36px] border border-border/70 bg-cream/60 shadow-[0_50px_110px_-45px_rgba(120,80,30,0.45)]"
      >
        {/* Large clickable preview — opens the live app */}
        <a
          href="https://linkedin-referral-copilot.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Coldium — Referral Co-pilot in a new tab"
          className="group block overflow-hidden"
        >
          <motion.img
            src={coldiumShot}
            alt="Coldium — Referral Co-pilot, golden-hour product preview showing job discovery, prospect outreach and application tracking"
            loading="lazy"
            width={1920}
            height={1088}
            style={{ y }}
            className="aspect-[16/9] w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.02]"
          />
        </a>

        <div className="px-8 pb-10 pt-10 sm:px-12 sm:pb-14 sm:pt-12">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h3 className="font-display text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-foreground sm:text-[52px]">
              Coldium
            </h3>
            <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground">
              Referral Co-pilot
            </span>
          </div>

          <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-foreground/80 sm:text-[17px]">
            An application designed to bring job discovery, referral outreach, and application
            tracking into one organized workflow.
          </p>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Find relevant opportunities, discover people at target companies, prepare personalized
            outreach, and keep track of applications and follow-ups in one place.
          </p>

          <ol className="mt-10 grid grid-cols-1 gap-x-12 gap-y-4 sm:grid-cols-2">
            {coldiumWorkflow.map((step, i) => (
              <li key={step} className="flex items-baseline gap-4 border-b border-border/50 pb-4">
                <span
                  aria-hidden
                  className="font-display text-[13px] font-semibold tabular-nums text-[var(--ember)]"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[14px] leading-relaxed text-foreground/80">{step}</span>
              </li>
            ))}
          </ol>

          <p className="mt-8 max-w-2xl text-[13px] leading-relaxed text-muted-foreground/80">
            Coldium prepares and organizes the outreach — every message is reviewed by you, and
            contact with people happens manually on LinkedIn. Nothing is sent automatically.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="https://linkedin-referral-copilot.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3 text-[13px] tracking-wide text-background transition-all duration-500 hover:gap-3 hover:opacity-90"
            >
              Open Coldium
              <span aria-hidden>↗</span>
            </a>
            <p className="text-[12px] tracking-[0.18em] text-muted-foreground/80">
              React · TypeScript · Java 21 · Spring Boot · PostgreSQL
            </p>
          </div>
        </div>
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

      <ColdiumFeature />

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

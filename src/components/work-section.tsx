import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Sparkles, CheckCircle2, ExternalLink } from "lucide-react";
import coldiumShot from "@/assets/coldium-preview.jpg";
import socialShot from "@/assets/project-social.jpg";
import forecastShot from "@/assets/project-forecast.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

const coldiumCapabilities = [
  "Discover relevant job openings and save opportunities worth pursuing",
  "Find relevant employees, hiring managers, engineering managers, tech leads, and recruiters",
  "Generate personalized referral and recruiter outreach messages tailored to each role",
  "Save, organize, and associate key company prospects with specific job listings",
  "Track application progress and manage outreach follow-ups manually in one place",
  "Centralize your entire job-search journey from saved lead to final offer",
];

const projects = [
  {
    title: "Social Media Web Application",
    line: "Because connection should never come at the cost of safety.",
    problem:
      "Creating seamless, rich social interactions while keeping user authentication, profile data, and messaging strictly secure.",
    solution:
      "A full-stack enterprise web application built using Java, Spring Boot, Thymeleaf, and MySQL supporting robust authentication, messaging, profile management, and modular REST APIs.",
    tech: ["Java", "Spring Boot", "REST APIs", "Thymeleaf", "MySQL"],
    features: ["Secure Authentication", "Direct Messaging", "Profile Management", "RESTful APIs"],
    image: socialShot,
    github: "https://github.com/chandrani09sd",
  },
  {
    title: "Sales Forecasting Application",
    line: "Because a good decision begins with a believable number.",
    problem:
      "Modern retail and enterprise businesses struggle to make inventory and staffing decisions without accurate predictive data.",
    solution:
      "A data-driven web application combining React and Machine Learning regression models to serve prediction APIs and forecast future sales trends.",
    tech: ["React", "Python", "Machine Learning", "Regression Models", "Prediction APIs"],
    features: ["Regression Models", "Prediction APIs", "Sales Forecasting", "Interactive Dashboard"],
    image: forecastShot,
    github: "https://github.com/chandrani09sd",
  },
];

function Project({ p, index }: { p: (typeof projects)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
  const flipped = index % 2 === 1;

  return (
    <div
      ref={ref}
      className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:py-24"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 1.1, ease }}
        style={{ y }}
        className={`lg:col-span-7 ${flipped ? "lg:order-2" : ""}`}
      >
        <div className="overflow-hidden rounded-[32px] border border-border/70 bg-cream/50 shadow-[0_30px_70px_-30px_rgba(120,80,30,0.3)]">
          <img
            src={p.image}
            alt={`${p.title} preview`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.9, ease, delay: 0.1 }}
        className={`lg:col-span-5 ${flipped ? "lg:order-1" : ""}`}
      >
        <h3 className="font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-foreground sm:text-[38px]">
          {p.title}
        </h3>
        <p className="mt-3.5 max-w-md text-[16px] leading-relaxed text-foreground/80">{p.line}</p>

        <div className="mt-8 space-y-6">
          <div>
            <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--ember)]">
              The Problem
            </span>
            <p className="mt-2 max-w-md text-[14px] leading-relaxed text-muted-foreground">
              {p.problem}
            </p>
          </div>
          <div>
            <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--golden)]">
              The Engineering Solution
            </span>
            <p className="mt-2 max-w-md text-[14px] leading-relaxed text-muted-foreground">
              {p.solution}
            </p>
          </div>
        </div>

        <ul className="mt-8 flex flex-wrap gap-2">
          {p.features.map((f) => (
            <li
              key={f}
              className="rounded-full border border-border/70 bg-cream/70 px-3.5 py-1 text-[12px] tracking-wide text-foreground/80"
            >
              {f}
            </li>
          ))}
        </ul>

        <p className="mt-6 text-[12px] tracking-[0.16em] text-muted-foreground">
          {p.tech.join("  ·  ")}
        </p>
      </motion.div>
    </div>
  );
}

function ColdiumFeature() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

  return (
    <div ref={ref} className="mx-auto max-w-6xl px-6 pb-12 pt-6 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 1.1, ease }}
        className="overflow-hidden rounded-[36px] border border-border/80 bg-cream/80 shadow-[0_45px_100px_-40px_rgba(120,80,30,0.4)]"
      >
        {/* Clickable Live App Preview */}
        <a
          href="https://linkedin-referral-copilot.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Coldium — Referral Co-pilot in a new tab"
          className="group block relative overflow-hidden"
        >
          <motion.img
            src={coldiumShot}
            alt="Coldium — Referral Co-pilot interface showing job discovery, prospect outreach, and application tracking"
            loading="lazy"
            width={1920}
            height={1088}
            style={{ y }}
            className="aspect-[16/9] w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100 flex items-end p-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-[12px] font-semibold text-black backdrop-blur-md">
              Launch Live Application <ExternalLink className="h-3.5 w-3.5" />
            </span>
          </div>
        </a>

        {/* Content details */}
        <div className="p-8 sm:p-12 lg:p-14">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <div>
              <span className="rounded-full border border-[var(--golden)]/40 bg-[var(--golden)]/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[var(--ember)]">
                Featured Product
              </span>
              <h3 className="mt-3 font-display text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-foreground sm:text-[48px]">
                Coldium
              </h3>
            </div>
            <span className="text-[12px] font-medium uppercase tracking-[0.28em] text-muted-foreground">
              Referral Co-pilot
            </span>
          </div>

          <p className="mt-5 max-w-3xl text-[16px] leading-relaxed text-foreground/85 sm:text-[17px]">
            A comprehensive job-search and referral outreach application designed to streamline the
            entire job acquisition workflow — finding opportunities, identifying the right
            people, generating tailored outreach, and organizing applications in one place.
          </p>

          <div className="mt-10">
            <h4 className="text-[12px] font-medium uppercase tracking-[0.25em] text-[var(--ember)]">
              Core Product Capabilities
            </h4>
            <ol className="mt-5 grid grid-cols-1 gap-x-12 gap-y-4 sm:grid-cols-2">
              {coldiumCapabilities.map((cap, i) => (
                <li key={cap} className="flex items-baseline gap-3.5 border-b border-border/50 pb-3.5">
                  <span
                    aria-hidden
                    className="font-display text-[13px] font-semibold tabular-nums text-[var(--ember)]"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[14px] leading-relaxed text-foreground/80">{cap}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Honest transparency note */}
          <div className="mt-8 rounded-2xl border border-border/60 bg-cream/60 p-4 text-[13px] leading-relaxed text-muted-foreground">
            <strong className="text-foreground">Product Transparency:</strong> Coldium organizes
            and drafts your outreach. Every message is reviewed by you, and contact happens manually
            on LinkedIn. Coldium does not automatically message users or scrape private data.
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="https://linkedin-referral-copilot.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-3.5 text-[13px] font-medium tracking-wide text-background shadow-md transition-all duration-400 hover:gap-3 hover:opacity-90"
            >
              Open Live Application
              <ExternalLink className="h-4 w-4" />
            </a>
            <p className="text-[12px] tracking-[0.16em] text-muted-foreground">
              React · TypeScript · Java 21 · Spring Boot · PostgreSQL
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function WorkSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="projects" className="relative overflow-hidden bg-background pt-24 pb-20 lg:pt-32 lg:pb-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.8, ease }}
            className="inline-flex items-center gap-2.5 rounded-full border border-[var(--golden)]/40 bg-[var(--golden)]/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--ember)]"
          >
            <Sparkles className="h-3.5 w-3.5 text-[var(--golden)]" />
            <span>04 — Featured Work</span>
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.9, ease, delay: 0.1 }}
            className="mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-[-0.025em] text-foreground sm:text-5xl"
          >
            Things I built. <br />
            <span className="bg-gradient-to-r from-[var(--ember)] via-[var(--golden)] to-[#d47343] bg-clip-text text-transparent">
              And the reasons they exist.
            </span>
          </motion.h2>
        </div>
      </div>

      <ColdiumFeature />

      {projects.map((p, i) => (
        <Project key={p.title} p={p} index={i} />
      ))}
    </section>
  );
}

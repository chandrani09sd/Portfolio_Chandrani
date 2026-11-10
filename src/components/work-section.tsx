import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import {
  Sparkles,
  ExternalLink,
  Github,
  Server,
  Database,
  ShieldCheck,
  TrendingUp,
  Cpu,
  Layers,
  ArrowRight,
} from "lucide-react";
import coldiumShot from "@/assets/coldium-preview.jpg";
import socialShot from "@/assets/project-social.jpg";
import forecastShot from "@/assets/project-forecast.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

const coldiumCaseStudy = {
  problem: {
    title: "01 · Problem Statement & Operational Friction",
    summary:
      "Job seekers and software engineers face severe workflow fragmentation when navigating referral pipelines: tracking leads across disjointed spreadsheets, missing critical recruiter follow-up windows, and losing context across scattered communication channels. Coldium was architected to eliminate this manual operational friction through a centralized, state-machine-driven referral engine.",
  },
  architecture: {
    title: "02 · Architecture & Stack Decisions",
    points: [
      {
        heading: "Java 21 LTS & Spring Boot 3",
        text: "Chosen over dynamic runtimes (Node.js/Python) to enforce strict compile-time type safety, structured concurrency, virtual threads readiness, and enterprise declarative transaction management (@Transactional).",
      },
      {
        heading: "Relational Schema Modeling (PostgreSQL)",
        text: "Designed a normalized multi-entity relational schema mapping Users → Companies → Opportunities → Prospects → Application Stages with strict foreign-key integrity, cascading lifecycle rules, and B-tree indexing on composite lookup keys (user_id, status, company_id).",
      },
    ],
  },
  challenges: {
    title: "03 · Technical Challenges & Defensive Design",
    points: [
      {
        heading: "Multi-Tenant Session & Data Isolation",
        text: "Implemented strict user-level data boundary enforcement via Spring Security context propagation and query-level JPA specifications, guaranteeing absolute tenant isolation across all candidate records.",
      },
      {
        heading: "Defensive API Contracts & Validation",
        text: "Engineered stateless RESTful endpoints using Jakarta @Valid bean validation, sanitization filters, and unified RFC-compliant JSON error envelopes with rate handling to guard against client burst traffic.",
      },
    ],
  },
  roadmap: {
    title: "04 · 10x Scaling Roadmap & Trade-offs",
    points: [
      {
        heading: "Distributed Redis Caching Tier",
        text: "Introduce Redis read-through caching for company directories, prospect metadata, and active job listings with TTL invalidation to reduce database read load by 80%+.",
      },
      {
        heading: "Asynchronous Event Queues (RabbitMQ / Kafka)",
        text: "Decouple heavy outreach template rendering, webhook delivery, and audit logging into background worker queues with exponential backoff and dead-letter queues (DLQ).",
      },
    ],
  },
};

const projects = [
  {
    title: "Social Media Web Application",
    line: "High-integrity social platform architected with strict authentication and modular REST services.",
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
    line: "Predictive analytics engine serving regression forecasting APIs for inventory and business planning.",
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
          className="group relative block overflow-hidden border-b border-border/70"
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
          <div className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6 sm:p-8 opacity-95 transition-opacity duration-300">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-1.5 text-[12px] font-semibold text-neutral-900 backdrop-blur-md shadow-md">
                Launch Live Application <ExternalLink className="h-3.5 w-3.5" />
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3.5 py-1.5 text-[12px] font-medium text-white/90 backdrop-blur-md">
                Java 21 · Spring Boot 3 · PostgreSQL
              </span>
            </div>
          </div>
        </a>

        {/* Engineering Case Study Content */}
        <div className="p-8 sm:p-12 lg:p-14">
          {/* Header & Badging */}
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-[var(--golden)]/40 bg-[var(--golden)]/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[var(--ember)]">
                  Engineering Case Study
                </span>
                <span className="rounded-full border border-border/80 bg-cream/70 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                  System Architecture
                </span>
              </div>
              <h3 className="mt-3.5 font-display text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-foreground sm:text-[46px]">
                Coldium
              </h3>
            </div>
            <span className="text-[12px] font-medium uppercase tracking-[0.28em] text-muted-foreground">
              Referral Co-pilot Platform
            </span>
          </div>

          <p className="mt-4 max-w-3xl text-[16px] leading-relaxed text-foreground/85 sm:text-[17px]">
            A state-machine driven referral & candidate outreach platform architected for reliability,
            strict data isolation, and resilient enterprise backend performance.
          </p>

          {/* 1. Problem Statement */}
          <div className="mt-10 rounded-2xl border border-border/70 bg-cream/50 p-6 sm:p-7">
            <div className="flex items-center gap-2.5 text-[12px] font-semibold uppercase tracking-[0.25em] text-[var(--ember)]">
              <Layers className="h-4 w-4" />
              <span>{coldiumCaseStudy.problem.title}</span>
            </div>
            <p className="mt-3 text-[14.5px] leading-relaxed text-foreground/80 sm:text-[15px]">
              {coldiumCaseStudy.problem.summary}
            </p>
          </div>

          {/* 2 & 3: Architecture & Challenges Grid */}
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* 02. Architecture & Stack Decisions */}
            <div className="flex flex-col justify-between rounded-2xl border border-border/70 bg-cream/50 p-6 sm:p-7">
              <div>
                <div className="flex items-center gap-2.5 text-[12px] font-semibold uppercase tracking-[0.25em] text-[var(--ember)]">
                  <Cpu className="h-4 w-4" />
                  <span>{coldiumCaseStudy.architecture.title}</span>
                </div>
                <div className="mt-4 space-y-4">
                  {coldiumCaseStudy.architecture.points.map((pt) => (
                    <div key={pt.heading} className="border-t border-border/50 pt-3.5 first:border-0 first:pt-0">
                      <h5 className="text-[13.5px] font-semibold text-foreground flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--golden)]" />
                        {pt.heading}
                      </h5>
                      <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted-foreground">
                        {pt.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 03. Technical Challenges & Defensive Design */}
            <div className="flex flex-col justify-between rounded-2xl border border-border/70 bg-cream/50 p-6 sm:p-7">
              <div>
                <div className="flex items-center gap-2.5 text-[12px] font-semibold uppercase tracking-[0.25em] text-[var(--ember)]">
                  <ShieldCheck className="h-4 w-4" />
                  <span>{coldiumCaseStudy.challenges.title}</span>
                </div>
                <div className="mt-4 space-y-4">
                  {coldiumCaseStudy.challenges.points.map((pt) => (
                    <div key={pt.heading} className="border-t border-border/50 pt-3.5 first:border-0 first:pt-0">
                      <h5 className="text-[13.5px] font-semibold text-foreground flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--golden)]" />
                        {pt.heading}
                      </h5>
                      <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted-foreground">
                        {pt.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 4. Future Scaling / 10x Roadmap */}
          <div className="mt-8 rounded-2xl border border-border/70 bg-cream/50 p-6 sm:p-7">
            <div className="flex items-center gap-2.5 text-[12px] font-semibold uppercase tracking-[0.25em] text-[var(--ember)]">
              <TrendingUp className="h-4 w-4" />
              <span>{coldiumCaseStudy.roadmap.title}</span>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {coldiumCaseStudy.roadmap.points.map((pt) => (
                <div key={pt.heading} className="rounded-xl border border-border/50 bg-background/50 p-4">
                  <h5 className="text-[13px] font-semibold text-foreground flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--ember)]" />
                    {pt.heading}
                  </h5>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                    {pt.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Architectural Philosophy & Transparency */}
          <div className="mt-8 rounded-2xl border border-border/60 bg-cream/40 p-4 text-[13px] leading-relaxed text-muted-foreground">
            <strong className="text-foreground">Architectural Philosophy:</strong> Coldium models referral pipelines and generates verified message blueprints with human-in-the-loop control. Zero private scraping or headless automation bots, ensuring strict compliance with third-party platform terms.
          </div>

          {/* CTA & Stack Footer */}
          <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-border/60 pt-8">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://linkedin-referral-copilot.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3 text-[13px] font-medium tracking-wide text-background shadow-md transition-all duration-300 hover:gap-3 hover:opacity-90"
              >
                Launch Live Application
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/chandrani09sd"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-border/80 bg-background px-6 py-3 text-[13px] font-medium text-foreground transition-all duration-300 hover:border-foreground/40"
              >
                <Github className="h-4 w-4" />
                <span>View Source Code</span>
              </a>
            </div>

            <p className="text-[12px] tracking-[0.16em] text-muted-foreground">
              Java 21 · Spring Boot 3 · PostgreSQL · Spring Security · React · TypeScript
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

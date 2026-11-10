import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import {
  Building2,
  Calendar,
  ShieldAlert,
  Zap,
  CheckCircle2,
  ChevronDown,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  ExternalLink,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

// Verified metrics strictly aligned with resume & career totals
const verifiedMetrics = [
  { value: "< 2 mins", label: "Dev Setup Time", sub: "Down from 3–4 days · One-Click Installer" },
  { value: "30+", label: "Production Defects Resolved", sub: "iBanking (MY, SG, HK)" },
  { value: "80+", label: "Total CVEs Remediated", sub: "Career Total Across Roles · 20+ Critical" },
  { value: "40% → 60%", label: "Test Coverage Increase", sub: "Achieved in 1 Month · CEMS Platform" },
  { value: "320+", label: "Total Automated Tests", sub: "Career Total · 200+ iBanking, 120+ CEMS" },
];

export function ExperienceSection() {
  const [expandedRole, setExpandedRole] = useState<number | null>(0);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="experience" className="relative overflow-hidden bg-background py-24 lg:py-32">
      {/* Background ambient warm gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 left-1/2 -z-10 h-[500px] w-full max-w-5xl -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(244,199,138,0.3) 0%, rgba(232,138,85,0.12) 60%, transparent 80%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        {/* Section Heading */}
        <div className="max-w-3xl">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.8, ease }}
            className="inline-flex items-center gap-2.5 rounded-full border border-[var(--golden)]/40 bg-[var(--golden)]/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--ember)]"
          >
            <Sparkles className="h-3.5 w-3.5 text-[var(--golden)]" />
            <span>03 — Professional Experience</span>
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.9, ease, delay: 0.1 }}
            className="mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-[-0.025em] text-foreground sm:text-5xl"
          >
            Enterprise systems. <br />
            <span className="bg-gradient-to-r from-[var(--ember)] via-[var(--golden)] to-[#d47343] bg-clip-text text-transparent">
              Tested at banking scale.
            </span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.9, ease, delay: 0.15 }}
            className="mt-6 text-[17px] leading-relaxed text-foreground/80"
          >
            ~2.7+ years supporting and engineering tier-1 digital banking applications for Standard
            Chartered Bank via Capgemini. Here are the verified production deliverables and automation impact.
          </motion.p>
        </div>

        {/* Verified Metrics Strip */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.9, ease, delay: 0.2 }}
          className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"
        >
          {verifiedMetrics.map((metric, idx) => (
            <div
              key={metric.label}
              className={`group rounded-2xl border border-border/70 bg-cream/60 p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--golden)]/70 hover:bg-cream hover:shadow-[0_14px_30px_-14px_rgba(120,70,20,0.2)] ${
                idx === 4 ? "col-span-2 sm:col-span-1" : ""
              }`}
            >
              <span className="font-display text-2xl font-semibold tracking-tight text-foreground group-hover:text-[var(--ember)] sm:text-3xl">
                {metric.value}
              </span>
              <p className="mt-2 text-[12px] font-medium leading-snug text-foreground/90">
                {metric.label}
              </p>
              <p className="mt-1 text-[11px] text-muted-foreground">{metric.sub}</p>
            </div>
          ))}
        </motion.div>

        {/* Two Distinct Roles */}
        <div className="mt-14 space-y-8">
          {/* ROLE 1: iBanking Application */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.9, ease }}
            className="overflow-hidden rounded-[32px] border border-border/80 bg-cream/70 shadow-[0_25px_60px_-25px_rgba(100,60,20,0.18)]"
          >
            {/* Header banner */}
            <div className="p-7 sm:p-10">
              <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="rounded-full border border-[var(--golden)]/50 bg-[var(--golden)]/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[var(--ember)]">
                      Current Role
                    </span>
                    <span className="rounded-full border border-border/70 bg-cream px-3 py-1 text-[11px] font-medium tracking-wide text-foreground/80">
                      Capgemini
                    </span>
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-800">
                      🛡️ 30+ Production Fixes
                    </span>
                    <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-[11px] font-medium text-amber-800">
                      ⚡ ScSetup Tooling (&lt;2 min)
                    </span>
                    <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-800">
                      🌏 SG · HK · MY Banking
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                    Standard Chartered Bank — iBanking Digital Platform
                  </h3>
                  <p className="mt-1 text-[14px] text-muted-foreground">
                    Senior Software Engineer · Malaysia, Singapore, and Hong Kong banking applications
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-border/70 bg-cream/90 px-4 py-2 text-[12px] font-medium text-foreground">
                  <Calendar className="h-3.5 w-3.5 text-[var(--golden)]" />
                  <span>September 2025 – Present</span>
                </div>
              </div>

              {/* TOP DIFFERENTIATOR: Developer Installer Achievement */}
              <a
                href="https://chandrani09sd.github.io/ScSetup/SC-Setup-Market-Slide-Recreated.html"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View One-Click Developer Installer Automation interactive slide"
                className="group mt-8 block rounded-2xl border-2 border-[var(--golden)]/70 bg-gradient-to-r from-[rgba(244,199,138,0.32)] via-cream/90 to-[rgba(232,138,85,0.24)] p-6 shadow-sm transition-all duration-300 hover:border-[var(--golden)] hover:shadow-md hover:scale-[1.005]"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--ember)] text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
                      <Zap className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-display text-[18px] font-semibold text-foreground group-hover:text-[var(--ember)] transition-colors">
                          One-Click Developer Installer Automation
                        </span>
                        <span className="rounded-full border border-[var(--ember)]/30 bg-[var(--ember)]/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[var(--ember)]">
                          Top Differentiator
                        </span>
                        <span className="rounded-full border border-[var(--golden)]/40 bg-[var(--golden)]/10 px-2 py-0.5 text-[10px] font-semibold text-[var(--ember)]">
                          Internal Engineering Forum
                        </span>
                      </div>
                      <p className="mt-2 max-w-3xl text-[14px] leading-relaxed text-foreground/85">
                        Engineered a one-click automated developer installer that generates certificates, secures credentials,
                        deploys Kubernetes ConfigMaps, configures Logback logging profiles, and standardizes multi-region environment variables —
                        collapsing local developer environment onboarding from{" "}
                        <strong className="text-foreground underline decoration-[var(--golden)] decoration-2 underline-offset-4">
                          3–4 days to under 2 minutes
                        </strong>
                        . Presented the solution at an internal engineering forum, where it was adopted across cross-functional engineering teams.
                      </p>
                    </div>
                  </div>
                  <div className="shrink-0 self-end sm:self-center">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--golden)]/70 bg-cream/90 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[var(--ember)] shadow-xs transition-all group-hover:bg-[var(--ember)] group-hover:text-white group-hover:border-[var(--ember)]">
                      <span>View Slide</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </a>

              {/* Verified Achievements List */}
              <div className="mt-8">
                <h4 className="text-[12px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                  Key Deliverables & Responsibilities
                </h4>
                <div className="mt-4 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                  <div className="flex items-start gap-3 rounded-xl border border-border/50 bg-cream/50 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--golden)]/60 hover:bg-cream hover:shadow-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--golden)]" />
                    <p className="text-[13px] leading-relaxed text-foreground/85">
                      <strong>30+ Production Defects Resolved:</strong> Traced, diagnosed, and remediated 30+ high-severity defects across Malaysia, Singapore, and Hong Kong banking portals end-to-end with zero regressions.
                    </p>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-border/50 bg-cream/50 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--golden)]/60 hover:bg-cream hover:shadow-sm">
                    <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-[var(--ember)]" />
                    <p className="text-[13px] leading-relaxed text-foreground/85">
                      <strong>20+ Security Vulnerabilities Remediated:</strong> Remediated 20+ critical CVEs across banking modules, coordinated software penetration testing (SPT), and secured formal enterprise security sign-offs.
                    </p>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-border/50 bg-cream/50 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--golden)]/60 hover:bg-cream hover:shadow-sm">
                    <Terminal className="mt-0.5 h-4 w-4 shrink-0 text-[var(--golden)]" />
                    <p className="text-[13px] leading-relaxed text-foreground/85">
                      <strong>Primary Release Developer for Hong Kong Rollout:</strong> Led release coordination, technical dependency sign-offs, deployment procedures, live rollout execution, and post-release warranty.
                    </p>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-border/50 bg-cream/50 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--golden)]/60 hover:bg-cream hover:shadow-sm">
                    <Layers className="mt-0.5 h-4 w-4 shrink-0 text-[var(--ember)]" />
                    <p className="text-[13px] leading-relaxed text-foreground/85">
                      <strong>200+ JUnit / Regression Tests Authored:</strong> Built 200+ comprehensive JUnit and Mockito test suites to safeguard core transaction paths; supported Singapore MLR40 performance test readiness with Apache Airflow batch workflows.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ROLE 2: CEMS Application */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.9, ease, delay: 0.1 }}
            className="overflow-hidden rounded-[32px] border border-border/80 bg-cream/70 shadow-[0_25px_60px_-25px_rgba(100,60,20,0.18)]"
          >
            <div className="p-7 sm:p-10">
              <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="rounded-full border border-border/70 bg-cream px-3 py-1 text-[11px] font-medium tracking-wide text-foreground/80">
                      Capgemini
                    </span>
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-800">
                      🛡️ 60+ Vulnerabilities Remediated (20+ Critical)
                    </span>
                    <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-[11px] font-medium text-purple-800">
                      🧪 40% → 60% Test Coverage in 1 Mo
                    </span>
                    <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-[11px] font-medium text-amber-800">
                      ⚙️ 5xx Root-Cause Analysis
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                    Standard Chartered Bank — Client & Enterprise Management Systems (CEMS)
                  </h3>
                  <p className="mt-1 text-[14px] text-muted-foreground">
                    Software Engineer · Backend API services, security remediation, and quality engineering
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-border/70 bg-cream/90 px-4 py-2 text-[12px] font-medium text-foreground">
                  <Calendar className="h-3.5 w-3.5 text-[var(--golden)]" />
                  <span>July 2024 – September 2025</span>
                </div>
              </div>

              {/* Verified Achievements Grid */}
              <div className="mt-8 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                <div className="flex items-start gap-3 rounded-xl border border-border/50 bg-cream/50 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--golden)]/60 hover:bg-cream hover:shadow-sm">
                  <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-[var(--ember)]" />
                  <p className="text-[13px] leading-relaxed text-foreground/85">
                    <strong>60+ Security Vulnerabilities Remediated (20+ Critical):</strong> Systematically closed 60+ vulnerabilities including <strong>20+ critical CVEs</strong>, fortifying core banking persistence layers and securing compliance.
                  </p>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-border/50 bg-cream/50 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--golden)]/60 hover:bg-cream hover:shadow-sm">
                  <Zap className="mt-0.5 h-4 w-4 shrink-0 text-[var(--golden)]" />
                  <p className="text-[13px] leading-relaxed text-foreground/85">
                    <strong>Test Coverage 40% → 60% in 1 Month:</strong> Designed and implemented 120+ targeted unit tests and 200+ regression tests in JUnit/Mockito, establishing automated gates that drastically cut defect leakage.
                  </p>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-border/50 bg-cream/50 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--golden)]/60 hover:bg-cream hover:shadow-sm">
                  <Terminal className="mt-0.5 h-4 w-4 shrink-0 text-[var(--golden)]" />
                  <p className="text-[13px] leading-relaxed text-foreground/85">
                    <strong>5xx Production Root-Cause Analysis:</strong> Traced failure cascades across REST API → Service → Database layers and inspected Kubernetes pod logs to resolve intermittent production bottlenecks.
                  </p>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-border/50 bg-cream/50 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--golden)]/60 hover:bg-cream hover:shadow-sm">
                  <Cpu className="mt-0.5 h-4 w-4 shrink-0 text-[var(--ember)]" />
                  <p className="text-[13px] leading-relaxed text-foreground/85">
                    <strong>CI/CD & Container Deployments:</strong> Validated automated pipeline builds and deployed verified Docker container images to Kubernetes clusters through SIT, UAT, and production warranty.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

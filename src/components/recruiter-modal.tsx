import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Copy, ArrowDownToLine, ShieldCheck, Zap, Globe, Sparkles, Building2, Briefcase } from "lucide-react";
import resumePdf from "@/assets/resume.pdf";

interface RecruiterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RecruiterModal({ isOpen, onClose }: RecruiterModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("chandrani09.sd@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // fallback
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto p-3 sm:p-6 flex min-h-full items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ type: "spring", duration: 0.45, bounce: 0.15 }}
            className="relative z-10 my-auto w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/20 bg-gradient-to-b from-[#241711] via-[#1a120e] to-[#120d0a] p-5 sm:p-8 text-white shadow-2xl"
          >
            {/* Top Bar */}
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[var(--golden)]/30 bg-[var(--golden)]/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-[var(--golden)]">
                  <Sparkles className="h-3 w-3" />
                  Executive At-a-Glance
                </div>
                <h3 className="mt-2.5 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Chandrani Bera
                </h3>
                <p className="mt-1 flex flex-wrap items-center gap-x-2 text-[13px] text-white/70">
                  <span className="font-medium text-white/90">Backend Software Engineer</span>
                  <span>·</span>
                  <span>Enterprise Banking Platforms</span>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1.5 text-emerald-400">
                    <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    Available for High-Impact Roles
                  </span>
                </p>
              </div>

              <button
                onClick={onClose}
                aria-label="Close dialog"
                className="rounded-full border border-white/10 bg-white/5 p-2 text-white/70 transition-colors hover:bg-white/15 hover:text-white cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Core Value Proposition */}
            <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 text-[13.5px] leading-relaxed text-white/85">
              Engineered high-throughput, multi-region digital banking services for{" "}
              <strong className="text-white">Standard Chartered Bank</strong> (via Capgemini). Specialized in
              resilient microservice architecture (Java 21, Spring Boot), critical CVE remediation, Kong API Gateway
              routing, and internal developer tooling.
            </div>

            {/* Metrics Grid */}
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-3.5 text-center">
                <div className="font-display text-2xl font-bold text-[var(--golden)] sm:text-3xl">2.7+ yrs</div>
                <div className="mt-1 text-[11.5px] font-medium text-white/60">Enterprise Backend</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-3.5 text-center">
                <div className="font-display text-2xl font-bold text-white sm:text-3xl">30+</div>
                <div className="mt-1 text-[11.5px] font-medium text-white/60">SIT / Prod Fixes</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-3.5 text-center">
                <div className="font-display text-2xl font-bold text-emerald-400 sm:text-3xl">80+</div>
                <div className="mt-1 text-[11.5px] font-medium text-white/60">CVEs Remediated</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-3.5 text-center">
                <div className="font-display text-2xl font-bold text-[var(--golden)] sm:text-3xl">&lt; 2 min</div>
                <div className="mt-1 text-[11.5px] font-medium text-white/60">ScSetup Onboarding</div>
              </div>
            </div>

            {/* Strategic Pillars */}
            <div className="mt-5 space-y-2 text-[12.5px]">
              <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-3.5 py-2.5">
                <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-400" />
                <span className="text-white/80">
                  <strong className="text-white">Security & Zero Regressions:</strong> Automated scanning and hands-on remediation of 80+ vulnerabilities across critical banking paths.
                </span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-3.5 py-2.5">
                <Zap className="h-4 w-4 shrink-0 text-[var(--golden)]" />
                <span className="text-white/80">
                  <strong className="text-white">Developer Velocity:</strong> Created ScSetup automated installer, collapsing local environment setup from 3–4 days to under 2 minutes.
                </span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-3.5 py-2.5">
                <Globe className="h-4 w-4 shrink-0 text-sky-400" />
                <span className="text-white/80">
                  <strong className="text-white">Cross-Border Compliance:</strong> Maintained resilient API contracts across Singapore, Hong Kong, and Malaysia regions.
                </span>
              </div>
            </div>

            {/* Core Tech Badges */}
            <div className="mt-5 border-t border-white/10 pt-4">
              <div className="text-[11px] font-medium uppercase tracking-wider text-white/50">Core Arsenal</div>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {["Java 17 / 21", "Spring Boot", "Spring Security", "Microservices", "REST APIs", "Kong Gateway", "Docker & Kubernetes", "PostgreSQL / MySQL", "Azure DevOps CI/CD", "JUnit / Mockito", "Airflow"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[12px] font-medium text-white/85"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-white/10 pt-5">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-[13px] font-medium text-white transition-all hover:bg-white/20 cursor-pointer w-full sm:w-auto"
              >
                {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4 text-white/70" />}
                {copied ? "Email Copied!" : "chandrani09.sd@gmail.com"}
              </button>

              <div className="flex items-center justify-between sm:justify-end gap-2.5 w-full sm:w-auto">
                <a
                  href="#experience"
                  onClick={() => {
                    onClose();
                    document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="rounded-full border border-white/10 bg-transparent px-4 py-2.5 text-[13px] font-medium text-white/80 transition-colors hover:text-white hover:bg-white/5"
                >
                  View Experience
                </a>
                <a
                  href={resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Chandrani_Bera_Resume.pdf"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[13px] font-medium text-ink transition-transform hover:-translate-y-0.5 shadow-lg"
                >
                  <ArrowDownToLine className="h-4 w-4 text-[var(--golden)]" />
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}


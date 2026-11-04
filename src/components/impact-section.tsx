import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useState, useMemo } from "react";
import {
  Server,
  Code2,
  Layers,
  ShieldCheck,
  Cpu,
  Terminal,
  Sparkles,
  CheckCircle2,
  Search,
  X,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

interface SkillItem {
  name: string;
  context: string;
  badge?: string;
}

interface SkillCategory {
  id: string;
  label: string;
  icon: typeof Server;
  caption: string;
  summary: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    label: "Backend Engineering",
    icon: Server,
    caption: "Core Enterprise Architecture",
    summary:
      "Modernizing and maintaining mission-critical banking microservices with high throughput and strict resilience.",
    skills: [
      {
        name: "Spring Boot",
        context: "Microservices backbone for multi-region digital banking modules.",
        badge: "Production Core",
      },
      {
        name: "Spring MVC",
        context: "Layered enterprise request-response pipelines and controllers.",
      },
      {
        name: "Spring Security",
        context: "Strict authentication, role-based authorization, and token safety.",
      },
      {
        name: "Spring Data JPA & Hibernate",
        context: "Clean ORM mappings, transaction management, and optimized queries.",
      },
      {
        name: "RESTful APIs",
        context: "Standardized contracts with strict input validation and defensive error handling.",
      },
      {
        name: "Microservices",
        context: "Decoupled distributed services running within containerized environments.",
      },
    ],
  },
  {
    id: "languages-data",
    label: "Languages & Databases",
    icon: Code2,
    caption: "Foundation & Storage",
    summary:
      "Core languages and reliable relational stores powering transactional integrity and data persistence.",
    skills: [
      {
        name: "Java 8 / 11 / 17",
        context: "Primary language for scalable enterprise services and modern LTS upgrades.",
        badge: "Primary Language",
      },
      {
        name: "MySQL",
        context: "Relational persistence, normalized schemas, and transaction management.",
      },
      {
        name: "PostgreSQL",
        context: "Enterprise relational database utilized in transactional workloads.",
      },
      {
        name: "Python",
        context: "Data scripting, regression utilities, and machine learning pipelines.",
      },
      {
        name: "C",
        context: "Low-level systems comprehension and algorithmic foundations.",
      },
    ],
  },
  {
    id: "apis",
    label: "APIs & Integration",
    icon: Layers,
    caption: "Service Orchestration",
    summary:
      "Connecting microservices across international banking environments with seamless routing and contract governance.",
    skills: [
      {
        name: "Kong Gateway",
        context: "Centralized routing, rate limiting, and service mediation across banking channels.",
        badge: "API Gateway",
      },
      {
        name: "Postman",
        context: "Comprehensive API test collections, contract mockups, and regression validation.",
      },
      {
        name: "API Management",
        context: "Versioned endpoints, deprecation cycles, and developer documentation.",
      },
      {
        name: "Backend Integration",
        context: "Fault-tolerant service-to-service communication with retry policies.",
      },
    ],
  },
  {
    id: "quality",
    label: "Testing & Quality",
    icon: ShieldCheck,
    caption: "Confidence Before Release",
    summary:
      "Rigorous verification ensuring that release days remain completely quiet and uneventful.",
    skills: [
      {
        name: "JUnit",
        context: "Authored 320+ unit and regression test suites; drove coverage from 40% to 60%.",
        badge: "320+ Tests",
      },
      {
        name: "Regression Testing",
        context: "Targeted regression suites validating edge cases before each international rollout.",
      },
      {
        name: "Root Cause Analysis (RCA)",
        context: "Investigated and resolved 30+ production defects and recurring HTTP 5xx spikes.",
      },
      {
        name: "Security Remediation",
        context: "Remediated 80+ security vulnerabilities (including 20+ critical CVEs).",
      },
    ],
  },
  {
    id: "devops",
    label: "DevOps & Tooling",
    icon: Cpu,
    caption: "Automation & Infrastructure",
    summary:
      "Automating developer friction away and orchestrating containerized deployments with high reliability.",
    skills: [
      {
        name: "Developer Setup Automation",
        context: "Engineered one-click installer cutting local environment setup from 3-4 days to <2 mins.",
        badge: "Featured Impact",
      },
      {
        name: "Docker & Kubernetes",
        context: "Container builds, pod lifecycle management, ConfigMaps, and cluster troubleshooting.",
      },
      {
        name: "Azure DevOps CI/CD",
        context: "Continuous integration pipelines, automated build verification, and release gates.",
      },
      {
        name: "Airflow",
        context: "Batch workflow scheduling supporting Singapore MLR40 performance test readiness.",
      },
      {
        name: "Git & Version Control",
        context: "Branching strategies, code reviews, and release branch maintenance.",
      },
      {
        name: "SonarQube & Tomcat",
        context: "Static analysis quality gates and enterprise application server deployment.",
      },
    ],
  },
  {
    id: "practices",
    label: "Engineering Practices",
    icon: Terminal,
    caption: "Delivery & Ownership",
    summary:
      "Collaborative ownership from initial story refinement through SIT, UAT, and production warranty.",
    skills: [
      {
        name: "Production Support",
        context: "Standing with the system through live rollouts, incident triage, and warranty.",
        badge: "Tier-1 Support",
      },
      {
        name: "Release Management",
        context: "Primary developer for Hong Kong release: coordinated deployments and sign-offs.",
      },
      {
        name: "Agile / Scrum",
        context: "Sprint planning, backlog refinement, daily standups, and cross-functional QA syncs.",
      },
      {
        name: "Technical Documentation",
        context: "Authored comprehensive RCA reports, setup guides, and operational playbooks.",
      },
    ],
  },
];

export function ImpactSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const currentCategory = skillCategories[activeTab];

  // Filter skills across all categories if user searches
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const q = searchQuery.toLowerCase();
    const results: Array<{ category: string; skill: SkillItem }> = [];
    skillCategories.forEach((cat) => {
      cat.skills.forEach((s) => {
        if (s.name.toLowerCase().includes(q) || s.context.toLowerCase().includes(q)) {
          results.push({ category: cat.label, skill: s });
        }
      });
    });
    return results;
  }, [searchQuery]);

  return (
    <section id="skills" className="relative overflow-hidden bg-background py-20 lg:py-28">
      {/* Background warm radial aura */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-1/4 -z-10 h-[500px] w-[500px] rounded-full opacity-35 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(244,199,138,0.3) 0%, rgba(232,138,85,0.15) 50%, transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.8, ease }}
              className="inline-flex items-center gap-2.5 rounded-full border border-[var(--golden)]/40 bg-[var(--golden)]/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--ember)]"
            >
              <Sparkles className="h-3.5 w-3.5 text-[var(--golden)]" />
              <span>02 — Skills & Craft</span>
            </motion.div>

            <motion.h2
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.9, ease, delay: 0.1 }}
              className="mt-5 font-display text-3xl font-semibold leading-[1.12] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-[48px]"
            >
              What I build with. <br />
              <span className="bg-gradient-to-r from-[var(--ember)] via-[var(--golden)] to-[#d47343] bg-clip-text text-transparent">
                And how it holds up in production.
              </span>
            </motion.h2>
          </div>

          {/* Interactive Skill Quick Search Input */}
          <div className="relative w-full max-w-xs">
            <div className="relative flex items-center">
              <Search className="absolute left-3.5 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search skills (e.g. Spring, Java)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-border/80 bg-cream/70 py-2 pl-9.5 pr-8 text-[13px] text-foreground placeholder:text-muted-foreground focus:border-[var(--golden)] focus:bg-cream focus:outline-none focus:ring-1 focus:ring-[var(--golden)]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Live Search Results View (if user searched) */}
        {searchResults !== null ? (
          <div className="mt-8 rounded-[28px] border border-[var(--golden)]/60 bg-cream/80 p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 border-b border-border/50">
              <span className="text-[12px] font-semibold text-foreground">
                Found {searchResults.length} {searchResults.length === 1 ? "result" : "results"} for &ldquo;{searchQuery}&rdquo;
              </span>
              <button
                onClick={() => setSearchQuery("")}
                className="text-[12px] text-[var(--ember)] hover:underline"
              >
                Clear search
              </button>
            </div>

            {searchResults.length === 0 ? (
              <p className="py-8 text-center text-[14px] text-muted-foreground">
                No matching skills found. Try searching for &ldquo;Spring&rdquo;, &ldquo;Java&rdquo;, &ldquo;Docker&rdquo;, or &ldquo;JUnit&rdquo;.
              </p>
            ) : (
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {searchResults.map(({ category, skill }) => (
                  <div
                    key={skill.name}
                    className="rounded-2xl border border-border/70 bg-cream p-4 shadow-sm"
                  >
                    <div className="flex items-start justify-between">
                      <h4 className="font-display text-[16px] font-semibold text-foreground">
                        {skill.name}
                      </h4>
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                        {category}
                      </span>
                    </div>
                    <p className="mt-2 text-[12px] text-muted-foreground">{skill.context}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          /* Normal Interactive Tabbed View */
          <div className="mt-12">
            <div
              role="tablist"
              aria-label="Skill domains"
              className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-2 sm:mx-0 sm:flex-wrap sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {skillCategories.map((category, idx) => {
                const isActive = idx === activeTab;
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    role="tab"
                    id={`skill-tab-${category.id}`}
                    aria-selected={isActive}
                    aria-controls={`skill-panel-${category.id}`}
                    onClick={() => {
                      setActiveTab(idx);
                      setSelectedSkill(null);
                    }}
                    className={`group relative flex shrink-0 items-center gap-2 rounded-full border px-4.5 py-2 text-[13px] font-medium tracking-wide transition-colors duration-300 cursor-pointer ${
                      isActive
                        ? "border-transparent text-background"
                        : "border-border/70 bg-cream/50 text-foreground/75 hover:border-[var(--golden)]/60 hover:bg-cream"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeSkillTabPill"
                        transition={{ type: "spring", stiffness: 320, damping: 28 }}
                        className="absolute inset-0 rounded-full bg-foreground shadow-md"
                      />
                    )}
                    <Icon
                      className={`relative z-10 h-3.5 w-3.5 transition-colors ${
                        isActive ? "text-[var(--golden)]" : "text-muted-foreground group-hover:text-[var(--ember)]"
                      }`}
                    />
                    <span className="relative z-10">{category.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Category Display Box */}
            <div className="relative mt-7 overflow-hidden rounded-[30px] border border-border/80 bg-cream/70 p-6 shadow-[0_20px_50px_-20px_rgba(100,60,20,0.16)] sm:p-9">
              {/* Top sunset accent stripe */}
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-[2px]"
                style={{
                  background: "linear-gradient(90deg, var(--golden), var(--ember), transparent)",
                }}
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCategory.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease }}
                >
                  {/* Header row */}
                  <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
                    <div>
                      <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-[var(--ember)]">
                        {currentCategory.caption}
                      </span>
                      <h3 className="mt-0.5 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-[26px]">
                        {currentCategory.label}
                      </h3>
                    </div>
                    <p className="max-w-md text-[13px] leading-relaxed text-muted-foreground">
                      {currentCategory.summary}
                    </p>
                  </div>

                  {/* Interactive Grid of Skills */}
                  <div className="mt-8 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
                    {currentCategory.skills.map((skill, i) => {
                      const isSelected = selectedSkill === skill.name;
                      return (
                        <motion.div
                          key={skill.name}
                          initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.35, ease, delay: i * 0.04 }}
                          whileHover={{ y: -3 }}
                          onClick={() => setSelectedSkill(isSelected ? null : skill.name)}
                          className={`group relative cursor-pointer rounded-2xl border p-4.5 transition-all duration-300 ${
                            isSelected
                              ? "border-[var(--golden)] bg-cream shadow-md"
                              : "border-border/60 bg-cream/60 hover:border-[var(--golden)]/70 hover:bg-cream"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="font-display text-[16px] font-semibold tracking-[-0.01em] text-foreground group-hover:text-[var(--ember)]">
                              {skill.name}
                            </h4>
                            {skill.badge && (
                              <span className="shrink-0 rounded-full border border-[var(--golden)]/40 bg-[var(--golden)]/15 px-2 py-0.5 text-[9px] font-medium uppercase tracking-wider text-[var(--ember)]">
                                {skill.badge}
                              </span>
                            )}
                          </div>

                          <p className="mt-2 text-[12px] leading-relaxed text-muted-foreground">
                            {skill.context}
                          </p>

                          <div className="mt-3 flex items-center gap-1.5 text-[10px] font-medium text-[var(--golden)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <CheckCircle2 className="h-3 w-3" />
                            <span>Enterprise Verified</span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

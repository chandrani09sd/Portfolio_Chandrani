import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { SectionHeading } from "@/components/section-heading";

const ease = [0.22, 1, 0.36, 1] as const;

const chapters = [
  {
    chapter: "Chapter I",
    title: "Into enterprise banking",
    body: "Joined the world of enterprise banking applications, learning how large financial systems are built, released and kept steady day after day.",
    notes: ["Production support", "Release support"],
  },
  {
    chapter: "Chapter II",
    title: "Resolving what breaks",
    body: "Investigating production defects, tracing them to their root cause and closing them properly — so the same issue does not return the following week.",
    notes: ["Production defect resolution", "Root cause analysis", "Issue resolution"],
  },
  {
    chapter: "Chapter III",
    title: "Making the system safer",
    body: "Working through security remediation and validation alongside penetration testing findings, keeping the application compliant and trustworthy.",
    notes: ["Security remediation", "Penetration testing", "Validation"],
  },
  {
    chapter: "Chapter IV",
    title: "Giving developers time back",
    body: "Automating the developer installer and environment setup, and writing developer documentation so onboarding stops being a week-long ritual.",
    notes: ["Developer installer automation", "Environment automation", "Developer documentation"],
  },
  {
    chapter: "Chapter V",
    title: "Confidence before release",
    body: "JUnit test coverage, dataset generation for realistic scenarios and close collaboration with QA — quiet work that makes release day uneventful.",
    notes: ["JUnit testing", "Dataset generation", "QA collaboration"],
  },
  {
    chapter: "Chapter VI",
    title: "Shipping and supporting",
    body: "Supporting Kubernetes deployments and environment validation through releases, staying with the system after it goes live.",
    notes: ["Kubernetes deployment support", "Environment validation", "Production releases"],
  },
];

export function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<number | null>(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-28 lg:px-10 lg:py-40">
        <SectionHeading
          index="03"
          eyebrow="Experience"
          title="A quiet journey through enterprise systems."
          intro="2.7+ years of backend engineering, told as chapters rather than bullet points. Open any chapter to see how it unfolded."
        />

        <div ref={ref} className="relative mt-16 pl-8 sm:pl-14 lg:mt-20">
          <div className="absolute left-[3px] top-2 h-full w-px bg-border/70 sm:left-[27px]" />
          <motion.div
            style={{ scaleY: lineScale, originY: 0 }}
            className="absolute left-[3px] top-2 h-full w-px sm:left-[27px]"
          >
            <div className="h-full w-full bg-gradient-to-b from-[var(--golden)] to-[var(--ember)]" />
          </motion.div>

          <div className="space-y-4">
            {chapters.map((c, i) => {
              const isOpen = open === i;
              return (
                <motion.article
                  key={c.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.9, ease, delay: 0.03 }}
                  className="relative"
                >
                  <motion.span
                    aria-hidden
                    animate={{ scale: isOpen ? 1.5 : 1 }}
                    transition={{ duration: 0.5, ease }}
                    className="absolute -left-8 top-[22px] h-[9px] w-[9px] rounded-full bg-[var(--golden)] ring-4 ring-background sm:-left-14"
                  />
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`experience-chapter-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className={`w-full rounded-[22px] border px-6 py-5 text-left transition-all duration-500 sm:px-8 ${
                      isOpen
                        ? "border-border/70 bg-cream shadow-[0_18px_50px_-26px_rgba(120,80,30,0.35)]"
                        : "border-transparent hover:border-border/70 hover:bg-cream/50"
                    }`}
                  >
                    <span className="flex items-center justify-between gap-6">
                      <span className="flex items-baseline gap-4 sm:gap-6">
                        <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground">
                          {c.chapter}
                        </span>
                        <span className="font-display text-xl font-semibold tracking-[-0.02em] text-foreground sm:text-2xl">
                          {c.title}
                        </span>
                      </span>
                      <motion.span
                        aria-hidden
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.4, ease }}
                        className="shrink-0 text-lg text-muted-foreground"
                      >
                        +
                      </motion.span>
                    </span>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="detail"
                          id={`experience-chapter-${i}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease }}
                          className="overflow-hidden"
                        >
                          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-[16px]">
                            {c.body}
                          </p>
                          <ul className="mt-5 flex flex-wrap gap-2 pb-1">
                            {c.notes.map((n) => (
                              <li
                                key={n}
                                className="rounded-full border border-border/70 bg-background/60 px-4 py-1.5 text-[12px] tracking-wide text-foreground/70"
                              >
                                {n}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

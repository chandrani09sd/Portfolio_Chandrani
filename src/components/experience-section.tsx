import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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
          intro="2.7+ years of backend engineering, told as chapters rather than bullet points."
        />

        <div ref={ref} className="relative mt-20 pl-8 sm:pl-14">
          <div className="absolute left-[3px] top-2 h-full w-px bg-border/70 sm:left-[27px]" />
          <motion.div
            style={{ scaleY: lineScale, originY: 0 }}
            className="absolute left-[3px] top-2 h-full w-px sm:left-[27px]"
          >
            <div className="h-full w-full bg-gradient-to-b from-[var(--golden)] to-[var(--ember)]" />
          </motion.div>

          <div className="space-y-20 lg:space-y-28">
            {chapters.map((c, i) => (
              <motion.article
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15% 0px" }}
                transition={{ duration: 1, ease, delay: 0.05 }}
                className="relative"
              >
                <span className="absolute -left-8 top-2 h-[9px] w-[9px] rounded-full bg-[var(--golden)] ring-4 ring-background sm:-left-14" />
                <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground">
                  {c.chapter}
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-[32px]">
                  {c.title}
                </h3>
                <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-[16px]">
                  {c.body}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {c.notes.map((n) => (
                    <li
                      key={n}
                      className="rounded-full border border-border/70 bg-cream/60 px-4 py-1.5 text-[12px] tracking-wide text-foreground/70"
                    >
                      {n}
                    </li>
                  ))}
                </ul>
                <span className="sr-only">{i + 1}</span>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

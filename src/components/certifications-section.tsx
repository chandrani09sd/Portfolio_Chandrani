import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { Award } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const certs = [
  {
    name: "Microsoft Certified: Azure Fundamentals",
    meta: "AZ-900 · Cloud",
    issuer: "Microsoft Certified",
    code: "AZ-900",
  },
  {
    name: "Postman API Testing Certification",
    meta: "v12 · APIs & Quality",
    issuer: "Postman Academy",
    code: "v12",
  },
  {
    name: "Oracle SQL / PL-SQL Certification",
    meta: "Data & Systems",
    issuer: "Oracle University",
    code: "SQL / PL-SQL",
  },
  {
    name: "Global Banking L1",
    meta: "Banking Domain Foundations",
    issuer: "Banking Domain Academy",
    code: "Level 1",
  },
  {
    name: "Global Banking L2",
    meta: "Banking Domain Enterprise",
    issuer: "Banking Domain Academy",
    code: "Level 2",
  },
];

export function CertificationsSection() {

  return (
    <section id="certifications" className="relative isolate overflow-hidden bg-background">
      {/* 
        SEAMLESS SUNSET RECEIVER:
        A soft radial warm amber light pooling at top center, smoothly catching the sunset fade
        above with zero harsh lines, zero border cuts, and zero color discontinuity.
      */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-48 opacity-60 blur-2xl"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(244,199,138,0.35) 0%, rgba(232,138,85,0.12) 50%, transparent 80%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-6 pt-16 pb-28 lg:px-10 lg:pt-20 lg:pb-36">
        <SectionHeading index="05" eyebrow="Certifications" title="Learning, formally recorded." />

        {/* 
          CLEAN, MINIMAL 5-CARD GRID:
          All 5 resume-supported credentials with responsive 5-card layout.
        */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-18 lg:grid-cols-3 xl:grid-cols-5">
          {certs.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.85, ease, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="group flex h-56 flex-col justify-between rounded-3xl border border-border/75 bg-cream/70 p-6 shadow-[0_1px_3px_rgba(60,40,20,0.04)] transition-all duration-500 hover:border-[var(--golden)]/70 hover:bg-cream hover:shadow-[0_24px_50px_-24px_rgba(120,80,30,0.22)]"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground group-hover:text-[var(--ember)] transition-colors">
                  {c.meta}
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider text-[var(--golden)] font-mono">
                  <Award className="h-3 w-3" />
                  {c.code}
                </span>
              </div>

              <div>
                <h3 className="font-display text-[17px] font-semibold leading-snug tracking-[-0.01em] text-foreground group-hover:text-[var(--ember)] transition-colors">
                  {c.name}
                </h3>
                <p className="mt-2 text-[12px] text-muted-foreground">
                  {c.issuer}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-border/50 pt-3 text-[11px]">
                <span className="inline-flex items-center gap-1.5 font-medium text-emerald-700">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Verified
                </span>
                <span className="text-[10px] tracking-wide text-muted-foreground group-hover:text-[var(--ember)] transition-colors">
                  Industry Standard
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 
        FADED SUNSET ORANGE HUE:
        Starts light beneath the credential cards, gradually deepens down to the bottom,
        and seamlessly merges into the final sunset section below.
      */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-80 sm:h-[420px] w-full"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(250,237,225,0.2) 20%, rgba(246,210,180,0.5) 45%, rgba(232,138,85,0.78) 75%, #d46e3c 100%)",
        }}
      />
    </section>
  );
}

import { motion, useReducedMotion } from "framer-motion";
import { Compass, Sparkles } from "lucide-react";
import walkingGoa from "@/assets/walking-goa.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

export function PersonalTransitionGoa() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-14 lg:py-20">
      {/* Delicate horizontal separator lines with sunset gradient */}
      <div
        aria-hidden
        className="mx-auto mb-14 h-px max-w-6xl"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(232,138,85,0.3) 50%, transparent 100%)",
        }}
      />

      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1, ease }}
          className="relative overflow-hidden rounded-[36px] border border-border/80 bg-cream/70 p-7 shadow-[0_25px_60px_-25px_rgba(120,80,30,0.2)] sm:p-10 lg:p-12"
        >
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Left: Full Vertical Portrait Photo — Kept in uncropped portrait orientation */}
            <div className="flex justify-center lg:col-span-5">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, ease }}
                className="group relative w-full max-w-[320px] overflow-hidden rounded-[28px] border border-border/80 bg-cream shadow-[0_20px_45px_-18px_rgba(90,40,15,0.25)]"
              >
                {/* Natural portrait aspect ratio 3:4 — uncropped */}
                <div className="aspect-[3/4] w-full overflow-hidden">
                  <img
                    src={walkingGoa}
                    alt="Chandrani Bera walking through vibrant sunlit streets"
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Subtle warm ambient edge overlay */}
                <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-black/10" />
              </motion.div>
            </div>

            {/* Right: Editorial Storytelling Note */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--golden)]/40 bg-[var(--golden)]/10 px-3.5 py-1 text-[11px] font-medium uppercase tracking-[0.25em] text-[var(--ember)]">
                <Compass className="h-3.5 w-3.5 text-[var(--golden)]" />
                <span>Perspective · How I Think & Work</span>
              </div>

              <h3 className="mt-4 font-display text-2xl font-semibold leading-[1.2] tracking-[-0.015em] text-foreground sm:text-3xl lg:text-[32px]">
                What high-stakes banking and a canvas taught me: <br />
                <span className="bg-gradient-to-r from-[var(--ember)] via-[var(--golden)] to-[#d47343] bg-clip-text text-transparent">
                  Never rush the foundation.
                </span>
              </h3>

              <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-foreground/85 sm:text-[16px]">
                <p>
                  When a production service acts up across multi-region banking traffic, the instinct
                  isn’t to scramble or patch blindly. It’s to get quiet, pull the thread, and find the
                  real root cause. I genuinely enjoy that forensic depth, tracing a stubborn 5xx
                  anomaly through Kong API Gateway, inspecting thread pools, or untangling an edge
                  case in the data contract until the architecture makes total sense.
                </p>
                <p className="text-[14.5px] leading-relaxed text-foreground/75 sm:text-[15px]">
                  That same patience is what draws me to painting when the terminal closes. Layering
                  pigments on canvas takes observation, time, and an honest respect for the process.
                  Whether I’m designing an automated tool that saves developers days of onboarding or
                  shipping high-throughput services for Standard Chartered Bank, I bring the exact
                  same mindset: clean structure, zero shortcuts, and code you can rely on when it
                  matters most.
                </p>
              </div>

              {/* 3 Authentic engineering mindset pills */}
              <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-border/40 pt-4">
                <span className="rounded-full border border-border/70 bg-cream px-3 py-1 text-[11px] font-medium tracking-wide text-foreground/80">
                  🔍 Root-Cause Over Quick Fixes
                </span>
                <span className="rounded-full border border-border/70 bg-cream px-3 py-1 text-[11px] font-medium tracking-wide text-foreground/80">
                  ⚡ High-Resilience Microservices
                </span>
                <span className="rounded-full border border-border/70 bg-cream px-3 py-1 text-[11px] font-medium tracking-wide text-foreground/80">
                  🎨 Quiet Discipline & Ownership
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

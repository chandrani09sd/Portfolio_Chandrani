import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import heroAsset from "@/assets/hero-sunset.jpeg.asset.json";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, reduce ? 1.05 : 1.18]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-8%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink"
    >
      {/* Image layer with soft parallax + slow drift */}
      <motion.div
        style={{ y: imgY, scale: imgScale }}
        className="absolute inset-0 -z-10 will-change-transform"
      >
        <motion.img
          src={heroAsset.url}
          alt="Golden hour sunset over the ocean"
          initial={{ scale: 1.12, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 1 }}
          transition={{ duration: 2.4, ease }}
          className="h-full w-full object-cover object-[center_35%]"
          draggable={false}
        />
        {/* Warm golden wash */}
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_70%_35%,rgba(255,190,110,0.28),transparent_60%)]" />
        {/* Bottom fade into page */}
        <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-b from-transparent via-background/40 to-background" />
        {/* Top vignette for nav legibility */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/35 to-transparent" />
        {/* Very subtle wave shimmer */}
        {!reduce && (
          <motion.div
            aria-hidden
            initial={{ opacity: 0.0 }}
            animate={{ opacity: [0.0, 0.35, 0.0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-x-0 bottom-[28%] h-24 bg-[linear-gradient(180deg,transparent,rgba(255,220,170,0.18),transparent)] blur-2xl"
          />
        )}
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-6 pb-24 lg:px-10 lg:pb-28"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4, ease }}
          className="mb-6 text-[11px] font-medium uppercase tracking-[0.28em] text-white/75"
        >
          Chandrani Bera — Est. Golden Hour
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.55, ease }}
          className="max-w-4xl text-balance font-display text-[40px] font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-6xl lg:text-[76px]"
        >
          Building software with the precision of engineering and the creativity of art.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.85, ease }}
          className="mt-8 max-w-2xl text-balance text-[15px] leading-relaxed text-white/85 sm:text-[17px]"
        >
          Backend Software Engineer building enterprise banking systems, scalable APIs, and
          production-ready solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 1.1, ease }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#about"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[14px] font-medium text-ink shadow-[0_10px_40px_-12px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-14px_rgba(0,0,0,0.55)]"
          >
            Explore My Journey
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </a>
          <a
            href="#resume"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 px-6 py-3 text-[14px] font-medium text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 1.6, ease }}
          className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/70"
          >
            Scroll
            <span className="h-8 w-px bg-white/50" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

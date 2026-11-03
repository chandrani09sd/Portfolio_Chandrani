import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "@/components/section-heading";

const ease = [0.22, 1, 0.36, 1] as const;

const concepts = [
  {
    emoji: "🎨",
    title: "Creative Thinker",
    body: "I approach software with the same attention to detail I bring to painting.",
    tint: "var(--golden)",
  },
  {
    emoji: "🏦",
    title: "Enterprise Banking",
    body: "Building secure backend systems powering enterprise banking applications.",
    tint: "var(--ember)",
  },
  {
    emoji: "🌊",
    title: "Nature Inspired",
    body: "Sunsets, oceans and mountains remind me that simplicity creates beauty.",
    tint: "var(--golden)",
  },
  {
    emoji: "☕",
    title: "Problem Solver",
    body: "I enjoy turning complex engineering problems into elegant backend solutions.",
    tint: "var(--ember)",
  },
];

export function AboutSection() {
  const [hovered, setHovered] = useState(0);
  const [pinned, setPinned] = useState<number | null>(null);
  const current = pinned ?? hovered;

  return (
    <section id="about" className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-28 lg:px-10 lg:py-40">
        <SectionHeading
          index="01"
          eyebrow="About"
          title="Calm engineering, made with an artist's patience."
          intro="A backend engineer with 2.7+ years of experience, currently building and supporting enterprise banking applications."
        />

        {/* Compact interactive concept explorer */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.9, ease, delay: 0.1 }}
          className="mt-16 lg:mt-20"
        >
          <div
            role="group"
            aria-label="What shapes my work"
            className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-4"
          >
            {concepts.map((c, i) => {
              const isActive = current === i;
              return (
                <button
                  key={c.title}
                  type="button"
                  aria-expanded={isActive}
                  aria-controls="about-concept-detail"
                  onMouseEnter={() => setHovered(i)}
                  onFocus={() => setHovered(i)}
                  onClick={() => setPinned(pinned === i ? null : i)}
                  className={`relative overflow-hidden rounded-2xl border px-5 py-4 text-left transition-all duration-500 sm:min-w-[190px] ${
                    isActive
                      ? "border-transparent bg-cream shadow-[0_18px_44px_-20px_rgba(120,80,30,0.35)]"
                      : "border-border/70 bg-cream/40 hover:bg-cream/70"
                  }`}
                >
                  <span className="text-xl">{c.emoji}</span>
                  <span
                    className={`mt-2 block font-display text-[15px] font-semibold tracking-[-0.01em] transition-colors duration-500 ${
                      isActive ? "text-foreground" : "text-foreground/70"
                    }`}
                  >
                    {c.title}
                  </span>
                  <motion.span
                    aria-hidden
                    initial={false}
                    animate={{ scaleX: isActive ? 1 : 0 }}
                    transition={{ duration: 0.6, ease }}
                    style={{ originX: 0, background: c.tint }}
                    className="absolute inset-x-0 bottom-0 h-[2px] w-full rounded-full"
                  />
                </button>
              );
            })}
          </div>

          {/* Shared detail panel — revealed on hover, pinned on click */}
          <div id="about-concept-detail" className="relative mt-8 min-h-[3.5rem]">
            <AnimatePresence mode="wait">
              <motion.p
                key={current}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.45, ease }}
                className="max-w-xl text-[15px] leading-relaxed text-muted-foreground"
              >
                {concepts[current].body}
              </motion.p>
            </AnimatePresence>
            <p className="mt-3 text-[11px] uppercase tracking-[0.28em] text-muted-foreground/60">
              Hover to explore — click to pin
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

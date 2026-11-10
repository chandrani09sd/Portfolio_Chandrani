import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import {
  Palette,
  Server,
  Sun,
  Puzzle,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

// 4 Personality facets (Part 3: Personality & Perspectives)
const personalityCards = [
  {
    id: "creative",
    title: "The Creative Thinker",
    role: "Painting & Art",
    quote: "I approach software with the same attention to detail I bring to painting.",
    detail:
      "Canvas work taught me that structure and beauty aren't opposites — whether layering acrylics or architecting modular microservices.",
    icon: Palette,
    accent: "var(--golden)",
    badge: "Visual Craft",
  },
  {
    id: "engineer",
    title: "The Backend Engineer",
    role: "Enterprise Banking Systems",
    quote: "I enjoy building secure, reliable backend systems that solve real problems.",
    detail:
      "2.7+ years engineering high-availability banking services across Singapore, Hong Kong, and Malaysia with strict transactional integrity.",
    icon: Server,
    accent: "var(--ember)",
    badge: "High Reliability",
  },
  {
    id: "craft",
    title: "Deliberate Craftsmanship",
    role: "Systems & Architecture",
    quote: "Great software and thoughtful art both demand patience, structure, and respect for the process.",
    detail:
      "Breaking complex domain models into decoupled, maintainable abstractions — choosing architectural clarity and long-term durability over hasty shortcuts.",
    icon: Puzzle,
    accent: "var(--ember)",
    badge: "Systems Thinking",
  },
  {
    id: "nature",
    title: "Nature & Horizons",
    role: "Sunsets & Perspectives",
    quote: "Sunsets, coastal roads, and quiet landscapes remind me that simplicity can be beautiful.",
    detail:
      "Time spent near the water or exploring vibrant streets grounds my thinking and brings calm clarity to complex system design.",
    icon: Sun,
    accent: "var(--golden)",
    badge: "Golden Hour Mindset",
  },
];

export function AboutSection() {
  const shouldReduceMotion = useReducedMotion();
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-background pt-20 pb-16 lg:pt-28 lg:pb-24"
    >
      {/* Seamless transition receiver from the Hero section above */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-40"
        style={{
          background:
            "linear-gradient(180deg, var(--background) 0%, rgba(244,199,138,0.14) 60%, transparent 100%)",
        }}
      />
      {/* Ambient warm golden-hour backdrop glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[520px] w-full max-w-5xl -translate-x-1/2 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(244,199,138,0.32) 0%, rgba(232,138,85,0.15) 45%, transparent 75%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        {/* Part 1: Section Eyebrow & Main Editorial Headline */}
        <div className="max-w-3xl">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -40px 0px" }}
            transition={{ duration: 0.8, ease }}
            className="inline-flex items-center gap-2.5 rounded-full border border-[var(--golden)]/40 bg-[var(--golden)]/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--ember)]"
          >
            <Sparkles className="h-3.5 w-3.5 text-[var(--golden)]" />
            <span>01 — A Little About Me</span>
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -40px 0px" }}
            transition={{ duration: 0.9, ease, delay: 0.1 }}
            className="mt-5 font-display text-3xl font-semibold leading-[1.12] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-[48px]"
          >
            An engineer by profession. <br />
            <span className="bg-gradient-to-r from-[var(--ember)] via-[var(--golden)] to-[#d47343] bg-clip-text text-transparent">
              An artist by instinct.
            </span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -40px 0px" }}
            transition={{ duration: 0.9, ease, delay: 0.15 }}
            className="mt-5 text-[16px] leading-relaxed text-foreground/80 sm:text-[17px]"
          >
            I am a backend software engineer dedicated to building resilient, secure, and high-throughput
            services for multi-region digital banking platforms. Outside the terminal, I pick up brushes,
            chase sunset horizons, and find creative balance in everyday candid moments. To me, clean code
            and painting share the same core rhythm: quiet patience, deliberate structure, and an uncompromising
            eye for detail.
          </motion.p>
        </div>

        {/* Part 3: Personality Cards Section ("More than just the code.") */}
        <div className="mt-14 lg:mt-18">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground">
                Personality & Perspectives
              </span>
              <h3 className="mt-1 font-display text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-3xl">
                More than just the code.
              </h3>
            </div>
            <p className="max-w-md text-[13px] text-muted-foreground">
              Hover or tap any card to explore how creativity and engineering connect.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {personalityCards.map((card, idx) => {
              const Icon = card.icon;
              const isActive = activeCard === card.id;
              return (
                <motion.div
                  key={card.id}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -40px 0px" }}
                  transition={{ duration: 0.6, ease, delay: idx * 0.07 }}
                  whileHover={{ y: -5 }}
                  onClick={() => setActiveCard(isActive ? null : card.id)}
                  className={`group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-[24px] border p-5 transition-all duration-400 ${
                    isActive
                      ? "border-[var(--golden)] bg-cream shadow-[0_18px_40px_-18px_rgba(120,70,20,0.25)]"
                      : "border-border/70 bg-cream/60 hover:border-[var(--golden)]/70 hover:bg-cream hover:shadow-[0_16px_35px_-18px_rgba(120,70,20,0.18)]"
                  }`}
                >
                  <div>
                    {/* Header: Icon + Category Badge */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-cream shadow-sm transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-4 w-4 text-[var(--ember)] transition-colors duration-300 group-hover:text-[var(--golden)]" />
                      </div>
                      <span className="rounded-full border border-border/60 bg-cream/90 px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-muted-foreground">
                        {card.badge}
                      </span>
                    </div>

                    <h4 className="mt-5 font-display text-[18px] font-semibold tracking-[-0.01em] text-foreground">
                      {card.title}
                    </h4>

                    <p className="mt-2 text-[13px] font-medium italic text-foreground/90">
                      &ldquo;{card.quote}&rdquo;
                    </p>

                    <p className="mt-2.5 text-[12px] leading-relaxed text-muted-foreground">
                      {card.detail}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-border/40 pt-3 text-[10px] uppercase tracking-wider text-muted-foreground">
                    <span>{card.role}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[var(--ember)]" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

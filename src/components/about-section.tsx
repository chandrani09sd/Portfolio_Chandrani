import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";

const ease = [0.22, 1, 0.36, 1] as const;

const cards = [
  {
    emoji: "🎨",
    title: "Creative Thinker",
    body: "I approach software with the same attention to detail I bring to painting.",
  },
  {
    emoji: "🏦",
    title: "Enterprise Banking",
    body: "Building secure backend systems powering enterprise banking applications.",
  },
  {
    emoji: "🌊",
    title: "Nature Inspired",
    body: "Sunsets, oceans and mountains remind me that simplicity creates beauty.",
  },
  {
    emoji: "☕",
    title: "Problem Solver",
    body: "I enjoy turning complex engineering problems into elegant backend solutions.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-28 lg:px-10 lg:py-40">
        <SectionHeading
          index="01"
          eyebrow="About"
          title="Calm engineering, made with an artist's patience."
          intro="A backend engineer with 2.7+ years of experience, currently building and supporting enterprise banking applications."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-20 lg:gap-8">
          {cards.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.9, ease, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-border/70 bg-cream/60 p-8 shadow-[0_1px_2px_rgba(60,40,20,0.04)] backdrop-blur-sm transition-shadow duration-500 hover:shadow-[0_24px_60px_-24px_rgba(120,80,30,0.28)] sm:p-10"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(120% 90% at 100% 0%, color-mix(in oklab, var(--golden) 22%, transparent), transparent 62%)",
                }}
              />
              <div className="relative">
                <span className="text-2xl">{c.emoji}</span>
                <h3 className="mt-6 font-display text-xl font-semibold tracking-[-0.01em] text-foreground sm:text-[22px]">
                  {c.title}
                </h3>
                <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
                  {c.body}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

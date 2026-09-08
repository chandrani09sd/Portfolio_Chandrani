import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const links = [
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Email", href: "#" },
  { label: "Resume", href: "#" },
];

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-border/60">
      <div className="mx-auto max-w-4xl px-6 py-32 text-center lg:px-10 lg:py-48">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 1.1, ease }}
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground">
            06 — Contact
          </span>
          <h2 className="mx-auto mt-8 max-w-2xl font-display text-3xl font-semibold leading-[1.12] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-[46px]">
            Every great system starts with a single request.
          </h2>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="rounded-full border border-border/70 bg-cream/60 px-7 py-3 text-[13px] tracking-wide text-foreground/80 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--golden)] hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Space reserved for a future chapter */}
      <div className="h-[40vh]" aria-hidden />
    </section>
  );
}

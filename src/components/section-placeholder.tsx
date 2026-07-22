import { motion } from "framer-motion";

interface Props {
  id: string;
  index: string;
  title: string;
  hint: string;
}

export function SectionPlaceholder({ id, index, title, hint }: Props) {
  return (
    <section id={id} className="border-t border-border/60">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-28 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:py-40"
      >
        <div className="lg:col-span-4">
          <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground">
            {index} — {title}
          </span>
        </div>
        <div className="lg:col-span-8">
          <h2 className="font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl">
            {title}.
          </h2>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-[16px]">
            {hint}
          </p>
          <div className="mt-10 flex items-center gap-3 text-[12px] uppercase tracking-[0.28em] text-muted-foreground/70">
            <span className="h-px w-10 bg-border" />
            Coming soon
          </div>
        </div>
      </motion.div>
    </section>
  );
}

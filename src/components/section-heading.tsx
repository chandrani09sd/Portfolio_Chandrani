import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

interface Props {
  index: string;
  eyebrow: string;
  title: string;
  intro?: string;
}

export function SectionHeading({ index, eyebrow, title, intro }: Props) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 1, ease }}
      className="max-w-3xl"
    >
      <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground">
        {index} — {eyebrow}
      </span>
      <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.08] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-[46px]">
        {title}
      </h2>
      {intro ? (
        <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-[16px]">
          {intro}
        </p>
      ) : null}
    </motion.header>
  );
}

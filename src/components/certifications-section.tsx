import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";

const ease = [0.22, 1, 0.36, 1] as const;

const certs = [
  { name: "Microsoft Azure Fundamentals", meta: "Cloud" },
  { name: "Oracle SQL / PL-SQL", meta: "Data" },
  { name: "Global Banking L1", meta: "Domain" },
  { name: "Global Banking L2", meta: "Domain" },
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-28 lg:px-10 lg:py-40">
        <SectionHeading index="05" eyebrow="Certifications" title="Learning, formally recorded." />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {certs.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.9, ease, delay: i * 0.07 }}
              whileHover={{ y: -6 }}
              className="flex h-52 flex-col justify-between rounded-3xl border border-border/70 bg-cream/60 p-7 shadow-[0_1px_2px_rgba(60,40,20,0.04)] transition-shadow duration-500 hover:shadow-[0_26px_60px_-28px_rgba(120,80,30,0.3)]"
            >
              <span className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                {c.meta}
              </span>
              <h3 className="font-display text-[19px] font-semibold leading-snug tracking-[-0.01em] text-foreground">
                {c.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion, useReducedMotion } from "framer-motion";
import beachWalkPhoto from "@/assets/beach-walk.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

export function CinematicTransitionVideo() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden border-t border-[rgba(232,138,85,0.2)] bg-background py-20 lg:py-28">
      {/* 
        SUBTLE WARM AMBIENT GLOW:
        Gentle golden-hour light pooling softly toward the right, blending the atmosphere with the Skills section above
      */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/2 -z-10 h-[520px] w-full max-w-4xl -translate-y-1/2 opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at 75% 50%, rgba(244,199,138,0.4) 0%, rgba(232,138,85,0.18) 45%, transparent 75%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8 min-h-[500px]">
          {/* 
            LEFT SIDE (Text, Clean, Editorial, Generous Whitespace):
            No highlighted text backgrounds, no pill badges, no cheap overlays.
          */}
          <div className="z-10 lg:col-span-6 lg:pr-8">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.8, ease }}
              className="text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--ember)]"
            >
              Perspective & Craft
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.9, ease, delay: 0.1 }}
              className="mt-5 font-display text-3xl font-semibold leading-[1.12] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-[50px]"
            >
              Patience in the craft. <br />
              <span className="bg-gradient-to-r from-[var(--ember)] via-[var(--golden)] to-[#d47343] bg-clip-text text-transparent">
                Precision in the code.
              </span>
            </motion.h2>

            {/* Professional Supporting Message */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.9, ease, delay: 0.16 }}
              className="mt-6 space-y-4 text-[16px] leading-relaxed text-foreground/80 sm:text-[17px]"
            >
              <p>
                Stepping toward open horizons is where clarity lives. In backend engineering,
                building systems that run quietly at scale requires the same patient observation
                as watching natural light shift across the water.
              </p>
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                Carrying this steady focus from quiet shores straight into high-stakes enterprise
                banking applications — designing microservices, resolving production bottlenecks,
                and releasing software that is built to endure.
              </p>
            </motion.div>

            {/* Subtle Editorial Bridge to Experience */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.8, ease, delay: 0.22 }}
              className="mt-8 flex items-center gap-3 text-[12px] uppercase tracking-[0.22em] text-muted-foreground"
            >
              <span className="font-display italic text-foreground">Next:</span>
              <a
                href="#experience"
                className="transition-colors hover:text-foreground inline-flex items-center gap-1.5"
              >
                <span>Enterprise banking experience & deliverables</span>
                <span aria-hidden>→</span>
              </a>
            </motion.div>
          </div>

          {/* 
            RIGHT SIDE (Image Predominantly on the Right, Seamlessly Merged):
            Extends naturally toward the right edge. Left edge blends smoothly into the cream background 
            with soft gradient masks, warm orange overlays, and subtle golden lighting (Just like the Hero).
            NOT a separate rectangular image or card.
          */}
          <div className="relative flex items-center justify-end lg:col-span-6 lg:h-full lg:min-h-[520px]">
            {/* Ambient golden sun bloom behind photograph */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-6 -z-10 rounded-full opacity-65 blur-3xl"
              style={{
                background:
                  "radial-gradient(ellipse at 65% 50%, rgba(244,199,138,0.5) 0%, rgba(232,138,85,0.22) 45%, transparent 75%)",
              }}
            />

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.02 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              className="relative h-[400px] w-full sm:h-[480px] lg:h-full lg:min-h-[540px]"
            >
              {/* 
                THE PHOTOGRAPH:
                Vivid, colorful, and naturally emerging from the cream background.
                All 4 edges feathered with multi-directional radial & linear gradients so NO rectangular edges exist.
              */}
              <img
                src={beachWalkPhoto}
                alt="Chandrani Bera walking along the coastal shore toward the ocean waves at sunset"
                loading="lazy"
                className="h-full w-full object-cover object-[center_35%] lg:object-[center_30%] select-none pointer-events-none"
                style={{
                  maskImage:
                    "radial-gradient(ellipse 85% 80% at 75% 50%, black 40%, rgba(0,0,0,0.85) 58%, rgba(0,0,0,0.3) 78%, transparent 100%), linear-gradient(to left, black 35%, rgba(0,0,0,0.55) 65%, transparent 100%), linear-gradient(to right, black 70%, rgba(0,0,0,0.6) 88%, transparent 100%), linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 12%, black 30%, black 72%, rgba(0,0,0,0.35) 88%, transparent 100%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse 85% 80% at 75% 50%, black 40%, rgba(0,0,0,0.85) 58%, rgba(0,0,0,0.3) 78%, transparent 100%), linear-gradient(to left, black 35%, rgba(0,0,0,0.55) 65%, transparent 100%), linear-gradient(to right, black 70%, rgba(0,0,0,0.6) 88%, transparent 100%), linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 12%, black 30%, black 72%, rgba(0,0,0,0.35) 88%, transparent 100%)",
                  maskComposite: "intersect",
                  WebkitMaskComposite: "source-in",
                }}
              />

              {/* 
                ATMOSPHERIC SOFT GRADIENTS ON ALL SIDES:
                Eliminates any visible rectangular edge on left, right, top, and bottom
              */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-[rgba(244,199,138,0.22)] via-45% to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-background/85 via-background/40 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-background/85 via-background/40 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background/90 via-background/45 to-transparent" />
              <div
                className="pointer-events-none absolute inset-0 mix-blend-color-dodge opacity-25"
                style={{
                  background:
                    "radial-gradient(ellipse at 70% 30%, rgba(255,220,160,0.85) 0%, transparent 60%)",
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

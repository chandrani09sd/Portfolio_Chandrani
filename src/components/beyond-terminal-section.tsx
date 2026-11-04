import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Sparkles,
} from "lucide-react";
import aboutCutout from "@/assets/about-cutout.jpg";
import beachWalkPhoto from "@/assets/beach-walk.jpg";
import pizzaPhoto from "@/assets/pizza.jpg";
import dinnerMoment from "@/assets/dinner-moment.jpg";
import paintingPhoto from "@/assets/painting-moment.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

// Scrapbook photos styled as authentic editorial Polaroids (5 moments in ordered sequence)
const scrapbookPhotos = [
  {
    id: "beach-walk",
    src: beachWalkPhoto,
    alt: "Chandrani Bera walking along the shoreline at sunset",
    caption: "Patience in the craft, precision in the code",
    tag: "Sunset",
    rotation: "1.6deg",
    date: "Golden hour · Horizons",
    isCutout: false,
    objectPosition: "object-center",
  },
  {
    id: "painting",
    src: paintingPhoto,
    alt: "Chandrani painting a golden sunset landscape on canvas at her easel",
    caption: "The artist by instinct — quiet patience at the easel",
    tag: "Painting",
    rotation: "-1.8deg",
    date: "Bengaluru · Studio",
    isCutout: false,
    objectPosition: "object-[center_35%]",
  },
  {
    id: "pizza",
    src: pizzaPhoto,
    alt: "Chandrani enjoying a slice of pizza",
    caption: "Good food & great conversations",
    tag: "Pizza",
    rotation: "1.9deg",
    date: "Candid moments",
    isCutout: false,
    objectPosition: "object-center",
  },
  {
    id: "cutout",
    src: aboutCutout,
    alt: "Chandrani Bera — Portrait photograph",
    caption: "An engineer by profession, artist by instinct",
    tag: "Portrait",
    rotation: "-2deg",
    date: "Bengaluru · 2026",
    isCutout: true,
    objectPosition: "object-center",
  },
  {
    id: "dinner",
    src: dinnerMoment,
    alt: "Chandrani enjoying an evening dinner",
    caption: "Finding joy in everyday moments",
    tag: "Evening glow",
    rotation: "1.3deg",
    date: "Quiet evenings",
    isCutout: false,
    objectPosition: "object-center",
  },
];

export function BeyondTerminalSection() {
  const shouldReduceMotion = useReducedMotion();

  // Editorial Slideshow State with smooth directional gliding
  const [[page, direction], setPage] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);
  const currentSlide = ((page % scrapbookPhotos.length) + scrapbookPhotos.length) % scrapbookPhotos.length;
  const currentPhoto = scrapbookPhotos[currentSlide];

  const paginate = (newDirection: number) => {
    setPage(([prevPage]) => [prevPage + newDirection, newDirection]);
  };

  const jumpToSlide = (targetIndex: number) => {
    const currentIdx = ((page % scrapbookPhotos.length) + scrapbookPhotos.length) % scrapbookPhotos.length;
    const diff = targetIndex - currentIdx;
    if (diff === 0) return;
    setPage(([prevPage]) => [prevPage + diff, diff > 0 ? 1 : -1]);
  };

  // Continuous, smooth automatic gliding through all 5 photos with pause-on-hover
  useEffect(() => {
    if (shouldReduceMotion || isPaused) return;
    const timer = setInterval(() => {
      paginate(1);
    }, 3400);
    return () => clearInterval(timer);
  }, [shouldReduceMotion, isPaused]);

  return (
    <section className="relative overflow-hidden bg-background py-16 lg:py-24">
      {/* Delicate top horizontal separator line with sunset gradient */}
      <div
        aria-hidden
        className="mx-auto mb-14 h-px max-w-6xl"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(232,138,85,0.32) 50%, transparent 100%)",
        }}
      />

      {/* Ambient warm golden-hour backdrop glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[520px] w-full max-w-5xl -translate-x-1/2 -translate-y-1/2 rounded-full opacity-45 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(244,199,138,0.3) 0%, rgba(232,138,85,0.12) 50%, transparent 75%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        {/* Editorial Section Heading */}
        <div className="mb-10 max-w-2xl sm:mb-12">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -40px 0px" }}
            transition={{ duration: 0.8, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--golden)]/40 bg-[var(--golden)]/10 px-3.5 py-1 text-[11px] font-medium uppercase tracking-[0.25em] text-[var(--ember)]"
          >
            <Sparkles className="h-3.5 w-3.5 text-[var(--golden)]" />
            <span>Personal Interlude</span>
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -40px 0px" }}
            transition={{ duration: 0.9, ease, delay: 0.08 }}
            className="mt-3.5 font-display text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-3xl lg:text-4xl"
          >
            Between code and canvas. <br />
            <span className="bg-gradient-to-r from-[var(--ember)] via-[var(--golden)] to-[#d47343] bg-clip-text text-transparent">
              The craft, the patience, and everyday joys.
            </span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -40px 0px" }}
            transition={{ duration: 0.9, ease, delay: 0.14 }}
            className="mt-3 text-[15px] leading-relaxed text-muted-foreground"
          >
            A quick pause between enterprise banking systems and featured engineering projects.
          </motion.p>
        </div>

        {/* 
          EDITORIAL SCRAPBOOK PHOTO SLIDESHOW + PERSONAL STORY COMPOSITION:
          Classy, minimalist, and perfectly balanced with the text.
        */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left: Elegant Polaroid Photograph Gallery (All 5 photos glide smoothly with spring physics) */}
          <div className="flex flex-col items-center justify-center lg:col-span-5">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "0px 0px -40px 0px" }}
              transition={{ duration: 1, ease }}
              className="group relative w-full max-w-[330px] sm:max-w-[360px]"
            >
              {/* Warm atmospheric light pooling behind the Polaroid stack */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-6 -z-10 rounded-full opacity-65 blur-3xl"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(244,199,138,0.55) 0%, rgba(232,138,85,0.22) 55%, transparent 75%)",
                }}
              />

              {/* TACTILE POLAROID STACK: Realistic layered desk presentation */}
              <div
                className="relative overflow-visible"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {/* Background Polaroid Underlayer 1 (tilted right) */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-[14px] border border-black/5 bg-[#faf8f5] shadow-sm transition-transform duration-500"
                  style={{
                    transform: "rotate(3.5deg) translate(8px, 6px)",
                  }}
                />

                {/* Background Polaroid Underlayer 2 (tilted left) */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-[14px] border border-black/5 bg-[#f5f1eb] shadow-sm transition-transform duration-500"
                  style={{
                    transform: "rotate(-3.2deg) translate(-6px, 4px)",
                  }}
                />

                {/* ACTIVE POLAROID PHOTOGRAPH: Glides smoothly through all 5 images */}
                <div className="relative min-h-[430px] sm:min-h-[490px] w-full">
                  <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                      key={currentPhoto.id}
                      custom={direction}
                      initial={
                        shouldReduceMotion
                          ? false
                          : {
                              x: direction > 0 ? 100 : -100,
                              opacity: 0,
                              scale: 0.94,
                              rotate: direction > 0 ? "5deg" : "-5deg",
                            }
                      }
                      animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1,
                        rotate: shouldReduceMotion ? "0deg" : currentPhoto.rotation,
                        transition: {
                          x: { type: "spring", stiffness: 280, damping: 26 },
                          opacity: { duration: 0.35 },
                          scale: { duration: 0.4 },
                          rotate: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                        },
                      }}
                      exit={{
                        x: direction > 0 ? -100 : 100,
                        opacity: 0,
                        scale: 0.94,
                        rotate: direction > 0 ? "-5deg" : "5deg",
                        transition: {
                          x: { type: "spring", stiffness: 280, damping: 26 },
                          opacity: { duration: 0.25 },
                          scale: { duration: 0.3 },
                        },
                      }}
                      className="absolute inset-0 overflow-hidden rounded-[14px] border border-black/[0.08] bg-white p-3.5 pb-8 shadow-[0_24px_50px_-20px_rgba(60,35,15,0.22),0_4px_16px_-4px_rgba(0,0,0,0.08)] sm:p-4 sm:pb-9"
                    >
                      {/* Editorial Washi Tape Accent at Top */}
                      <div className="absolute left-1/2 -top-2.5 z-20 -translate-x-1/2">
                        <div className="h-6 w-24 rounded-xs border border-amber-900/10 bg-amber-100/70 shadow-xs backdrop-blur-xs rotate-[-1deg]" />
                      </div>

                      {/* Tag badge floating on top right */}
                      <div className="absolute right-5 top-5 z-20 flex items-center gap-1.5 rounded-full border border-white/80 bg-white/90 px-3 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[var(--ember)] shadow-xs backdrop-blur-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--golden)] animate-pulse" />
                        <span>{currentPhoto.tag}</span>
                      </div>

                      {/* Inner Photo Frame with classic Polaroid square/4:5 proportion */}
                      <div className="relative aspect-[4/4.8] w-full overflow-hidden rounded-[6px] bg-[#f7f4ed] shadow-[inset_0_1px_3px_rgba(0,0,0,0.12)]">
                        {currentPhoto.isCutout ? (
                          /* Cutout Portrait inside Polaroid frame with sunlit studio glow */
                          <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-b from-[#f9f5ed] via-[#f4ece0] to-[#eadac8] p-3">
                            <div
                              aria-hidden
                              className="absolute h-44 w-44 rounded-full opacity-60 blur-xl"
                              style={{
                                background:
                                  "radial-gradient(circle, rgba(244,199,138,0.7) 0%, rgba(232,138,85,0.3) 65%, transparent 80%)",
                              }}
                            />
                            <motion.img
                              src={currentPhoto.src}
                              alt={currentPhoto.alt}
                              className="relative z-10 max-h-[94%] w-auto object-contain drop-shadow-[0_12px_20px_rgba(90,45,15,0.25)]"
                              animate={
                                shouldReduceMotion
                                  ? undefined
                                  : {
                                      y: [0, -3, 0],
                                    }
                              }
                              transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                            />
                          </div>
                        ) : (
                          /* Full photograph (Sunset, Painting, Pizza, Dinner) inside Polaroid */
                          <img
                            src={currentPhoto.src}
                            alt={currentPhoto.alt}
                            loading="lazy"
                            className={`h-full w-full object-cover ${currentPhoto.objectPosition || "object-center"} transition-transform duration-700 ease-out hover:scale-105`}
                          />
                        )}

                        {/* Subtle Polaroid photographic grain / glossy sheen */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/5 via-transparent to-white/10" />
                      </div>

                      {/* Tactile Polaroid Lower Chin: Handwritten-style editorial caption */}
                      <div className="mt-3.5 px-1 sm:mt-4">
                        <p className="font-display text-[13px] font-medium leading-snug tracking-tight text-neutral-800 sm:text-[14px]">
                          &ldquo;{currentPhoto.caption}&rdquo;
                        </p>
                        <div className="mt-1 flex items-center justify-between text-[10px] text-neutral-400">
                          <span className="font-mono tracking-wider">{currentPhoto.date}</span>
                          <span className="font-mono tracking-widest uppercase">
                            0{currentSlide + 1} / 0{scrapbookPhotos.length}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Manual Glide Arrow Controls */}
                <button
                  onClick={() => paginate(-1)}
                  aria-label="Previous Polaroid photo"
                  className="absolute -left-3 top-1/2 -translate-y-1/2 z-30 flex h-8 w-8 items-center justify-center rounded-full border border-border/70 bg-white/95 text-foreground shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-[var(--golden)]"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>

                <button
                  onClick={() => paginate(1)}
                  aria-label="Next Polaroid photo"
                  className="absolute -right-3 top-1/2 -translate-y-1/2 z-30 flex h-8 w-8 items-center justify-center rounded-full border border-border/70 bg-white/95 text-foreground shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-[var(--golden)]"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              {/* All 5 Interactive Glide Pills (Clearly showing all 5 moments in requested sequence) */}
              <div className="mt-5 w-full">
                <div className="grid grid-cols-5 gap-1 sm:gap-1.5">
                  {scrapbookPhotos.map((photo, idx) => {
                    const isCurrent = idx === currentSlide;
                    return (
                      <button
                        key={photo.id}
                        onClick={() => jumpToSlide(idx)}
                        aria-label={`Glide to photo ${idx + 1}: ${photo.tag}`}
                        className={`relative flex flex-col items-center justify-center rounded-xl border py-1.5 px-1 transition-all duration-300 cursor-pointer ${
                          isCurrent
                            ? "border-[var(--golden)] bg-cream shadow-xs text-foreground scale-102 font-medium"
                            : "border-border/60 bg-cream/40 text-muted-foreground hover:-translate-y-0.5 hover:border-border hover:bg-cream/70"
                        }`}
                      >
                        <span className="text-[10px] uppercase tracking-wider truncate max-w-full">
                          {photo.tag.split(" ")[0]}
                        </span>
                        {isCurrent ? (
                          <motion.div
                            layoutId="activePolaroidPillBar"
                            transition={{ type: "spring", stiffness: 340, damping: 28 }}
                            className="mt-1 h-1 w-6 rounded-full bg-[var(--ember)]"
                          />
                        ) : (
                          <div className="mt-1 h-1 w-1.5 rounded-full bg-border/80" />
                        )}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] italic text-muted-foreground">
                  <Heart className="h-3 w-3 text-[var(--golden)] fill-[var(--golden)]/20" />
                  <span>A little about the person behind the code · 5 personal moments</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Personal Narrative (Cleanly balanced) */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -40px 0px" }}
            transition={{ duration: 0.9, ease, delay: 0.15 }}
            className="space-y-5 lg:col-span-7"
          >
            <div className="rounded-[26px] border border-border/70 bg-cream/70 p-6 sm:p-8 shadow-sm">
              <h3 className="font-display text-xl font-semibold tracking-[-0.015em] text-foreground sm:text-2xl">
                Meeting me beyond the terminal.
              </h3>

              <div className="mt-4 space-y-3.5 text-[15px] leading-relaxed text-foreground/80">
                <p>
                  As a Backend Software Engineer at <strong>Capgemini</strong>, working on{" "}
                  <strong>Standard Chartered Bank</strong>’s digital banking platforms, I’ve
                  learned to approach engineering with dedication, curiosity, and a strong sense of
                  responsibility. I enjoy understanding how things work beneath the surface, solving
                  complex problems, and building reliable systems where every detail matters. For
                  me, good engineering is about more than writing code, it’s about thoughtful
                  decisions, continuous improvement, and taking ownership of the work I do.
                </p>
                <p>
                  Beyond the code editor, painting is where I find a different kind of expression.
                  Working with a blank canvas teaches me patience, observation, and the beauty of
                  building something one thoughtful stroke at a time. Whether I’m developing software
                  or creating art, I’m drawn to the same things:{" "}
                  <strong className="font-semibold text-foreground">
                    the process, the details, and the satisfaction of creating something meaningful.
                  </strong>
                </p>
              </div>

              {/* Pull Quote */}
              <div className="mt-6 border-l-2 border-[var(--golden)] pl-4">
                <p className="font-display text-[16px] italic leading-snug text-foreground">
                  &ldquo;Approaching backend engineering and art with the same curiosity: the process,
                  the details, and the satisfaction of creating something meaningful.&rdquo;
                </p>
              </div>

              {/* Interactive Quick Facts Strip */}
              <div className="mt-6 grid grid-cols-3 gap-3 border-t border-border/50 pt-5">
                <div className="rounded-xl bg-cream/80 p-3 text-center transition-all hover:bg-cream hover:shadow-sm">
                  <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    Experience
                  </span>
                  <p className="mt-0.5 font-display text-[15px] font-semibold text-foreground">
                    2.7+ Years
                  </p>
                </div>
                <div className="rounded-xl bg-cream/80 p-3 text-center transition-all hover:bg-cream hover:shadow-sm">
                  <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    Domain
                  </span>
                  <p className="mt-0.5 font-display text-[15px] font-semibold text-foreground">
                    Banking
                  </p>
                </div>
                <div className="rounded-xl bg-cream/80 p-3 text-center transition-all hover:bg-cream hover:shadow-sm">
                  <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    Passion
                  </span>
                  <p className="mt-0.5 font-display text-[15px] font-semibold text-foreground">
                    Art & Travel
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


import { motion, useMotionValue, useSpring, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import heroAsset from "@/assets/hero-sunset.jpeg.asset.json";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  // Scroll parallax
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const sceneY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "14%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-6%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Mouse parallax
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 40, damping: 20, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 40, damping: 20, mass: 0.6 });

  const skyX = useTransform(sx, (v) => `${v * -14}px`);
  const skyY = useTransform(sy, (v) => `${v * -8}px`);
  const cloudsX = useTransform(sx, (v) => `${v * -22}px`);
  const subjectX = useTransform(sx, (v) => `${v * 10}px`);
  const subjectY = useTransform(sy, (v) => `${v * 6}px`);
  const glowX = useTransform(sx, (v) => `${v * 18}px`);
  const glowY = useTransform(sy, (v) => `${v * 12}px`);

  useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width - 0.5;
      const ny = (e.clientY - r.top) / r.height - 0.5;
      mx.set(nx);
      my.set(ny);
    };
    const onLeave = () => {
      mx.set(0);
      my.set(0);
    };
    window.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [mx, my, reduce]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate h-[100svh] min-h-[680px] w-full overflow-hidden bg-ink"
    >
      {/* Scene wrapper (scroll parallax) */}
      <motion.div style={{ y: sceneY }} className="absolute inset-0 -z-10 will-change-transform">
        {/* Sky base — warm gradient, replaces the photo's washed sky for legibility */}
        <motion.div
          style={{ x: skyX, y: skyY }}
          className="absolute -inset-[6%] bg-[linear-gradient(180deg,#f4c78a_0%,#f2a765_35%,#e88a55_65%,#a85a3f_100%)]"
        />

        {/* Sun glow — soft warm bloom, follows cursor gently */}
        <motion.div
          aria-hidden
          style={{ x: glowX, y: glowY }}
          className="absolute right-[8%] top-[18%] h-[55vh] w-[55vh] rounded-full bg-[radial-gradient(circle,rgba(255,232,180,0.85)_0%,rgba(255,190,110,0.35)_35%,transparent_70%)] blur-2xl"
        />
        {!reduce && (
          <motion.div
            aria-hidden
            initial={{ opacity: 0.75, scale: 1 }}
            animate={{ opacity: [0.75, 0.95, 0.75], scale: [1, 1.04, 1] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[10%] top-[20%] h-[35vh] w-[35vh] rounded-full bg-[radial-gradient(circle,rgba(255,245,220,0.9)_0%,rgba(255,210,140,0.35)_45%,transparent_75%)] blur-xl"
          />
        )}

        {/* Drifting clouds layer */}
        {!reduce && (
          <motion.div
            aria-hidden
            style={{ x: cloudsX }}
            className="absolute inset-0"
          >
            <motion.div
              animate={{ x: ["-4%", "4%"] }}
              transition={{ duration: 60, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              className="absolute inset-0 opacity-[0.55] mix-blend-screen"
              style={{
                backgroundImage:
                  "radial-gradient(60% 30% at 20% 22%, rgba(255,255,255,0.35), transparent 60%), radial-gradient(45% 22% at 70% 14%, rgba(255,255,255,0.28), transparent 65%), radial-gradient(35% 18% at 45% 30%, rgba(255,255,255,0.22), transparent 60%)",
                backgroundRepeat: "no-repeat",
              }}
            />
          </motion.div>
        )}

        {/* Full photograph — layered as the scene, subject anchored bottom-right, uncropped */}
        <motion.div
          style={{ x: subjectX, y: subjectY }}
          className="absolute inset-0"
        >
          <motion.img
            src={heroAsset.url}
            alt="Chandrani at golden hour by the ocean"
            initial={{ scale: 1.06, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2.4, ease }}
            draggable={false}
            className="absolute bottom-0 right-0 h-full w-auto max-w-none object-contain object-bottom select-none pointer-events-none
                       [mask-image:linear-gradient(to_left,black_55%,transparent_100%),linear-gradient(to_top,black_75%,transparent_100%)]
                       [mask-composite:intersect] [-webkit-mask-composite:source-in]"
          />
        </motion.div>

        {/* Warm gradient wash — improves headline contrast without darkening the sky */}
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(60,25,10,0.55)_0%,rgba(90,45,20,0.28)_35%,rgba(120,60,25,0.05)_60%,transparent_80%)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-b from-transparent via-background/25 to-background" />

        {/* Animated waves (SVG) at the shoreline */}
        <svg
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-[22%] w-full"
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveA" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="rgba(255,210,150,0.35)" />
              <stop offset="100%" stopColor="rgba(255,210,150,0)" />
            </linearGradient>
            <linearGradient id="waveB" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="rgba(255,180,110,0.28)" />
              <stop offset="100%" stopColor="rgba(255,180,110,0)" />
            </linearGradient>
          </defs>
          {!reduce ? (
            <>
              <motion.path
                fill="url(#waveA)"
                initial={{ x: 0 }}
                animate={{ x: [-40, 40, -40] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                d="M0,110 C240,150 480,70 720,110 C960,150 1200,70 1440,110 L1440,220 L0,220 Z"
              />
              <motion.path
                fill="url(#waveB)"
                initial={{ x: 0 }}
                animate={{ x: [30, -30, 30] }}
                transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
                d="M0,140 C240,180 480,110 720,150 C960,190 1200,120 1440,150 L1440,220 L0,220 Z"
              />
            </>
          ) : (
            <path fill="url(#waveA)" d="M0,120 C240,150 480,90 720,120 C960,150 1200,90 1440,120 L1440,220 L0,220 Z" />
          )}
        </svg>
      </motion.div>

      {/* Content — upper-left, out of the silhouette's way */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center px-6 pt-24 lg:px-10"
      >
        <div className="max-w-[36rem]">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.4, ease }}
            className="mb-8 text-[11px] font-medium uppercase tracking-[0.28em] text-white/85 drop-shadow-[0_1px_10px_rgba(0,0,0,0.35)]"
          >
            Chandrani Bera — Est. Golden Hour
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.55, ease }}
            className="text-balance font-display text-[34px] font-semibold leading-[1.06] tracking-[-0.03em] text-white sm:text-[46px] lg:text-[60px] [text-shadow:0_2px_30px_rgba(50,20,5,0.45)]"
          >
            Building software with the precision of engineering and the creativity of art.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.9, ease }}
            className="mt-10 max-w-xl text-balance text-[15px] leading-relaxed text-white/90 sm:text-[16px] [text-shadow:0_1px_16px_rgba(50,20,5,0.35)]"
          >
            Backend Software Engineer building enterprise banking systems, scalable APIs, and
            production-ready solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 1.15, ease }}
            className="mt-12 flex flex-wrap items-center gap-3"
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
        </div>

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
            className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/75"
          >
            Scroll
            <span className="h-8 w-px bg-white/60" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

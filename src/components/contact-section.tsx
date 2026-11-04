import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  Linkedin,
  Github,
  FileText,
  ArrowUp,
  Sparkles,
  Check,
  Copy,
  ExternalLink,
  ArrowDownToLine,
} from "lucide-react";
import citySunset from "@/assets/city-sunset-view.jpg";
import resumePdf from "@/assets/resume.pdf";
import { handleResumeDownload } from "@/lib/resume-download";

const ease = [0.22, 1, 0.36, 1] as const;

export function ContactSection() {
  const shouldReduceMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("chandrani09.sd@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden flex flex-col justify-between min-h-[96vh] text-white pt-24 sm:pt-36"
      style={{
        background:
          "linear-gradient(180deg, #d46e3c 0%, #c4602d 12%, #a8481f 28%, #72270f 48%, #3e1307 70%, #1c0903 88%, #100401 100%)",
      }}
    >
      {/* Full-bleed Sunset Background Canvas seamlessly integrated into the portfolio */}
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none">
        {/* Ambient golden-orange sun bloom behind the sunset horizon */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-90 blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse at 50% 55%, rgba(255,200,120,0.7) 0%, rgba(232,138,85,0.45) 42%, transparent 75%)",
          }}
        />

        <motion.div
          initial={shouldReduceMotion ? false : { scale: 1.03, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="relative h-full w-full max-w-7xl"
        >
          {/* 
            THE SUNSET PHOTOGRAPH (City Overlook Sunset):
            Framed at object-[center_62%] to prominently feature the glowing orange sunset horizon
            and sparkling city lights. The dark upper clouds are smoothly masked out, allowing the
            photo to dissolve naturally into the warm sunset atmosphere and the cream portfolio above.
          */}
          <img
            src={citySunset}
            alt="Chandrani Bera — Sunset overlook with golden horizon clouds and sparkling city lights at dusk"
            className="h-full w-full object-cover object-[center_62%] lg:object-[center_60%]"
            style={{
              maskImage:
                "linear-gradient(to bottom, transparent 0%, transparent 10%, rgba(0,0,0,0.2) 25%, rgba(0,0,0,0.8) 48%, black 65%, black 88%, rgba(0,0,0,0.4) 96%, transparent 100%), linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, transparent 10%, rgba(0,0,0,0.2) 25%, rgba(0,0,0,0.8) 48%, black 65%, black 88%, rgba(0,0,0,0.4) 96%, transparent 100%), linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
            }}
          />

          {/* Warm sunset orange blend overlay over upper clouds */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-[60%]"
            style={{
              background:
                "linear-gradient(180deg, rgba(232,138,85,0.75) 0%, rgba(212,115,67,0.45) 40%, transparent 100%)",
              mixBlendMode: "color-burn",
            }}
          />

          {/* Warm ember base wash blending into the city lights */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#140703]/90" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#200d05]/60 via-transparent to-[#200d05]/60" />
          <div
            className="pointer-events-none absolute inset-0 opacity-35 mix-blend-screen"
            style={{
              background:
                "radial-gradient(ellipse at 50% 55%, rgba(255,220,150,0.9) 0%, rgba(244,150,80,0.4) 50%, transparent 75%)",
            }}
          />
        </motion.div>
      </div>

        {/* Floating Content Layer directly integrated into the heart of the sunset */}
        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-6 py-20 text-center sm:py-28 lg:px-10">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.8, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/40 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--golden)] backdrop-blur-md shadow-lg"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>06 — The Sunset & Beyond</span>
          </motion.div>

          {/* Grand Closing Headline */}
          <motion.h2
            initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1, ease, delay: 0.1 }}
            className="mx-auto mt-8 max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-[-0.025em] text-white sm:text-6xl lg:text-[70px] drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]"
          >
            Still building. <br />
            <span className="bg-gradient-to-r from-[var(--golden)] via-[#f5bb88] to-white bg-clip-text text-transparent">
              Still becoming.
            </span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1, ease, delay: 0.18 }}
            className="mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-white/90 drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)] sm:text-[18px]"
          >
            Every great system starts with a single request. Whether you’re looking to engineer
            mission-critical backend microservices, discuss distributed architectures, or talk
            about art and sunsets — I’d love to connect.
          </motion.p>

          {/* Interactive Contact Actions — Unified, classy, perfectly in-line */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1, ease, delay: 0.22 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-3.5"
          >
            {/* 1. Primary LinkedIn Action */}
            <a
              href="https://www.linkedin.com/in/chandrani-bera-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 sm:px-6 text-[13.5px] font-semibold text-neutral-900 shadow-[0_8px_25px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--golden)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.45)]"
            >
              <Linkedin className="h-4 w-4" />
              <span>Connect on LinkedIn</span>
              <ExternalLink className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:translate-x-0.5" />
            </a>

            {/* 2. Interactive Copy Email Button */}
            <button
              onClick={copyEmail}
              className="group inline-flex h-11 items-center gap-2 rounded-full border border-white/25 bg-black/40 px-5 sm:px-6 text-[13.5px] font-medium text-white backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/60 hover:bg-black/60 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-emerald-400" />
                  <span className="font-semibold text-emerald-300">Email copied!</span>
                </>
              ) : (
                <>
                  <Mail className="h-4 w-4 text-[var(--golden)]" />
                  <span>chandrani09.sd@gmail.com</span>
                  <Copy className="h-3.5 w-3.5 opacity-50 transition-opacity group-hover:opacity-100" />
                </>
              )}
            </button>

            {/* 3. GitHub */}
            <a
              href="https://github.com/chandrani09sd"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-11 items-center gap-2 rounded-full border border-white/25 bg-black/40 px-5 sm:px-6 text-[13.5px] font-medium text-white backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/60 hover:bg-black/60"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
              <ExternalLink className="h-3.5 w-3.5 opacity-50 transition-transform group-hover:translate-x-0.5" />
            </a>

            {/* 4. Resume PDF */}
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              download="Chandrani_Bera_Resume.pdf"
              onClick={handleResumeDownload}
              className="group inline-flex h-11 items-center gap-2 rounded-full border border-white/25 bg-black/40 px-5 sm:px-6 text-[13.5px] font-medium text-white backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/60 hover:bg-black/60 cursor-pointer"
            >
              <FileText className="h-4 w-4 text-[var(--golden)]" />
              <span>Resume PDF</span>
              <ArrowDownToLine className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:translate-y-0.5" />
            </a>
          </motion.div>

          {/* Status Note */}
          <div className="mt-8 flex items-center gap-2.5 text-[12.5px] text-white/80 drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span>Open to High-Impact Backend & Distributed Systems Opportunities</span>
          </div>
        </div>

        {/* Seamless Integrated Final Footer at the Base of the Sunset */}
        <div className="relative z-10 w-full border-t border-white/15 bg-black/40 py-7 backdrop-blur-sm text-[11px] uppercase tracking-[0.25em] text-white/70">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 sm:flex-row lg:px-10">
            <span>© {new Date().getFullYear()} Chandrani Bera · Bangalore, India</span>
            <span className="hidden sm:inline">Crafted slowly, at golden hour.</span>
            <button
              onClick={scrollToTop}
              className="group inline-flex items-center gap-1.5 transition-colors hover:text-white"
              aria-label="Scroll back to top of page"
            >
              <span>Back to top</span>
              <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 text-[var(--golden)]" />
            </button>
          </div>
        </div>
    </section>
  );
}

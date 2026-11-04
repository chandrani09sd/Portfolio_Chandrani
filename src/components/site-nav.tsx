import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import resumePdf from "@/assets/resume.pdf";
import { handleResumeDownload } from "@/lib/resume-download";
import { RecruiterModal } from "@/components/recruiter-modal";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [showQuickView, setShowQuickView] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("");
    } else {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        setActiveSection(href);
      }
    }
    window.history.pushState(null, "", href);
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      if (window.scrollY < 300) {
        setActiveSection("");
        return;
      }
      const sectionIds = links.map((l) => l.href);
      let current = "";
      for (const id of sectionIds) {
        const el = document.querySelector(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 240) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color,box-shadow] duration-500 ease-out ${scrolled
          ? "border-b border-border/60 bg-background/85 backdrop-blur-xl shadow-sm"
          : "border-b border-transparent bg-transparent"
          }`}
      >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a
          href="#top"
          onClick={(e) => handleAnchorClick(e, "#top")}
          className={`font-display text-[15px] font-medium tracking-tight transition-colors duration-500 ${scrolled ? "text-foreground" : "text-white"
            }`}
        >
          Chandrani&nbsp;Bera
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => {
            const isActive = activeSection === l.href;
            return (
              <li key={l.href} className="relative py-1">
                <a
                  href={l.href}
                  onClick={(e) => handleAnchorClick(e, l.href)}
                  className={`relative text-[13px] tracking-wide transition-colors duration-300 ${scrolled
                    ? isActive
                      ? "font-medium text-[var(--ember)]"
                      : "text-foreground/75 hover:text-foreground"
                    : isActive
                      ? "font-medium text-white"
                      : "text-white/80 hover:text-white"
                    }`}
                >
                  {l.label}
                </a>
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    className="absolute inset-x-0 -bottom-0.5 mx-auto h-[2px] w-4 rounded-full bg-gradient-to-r from-[var(--golden)] to-[var(--ember)]"
                  />
                )}
              </li>
            );
          })}
        </ul>
        <div className="flex items-center gap-3 md:gap-5">
          <button
            onClick={() => setShowQuickView(true)}
            className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[12px] font-medium transition-all duration-300 hover:-translate-y-0.5 cursor-pointer ${scrolled
              ? "border border-amber-600/30 bg-amber-500/10 text-amber-900 hover:bg-amber-500/20 shadow-xs"
              : "border border-white/30 bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
              }`}
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Executive Brief</span>
          </button>

          <div className="hidden items-center gap-5 md:flex">
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              download="Chandrani_Bera_Resume.pdf"
              onClick={handleResumeDownload}
              className={`text-[13px] tracking-wide transition-colors duration-500 cursor-pointer ${scrolled ? "text-foreground/70 hover:text-foreground" : "text-white/80 hover:text-white"
                }`}
            >
              Resume ↗
            </a>
            <a
              href="#contact"
              onClick={(e) => handleAnchorClick(e, "#contact")}
              className={`text-[13px] tracking-wide transition-colors duration-500 ${scrolled ? "text-foreground/70 hover:text-foreground" : "text-white/80 hover:text-white"
                }`}
            >
              Say hello →
            </a>
          </div>
        </div>
      </nav>

      {/* Butter-smooth Golden-Hour Scroll Progress Line */}
      <motion.div
        style={{ scaleX }}
        className={`h-[2px] w-full origin-left bg-gradient-to-r from-[var(--golden)] via-[var(--ember)] to-[var(--golden)] transition-opacity duration-500 ${scrolled ? "opacity-90" : "opacity-0"
          }`}
      />
    </motion.header>

    <RecruiterModal isOpen={showQuickView} onClose={() => setShowQuickView(false)} />
  </>
  );
}

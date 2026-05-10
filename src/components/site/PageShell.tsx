import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="pt-24 sm:pt-28"
    >
      {children}
    </motion.main>
  );
}

/**
 * Reveal — bidirectional scroll reveal.
 * once = false by default so elements re-animate when scrolling back up.
 */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  once = false,
}: { children: ReactNode; delay?: number; y?: number; className?: string; once?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
      {children}
    </motion.span>
  );
}

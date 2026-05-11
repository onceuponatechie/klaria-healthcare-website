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
 * Bidirectional scroll-triggered reveal.
 * Re-animates every time the element enters/leaves the viewport.
 */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  amount = 0.15,
}: { children: ReactNode; delay?: number; y?: number; className?: string; amount?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -y, filter: "blur(6px)" }}
      viewport={{ once: false, amount, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
      {children}
    </span>
  );
}

import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Calendar } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 inset-x-0 z-50"
      >
        <div
          className={`w-full border-b transition-all duration-500 ${
            scrolled
              ? "bg-background/85 backdrop-blur-xl backdrop-saturate-150 border-border/70 shadow-soft"
              : "bg-background/60 backdrop-blur-md border-transparent"
          }`}
        >
          <div className="mx-auto max-w-7xl flex items-center justify-between gap-4 px-4 sm:px-8 h-16 sm:h-[72px]">
          <Link to="/" className="flex items-center gap-2 font-display font-bold text-foreground">
            <span className="grid place-items-center w-9 h-9 rounded-xl bg-primary text-primary-foreground">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21s-7-4.35-7-10a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.65-7 10-7 10z" />
                <path d="M9 11h2v-2h2v2h2v2h-2v2h-2v-2H9z" />
              </svg>
            </span>
            <span className="text-base sm:text-lg tracking-tight">Klaria</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="relative px-3 py-2 text-sm text-foreground/70 hover:text-foreground transition-colors"
                activeProps={{ className: "text-foreground font-semibold" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="hidden sm:block">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold shadow-glass hover:bg-primary/90 transition-colors"
              >
                <Calendar className="w-4 h-4" />
                Book Appointment
              </Link>
            </motion.div>
            <button
              onClick={() => setOpen(true)}
              className="md:hidden grid place-items-center w-10 h-10 rounded-xl glass text-foreground"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="bd"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[60] bg-foreground/30 backdrop-blur-sm md:hidden"
            />
            <motion.aside
              key="dr"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 240 }}
              className="fixed right-0 top-0 z-[70] h-full w-[82%] max-w-sm glass-strong p-6 flex flex-col md:hidden"
            >
              <div className="flex items-center justify-between mb-10">
                <span className="font-display font-bold text-lg">Klaria</span>
                <button
                  onClick={() => setOpen(false)}
                  className="grid place-items-center w-10 h-10 rounded-xl bg-secondary"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="flex flex-col gap-1">
                {links.map((l, i) => (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                  >
                    <Link
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className="block py-3 text-2xl font-display font-semibold text-foreground/80 hover:text-primary transition-colors"
                      activeProps={{ className: "text-primary" }}
                      activeOptions={{ exact: l.to === "/" }}
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-auto">
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-2xl bg-primary text-primary-foreground px-5 py-4 font-semibold shadow-glass"
                >
                  <Calendar className="w-5 h-5" /> Book Appointment
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

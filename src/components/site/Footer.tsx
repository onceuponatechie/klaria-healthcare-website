import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <footer className="relative mt-24 sm:mt-32 bg-foreground text-background">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20 grid gap-12 lg:gap-16 lg:grid-cols-12">
        <div className="lg:col-span-4 space-y-5">
          <Link to="/" className="flex items-center gap-2 font-display font-bold text-xl">
            <span className="grid place-items-center w-9 h-9 rounded-xl bg-primary text-primary-foreground">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21s-7-4.35-7-10a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.65-7 10-7 10z" />
                <path d="M9 11h2v-2h2v2h2v2h-2v2h-2v-2H9z" />
              </svg>
            </span>
            Klaria Health
          </Link>
          <p className="text-background/70 max-w-sm text-sm">
            Modern healthcare designed around how you actually live. Specialists, technology, and time you can trust.
          </p>
          <form
            onSubmit={(e) => { e.preventDefault(); if (email) { setSent(true); setEmail(""); } }}
            className="flex items-center gap-2 p-1.5 rounded-2xl bg-background/10 border border-background/15"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email for health tips"
              className="flex-1 bg-transparent px-3 py-2 text-sm placeholder:text-background/50 focus:outline-none"
            />
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="grid place-items-center w-10 h-10 rounded-xl bg-primary text-primary-foreground"
              aria-label="Subscribe"
            >
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </form>
          {sent && <p className="text-xs text-primary">Welcome aboard — see you in your inbox.</p>}
        </div>

        <div className="lg:col-span-2 space-y-3">
          <h4 className="text-xs uppercase tracking-widest text-background/50">Explore</h4>
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/services", label: "Services" },
            { to: "/blog", label: "Blog" },
            { to: "/contact", label: "Contact" },
          ].map((l) => (
            <Link key={l.to} to={l.to} className="block text-sm text-background/80 hover:text-primary transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="lg:col-span-3 space-y-3 text-sm">
          <h4 className="text-xs uppercase tracking-widest text-background/50">Visit</h4>
          <p className="flex gap-2 text-background/80"><MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" /> 240 Riverside Ave, Suite 12 Brooklyn, NY 11201</p>
          <p className="flex gap-2 text-background/80"><Phone className="w-4 h-4 mt-0.5 text-primary shrink-0" /> +1 (555) 555-0123</p>
          <p className="flex gap-2 text-background/80"><Mail className="w-4 h-4 mt-0.5 text-primary shrink-0" /> care@klaria.health</p>
        </div>

        <div className="lg:col-span-3 space-y-3 text-sm">
          <h4 className="text-xs uppercase tracking-widest text-background/50">Hours</h4>
          <p className="flex gap-2 text-background/80"><Clock className="w-4 h-4 mt-0.5 text-primary shrink-0" /> Mon — Fri · 8:00 — 19:00</p>
          <p className="flex gap-2 text-background/80"><Clock className="w-4 h-4 mt-0.5 text-primary shrink-0" /> Saturday · 9:00 — 14:00</p>
          <p className="flex gap-2 text-background/80"><Clock className="w-4 h-4 mt-0.5 text-primary shrink-0" /> Sunday · On-call only</p>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-background/50">
          <p>© {new Date().getFullYear()} Klaria Health. All rights reserved.</p>
          <p>Crafted with care · Privacy · Terms</p>
        </div>
      </div>
    </footer>
  );
}

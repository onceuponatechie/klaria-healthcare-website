import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar, BadgeCheck } from "lucide-react";
import { PageShell, Reveal, SectionEyebrow } from "@/components/site/PageShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Book — Klaria Health" },
      { name: "description", content: "Book your consultation, message us on WhatsApp, or visit our Brooklyn clinic. We'd love to hear from you." },
      { property: "og:title", content: "Contact Klaria" },
      { property: "og:description", content: "Book a consultation, message us, or visit." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <PageShell>
      <section className="max-w-6xl mx-auto px-5 sm:px-8 pt-6 pb-12">
        <Reveal className="max-w-3xl space-y-5">
          <SectionEyebrow>Get in touch</SectionEyebrow>
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tighter text-foreground text-balance leading-[0.95]">
            Let's get you booked.
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            Pick the channel that works best — phone, message, or just walk into the calendar below and grab a slot.
          </p>
        </Reveal>
      </section>

      <section className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-6">
        <Reveal className="lg:col-span-5 space-y-5">
          <div className="rounded-3xl bg-card border border-border p-7 shadow-soft space-y-5">
            <h2 className="text-2xl font-bold text-foreground">Reach us directly</h2>
            {[
              { icon: Phone, label: "Phone", value: "+1 (555) 555-0123", href: "tel:+15555550123" },
              { icon: Mail, label: "Email", value: "care@klaria.health", href: "mailto:care@klaria.health" },
              { icon: MapPin, label: "Clinic", value: "240 Riverside Ave, Suite 12 · Brooklyn, NY 11201" },
              { icon: Clock, label: "Hours", value: "Mon — Fri 8 — 19 · Sat 9 — 14" },
            ].map((it) => (
              <a
                key={it.label}
                href={it.href}
                className="flex items-start gap-4 group rounded-2xl p-3 -mx-3 hover:bg-primary-soft transition-colors"
              >
                <span className="grid place-items-center w-11 h-11 rounded-xl bg-primary-soft text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <it.icon className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">{it.label}</p>
                  <p className="text-foreground font-semibold leading-snug">{it.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="rounded-3xl overflow-hidden border border-border shadow-soft">
            <iframe
              title="Klaria clinic map"
              src="https://www.google.com/maps?q=Brooklyn+Bridge+Park&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[300px] border-0"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7">
          <div className="rounded-3xl bg-card border border-border p-7 sm:p-8 shadow-soft h-full">
            <div className="flex items-center gap-3 mb-6">
              <span className="grid place-items-center w-11 h-11 rounded-xl bg-primary text-primary-foreground">
                <Calendar className="w-5 h-5" />
              </span>
              <div>
                <h2 className="text-2xl font-bold text-foreground">Book online</h2>
                <p className="text-sm text-muted-foreground">Average response · under 2 minutes</p>
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-3">Choose a date</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { d: "Mon", n: "8", m: "Jun" },
                    { d: "Tue", n: "9", m: "Jun" },
                    { d: "Wed", n: "10", m: "Jun" },
                    { d: "Thu", n: "11", m: "Jun" },
                  ].map((s, i) => (
                    <button key={s.n} className={`rounded-xl border px-3 py-3 text-left transition-all ${i === 1 ? "bg-primary text-primary-foreground border-primary" : "border-border hover:border-primary"}`}>
                      <p className={`text-xs ${i === 1 ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{s.d}</p>
                      <p className="text-lg font-bold">{s.n}</p>
                      <p className={`text-xs ${i === 1 ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{s.m}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-3">Available times</p>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {["09:00", "10:30", "11:30", "13:00", "14:30", "16:00", "17:00", "17:30"].map((t, i) => (
                    <button key={t} className={`rounded-lg px-2 py-3 text-sm font-semibold transition-colors ${i === 2 ? "bg-foreground text-background" : "bg-secondary text-foreground hover:bg-primary-soft hover:text-primary"}`}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <input className="rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:border-primary" placeholder="Your name" />
                <input type="email" className="rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:border-primary" placeholder="Email" />
              </div>
              <select className="w-full rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:border-primary">
                <option>Family Medicine</option>
                <option>Dentistry</option>
                <option>Optometry</option>
                <option>Physiotherapy</option>
                <option>Pediatrics</option>
                <option>Cardiology</option>
              </select>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full rounded-2xl bg-primary text-primary-foreground py-4 font-semibold shadow-glass"
              >
                Confirm appointment
              </motion.button>
              <p className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <BadgeCheck className="w-4 h-4 text-primary" /> Powered by Calendly · Free 24h cancellation
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="px-5 sm:px-8 mt-12 mb-10">
        <motion.a
          href="https://api.whatsapp.com/send?phone=15555550123&text=Hi%20Klaria%2C%20I%20need%20some%20help."
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="block max-w-6xl mx-auto rounded-[2rem] relative overflow-hidden bg-[oklch(0.7_0.18_150)] text-white p-8 sm:p-12"
        >
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/15 blur-3xl" />
          <div className="absolute -bottom-24 -left-12 w-72 h-72 rounded-full bg-black/10 blur-3xl" />
          <div className="relative grid sm:grid-cols-[1fr_auto] gap-6 items-center">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest">
                <MessageCircle className="w-4 h-4" /> Direct line
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-balance leading-tight">
                Need urgent answers? <br className="hidden sm:block" />Message us on WhatsApp.
              </h2>
              <p className="text-white/85 max-w-xl">A real human from our care team replies in under 5 minutes during clinic hours.</p>
            </div>
            <div className="inline-flex items-center justify-center gap-3 rounded-2xl bg-white text-[oklch(0.45_0.16_150)] px-7 py-4 font-bold text-lg shadow-float self-start sm:self-center">
              <svg viewBox="0 0 32 32" className="w-6 h-6" fill="currentColor" aria-hidden>
                <path d="M16 3C9 3 3.4 8.6 3.4 15.6c0 2.5.7 4.8 1.9 6.8L3 29l6.8-2.2a12.6 12.6 0 0 0 6.2 1.6h.01c7 0 12.6-5.6 12.6-12.6S23 3 16 3z" />
              </svg>
              Open WhatsApp
            </div>
          </div>
        </motion.a>
      </section>
    </PageShell>
  );
}

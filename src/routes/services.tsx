import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, ChevronDown, Clock3, Stethoscope, Smile, Eye, Activity, Baby, HeartPulse } from "lucide-react";
import { PageShell, Reveal, SectionEyebrow } from "@/components/site/PageShell";
import sDent from "@/assets/service-dentistry.jpg";
import sOpt from "@/assets/service-optometry.jpg";
import sPhy from "@/assets/service-physio.jpg";
import clinic from "@/assets/clinic-interior.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Klaria Health" },
      { name: "description", content: "Dentistry, Optometry, Physiotherapy, Pediatrics, Cardiology, Family Medicine — every specialty under one calm roof." },
      { property: "og:title", content: "Klaria Services" },
      { property: "og:description", content: "Every specialty, one calm roof." },
    ],
  }),
  component: Services,
});

const services = [
  { id: "dent", name: "Dentistry", icon: Smile, img: sDent, recovery: "Most procedures · same-day", body: "From routine cleanings to full smile restorations. We use low-vibration handpieces, sedation options, and pain-management protocols built for nervous patients." },
  { id: "opt", name: "Optometry", icon: Eye, img: sOpt, recovery: "Eye exam · 30 minutes", body: "Comprehensive vision exams, contact lens fitting, and dry-eye therapy. Same-day frames in our in-house designer eyewear studio." },
  { id: "phy", name: "Physiotherapy", icon: Activity, img: sPhy, recovery: "Average plan · 4–6 weeks", body: "Targeted rehab, sports physio, and chronic pain programs. Each plan includes weekly outcome measurements and at-home video routines." },
  { id: "ped", name: "Pediatrics", icon: Baby, img: clinic, recovery: "Visit · 20–40 min", body: "Gentle, child-first care from newborns to teens. A dedicated playful waiting nook keeps clinic visits something kids don't dread." },
  { id: "car", name: "Cardiology", icon: HeartPulse, img: clinic, recovery: "Screening · 1 hour", body: "Modern cardiac screening, ECG, stress tests, and follow-up plans, with the time to actually explain what your numbers mean." },
  { id: "fam", name: "Family Medicine", icon: Stethoscope, img: clinic, recovery: "Visit · 30 minutes", body: "Your medical home — one doctor who actually knows you, coordinating every other specialist on your behalf." },
];

function Services() {
  const [active, setActive] = useState(services[0].id);
  const current = services.find((s) => s.id === active)!;

  return (
    <PageShell>
      <section className="max-w-6xl mx-auto px-5 sm:px-8 pt-6 pb-16 sm:pb-24">
        <Reveal className="max-w-3xl space-y-5">
          <SectionEyebrow>Specialties</SectionEyebrow>
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tighter text-foreground text-balance leading-[0.95]">
            Every specialty,<br /> one calm roof.
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            Six in-house specialties working as one team. Browse, learn what to expect, and book — in under a minute.
          </p>
        </Reveal>
      </section>

      <section className="bg-surface/60 border-y border-border/60 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 flex lg:flex-col gap-2 overflow-x-auto no-scrollbar lg:overflow-visible">
            {services.map((s) => {
              const isActive = s.id === active;
              return (
                <motion.button
                  key={s.id}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => setActive(s.id)}
                  className={`shrink-0 lg:w-full text-left flex items-center gap-3 rounded-2xl px-4 py-4 border transition-all ${
                    isActive
                      ? "bg-card border-primary/30 shadow-glass"
                      : "border-transparent hover:bg-card/50 hover:border-border"
                  }`}
                >
                  <span className={`grid place-items-center w-10 h-10 rounded-xl ${isActive ? "bg-primary text-primary-foreground" : "bg-primary-soft text-primary"}`}>
                    <s.icon className="w-5 h-5" />
                  </span>
                  <span className="flex-1">
                    <span className={`block font-semibold ${isActive ? "text-foreground" : "text-foreground/80"}`}>{s.name}</span>
                    <span className="block text-xs text-muted-foreground">{s.recovery}</span>
                  </span>
                  <ArrowRight className={`w-4 h-4 transition-opacity ${isActive ? "opacity-100 text-primary" : "opacity-0"}`} />
                </motion.button>
              );
            })}
          </div>

          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-3xl bg-card border border-border overflow-hidden shadow-soft"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={current.img} alt={current.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-7 sm:p-10 space-y-6">
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft text-primary px-3 py-1 font-semibold">
                      <current.icon className="w-4 h-4" /> {current.name}
                    </span>
                    <span className="inline-flex items-center gap-2 text-muted-foreground">
                      <Clock3 className="w-4 h-4" /> {current.recovery}
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground text-balance">
                    {current.name} at Klaria
                  </h2>
                  <p className="text-lg text-muted-foreground">{current.body}</p>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
                    <Link to="/contact" className="inline-flex items-center gap-2 rounded-2xl bg-primary text-primary-foreground px-5 py-3 font-semibold shadow-glass">
                      Book this service <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <FAQ />
    </PageShell>
  );
}

const faqs = [
  { q: "What should I expect on my first visit?", a: "A 10-minute warm welcome with our care concierge, a full intake with your specialist, and clear next steps before you leave. Most first visits last 45–60 minutes." },
  { q: "Do you accept my insurance?", a: "We work with most major insurance providers including Aetna, Cigna, BlueShield, and United Health. We'll verify your coverage before any visit, free of charge." },
  { q: "What is your cancellation policy?", a: "Free cancellation up to 24 hours before your appointment. Last-minute cancellations are fine for emergencies — just let us know." },
  { q: "Can I book for my child?", a: "Absolutely. Our pediatrics team specializes in newborns through teens, and our space is designed to make kids feel at ease." },
  { q: "Do you offer telehealth consultations?", a: "Yes. Most follow-ups and many initial consultations can be done over secure video. Same booking flow, just choose 'Virtual'." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="max-w-4xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
      <Reveal className="text-center space-y-4 mb-12">
        <SectionEyebrow>Good to know</SectionEyebrow>
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground text-balance">Questions, answered.</h2>
      </Reveal>
      <div className="space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={i} delay={i * 0.04}>
              <div className={`rounded-2xl border transition-colors ${isOpen ? "bg-card border-primary/30 shadow-soft" : "bg-card/50 border-border"}`}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="text-lg font-semibold text-foreground">{f.q}</span>
                  <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className={`grid place-items-center w-9 h-9 rounded-full ${isOpen ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="c"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-muted-foreground leading-relaxed">{f.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

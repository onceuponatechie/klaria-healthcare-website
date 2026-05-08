import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ShieldCheck, Clock, Sparkles, Stethoscope, ArrowRight,
  Star, BadgeCheck, HeartPulse, Microscope, PlayCircle,
} from "lucide-react";
import { PageShell, Reveal, SectionEyebrow } from "@/components/site/PageShell";
import heroConsult from "@/assets/hero-consult.jpg";
import sDent from "@/assets/service-dentistry.jpg";
import sOpt from "@/assets/service-optometry.jpg";
import sPhy from "@/assets/service-physio.jpg";
import doc1 from "@/assets/doctor-1.jpg";
import doc2 from "@/assets/doctor-2.jpg";
import doc3 from "@/assets/doctor-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Klaria Health — Modern Care, Reimagined for You" },
      { name: "description", content: "A multi-specialty clinic blending warm human care with modern technology. Zero wait times. Expert specialists. Book online in minutes." },
      { property: "og:title", content: "Klaria Health — Modern Care, Reimagined" },
      { property: "og:description", content: "Warm, modern healthcare. Specialists, technology, and time you can trust." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <PageShell>
      <Hero />
      <TrustMarquee />
      <WhyUs />
      <ServicesHighlight />
      <Testimonials />
      <FinalCTA />
    </PageShell>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <section ref={ref} className="relative overflow-hidden">
      <div className="absolute inset-0 gradient-radial-sky pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-8 sm:pt-14 pb-16 sm:pb-24 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <motion.div style={{ y, opacity }} className="lg:col-span-6 space-y-7">
          <Reveal>
            <SectionEyebrow>Now welcoming new patients</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-balance text-[2.6rem] sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-foreground leading-[0.95]">
              Modern care, <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-primary to-[oklch(0.62_0.18_245)] bg-clip-text text-transparent">reimagined</span>
                <svg className="absolute -bottom-1 left-0 w-full h-3 text-primary/40" viewBox="0 0 200 12" preserveAspectRatio="none"><path d="M2 8 Q 50 1 100 6 T 198 5" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" /></svg>
              </span>{" "}
              for you.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              A multi-specialty clinic where world-class doctors, calm spaces, and intelligent technology come together — so you actually look forward to your appointment.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="flex flex-wrap items-center gap-3">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-2xl bg-primary text-primary-foreground px-6 py-3.5 font-semibold shadow-glass hover:bg-primary/90 transition-colors">
                Book Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <a href="#story" className="inline-flex items-center gap-2 rounded-2xl border border-foreground/15 bg-background/60 backdrop-blur px-6 py-3.5 font-semibold text-foreground hover:bg-background transition-colors">
                <PlayCircle className="w-5 h-5 text-primary" /> Watch Our Story
              </a>
            </motion.div>
          </Reveal>
          <Reveal delay={0.28} className="flex items-center gap-5 pt-4">
            <div className="flex -space-x-3">
              {[doc1, doc2, doc3].map((d, i) => (
                <img key={i} src={d} alt="" className="w-10 h-10 rounded-full ring-2 ring-background object-cover" loading="lazy" />
              ))}
            </div>
            <div className="text-sm">
              <div className="flex items-center gap-1 text-foreground font-semibold">
                <Star className="w-4 h-4 fill-[oklch(0.78_0.16_75)] text-[oklch(0.78_0.16_75)]" /> 4.9 / 5
              </div>
              <p className="text-muted-foreground text-xs">From 1,200+ verified reviews</p>
            </div>
          </Reveal>
        </motion.div>

        <Reveal delay={0.15} className="lg:col-span-6">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] sm:aspect-[5/6] rounded-3xl overflow-hidden shadow-float ring-1 ring-foreground/5"
            >
              <video autoPlay muted loop playsInline poster={heroConsult} className="absolute inset-0 w-full h-full object-cover">
                <source src="https://cdn.coverr.co/videos/coverr-doctor-and-patient-talking-3613/1080p.mp4" type="video/mp4" />
              </video>
              <img src={heroConsult} alt="Doctor with patient" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20, x: -10 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="absolute -bottom-5 -left-3 sm:-left-6 glass-strong rounded-2xl p-4 shadow-float flex items-center gap-3 max-w-[240px]"
            >
              <div className="grid place-items-center w-11 h-11 rounded-xl bg-primary/15 text-primary">
                <BadgeCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground leading-tight">Verified Professionals</p>
                <p className="text-xs text-muted-foreground">Board-certified · Insured</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.7 }}
              className="absolute -top-4 -right-3 sm:-right-6 glass-strong rounded-2xl px-4 py-3 shadow-float"
            >
              <div className="flex items-center gap-2">
                <span className="relative flex w-2.5 h-2.5">
                  <span className="absolute inset-0 rounded-full bg-[var(--coral)] animate-ping opacity-60" />
                  <span className="relative inline-flex rounded-full w-2.5 h-2.5 bg-[var(--coral)]" />
                </span>
                <p className="text-xs font-semibold text-foreground">Open today · 8:00 — 19:00</p>
              </div>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function TrustMarquee() {
  const items = ["MediCare+", "Cigna", "Aetna", "BlueShield", "United Health", "AMA Certified", "WHO Partner", "JCI Accredited"];
  const row = [...items, ...items];
  return (
    <section className="border-y border-border/60 bg-surface/50">
      <div className="overflow-hidden py-7">
        <div className="flex gap-14 marquee whitespace-nowrap">
          {row.map((t, i) => (
            <span key={i} className="text-base sm:text-lg font-display font-semibold tracking-tight text-muted-foreground/70">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { icon: Clock, title: "Zero wait times", body: "Book a slot, walk in, get seen. Our scheduling means your time is respected — every visit." },
    { icon: Stethoscope, title: "Expert specialists", body: "A handpicked team of board-certified specialists collaborating on your care plan." },
    { icon: Sparkles, title: "Modern technology", body: "From AI-assisted diagnostics to digital records — modern tools, gentler experiences." },
  ];
  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
      <Reveal className="max-w-2xl space-y-4">
        <SectionEyebrow>Why Klaria</SectionEyebrow>
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground text-balance">
          Care that finally feels modern.
        </h2>
        <p className="text-muted-foreground text-lg">
          We rebuilt the clinic from the ground up — every wait, every form, every conversation.
        </p>
      </Reveal>
      <div className="mt-12 grid md:grid-cols-3 gap-5">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -4 }}
              className="group h-full rounded-3xl bg-card border border-border p-7 shadow-soft hover:shadow-glass transition-shadow"
            >
              <motion.div
                whileHover={{ scale: 1.12, rotate: -4 }}
                transition={{ type: "spring", stiffness: 280 }}
                className="grid place-items-center w-14 h-14 rounded-2xl bg-primary-soft text-primary"
              >
                <it.icon className="w-7 h-7" />
              </motion.div>
              <h3 className="mt-6 text-2xl font-bold text-foreground">{it.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{it.body}</p>
              <div className="mt-6 h-px bg-gradient-to-r from-primary/30 to-transparent" />
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ServicesHighlight() {
  const items = [
    { img: sDent, eyebrow: "Dentistry", title: "Bright smiles, painless visits.", body: "Cosmetic, restorative, and preventive dentistry by specialists who actually explain things.", icon: HeartPulse },
    { img: sOpt, eyebrow: "Optometry", title: "Sharper vision, in one sitting.", body: "Comprehensive eye exams, contact lens fitting, and same-day designer frames.", icon: Microscope },
    { img: sPhy, eyebrow: "Physiotherapy", title: "Move better. Live better.", body: "Personalized rehab and sports physio with measurable recovery milestones.", icon: ShieldCheck },
  ];
  return (
    <section id="story" className="bg-surface/60 border-y border-border/60">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-28 space-y-20 sm:space-y-28">
        <Reveal className="max-w-2xl space-y-4">
          <SectionEyebrow>Specialties</SectionEyebrow>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground text-balance">
            One clinic. Every specialty.
          </h2>
        </Reveal>
        {items.map((it, i) => (
          <div key={it.title} className={`grid lg:grid-cols-12 gap-8 lg:gap-14 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <Reveal className="lg:col-span-6">
              <motion.div whileHover={{ scale: 1.01 }} className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-float ring-1 ring-foreground/5">
                <img src={it.img} alt={it.eyebrow} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
              </motion.div>
            </Reveal>
            <Reveal delay={0.08} className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 text-primary font-semibold">
                <it.icon className="w-5 h-5" /> <span className="text-sm uppercase tracking-widest">{it.eyebrow}</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight text-balance">{it.title}</h3>
              <p className="text-muted-foreground text-lg max-w-lg">{it.body}</p>
              <Link to="/services" className="inline-flex items-center gap-2 text-primary font-semibold group">
                Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    { name: "Amelia R.", role: "Patient · Optometry", quote: "I forgot what going to a clinic without anxiety felt like. Klaria changed that on the first visit.", img: doc1 },
    { name: "Marcus T.", role: "Patient · Physio", quote: "Six weeks of recovery in three. They actually measure outcomes — and they actually care.", img: doc2 },
    { name: "Priya S.", role: "Patient · Dentistry", quote: "Calm, beautiful, modern. My kids ask to come back. That's a first.", img: doc3 },
    { name: "Jordan K.", role: "Patient · Family Care", quote: "Same-day appointments, kind doctors, no surprise bills. This shouldn't be rare.", img: doc1 },
    { name: "Lin H.", role: "Patient · Optometry", quote: "The space feels like a hotel lobby. The care feels like a friend's recommendation.", img: doc2 },
  ];
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 mb-10 flex flex-wrap items-end justify-between gap-4">
        <Reveal className="max-w-xl space-y-4">
          <SectionEyebrow>Patient stories</SectionEyebrow>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground text-balance">
            Loved by the people we care for.
          </h2>
        </Reveal>
      </div>
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-5 px-5 sm:px-8 pb-6 max-w-[100vw]">
          {reviews.map((r, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -6 }}
                className="w-[300px] sm:w-[380px] shrink-0 rounded-3xl bg-card border border-border p-6 sm:p-7 shadow-soft"
              >
                <div className="flex gap-1 text-[oklch(0.78_0.16_75)] mb-4">
                  {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-foreground text-lg leading-relaxed">"{r.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <img src={r.img} alt={r.name} className="w-11 h-11 rounded-full object-cover" loading="lazy" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{r.name}</p>
                    <p className="text-xs text-muted-foreground">{r.role}</p>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="px-5 sm:px-8 pb-10">
      <div className="relative overflow-hidden max-w-6xl mx-auto rounded-[2rem] bg-gradient-to-br from-primary to-[oklch(0.55_0.18_240)] text-primary-foreground p-8 sm:p-14">
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-[oklch(0.74_0.12_185)]/30 blur-3xl" />
        <div className="relative grid lg:grid-cols-12 gap-10 items-center">
          <Reveal className="lg:col-span-6 space-y-5">
            <SectionEyebrow>Take the first step</SectionEyebrow>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-balance">
              Your healthier next chapter starts with a conversation.
            </h2>
            <p className="text-primary-foreground/85 text-lg max-w-md">
              Pick a time that suits you. We'll handle the rest — paperwork, reminders, follow-ups.
            </p>
            <ul className="grid gap-2 text-sm text-primary-foreground/90">
              <li className="flex gap-2 items-center"><BadgeCheck className="w-4 h-4" /> Same-day confirmation</li>
              <li className="flex gap-2 items-center"><BadgeCheck className="w-4 h-4" /> 24h free cancellation</li>
              <li className="flex gap-2 items-center"><BadgeCheck className="w-4 h-4" /> Most insurance accepted</li>
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6">
            <div className="rounded-2xl bg-background/95 text-foreground p-6 shadow-float">
              <p className="font-display font-semibold text-foreground/80 mb-3">Schedule online</p>
              <div className="grid sm:grid-cols-2 gap-3 mb-4">
                {["Mon, Jun 8", "Tue, Jun 9", "Wed, Jun 10", "Thu, Jun 11"].map((d) => (
                  <button key={d} className="rounded-xl border border-border px-4 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-colors text-left">
                    {d}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 mb-5">
                {["09:00", "10:30", "13:00", "14:30", "16:00", "17:30"].map((t, i) => (
                  <button key={t} className={`rounded-lg px-2 py-2 text-xs font-semibold transition-colors ${i === 1 ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground hover:bg-primary-soft"}`}>
                    {t}
                  </button>
                ))}
              </div>
              <Link to="/contact" className="block w-full rounded-xl bg-primary text-primary-foreground py-3 text-center font-semibold hover:bg-primary/90 transition-colors">
                Confirm appointment
              </Link>
              <p className="mt-3 text-xs text-muted-foreground text-center">Powered by Calendly · Free to book</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

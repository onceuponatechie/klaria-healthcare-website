import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ShieldCheck, Clock, Sparkles, Stethoscope, ArrowRight, ArrowUpRight,
  Star, BadgeCheck, HeartPulse, Microscope, PlayCircle,
  CalendarCheck, ChevronDown, Quote, TrendingUp, Heart, Users, Shield,
} from "lucide-react";
import { PageShell, Reveal, SectionEyebrow } from "@/components/site/PageShell";
import heroConsult from "@/assets/hero-consult.jpg";
import sDent from "@/assets/service-dentistry.jpg";
import sOpt from "@/assets/service-optometry.jpg";
import sPhy from "@/assets/service-physio.jpg";
import doc1 from "@/assets/doctor-1.jpg";
import doc2 from "@/assets/doctor-2.jpg";
import doc3 from "@/assets/doctor-3.jpg";
import doc4 from "@/assets/doctor-4.jpg";
import act1 from "@/assets/doc-action-1.jpg";
import act2 from "@/assets/doc-action-2.jpg";
import act3 from "@/assets/doc-action-3.jpg";
import act4 from "@/assets/doc-action-4.jpg";
import act5 from "@/assets/doc-action-5.jpg";
import whyCalm from "@/assets/why-calm.jpg";
import whyDoctor from "@/assets/why-doctor.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import blogHero from "@/assets/blog-hero.jpg";

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
      <ShowDontTell />
      <ServicesHighlight />
      <DoctorsMarquee />
      <Testimonials />
      <BlogGrid />
      <FAQ />
      <FinalCTA />
    </PageShell>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  const words = ["Modern", "care,", "reimagined", "for", "you."];

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-6 sm:pt-12 pb-24 sm:pb-24 grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <div className="lg:col-span-6 space-y-7 lg:pt-6">
          <Reveal>
            <SectionEyebrow>Now welcoming new patients</SectionEyebrow>
          </Reveal>

          <h1 className="text-balance text-[2.6rem] sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-foreground leading-[0.95]">
            {words.map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block mr-[0.25em]"
              >
                {w === "reimagined" ? (
                  <span className="relative inline-block text-primary">
                    {w}
                    <motion.svg
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.1, delay: 0.9, ease: "easeInOut" }}
                      className="absolute -bottom-1 left-0 w-full h-3 text-primary/50"
                      viewBox="0 0 200 12" preserveAspectRatio="none"
                    >
                      <motion.path d="M2 8 Q 50 1 100 6 T 198 5" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
                    </motion.svg>
                  </span>
                ) : w}
              </motion.span>
            ))}
          </h1>

          <Reveal delay={0.7}>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              A multi-specialty clinic where world-class doctors, calm spaces, and intelligent technology come together — so you actually look forward to your appointment.
            </p>
          </Reveal>

          <Reveal delay={0.8} className="flex flex-wrap items-center gap-3">
            <MagneticButton to="/contact" primary>Book Consultation</MagneticButton>
            <MagneticButton to="#story"><PlayCircle className="w-5 h-5 text-primary" /> Watch Our Story</MagneticButton>
          </Reveal>

          <Reveal delay={0.9}>
            <motion.div
              whileHover={{ y: -3 }}
              className="mt-6 rounded-3xl bg-card p-5 sm:p-6 shadow-soft flex items-center gap-5 max-w-md"
            >
              <div className="flex -space-x-3 shrink-0">
                {[doc1, doc2, doc3, doc4].map((d, i) => (
                  <motion.img
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + i * 0.1 }}
                    src={d} alt=""
                    className="w-11 h-11 rounded-full ring-2 ring-card object-cover"
                    loading="lazy"
                  />
                ))}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-1 text-foreground font-bold text-base">
                  4.9 <Star className="w-4 h-4 fill-primary text-primary" />
                  <span className="text-muted-foreground font-normal text-sm ml-1">/ 1,200+ reviews</span>
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">Trusted by 8,400+ patients across Brooklyn</p>
              </div>
            </motion.div>
          </Reveal>
        </div>

        {/* RIGHT: image stack */}
        <Reveal delay={0.2} className="lg:col-span-6 relative">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] sm:aspect-[5/6] rounded-[2rem] overflow-hidden shadow-float"
            >
              <img
                src={heroConsult} alt="Doctor with patient at Klaria Health"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>

            {/* Verified card — sits just above Next-available on mobile, bottom-left on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20, x: -10 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              whileHover={{ y: -4 }}
              className="absolute -bottom-6 left-2 sm:bottom-auto sm:-bottom-5 sm:-left-6 glass-strong rounded-2xl p-3 sm:p-4 shadow-float flex items-center gap-3 max-w-[200px] sm:max-w-[220px]"
            >
              <div className="grid place-items-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-primary/15 text-primary shrink-0">
                <BadgeCheck className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-semibold text-foreground leading-tight">Verified Specialists</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">Board-certified · Insured</p>
              </div>
            </motion.div>

            {/* Live availability pill — top-right always */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.7 }}
              whileHover={{ y: -4 }}
              className="absolute -top-3 right-2 sm:-top-4 sm:-right-6 glass-strong rounded-full px-3 sm:px-4 py-2 sm:py-3 shadow-float"
            >
              <div className="flex items-center gap-2">
                <span className="relative flex w-2.5 h-2.5">
                  <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-60" />
                  <span className="relative inline-flex rounded-full w-2.5 h-2.5 bg-emerald-500" />
                </span>
                <p className="text-[11px] sm:text-xs font-semibold text-foreground whitespace-nowrap">Open · 8AM — 7PM</p>
              </div>
            </motion.div>

            {/* Next available booking card — bottom on mobile too, but pushed below image, not overlapping verified */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              whileHover={{ y: -4, rotate: -1 }}
              className="absolute -bottom-12 right-2 sm:-bottom-8 sm:-right-8 glass-strong rounded-2xl p-3 sm:p-4 shadow-float w-[200px] sm:w-[220px]"
            >
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <CalendarCheck className="w-4 h-4 text-primary" />
                <p className="text-[11px] sm:text-xs font-semibold text-foreground">Next available</p>
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                {["09:00", "10:30", "14:00"].map((t, i) => (
                  <motion.div
                    key={t}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 + i * 0.1 }}
                    className={`text-center text-[10px] sm:text-[11px] font-bold py-1.5 rounded-md ${i === 1 ? "bg-primary text-primary-foreground" : "bg-foreground/5 text-foreground"}`}
                  >
                    {t}
                  </motion.div>
                ))}
              </div>
              <p className="text-[10px] text-muted-foreground mt-2">Today · Dr. Adeyemi</p>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- MAGNETIC BUTTON ---------- */
function MagneticButton({
  to, children, primary = false,
}: { to: string; children: React.ReactNode; primary?: boolean }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const r = ref.current!.getBoundingClientRect();
    setPos({ x: (e.clientX - r.left - r.width / 2) * 0.25, y: (e.clientY - r.top - r.height / 2) * 0.25 });
  };
  const Comp: any = to.startsWith("#") ? "a" : Link;
  const props = to.startsWith("#") ? { href: to } : { to };
  return (
    <motion.div
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 250, damping: 18 }}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
    >
      <Comp
        ref={ref as any}
        onMouseMove={onMove}
        {...props}
        className={`group relative inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 font-semibold transition-colors overflow-hidden ${
          primary
            ? "bg-foreground text-background hover:bg-primary"
            : "bg-card text-foreground hover:bg-foreground hover:text-background"
        } shadow-soft`}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        {primary && (
          <span className="relative z-10 grid place-items-center w-7 h-7 rounded-full bg-background/20 group-hover:bg-background/30 transition-colors">
            <ArrowUpRight className="w-3.5 h-3.5 magnetic-arrow" />
          </span>
        )}
      </Comp>
    </motion.div>
  );
}

/* ---------- UNDERLINED accent (matches "reimagined" in hero) ---------- */
function Underlined({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block text-primary">
      {children}
      <svg
        aria-hidden
        className="absolute -bottom-1 left-0 w-full h-3 text-primary/50"
        viewBox="0 0 200 12" preserveAspectRatio="none"
      >
        <path d="M2 8 Q 50 1 100 6 T 198 5" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
      </svg>
    </span>
  );
}

/* ---------- TRUST MARQUEE (upgraded) ---------- */
function TrustMarquee() {
  const items = [
    { name: "MediCare+", icon: Shield },
    { name: "Cigna", icon: BadgeCheck },
    { name: "Aetna", icon: Heart },
    { name: "BlueShield", icon: Shield },
    { name: "United Health", icon: BadgeCheck },
    { name: "AMA Certified", icon: ShieldCheck },
    { name: "WHO Partner", icon: Sparkles },
    { name: "JCI Accredited", icon: Star },
  ];
  const row = [...items, ...items];
  return (
    <section className="relative border-y border-border/60 bg-gradient-to-r from-surface/40 via-primary-soft/40 to-surface/40">
      <Reveal className="max-w-6xl mx-auto px-5 sm:px-8 pt-10 pb-4 flex items-center gap-3">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-border" />
        <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-muted-foreground font-semibold">
          Accredited & trusted by the world's leading networks
        </p>
        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-border" />
      </Reveal>
      <div className="overflow-hidden py-6 sm:py-8 mask-fade-x pause-on-hover">
        <div className="flex gap-10 sm:gap-14 ticker whitespace-nowrap">
          {row.map((t, i) => (
            <span key={i} className="inline-flex items-center gap-3 text-base sm:text-lg font-display font-semibold tracking-tight text-foreground/55 hover:text-primary transition-colors">
              <t.icon className="w-5 h-5 text-primary/70" />
              {t.name}
              <span className="w-1 h-1 rounded-full bg-foreground/20" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SHOW DON'T TELL — 3-card showcase (Why Klaria) ---------- */
function ShowDontTell() {
  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
      <Reveal className="max-w-3xl space-y-4 mb-12 sm:mb-16">
        <SectionEyebrow>Why Klaria</SectionEyebrow>
        <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tighter text-foreground text-balance leading-[0.95]">
          Care that finally <Underlined>feels</Underlined> modern.
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl">
          We rebuilt the clinic from the ground up — every wait, every form, every conversation.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-12 gap-4 sm:gap-5">
        {/* CARD 1 — calm space photo */}
        <Reveal className="md:col-span-4" y={40}>
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="group relative aspect-[4/5] md:h-full rounded-[1.75rem] overflow-hidden shadow-soft"
          >
            <motion.img
              src={whyCalm}
              alt="Calm modern clinic interior"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
            <motion.a
              whileHover={{ rotate: 45, scale: 1.1 }}
              href="/about"
              className="absolute top-4 right-4 grid place-items-center w-11 h-11 rounded-full bg-background text-foreground shadow-float"
            >
              <ArrowUpRight className="w-5 h-5" />
            </motion.a>
            <div className="absolute bottom-5 left-5 right-5 text-background space-y-1">
              <div className="flex gap-2 mb-2">
                <span className="rounded-full bg-background/20 backdrop-blur-md px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider">Calm</span>
                <span className="rounded-full bg-background/20 backdrop-blur-md px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider">Quiet</span>
              </div>
              <p className="text-2xl font-bold tracking-tight leading-tight">Spaces designed to lower your pulse.</p>
              <p className="text-sm text-background/80 max-w-[18rem]">Soft lighting, real plants, no fluorescent buzz. The room itself is medicine.</p>
            </div>
          </motion.div>
        </Reveal>

        {/* CARD 2 — bold blue stat showcase */}
        <Reveal className="md:col-span-5" delay={0.1} y={40}>
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="relative aspect-[4/5] md:h-full rounded-[1.75rem] overflow-hidden bg-gradient-to-br from-primary via-[oklch(0.6_0.18_235)] to-[oklch(0.45_0.2_245)] text-primary-foreground p-7 sm:p-9 shadow-float"
          >
            {/* Animated noise / orbs */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/30 blur-3xl"
            />
            <motion.div
              animate={{ scale: [1.1, 1, 1.1], opacity: [0.25, 0.45, 0.25] }}
              transition={{ duration: 7, repeat: Infinity }}
              className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white/20 blur-3xl"
            />

            <div className="relative h-full flex flex-col justify-between">
              <div className="flex items-start justify-between gap-3">
                <div className="grid place-items-center w-11 h-11 rounded-2xl bg-background/20 backdrop-blur-md">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div className="flex gap-2">
                  <span className="rounded-full bg-background/15 backdrop-blur-md px-3 py-1.5 text-xs font-semibold">This Year</span>
                  <button className="grid place-items-center w-8 h-8 rounded-full bg-background/15 backdrop-blur-md text-base font-bold leading-none">···</button>
                </div>
              </div>

              <div className="space-y-4">
                <AnimatedStat value={94} suffix="%" />
                <p className="font-display font-bold text-xl">Patients leave smiling</p>
                <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-xs">
                  Measured monthly. We share the number internally — and we obsess over moving it up.
                </p>

                {/* Mini pagination dots like the inspiration */}
                <div className="flex items-center justify-between pt-4">
                  <button className="grid place-items-center w-9 h-9 rounded-full bg-background/15 backdrop-blur-md hover:bg-background/25 transition">
                    <ChevronDown className="w-4 h-4 -rotate-90" />
                  </button>
                  <div className="flex items-center gap-1.5 flex-1 mx-3">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <span key={i} className={`h-1 rounded-full transition-all ${i === 1 ? "flex-[2] bg-background" : "flex-1 bg-background/30"}`} />
                    ))}
                  </div>
                  <button className="grid place-items-center w-9 h-9 rounded-full bg-background/15 backdrop-blur-md hover:bg-background/25 transition">
                    <ChevronDown className="w-4 h-4 rotate-[270deg]" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </Reveal>

        {/* CARD 3 — Expert care with portrait */}
        <Reveal className="md:col-span-3" delay={0.2} y={40}>
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="relative aspect-[4/5] md:h-full rounded-[1.75rem] overflow-hidden bg-card shadow-soft p-6 flex flex-col"
          >
            <motion.a
              whileHover={{ rotate: 45, scale: 1.1 }}
              href="/about"
              className="absolute top-4 right-4 grid place-items-center w-10 h-10 rounded-full bg-foreground text-background shadow-soft z-10"
            >
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>

            <h3 className="font-display text-2xl font-bold text-foreground tracking-tight leading-tight">
              Expert Care
            </h3>
            <p className="text-sm text-muted-foreground mt-1 max-w-[14rem]">
              A team of board-certified specialists collaborating on your care plan.
            </p>

            {/* Portrait floating on a soft brand wash */}
            <div className="relative mt-4 -mx-6 -mb-6 flex-1 rounded-b-[1.75rem] overflow-hidden bg-primary-soft">
              <motion.img
                src={whyDoctor}
                alt="Klaria specialist"
                loading="lazy"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[110%] object-cover object-top"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-foreground">
                <div>
                  <p className="text-2xl font-extrabold tracking-tight">12<span className="text-primary">+</span></p>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">Specialists</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-extrabold tracking-tight">50<span className="text-primary">+</span></p>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">Yrs combined</p>
                </div>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>

      {/* Quick value strip */}
      <div className="mt-5 grid sm:grid-cols-3 gap-4">
        {[
          { icon: Clock, t: "Zero wait times", b: "Book a slot, walk in, get seen." },
          { icon: Stethoscope, t: "One care team", b: "Specialists collaborating, not siloed." },
          { icon: Sparkles, t: "Modern technology", b: "Gentler tools. Better outcomes." },
        ].map((it, i) => (
          <Reveal key={it.t} delay={i * 0.08}>
            <motion.div whileHover={{ y: -3 }} className="rounded-2xl bg-card p-5 shadow-soft flex items-center gap-4">
              <span className="grid place-items-center w-11 h-11 rounded-xl bg-primary-soft text-primary shrink-0">
                <it.icon className="w-5 h-5" />
              </span>
              <div>
                <p className="font-bold text-foreground">{it.t}</p>
                <p className="text-sm text-muted-foreground">{it.b}</p>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function AnimatedStat({ value, suffix }: { value: number; suffix: string }) {
  const [n, setN] = useState(0);
  return (
    <motion.p
      onViewportEnter={() => {
        const dur = 1400; const start = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(eased * value);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }}
      onViewportLeave={() => setN(0)}
      viewport={{ amount: 0.4 }}
      className="font-display text-7xl sm:text-8xl font-extrabold tracking-tighter leading-none"
    >
      +{Math.round(n)}<span className="text-background/70">{suffix}</span>
    </motion.p>
  );
}

/* ---------- SERVICES HIGHLIGHT ---------- */
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
            <Reveal className="lg:col-span-6" y={40}>
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.5 }} className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-float">
                <motion.img
                  initial={{ scale: 1.15 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                  src={it.img} alt={it.eyebrow} loading="lazy" className="absolute inset-0 w-full h-full object-cover"
                />
              </motion.div>
            </Reveal>
            <Reveal delay={0.12} className="lg:col-span-6 space-y-5" y={i % 2 ? -30 : 30}>
              <div className="inline-flex items-center gap-2 text-primary font-semibold">
                <it.icon className="w-5 h-5" /> <span className="text-sm uppercase tracking-widest">{it.eyebrow}</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight text-balance">{it.title}</h3>
              <p className="text-muted-foreground text-lg max-w-lg">{it.body}</p>
              <Link to="/services" className="group inline-flex items-center gap-2 text-primary font-semibold">
                Learn more <ArrowRight className="w-4 h-4 magnetic-arrow" />
              </Link>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- DOCTORS MARQUEE (in-action closeups, auto-slider) ---------- */
function DoctorsMarquee() {
  const team = [
    { img: act1, name: "Dr. Amara Adeyemi", role: "Family Medicine", years: 12 },
    { img: act2, name: "Dr. Jordan Pierce", role: "Dentistry", years: 9 },
    { img: act3, name: "Dr. Lin Hayashi", role: "Optometry", years: 7 },
    { img: act4, name: "Dr. Marcus Bell", role: "Physiotherapy", years: 11 },
    { img: act5, name: "Dr. Priya Shah", role: "Pediatrics", years: 8 },
  ];
  const row = [...team, ...team];

  return (
    <section className="py-20 sm:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 mb-12 grid lg:grid-cols-12 gap-6 items-end">
        <Reveal className="lg:col-span-7 space-y-4">
          <SectionEyebrow>The people behind your care</SectionEyebrow>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tighter text-foreground text-balance leading-[0.95]">
            Specialists you'd recommend to your <Underlined>mother</Underlined>.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-5">
          <p className="text-muted-foreground text-lg">
            Meet the team in the middle of doing the thing they love most — taking care of people. Hover any portrait to slow the slider.
          </p>
        </Reveal>
      </div>

      {/* Auto sliding strip */}
      <div className="mask-fade-x pause-on-hover">
        <div className="flex gap-5 ticker-slow w-max">
          {row.map((d, i) => (
            <motion.article
              key={i}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="group relative w-[260px] sm:w-[320px] aspect-[4/5] rounded-[1.75rem] overflow-hidden shadow-soft shrink-0 bg-card"
            >
              <motion.img
                src={d.img}
                alt={d.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/15 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 rounded-full glass-strong px-2.5 py-1 text-[10px] font-semibold text-foreground uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> In session
                </span>
              </div>
              <div className="absolute top-4 right-4 grid place-items-center w-9 h-9 rounded-full bg-background/95 text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-4 h-4" />
              </div>
              <div className="absolute bottom-5 left-5 right-5 text-background">
                <p className="text-xs font-semibold tracking-widest uppercase text-background/80">{d.role}</p>
                <p className="mt-1 text-2xl font-extrabold tracking-tight leading-tight">{d.name}</p>
                <div className="mt-3 flex items-center gap-3 text-xs text-background/85">
                  <span className="inline-flex items-center gap-1"><Star className="w-3 h-3 fill-primary text-primary" /> 4.9</span>
                  <span className="w-1 h-1 rounded-full bg-background/40" />
                  <span>{d.years} yrs experience</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Reverse direction strip */}
      <div className="mask-fade-x mt-5 pause-on-hover">
        <div className="flex gap-5 ticker-reverse w-max">
          {[...row].reverse().map((d, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative w-[180px] sm:w-[220px] aspect-[5/3] rounded-2xl overflow-hidden shadow-soft shrink-0"
            >
              <img src={d.img} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
              <p className="absolute bottom-3 left-3 text-background text-sm font-semibold">{d.name.split(" ").slice(-1)[0]} · {d.role}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <Reveal className="max-w-6xl mx-auto px-5 sm:px-8 mt-10 flex justify-center">
        <Link to="/about" className="group inline-flex items-center gap-2 font-semibold text-foreground">
          Meet the full team <ArrowRight className="w-4 h-4 magnetic-arrow text-primary" />
        </Link>
      </Reveal>
    </section>
  );
}

/* ---------- TESTIMONIALS (premium feel) ---------- */
function Testimonials() {
  const reviews = [
    { name: "Amelia Roberts", role: "Optometry · 2 visits", quote: "I forgot what going to a clinic without anxiety felt like. Klaria changed that on the very first visit.", img: doc1, location: "Brooklyn, NY" },
    { name: "Marcus Tan", role: "Physiotherapy · 6 weeks", quote: "Six weeks of recovery in three. They actually measure outcomes — and they actually care.", img: doc2, location: "Queens, NY" },
    { name: "Priya Sharma", role: "Family Dentistry", quote: "Calm, beautiful, modern. My kids ask to come back. That's a first.", img: doc3, location: "Manhattan, NY" },
  ];
  const [active, setActive] = useState(0);
  const r = reviews[active];

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-background via-primary-soft/30 to-background">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <Reveal className="lg:col-span-5 space-y-5">
          <SectionEyebrow>Patient stories</SectionEyebrow>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tighter text-foreground text-balance leading-[0.95]">
            Loved by the people we <Underlined>care for</Underlined>.
          </h2>
          <div className="flex items-center gap-3 pt-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
            </div>
            <p className="text-foreground font-bold">4.9</p>
            <p className="text-muted-foreground text-sm">based on 1,200+ verified reviews</p>
          </div>

          {/* Avatar selector */}
          <div className="flex items-center gap-2 pt-4">
            {reviews.map((rev, i) => (
              <motion.button
                key={i}
                onClick={() => setActive(i)}
                whileHover={{ y: -3 }}
                className={`relative rounded-full overflow-hidden ring-2 transition-all ${active === i ? "ring-primary w-14 h-14" : "ring-transparent w-12 h-12 opacity-60 hover:opacity-100"}`}
              >
                <img src={rev.img} alt={rev.name} className="w-full h-full object-cover" loading="lazy" />
                {active === i && <Users className="hidden" />}
              </motion.button>
            ))}
            <div className="ml-3 flex gap-2">
              <button onClick={() => setActive((active - 1 + reviews.length) % reviews.length)} className="grid place-items-center w-10 h-10 rounded-full bg-card shadow-soft text-foreground hover:bg-foreground hover:text-background transition">
                <ChevronDown className="w-4 h-4 rotate-90" />
              </button>
              <button onClick={() => setActive((active + 1) % reviews.length)} className="grid place-items-center w-10 h-10 rounded-full bg-card shadow-soft text-foreground hover:bg-foreground hover:text-background transition">
                <ChevronDown className="w-4 h-4 -rotate-90" />
              </button>
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-7 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-[2rem] bg-card p-8 sm:p-12 shadow-float overflow-hidden"
            >
              <Quote className="absolute top-8 right-8 w-20 h-20 text-primary/10" />
              <div className="relative">
                <p className="text-2xl sm:text-3xl font-display font-semibold text-foreground leading-snug tracking-tight text-balance">
                  "{r.quote}"
                </p>
                <div className="mt-8 flex items-center justify-between gap-4 border-t border-border pt-6">
                  <div className="flex items-center gap-4">
                    <img src={r.img} alt={r.name} className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20" loading="lazy" />
                    <div>
                      <p className="font-bold text-foreground text-base">{r.name}</p>
                      <p className="text-sm text-muted-foreground">{r.role} · {r.location}</p>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-1 text-primary">
                    {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Floating stat chip */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            className="absolute -top-5 -left-3 sm:-left-5 glass-strong rounded-2xl px-4 py-3 shadow-float flex items-center gap-3"
          >
            <div className="grid place-items-center w-10 h-10 rounded-xl bg-primary text-primary-foreground">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Would recommend</p>
              <p className="font-bold text-foreground">98% of patients</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- BLOG GRID — 1 large + 3 small ---------- */
function BlogGrid() {
  const featured = {
    slug: "modern-clinics", img: blogHero, cat: "Inside Klaria", date: "May 2, 2026", read: "5 min",
    title: "Why we built a clinic that feels like a hotel lobby.",
    excerpt: "Calm spaces aren't a luxury — they're medicine. The science behind designing healthcare for the nervous system.",
  };
  const small = [
    { slug: "morning-routine", img: blog1, cat: "Wellness", date: "Apr 18, 2026", read: "4 min", title: "The 5-minute morning routine our doctors actually do." },
    { slug: "painless-dentistry", img: blog2, cat: "Dentistry", date: "Apr 9, 2026", read: "6 min", title: "What painless dentistry really means in 2026." },
    { slug: "screen-fatigue", img: blog3, cat: "Vision", date: "Apr 2, 2026", read: "5 min", title: "Screen fatigue is real — here's what helps." },
  ];

  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
      <Reveal className="flex flex-wrap items-end justify-between gap-6 mb-10 sm:mb-14">
        <div className="max-w-xl space-y-4">
          <SectionEyebrow>From the journal</SectionEyebrow>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tighter text-foreground text-balance leading-[0.95]">
            Stories worth slowing down for.
          </h2>
        </div>
        <Link to="/blog" className="group inline-flex items-center gap-2 rounded-full bg-card px-5 py-2.5 text-sm font-semibold text-foreground shadow-soft hover:bg-foreground hover:text-background transition-colors">
          View all <ArrowRight className="w-4 h-4 magnetic-arrow" />
        </Link>
      </Reveal>

      {/* Featured wide card */}
      <Reveal y={40}>
        <Link to="/blog">
          <motion.article
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="group relative overflow-hidden rounded-[2rem] aspect-[16/9] sm:aspect-[21/9] shadow-float"
          >
            <motion.img
              src={featured.img} alt={featured.title} loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/30 to-transparent" />

            <span className="absolute top-5 sm:top-7 left-5 sm:left-7 inline-flex items-center gap-2 rounded-full glass-strong px-3 py-1.5 text-xs font-semibold text-foreground">
              Featured · {featured.cat}
            </span>

            <motion.div
              whileHover={{ rotate: 45 }}
              className="absolute top-5 sm:top-7 right-5 sm:right-7 grid place-items-center w-12 h-12 rounded-full bg-background text-foreground shadow-float"
            >
              <ArrowUpRight className="w-5 h-5" />
            </motion.div>

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 text-background">
              <div className="flex items-center gap-3 text-xs text-background/80 mb-3 font-semibold">
                <span>{featured.date}</span>
                <span className="w-1 h-1 rounded-full bg-background/50" />
                <span>{featured.read} read</span>
              </div>
              <h3 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-balance max-w-3xl leading-[1.05]">
                {featured.title}
              </h3>
              <p className="mt-3 text-background/85 max-w-xl text-base sm:text-lg hidden sm:block">{featured.excerpt}</p>
            </div>
          </motion.article>
        </Link>
      </Reveal>

      {/* 3 smaller cards */}
      <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {small.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.08} y={30}>
            <Link to="/blog">
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 250 }}
                className="group h-full rounded-[1.5rem] overflow-hidden bg-card shadow-soft hover:shadow-float transition-shadow flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <motion.img
                    src={p.img} alt={p.title} loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full glass-strong px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-foreground">
                    {p.cat}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground font-semibold">
                    <span>{p.date}</span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                    <span>{p.read} read</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-foreground leading-tight tracking-tight text-balance group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Read article <ArrowRight className="w-4 h-4 magnetic-arrow" />
                  </span>
                </div>
              </motion.article>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const faqs = [
    { q: "What should I expect on my first visit?", a: "A 10-minute warm welcome with our care concierge, a full intake with your specialist, and clear next steps before you leave. Most first visits last 45–60 minutes." },
    { q: "Do you accept my insurance?", a: "We work with most major insurance providers including Aetna, Cigna, BlueShield, and United Health. We'll verify your coverage before any visit, free of charge." },
    { q: "What is your cancellation policy?", a: "Free cancellation up to 24 hours before your appointment. Last-minute cancellations are fine for emergencies — just let us know." },
    { q: "Can I book for my child?", a: "Absolutely. Our pediatrics team specializes in newborns through teens, and our space is designed to make kids feel at ease." },
    { q: "Do you offer telehealth consultations?", a: "Yes. Most follow-ups and many initial consultations can be done over secure video. Same booking flow, just choose 'Virtual'." },
  ];
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-surface/40 border-y border-border/60 py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-10">
        <Reveal className="lg:col-span-5 space-y-5">
          <SectionEyebrow>FAQ</SectionEyebrow>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground text-balance">
            Questions, gently answered.
          </h2>
          <p className="text-muted-foreground text-lg">
            Can't find what you're looking for? Our care team is one tap away on WhatsApp.
          </p>
        </Reveal>
        <div className="lg:col-span-7 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 0.05}>
                <motion.div
                  whileHover={{ x: 4 }}
                  className={`rounded-2xl transition-colors ${isOpen ? "bg-card shadow-soft" : "bg-card/60 hover:bg-card"}`}
                >
                  <button onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-center justify-between gap-4 p-6 text-left">
                    <span className="text-lg font-semibold text-foreground">{f.q}</span>
                    <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className={`grid place-items-center w-9 h-9 rounded-full shrink-0 ${isOpen ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"}`}>
                      <ChevronDown className="w-4 h-4" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
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
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- FINAL CTA ---------- */
function FinalCTA() {
  return (
    <section className="px-5 sm:px-8 py-16">
      <div className="relative overflow-hidden max-w-6xl mx-auto rounded-[2rem] bg-gradient-to-br from-primary to-[oklch(0.55_0.18_240)] text-primary-foreground p-8 sm:p-14">
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-white/8 blur-3xl" />
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
                {["Mon, Jun 8", "Tue, Jun 9", "Wed, Jun 10", "Thu, Jun 11"].map((d, i) => (
                  <motion.button
                    key={d}
                    whileHover={{ y: -2, borderColor: "var(--primary)" }}
                    className={`rounded-xl border border-border px-4 py-3 text-sm font-semibold text-left transition-colors ${i === 1 ? "border-primary text-primary" : "text-foreground"}`}
                  >
                    {d}
                  </motion.button>
                ))}
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 mb-5">
                {["09:00", "10:30", "13:00", "14:30", "16:00", "17:30"].map((t, i) => (
                  <motion.button
                    key={t}
                    whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}
                    className={`rounded-lg px-2 py-2 text-xs font-semibold transition-colors ${i === 1 ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground hover:bg-primary-soft"}`}
                  >
                    {t}
                  </motion.button>
                ))}
              </div>
              <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                <Link to="/contact" className="block w-full rounded-xl bg-primary text-primary-foreground py-3 text-center font-semibold hover:bg-primary/90 transition-colors">
                  Confirm appointment
                </Link>
              </motion.div>
              <p className="mt-3 text-xs text-muted-foreground text-center">Powered by Calendly · Free to book</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

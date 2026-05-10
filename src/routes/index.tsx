import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ShieldCheck, Clock, Sparkles, Stethoscope, ArrowRight, ArrowUpRight,
  Star, BadgeCheck, HeartPulse, Microscope, PlayCircle, Activity,
  CalendarCheck, ChevronDown, Quote, Download, CalendarDays, Video, Search,
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
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import careScheduling from "@/assets/care-scheduling.jpg";
import careTelehealth from "@/assets/care-telehealth.jpg";
import careCharting from "@/assets/care-charting.jpg";
import action1 from "@/assets/action-1.jpg";
import action2 from "@/assets/action-2.jpg";
import action3 from "@/assets/action-3.jpg";
import action4 from "@/assets/action-4.jpg";

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
      <LiveStats />
      <CareModern />
      <ServicesHighlight />
      <TeamSlider />
      <Testimonials />
      <BlogGrid />
      <FAQ />
      <FinalCTA />
    </PageShell>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  const words = ["Modern", "care,", "reimagined", "for", "you."];

  return (
    <section ref={ref} className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-6 sm:pt-12 pb-20 sm:pb-24 grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <motion.div style={{ y }} className="lg:col-span-6 space-y-7 lg:pt-6">
          <Reveal once><SectionEyebrow>Now welcoming new patients</SectionEyebrow></Reveal>

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

          <Reveal delay={0.7} once>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              A multi-specialty clinic where world-class doctors, calm spaces, and intelligent technology come together — so you actually look forward to your appointment.
            </p>
          </Reveal>

          <Reveal delay={0.8} once className="flex flex-wrap items-center gap-3">
            <MagneticButton to="/contact" primary>Book Consultation</MagneticButton>
            <MagneticButton to="#story"><PlayCircle className="w-5 h-5 text-primary" /> Watch Our Story</MagneticButton>
          </Reveal>

          <Reveal delay={0.9} once>
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
        </motion.div>

        {/* RIGHT: image stack — mobile-safe spacing for floating cards */}
        <Reveal delay={0.2} once className="lg:col-span-6 relative mt-4 lg:mt-0 pb-16 sm:pb-12">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] sm:aspect-[5/6] rounded-[2rem] overflow-hidden shadow-float"
            >
              <motion.img
                style={{ scale: imgScale }}
                src={heroConsult} alt="Doctor with patient at Klaria Health"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>

            {/* Verified — bottom-LEFT (lifted on mobile so it doesn't touch Next available) */}
            <motion.div
              initial={{ opacity: 0, y: 20, x: -10 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              whileHover={{ y: -4 }}
              className="absolute bottom-16 left-2 sm:-bottom-5 sm:-left-6 glass-strong rounded-2xl p-3 sm:p-4 shadow-float flex items-center gap-3 max-w-[220px] sm:max-w-[240px]"
            >
              <div className="grid place-items-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-primary/15 text-primary">
                <BadgeCheck className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-semibold text-foreground leading-tight">Verified Specialists</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">Board-certified · Insured</p>
              </div>
            </motion.div>

            {/* Live availability — top right */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.7 }}
              whileHover={{ y: -4 }}
              className="absolute -top-3 right-2 sm:-top-4 sm:-right-6 glass-strong rounded-2xl px-3 py-2 sm:px-4 sm:py-3 shadow-float"
            >
              <div className="flex items-center gap-2">
                <span className="relative flex w-2.5 h-2.5">
                  <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-60" />
                  <span className="relative inline-flex rounded-full w-2.5 h-2.5 bg-emerald-500" />
                </span>
                <p className="text-[11px] sm:text-xs font-semibold text-foreground">Open today · 8:00 — 19:00</p>
              </div>
            </motion.div>

            {/* Next available — bottom RIGHT (separated on mobile) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              whileHover={{ y: -4, rotate: -1 }}
              className="absolute -bottom-6 right-2 sm:-bottom-8 sm:-right-8 glass-strong rounded-2xl p-3 sm:p-4 shadow-float w-[180px] sm:w-[220px]"
            >
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <CalendarCheck className="w-4 h-4 text-primary" />
                <p className="text-xs font-semibold text-foreground">Next available</p>
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
      whileTap={{ scale: 0.96 }}
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

/* ---------- TRUST MARQUEE (premium) ---------- */
function TrustMarquee() {
  const items = [
    { name: "MediCare+", icon: HeartPulse },
    { name: "Cigna", icon: ShieldCheck },
    { name: "Aetna", icon: BadgeCheck },
    { name: "BlueShield", icon: ShieldCheck },
    { name: "United Health", icon: HeartPulse },
    { name: "AMA Certified", icon: BadgeCheck },
    { name: "WHO Partner", icon: Activity },
    { name: "JCI Accredited", icon: Sparkles },
  ];
  const row = [...items, ...items];
  return (
    <section className="relative border-y border-border/60 bg-gradient-to-b from-surface/40 via-background to-surface/40">
      <Reveal once className="max-w-6xl mx-auto px-5 sm:px-8 pt-10 pb-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground/80">
          Trusted by 8,400+ patients · accredited by leading networks
        </p>
      </Reveal>
      <div className="relative overflow-hidden py-8">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex gap-12 sm:gap-16 ticker whitespace-nowrap">
          {row.map((t, i) => (
            <div key={i} className="flex items-center gap-3 shrink-0">
              <span className="grid place-items-center w-9 h-9 rounded-xl bg-primary/10 text-primary">
                <t.icon className="w-4 h-4" />
              </span>
              <span className="text-base sm:text-lg font-display font-semibold tracking-tight text-foreground/70">
                {t.name}
              </span>
              <span className="w-1 h-1 rounded-full bg-foreground/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- LIVE STATS ---------- */
function LiveStats() {
  const stats = [
    { v: 8400, suffix: "+", label: "Patients cared for" },
    { v: 24, suffix: "", label: "In-house specialists" },
    { v: 4.9, suffix: "/5", label: "Average rating", float: true },
    { v: 12, suffix: "min", label: "Average wait time" },
  ];
  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-8 py-14">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <Reveal key={i} delay={i * 0.06}><Counter {...s} /></Reveal>
        ))}
      </div>
    </section>
  );
}

function Counter({ v, suffix, label, float }: { v: number; suffix: string; label: string; float?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [n, setN] = useState(0);
  return (
    <motion.div
      ref={ref}
      onViewportEnter={() => {
        const dur = 1400; const start = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(eased * v);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="rounded-3xl bg-card p-6 shadow-soft"
    >
      <p className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-foreground">
        {float ? n.toFixed(1) : Math.round(n).toLocaleString()}<span className="text-primary">{suffix}</span>
      </p>
      <p className="text-sm text-muted-foreground mt-2">{label}</p>
    </motion.div>
  );
}

/* ---------- CARE THAT FEELS MODERN (glassmorphic UI cards) ---------- */
function CareModern() {
  const items = [
    {
      eyebrow: "Smart Scheduling",
      icon: CalendarDays,
      title: "Verify insurance faster, reduce claim denials.",
      img: careScheduling,
      cta: "Download brief",
    },
    {
      eyebrow: "Secure Telehealth",
      icon: Video,
      title: "Send prescriptions directly to pharmacies, reduce errors.",
      img: careTelehealth,
      cta: "See it in action",
    },
    {
      eyebrow: "AI-Powered Charting",
      icon: Search,
      title: "Automate claim generation, smart coding suggestions.",
      img: careCharting,
      cta: "Explore the tool",
    },
  ];
  return (
    <section className="relative max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
      <Reveal className="max-w-2xl space-y-4 mb-12 sm:mb-16">
        <SectionEyebrow>Why Klaria</SectionEyebrow>
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground text-balance">
          Care that finally <span className="italic text-primary">feels modern.</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Intuitive tools that scale with you — from booking to follow-ups, every touchpoint is engineered to feel light, fast, and human.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {items.map((it, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
              className="group relative h-full rounded-[2rem] overflow-hidden bg-gradient-to-b from-sky-50 via-sky-100/60 to-white shadow-soft hover:shadow-float transition-shadow"
            >
              {/* Header text */}
              <div className="px-7 pt-8 pb-6">
                <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium mb-4">
                  <it.icon className="w-4 h-4 text-primary" />
                  {it.eyebrow}
                </div>
                <h3 className="text-2xl sm:text-[1.6rem] font-bold tracking-tight text-foreground leading-tight text-balance min-h-[5rem]">
                  {it.title}
                </h3>
              </div>

              {/* UI mockup card */}
              <div className="relative px-5 pb-5">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ margin: "-60px" }}
                  transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="relative rounded-2xl overflow-hidden bg-white shadow-[0_20px_60px_-25px_rgba(14,165,233,0.45)] ring-1 ring-sky-100"
                >
                  <motion.img
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.7 }}
                    src={it.img}
                    alt={it.eyebrow}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover object-top"
                  />
                  {/* Floating CTA chip */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-60px" }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-full bg-foreground text-background text-xs font-semibold px-3 py-2 shadow-float"
                  >
                    <Download className="w-3.5 h-3.5" /> {it.cta}
                  </motion.div>
                </motion.div>
              </div>

              {/* glow */}
              <div className="absolute -bottom-24 -right-20 w-64 h-64 rounded-full bg-primary/15 blur-3xl group-hover:bg-primary/25 transition-colors duration-500" />
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
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
                  viewport={{ margin: "-60px" }}
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

/* ---------- TEAM SLIDER (Vitalix-inspired auto-slider) ---------- */
function TeamSlider() {
  const slides = [
    {
      img: action4,
      tag: "Health Summary",
      sub: "All Metrics Stable",
      stats: [{ k: "Heart", v: "72 bpm" }, { k: "Oxygen", v: "98%" }],
      cta: "View Reports",
      doctor: "Dr. Amara Adeyemi · Family Medicine",
    },
    {
      img: action1,
      tag: "Lab Diagnostics",
      sub: "Results in under 24h",
      stats: [{ k: "Samples", v: "Processed" }, { k: "Accuracy", v: "99.2%" }],
      cta: "See Lab Tests",
      doctor: "Dr. Lin Hayashi · Pathology",
    },
    {
      img: action2,
      tag: "Surgical Precision",
      sub: "Modern equipment",
      stats: [{ k: "Procedures", v: "Daily" }, { k: "Recovery", v: "Faster" }],
      cta: "Learn More",
      doctor: "Dr. Marcus Bell · Surgery",
    },
    {
      img: action3,
      tag: "Research Lab",
      sub: "End-to-end care",
      stats: [{ k: "Studies", v: "Active" }, { k: "Privacy", v: "Protected" }],
      cta: "Start Now",
      doctor: "Dr. Jordan Pierce · Research",
    },
  ];

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % slides.length), 4200);
    return () => clearInterval(id);
  }, [paused, slides.length]);

  // visible window of 4 cards centered on active
  const order = Array.from({ length: slides.length }, (_, i) => (active + i) % slides.length);

  return (
    <section
      className="relative max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="grid lg:grid-cols-12 gap-8 mb-10 sm:mb-14 items-end">
        <Reveal className="lg:col-span-7 space-y-4">
          <SectionEyebrow>The people behind your care</SectionEyebrow>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground text-balance">
            Specialists in motion. <span className="italic text-primary">Care in action.</span>
          </h2>
        </Reveal>
        <Reveal className="lg:col-span-5 lg:text-right" delay={0.1}>
          <p className="text-muted-foreground">Auto-playing reel of our team at work — from labs to consultation rooms.</p>
        </Reveal>
      </div>

      {/* Slider rail */}
      <div className="relative">
        <div className="flex gap-4 sm:gap-5 overflow-hidden">
          {order.map((slideIdx, position) => {
            const s = slides[slideIdx];
            return (
              <motion.div
                key={slideIdx}
                layout
                transition={{ type: "spring", stiffness: 180, damping: 22 }}
                className={`relative shrink-0 rounded-[2rem] overflow-hidden shadow-float ${
                  position === 0
                    ? "w-[60%] sm:w-[44%] aspect-[3/4]"
                    : "w-[40%] sm:w-[20%] aspect-[3/4] hidden sm:block"
                }`}
                onClick={() => setActive(slideIdx)}
                style={{ cursor: position === 0 ? "default" : "pointer" }}
              >
                <motion.img
                  src={s.img}
                  alt={s.doctor}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: position === 0 ? 1 : 1.05 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

                {/* Glassmorphic info card — only on the lead */}
                {position === 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="absolute left-4 right-4 sm:left-6 sm:right-6 bottom-4 sm:bottom-6 rounded-2xl glass-strong p-4 sm:p-5 text-foreground"
                  >
                    <div className="grid place-items-center w-9 h-9 rounded-xl bg-primary/15 text-primary mb-3">
                      <Activity className="w-4 h-4" />
                    </div>
                    <p className="text-lg sm:text-xl font-bold tracking-tight">{s.tag}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{s.sub}</p>
                    <div className="my-3 sm:my-4 space-y-1.5 text-sm">
                      {s.stats.map((st) => (
                        <div key={st.k} className="flex items-center justify-between">
                          <span className="text-muted-foreground">{st.k}:</span>
                          <span className="font-semibold text-foreground">{st.v}</span>
                        </div>
                      ))}
                    </div>
                    <button className="w-full rounded-full bg-foreground text-background text-sm font-semibold py-2.5 hover:bg-primary transition-colors">
                      {s.cta}
                    </button>
                  </motion.div>
                )}

                {/* Small label on inactive cards */}
                {position !== 0 && (
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-semibold drop-shadow">{s.tag}</p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Progress dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="group h-1.5 transition-all"
              aria-label={`Slide ${i + 1}`}
            >
              <span
                className={`block h-1.5 rounded-full transition-all ${
                  i === active ? "bg-primary w-10" : "bg-foreground/15 w-6 group-hover:bg-foreground/30"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
function Testimonials() {
  const reviews = [
    { name: "Amelia R.", role: "Patient · Optometry", quote: "I forgot what going to a clinic without anxiety felt like. Klaria changed that on the first visit.", img: doc1 },
    { name: "Marcus T.", role: "Patient · Physio", quote: "Six weeks of recovery in three. They actually measure outcomes — and they actually care.", img: doc2 },
    { name: "Priya S.", role: "Patient · Dentistry", quote: "Calm, beautiful, modern. My kids ask to come back. That's a first.", img: doc3 },
    { name: "Jordan K.", role: "Patient · Family Care", quote: "Same-day appointments, kind doctors, no surprise bills. This shouldn't be rare.", img: doc1 },
    { name: "Lin H.", role: "Patient · Optometry", quote: "The space feels like a hotel lobby. The care feels like a friend's recommendation.", img: doc2 },
  ];
  return (
    <section className="py-20 sm:py-28 bg-surface/40">
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
            <Reveal key={i} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -8, rotate: -0.5 }}
                className="w-[280px] sm:w-[380px] shrink-0 rounded-3xl bg-card p-6 sm:p-7 shadow-soft relative"
              >
                <Quote className="absolute top-5 right-5 w-8 h-8 text-primary/15" />
                <div className="flex gap-1 text-primary mb-4">
                  {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-foreground text-base sm:text-lg leading-relaxed">"{r.quote}"</p>
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

/* ---------- BLOG GRID (1 large + 3 small) ---------- */
function BlogGrid() {
  const featured = { img: blog1, tag: "Wellness", date: "May 2, 2026", title: "The 5-minute morning routine our doctors actually do.", read: "4 min", excerpt: "Small, intentional habits — built into a fast, repeatable routine that even the busiest specialists swear by." };
  const posts = [
    { img: blog2, tag: "Dentistry", date: "Apr 18, 2026", title: "What painless dentistry really means in 2026.", read: "6 min" },
    { img: blog3, tag: "Vision", date: "Apr 4, 2026", title: "Screen fatigue is real. Here's what helps.", read: "5 min" },
    { img: blog1, tag: "Family Care", date: "Mar 22, 2026", title: "Choosing a primary care doctor you actually like.", read: "5 min" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
      <Reveal className="flex flex-wrap items-end justify-between gap-4 mb-12">
        <div className="max-w-2xl space-y-4">
          <SectionEyebrow>From the journal</SectionEyebrow>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground text-balance">
            Stories worth slowing down for.
          </h2>
        </div>
        <Link to="/blog" className="group inline-flex items-center gap-2 font-semibold text-primary">
          View all <ArrowRight className="w-4 h-4 magnetic-arrow" />
        </Link>
      </Reveal>

      {/* Featured wide card */}
      <Reveal>
        <motion.article
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 200, damping: 22 }}
          className="group relative rounded-[2rem] overflow-hidden bg-card shadow-soft hover:shadow-float transition-shadow grid md:grid-cols-2 gap-0"
        >
          <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden">
            <motion.img
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              src={featured.img} alt={featured.title}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full glass-strong px-3 py-1 text-xs font-semibold text-foreground">
              {featured.tag}
            </div>
          </div>
          <div className="p-7 sm:p-10 flex flex-col justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">{featured.date} · {featured.read} read</p>
              <h3 className="mt-4 text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground text-balance leading-[1.05]">
                {featured.title}
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{featured.excerpt}</p>
            </div>
            <Link to="/blog" className="group/link inline-flex items-center gap-2 font-semibold text-primary self-start">
              Read article <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
            </Link>
          </div>
        </motion.article>
      </Reveal>

      {/* Three smaller cards */}
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((p, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <motion.article
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
              className="group h-full rounded-3xl overflow-hidden bg-card shadow-soft hover:shadow-float transition-shadow flex flex-col"
            >
              <div className="relative aspect-[5/3] overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  src={p.img} alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full glass-strong px-3 py-1 text-[11px] font-semibold text-foreground">
                  {p.tag}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1 gap-4">
                <p className="text-[11px] uppercase tracking-widest text-muted-foreground font-semibold">{p.date} · {p.read}</p>
                <h3 className="text-lg font-bold tracking-tight text-foreground text-balance leading-snug">
                  {p.title}
                </h3>
                <Link to="/blog" className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Read <ArrowRight className="w-4 h-4 magnetic-arrow" />
                </Link>
              </div>
            </motion.article>
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
          <Reveal className="lg:col-span-7 space-y-5">
            <SectionEyebrow>Take the first step</SectionEyebrow>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-balance">
              Your healthier chapter starts on a Tuesday.
            </h2>
            <p className="text-primary-foreground/85 text-lg max-w-xl">
              Book a 30-minute introductory consultation. No pressure, no upsells — just a conversation about you.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <MagneticButton to="/contact" primary>Book Consultation</MagneticButton>
              <MagneticButton to="/services">Explore Services</MagneticButton>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-5">
            <div className="rounded-3xl bg-background/15 backdrop-blur-md p-6 ring-1 ring-white/20">
              <p className="text-sm font-semibold text-primary-foreground/90 mb-4">This week's openings</p>
              <div className="space-y-2">
                {[
                  { d: "Tue · May 12", t: "9:00 AM" },
                  { d: "Wed · May 13", t: "2:30 PM" },
                  { d: "Fri · May 15", t: "11:00 AM" },
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ margin: "-60px" }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex items-center justify-between rounded-2xl bg-background/15 px-4 py-3"
                  >
                    <span className="font-semibold">{s.d}</span>
                    <span className="text-sm font-bold rounded-full bg-background text-foreground px-3 py-1">{s.t}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

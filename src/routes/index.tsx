import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  ShieldCheck, Clock, Sparkles, Stethoscope, ArrowRight, ArrowUpRight,
  Star, BadgeCheck, HeartPulse, Microscope, PlayCircle, Activity,
  CalendarCheck, ChevronDown, Quote,
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
      <WhyUs />
      <ServicesHighlight />
      <TeamConstellation />
      <Testimonials />
      <BlogStack />
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
      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-6 sm:pt-12 pb-16 sm:pb-24 grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <motion.div style={{ y }} className="lg:col-span-6 space-y-7 lg:pt-6">
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

          {/* Mini info card under hero copy (matches contact-page card style) */}
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
        </motion.div>

        {/* RIGHT: image stack */}
        <Reveal delay={0.2} className="lg:col-span-6 relative">
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

            {/* Floating verified card */}
            <motion.div
              initial={{ opacity: 0, y: 20, x: -10 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              whileHover={{ y: -4 }}
              className="absolute -bottom-5 -left-3 sm:-left-6 glass-strong rounded-2xl p-4 shadow-float flex items-center gap-3 max-w-[240px]"
            >
              <div className="grid place-items-center w-11 h-11 rounded-xl bg-primary/15 text-primary">
                <BadgeCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground leading-tight">Verified Specialists</p>
                <p className="text-xs text-muted-foreground">Board-certified · Insured</p>
              </div>
            </motion.div>

            {/* Live availability card */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.7 }}
              whileHover={{ y: -4 }}
              className="absolute -top-4 -right-3 sm:-right-6 glass-strong rounded-2xl px-4 py-3 shadow-float"
            >
              <div className="flex items-center gap-2">
                <span className="relative flex w-2.5 h-2.5">
                  <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-60" />
                  <span className="relative inline-flex rounded-full w-2.5 h-2.5 bg-emerald-500" />
                </span>
                <p className="text-xs font-semibold text-foreground">Open today · 8:00 — 19:00</p>
              </div>
            </motion.div>

            {/* Live booking card — bottom right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              whileHover={{ y: -4, rotate: -1 }}
              className="absolute -bottom-8 -right-2 sm:-right-8 glass-strong rounded-2xl p-4 shadow-float w-[220px]"
            >
              <div className="flex items-center gap-2 mb-3">
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
                    className={`text-center text-[11px] font-bold py-1.5 rounded-md ${i === 1 ? "bg-primary text-primary-foreground" : "bg-foreground/5 text-foreground"}`}
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

/* ---------- TRUST MARQUEE ---------- */
function TrustMarquee() {
  const items = ["MediCare+", "Cigna", "Aetna", "BlueShield", "United Health", "AMA Certified", "WHO Partner", "JCI Accredited"];
  const row = [...items, ...items];
  return (
    <section className="border-y border-border/60 bg-surface/50">
      <div className="overflow-hidden py-7">
        <div className="flex gap-14 ticker whitespace-nowrap">
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

/* ---------- LIVE STATS (counters) ---------- */
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
          <Reveal key={i} delay={i * 0.06}>
            <Counter {...s} />
          </Reveal>
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

/* ---------- WHY US ---------- */
function WhyUs() {
  const items = [
    { icon: Clock, title: "Zero wait times", body: "Book a slot, walk in, get seen. Our scheduling means your time is respected — every visit.", tone: "from-sky-500/10 to-sky-500/0" },
    { icon: Stethoscope, title: "Expert specialists", body: "A handpicked team of board-certified specialists collaborating on your care plan.", tone: "from-emerald-500/10 to-emerald-500/0" },
    { icon: Sparkles, title: "Modern technology", body: "From AI-assisted diagnostics to digital records — modern tools, gentler experiences.", tone: "from-amber-400/10 to-amber-400/0" },
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
          <Reveal key={it.title} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="group relative h-full rounded-3xl bg-card p-7 shadow-soft hover:shadow-float transition-shadow overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${it.tone} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-primary/5 blur-3xl group-hover:bg-primary/15 transition-colors duration-500" />

              <div className="relative">
                <motion.div
                  whileHover={{ rotate: -6, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 280 }}
                  className="grid place-items-center w-16 h-16 rounded-2xl bg-primary text-primary-foreground shadow-glass"
                >
                  <it.icon className="w-7 h-7" />
                </motion.div>
                <h3 className="mt-6 text-2xl font-bold text-foreground">{it.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{it.body}</p>

                <div className="mt-7 flex items-center gap-2">
                  <div className="h-px flex-1 bg-gradient-to-r from-foreground/15 to-transparent" />
                  <span className="text-3xl font-extrabold text-foreground/15 tabular-nums">0{i + 1}</span>
                </div>
              </div>
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
                  viewport={{ once: true }}
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

/* ---------- TEAM CONSTELLATION (creative people-behind-care section) ---------- */
function TeamConstellation() {
  const team = [
    { img: doc1, name: "Dr. Amara Adeyemi", role: "Family Medicine", years: 12, x: "8%", y: "12%", size: "lg", delay: 0 },
    { img: doc2, name: "Dr. Jordan Pierce", role: "Cardiology", years: 9, x: "62%", y: "4%", size: "md", delay: 0.1 },
    { img: doc3, name: "Dr. Lin Hayashi", role: "Optometry", years: 7, x: "78%", y: "44%", size: "lg", delay: 0.2 },
    { img: doc4, name: "Dr. Marcus Bell", role: "Physiotherapy", years: 11, x: "4%", y: "58%", size: "md", delay: 0.3 },
    { img: doc1, name: "Dr. Priya Shah", role: "Pediatrics", years: 8, x: "44%", y: "62%", size: "sm", delay: 0.4 },
  ];
  const [active, setActive] = useState(0);

  return (
    <section className="relative max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
      <div className="grid lg:grid-cols-12 gap-10 items-center">
        <Reveal className="lg:col-span-5 space-y-6">
          <SectionEyebrow>The people behind your care</SectionEyebrow>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground text-balance">
            A small team of <span className="italic text-primary">obsessively kind</span> specialists.
          </h2>
          <p className="text-muted-foreground text-lg">
            Hover any portrait — meet the person who could be looking after you next week.
          </p>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="rounded-3xl bg-card p-6 shadow-soft"
            >
              <p className="text-2xl font-bold text-foreground">{team[active].name}</p>
              <p className="text-primary font-semibold mt-1">{team[active].role}</p>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><Activity className="w-4 h-4 text-primary" /> {team[active].years} yrs experience</span>
                <span className="flex items-center gap-1"><Star className="w-4 h-4 fill-primary text-primary" /> 4.9 rating</span>
              </div>
            </motion.div>
          </AnimatePresence>
          <Link to="/about" className="group inline-flex items-center gap-2 font-semibold text-foreground">
            Meet the full team <ArrowRight className="w-4 h-4 magnetic-arrow text-primary" />
          </Link>
        </Reveal>

        {/* Constellation canvas */}
        <div className="lg:col-span-7 relative h-[460px] sm:h-[520px] dot-bg rounded-[2rem] bg-surface/40 overflow-hidden">
          {/* Connecting svg lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
            <motion.line
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
              transition={{ duration: 2 }}
              x1="15%" y1="20%" x2="68%" y2="12%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" className="text-primary/30"
            />
            <motion.line
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.3 }}
              x1="68%" y1="12%" x2="83%" y2="50%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" className="text-primary/30"
            />
            <motion.line
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.6 }}
              x1="83%" y1="50%" x2="50%" y2="68%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" className="text-primary/30"
            />
            <motion.line
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.9 }}
              x1="50%" y1="68%" x2="11%" y2="64%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" className="text-primary/30"
            />
            <motion.line
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
              transition={{ duration: 2, delay: 1.2 }}
              x1="11%" y1="64%" x2="15%" y2="20%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" className="text-primary/30"
            />
          </svg>

          {team.map((m, i) => {
            const sz = m.size === "lg" ? "w-28 h-28 sm:w-36 sm:h-36" : m.size === "md" ? "w-24 h-24 sm:w-28 sm:h-28" : "w-20 h-20 sm:w-24 sm:h-24";
            return (
              <motion.button
                key={i}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                style={{ left: m.x, top: m.y }}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: m.delay, duration: 4, repeat: Infinity, ease: "easeInOut" }}
                animate={{ y: [0, -8, 0] }}
                whileHover={{ scale: 1.08, zIndex: 20 }}
                className={`absolute ${sz} rounded-full overflow-hidden shadow-float ring-4 ${active === i ? "ring-primary" : "ring-background"} transition-all`}
              >
                <img src={m.img} alt={m.name} className="w-full h-full object-cover" loading="lazy" />
                {active === i && (
                  <motion.span
                    layoutId="team-dot"
                    className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-primary ring-2 ring-background"
                  />
                )}
              </motion.button>
            );
          })}

          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ delay: 1.4 }}
            className="absolute bottom-5 right-5 glass-strong rounded-full px-4 py-2 text-xs font-semibold text-foreground"
          >
            5 of 24 · hover to explore
          </motion.div>
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
                className="w-[300px] sm:w-[380px] shrink-0 rounded-3xl bg-card p-6 sm:p-7 shadow-soft relative"
              >
                <Quote className="absolute top-5 right-5 w-8 h-8 text-primary/15" />
                <div className="flex gap-1 text-primary mb-4">
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

/* ---------- BLOG STACK (scroll-triggered sticky stack) ---------- */
function BlogStack() {
  const posts = [
    { img: blog1, tag: "Wellness", date: "May 2, 2026", title: "The 5-minute morning routine our doctors actually do.", read: "4 min" },
    { img: blog2, tag: "Dentistry", date: "Apr 18, 2026", title: "What painless dentistry really means in 2026.", read: "6 min" },
    { img: blog3, tag: "Vision", date: "Apr 4, 2026", title: "Screen fatigue is real. Here's what helps.", read: "5 min" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
      <Reveal className="max-w-2xl space-y-4 mb-12">
        <SectionEyebrow>From the journal</SectionEyebrow>
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground text-balance">
          Stories worth slowing down for.
        </h2>
      </Reveal>

      <div className="relative">
        {posts.map((p, i) => (
          <BlogStackCard key={i} post={p} index={i} total={posts.length} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link to="/blog" className="group inline-flex items-center gap-2 font-semibold text-primary">
          Read every story <ArrowRight className="w-4 h-4 magnetic-arrow" />
        </Link>
      </div>
    </section>
  );
}

function BlogStackCard({ post, index, total }: { post: any; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.94]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.4, 1, 1, 0.5]);

  return (
    <div
      ref={ref}
      className="sticky"
      style={{ top: `${110 + index * 28}px`, marginBottom: index === total - 1 ? 0 : "60vh" }}
    >
      <motion.article
        style={{ scale, opacity }}
        className="rounded-[2rem] overflow-hidden bg-card shadow-float grid md:grid-cols-2 gap-0"
      >
        <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.7 }}
            src={post.img} alt={post.title}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full glass-strong px-3 py-1 text-xs font-semibold text-foreground">
            {post.tag}
          </div>
        </div>
        <div className="p-7 sm:p-10 flex flex-col justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">{post.date} · {post.read} read</p>
            <h3 className="mt-4 text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground text-balance leading-[1.05]">
              {post.title}
            </h3>
          </div>
          <Link to="/blog" className="group inline-flex items-center gap-2 font-semibold text-primary self-start">
            Read article <ArrowRight className="w-4 h-4 magnetic-arrow" />
          </Link>
        </div>
      </motion.article>
    </div>
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

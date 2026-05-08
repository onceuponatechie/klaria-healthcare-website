import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Linkedin, Sparkles, HeartHandshake, Eye, Leaf, Shield, Lightbulb } from "lucide-react";
import { PageShell, Reveal, SectionEyebrow } from "@/components/site/PageShell";
import clinic from "@/assets/clinic-interior.jpg";
import doc1 from "@/assets/doctor-1.jpg";
import doc2 from "@/assets/doctor-2.jpg";
import doc3 from "@/assets/doctor-3.jpg";
import doc4 from "@/assets/doctor-4.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Klaria — Built around the people we care for" },
      { name: "description", content: "How a frustrated patient became a clinic owner — and what we promise every person who walks through our doors." },
      { property: "og:title", content: "About Klaria Health" },
      { property: "og:description", content: "A clinic built around the people we care for." },
    ],
  }),
  component: About,
});

const team = [
  { name: "Dr. Sofia Martinez", role: "Family Medicine · Founder", img: doc1 },
  { name: "Dr. Arjun Mehta", role: "Cardiology", img: doc2 },
  { name: "Dr. Adaeze Okafor", role: "Pediatrics", img: doc3 },
  { name: "Dr. Henrik Lange", role: "Optometry", img: doc4 },
];

const values = [
  { icon: HeartHandshake, title: "Empathy first", body: "We listen before we treat. Every plan starts with your story.", h: 1 },
  { icon: Lightbulb, title: "Quiet innovation", body: "We adopt new tools only when they make care kinder, faster or safer.", h: 2 },
  { icon: Eye, title: "Radical transparency", body: "Clear pricing, clear paperwork, clear next steps. Always.", h: 1 },
  { icon: Shield, title: "Safety as a craft", body: "Sterilisation, privacy and outcomes audited weekly — not annually.", h: 2 },
  { icon: Leaf, title: "Whole-person care", body: "Mind, body, lifestyle. We treat the human, not just the chart.", h: 1 },
  { icon: Sparkles, title: "Joy in healing", body: "Beautiful spaces, warm staff, calm rituals. Healing should feel good.", h: 2 },
];

function About() {
  return (
    <PageShell>
      <section className="relative">
        <div className="relative h-[70vh] min-h-[480px] overflow-hidden">
          <motion.img
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            src={clinic}
            alt="Clinic interior"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
          <div className="relative h-full max-w-6xl mx-auto px-5 sm:px-8 flex flex-col justify-end pb-14 sm:pb-20">
            <Reveal>
              <SectionEyebrow><span className="text-primary-foreground">Our story</span></SectionEyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-5 text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-background max-w-3xl leading-[0.95] text-balance">
                A clinic built around the people we care for.
              </h1>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-5 text-background/85 text-lg max-w-xl">
                Founded in 2019 by patients who had simply had enough of forgetting that healthcare is about humans.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <Story />
      <Team />
      <Values values={values} />
    </PageShell>
  );
}

function Story() {
  const lines = [
    "Klaria began with a simple, frustrating waiting room.",
    "Three hours, two strangers, one apology that never came.",
    "We left convinced that modern healthcare deserved better defaults —",
    "warmer rooms, shorter waits, doctors with time, prices you understand.",
    "Today, that conviction is our quiet operating system.",
  ];
  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-28 grid lg:grid-cols-12 gap-10 lg:gap-16">
      <Reveal className="lg:col-span-5 space-y-4">
        <SectionEyebrow>Mission</SectionEyebrow>
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground text-balance">
          Healthcare you'd recommend to your closest friend.
        </h2>
      </Reveal>
      <div className="lg:col-span-7 space-y-3 text-xl text-foreground/80 leading-relaxed">
        {lines.map((l, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
          >
            {l}
          </motion.p>
        ))}
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="bg-surface/60 border-y border-border/60 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal className="max-w-2xl space-y-4">
          <SectionEyebrow>Our specialists</SectionEyebrow>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground text-balance">
            The people behind your care.
          </h2>
        </Reveal>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.06}>
              <div className="group relative rounded-3xl overflow-hidden bg-card shadow-soft hover:shadow-float transition-shadow">
                <div className="aspect-[4/5] overflow-hidden">
                  <motion.img
                    src={m.img}
                    alt={m.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-x-0 bottom-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform">
                  <p className="text-background font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity">{m.role}</p>
                  <a href="#" className="mt-2 inline-flex items-center gap-1.5 text-xs text-background/90 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Linkedin className="w-3.5 h-3.5" /> View credentials
                  </a>
                </div>
                <div className="p-5">
                  <p className="font-semibold text-foreground">{m.name}</p>
                  <p className="text-sm text-muted-foreground">{m.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

type Value = { icon: typeof HeartHandshake; title: string; body: string; h: number };
function Values({ values }: { values: Value[] }) {
  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
      <Reveal className="max-w-2xl space-y-4 mb-12">
        <SectionEyebrow>What we stand for</SectionEyebrow>
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground text-balance">
          Six small promises behind every visit.
        </h2>
      </Reveal>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
        {values.map((v, i) => (
          <Reveal key={v.title} delay={i * 0.05} className="break-inside-avoid mb-5">
            <div
              className={`rounded-3xl p-7 border border-primary/10 ${v.h === 1 ? "bg-primary-soft" : "bg-card"} shadow-soft`}
              style={v.h === 2 ? { paddingBottom: "3rem" } : undefined}
            >
              <div className="grid place-items-center w-12 h-12 rounded-2xl bg-primary text-primary-foreground mb-5">
                <v.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{v.title}</h3>
              <p className="mt-2 text-muted-foreground">{v.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

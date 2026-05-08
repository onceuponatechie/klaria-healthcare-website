import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Clock } from "lucide-react";
import { PageShell, Reveal, SectionEyebrow } from "@/components/site/PageShell";
import b1 from "@/assets/blog-1.jpg";
import b2 from "@/assets/blog-2.jpg";
import b3 from "@/assets/blog-3.jpg";
import clinic from "@/assets/clinic-interior.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Journal — Klaria Health" },
      { name: "description", content: "Notes on modern healthcare, calm living, and the small habits that compound into a healthier life." },
      { property: "og:title", content: "Klaria Journal" },
      { property: "og:description", content: "Modern healthcare, calmly written." },
    ],
  }),
  component: Blog,
});

const posts = [
  { slug: "modern-clinics", img: clinic, cat: "Inside Klaria", date: "May 2, 2026", read: "5 min", title: "Why we built a clinic that feels like a hotel lobby", excerpt: "Calm spaces aren't a luxury — they're medicine. The science behind designing healthcare for the nervous system.", featured: true },
  { slug: "nutrition-101", img: b1, cat: "Nutrition", date: "Apr 24, 2026", read: "6 min", title: "The 12 vegetables your gut wishes you ate this week", excerpt: "A simple framework for eating diversely without overhauling your fridge or your weekends." },
  { slug: "morning-routine", img: b2, cat: "Mental wellness", date: "Apr 18, 2026", read: "4 min", title: "A 10-minute morning routine that actually changes things", excerpt: "Forget the 5 AM hustle. The smallest, kindest morning ritual is the one you'll actually keep." },
  { slug: "ai-and-care", img: b3, cat: "Innovation", date: "Apr 09, 2026", read: "7 min", title: "How AI is quietly making your doctor a better listener", excerpt: "When charting becomes invisible, eye contact returns — and the consultation becomes a conversation again." },
  { slug: "kids-checkups", img: clinic, cat: "Pediatrics", date: "Mar 28, 2026", read: "5 min", title: "How to make a clinic visit something kids look forward to", excerpt: "Five tiny rituals our pediatrics team uses to turn anxious first visits into excited returning ones." },
  { slug: "eye-strain", img: b3, cat: "Optometry", date: "Mar 14, 2026", read: "3 min", title: "The 20-20-20 rule, and four others your eyes will thank you for", excerpt: "Working on screens isn't the problem. Forgetting to blink and look away is. Here's the fix." },
];

const cats = ["All", "Inside Klaria", "Nutrition", "Mental wellness", "Innovation", "Pediatrics", "Optometry"];

function Blog() {
  const [cat, setCat] = useState("All");
  const featured = posts.find((p) => p.featured)!;
  const rest = posts.filter((p) => p !== featured && (cat === "All" || p.cat === cat));

  return (
    <PageShell>
      <section className="max-w-6xl mx-auto px-5 sm:px-8 pt-6 pb-12">
        <Reveal className="max-w-3xl space-y-5">
          <SectionEyebrow>The Klaria Journal</SectionEyebrow>
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tighter text-foreground text-balance leading-[0.95]">
            Notes on living, healing, and modern care.
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            Quiet, useful writing from our specialists. No hype, no listicles — just things worth knowing.
          </p>
        </Reveal>
      </section>

      <section className="max-w-6xl mx-auto px-5 sm:px-8 mb-14">
        <Reveal>
          <Link to="/blog/$slug" params={{ slug: featured.slug }}>
            <motion.article
              whileHover={{ y: -4 }}
              className="group grid lg:grid-cols-12 gap-8 rounded-[2rem] bg-card border border-border p-5 sm:p-7 shadow-soft hover:shadow-float transition-shadow overflow-hidden"
            >
              <div className="lg:col-span-7 aspect-[16/10] rounded-2xl overflow-hidden">
                <motion.img src={featured.img} alt={featured.title} loading="lazy" className="w-full h-full object-cover" whileHover={{ scale: 1.05 }} transition={{ duration: 0.7 }} />
              </div>
              <div className="lg:col-span-5 flex flex-col justify-center gap-5 p-2">
                <div className="flex items-center gap-3 text-xs">
                  <span className="rounded-full bg-primary-soft text-primary px-3 py-1 font-semibold">{featured.cat}</span>
                  <span className="text-muted-foreground">{featured.date}</span>
                  <span className="text-muted-foreground inline-flex items-center gap-1"><Clock className="w-3 h-3" /> {featured.read}</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground text-balance">
                  {featured.title}
                </h2>
                <p className="text-muted-foreground text-lg">{featured.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-primary font-semibold">
                  Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.article>
          </Link>
        </Reveal>
      </section>

      <section className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex gap-2 flex-wrap mb-8">
          {cats.map((c) => (
            <motion.button
              key={c}
              whileTap={{ scale: 0.96 }}
              onClick={() => setCat(c)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                cat === c ? "bg-foreground text-background" : "bg-secondary text-foreground hover:bg-primary-soft hover:text-primary"
              }`}
            >
              {c}
            </motion.button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <Link to="/blog/$slug" params={{ slug: p.slug }}>
                <motion.article whileHover={{ y: -6 }} className="group h-full rounded-3xl bg-card border border-border overflow-hidden shadow-soft hover:shadow-glass transition-shadow">
                  <div className="aspect-[16/10] overflow-hidden">
                    <motion.img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover" whileHover={{ scale: 1.06 }} transition={{ duration: 0.7 }} />
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-xs">
                      <span className="rounded-full bg-primary-soft text-primary px-3 py-1 font-semibold">{p.cat}</span>
                      <span className="text-muted-foreground">{p.read}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors">{p.title}</h3>
                    <p className="text-muted-foreground text-sm">{p.excerpt}</p>
                  </div>
                </motion.article>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <Newsletter />
    </PageShell>
  );
}

function Newsletter() {
  const [v, setV] = useState("");
  const [done, setDone] = useState(false);
  return (
    <section className="px-5 sm:px-8 mt-24">
      <div className="max-w-5xl mx-auto rounded-[2rem] bg-primary-soft border border-primary/20 p-10 sm:p-14 text-center">
        <SectionEyebrow>Newsletter</SectionEyebrow>
        <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground text-balance">
          A short, useful note. Every other Sunday.
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">No spam. No noise. Just one piece of writing worth your morning coffee.</p>
        <form
          onSubmit={(e) => { e.preventDefault(); if (v) { setDone(true); setV(""); } }}
          className="mt-7 mx-auto max-w-md flex items-center gap-2 p-1.5 rounded-2xl bg-background border border-border shadow-soft"
        >
          <input value={v} onChange={(e) => setV(e.target.value)} type="email" required placeholder="you@email.com" className="flex-1 bg-transparent px-3 py-2 focus:outline-none text-foreground" />
          <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="rounded-xl bg-primary text-primary-foreground px-4 py-2 font-semibold">
            Subscribe
          </motion.button>
        </form>
        {done && <p className="mt-3 text-sm text-primary">You're in. See you Sunday.</p>}
      </div>
    </section>
  );
}

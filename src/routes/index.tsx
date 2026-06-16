import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Star, ShieldCheck, Clock4, Wrench, Droplets, Flame, Bath, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-plumber.jpg";
import pipesImage from "@/assets/pipes.jpg";
import { Layout } from "@/components/site/Layout";
import { CTASection } from "@/components/site/CTA";

const description =
  "Oasis Plumbing of Texas — licensed Mobile, TX plumbers rated 4.8★ from 213 Google reviews. Same-day repairs, water heaters, drain cleaning, leak detection. Call (817) 880-9071.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Oasis Plumbing of Texas | Trusted Mobile, TX Plumbers" },
      { name: "description", content: description },
      { property: "og:title", content: "Oasis Plumbing of Texas | Trusted Mobile, TX Plumbers" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Oasis Plumbing of Texas" },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Plumber",
          name: "Oasis Plumbing of Texas",
          telephone: "+1-817-880-9071",
          areaServed: "Mobile, TX",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "213",
          },
          openingHours: "Mo-Sa 08:00-18:00",
          priceRange: "$$",
        }),
      },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Droplets, title: "Leak Detection & Repair", desc: "Non-invasive locating and clean fixes that protect your floors and walls." },
  { icon: Flame, title: "Water Heaters", desc: "Tank, tankless and hybrid systems — install, repair and flush service." },
  { icon: Wrench, title: "Drain Cleaning", desc: "Clogs, slow drains and main-line clearing with camera inspection." },
  { icon: Bath, title: "Fixtures & Remodels", desc: "Faucets, toilets, sinks and full bath/kitchen plumbing rough-ins." },
  { icon: Sparkles, title: "Sewer & Repipe", desc: "Trenchless options, sewer line repair, and whole-home repipes." },
  { icon: ShieldCheck, title: "24/7 Emergency", desc: "Burst pipes, backups, no hot water — we dispatch the same day." },
];

function HomePage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-[1.05fr_1fr] md:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground/70 shadow-card">
              <Star className="h-3.5 w-3.5 fill-copper text-copper" />
              4.8 average · 213 Google reviews
            </div>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.05] text-foreground md:text-6xl lg:text-7xl">
              Plumbing you can <span className="italic text-copper">trust</span>,
              service that arrives <span className="whitespace-nowrap">on time.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Oasis Plumbing of Texas keeps Mobile-area homes running with fast,
              honest, fully-licensed plumbers. From a dripping faucet to a full
              repipe — one call handles it.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="tel:+18178809071"
                className="inline-flex items-center gap-2 rounded-full bg-deep px-6 py-3.5 text-sm font-semibold text-deep-foreground shadow-elegant transition-transform hover:-translate-y-0.5"
              >
                <Phone className="h-4 w-4" />
                Call (817) 880-9071
              </a>
              <Link
                to="/services"
                className="inline-flex items-center rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-secondary"
              >
                See all services
              </Link>
            </div>
            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                { k: "20+ yrs", v: "Local experience" },
                { k: "Same-day", v: "Service windows" },
                { k: "Licensed", v: "& fully insured" },
              ].map((s) => (
                <div key={s.k}>
                  <dt className="font-display text-2xl font-semibold text-foreground">{s.k}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-copper/15 blur-2xl" />
            <div className="overflow-hidden rounded-[2rem] border border-border shadow-elegant">
              <img
                src={heroImage}
                alt="Licensed Oasis Plumbing technician repairing a kitchen sink in a Mobile, TX home"
                width={1600}
                height={1100}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card p-4 shadow-elegant sm:block">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-deep text-deep-foreground">
                  <Clock4 className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Open today</p>
                  <p className="font-display text-sm font-semibold">8:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-border bg-secondary/50">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 sm:grid-cols-3">
          {[
            { icon: ShieldCheck, t: "Licensed & insured", d: "Texas master plumber on every job." },
            { icon: Star, t: "4.8★ · 213 reviews", d: "Consistently 5-star on Google." },
            { icon: Clock4, t: "On-time guarantee", d: "We respect your time, every visit." },
          ].map((b) => (
            <div key={b.t} className="flex items-start gap-3">
              <b.icon className="mt-0.5 h-5 w-5 shrink-0 text-copper" />
              <div className="min-w-0">
                <p className="font-display font-semibold text-foreground">{b.t}</p>
                <p className="text-sm text-muted-foreground">{b.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="font-display text-sm uppercase tracking-[0.25em] text-copper">Our services</p>
            <h2 className="mt-3 text-4xl font-semibold md:text-5xl">Everything your home's plumbing needs.</h2>
          </div>
          <Link to="/services" className="text-sm font-semibold text-foreground underline underline-offset-4 hover:text-copper">
            View full service list →
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-border bg-card p-7 shadow-card transition hover:-translate-y-1 hover:border-copper">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-deep text-deep-foreground transition group-hover:bg-copper group-hover:text-copper-foreground">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About preview */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-3xl border border-border shadow-elegant">
            <img src={pipesImage} alt="Polished copper plumbing pipes" loading="lazy" width={1200} height={800} className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="font-display text-sm uppercase tracking-[0.25em] text-copper">Texas-built</p>
            <h2 className="mt-3 text-4xl font-semibold md:text-5xl">A neighborhood plumber, not a call center.</h2>
            <p className="mt-5 text-muted-foreground">
              Customers like Denise, Jesse and Matt keep calling Oasis because our
              techs — TerryDon and the team — explain every option, work fast, and
              treat every home like it's their own. That's the standard.
            </p>
            <blockquote className="mt-7 rounded-2xl border-l-4 border-copper bg-card p-5 text-sm text-foreground/80 shadow-card">
              "TerryDon was fantastic. Explained step by step what he was looking
              for. Fast response and very professional."
              <footer className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">— Matt F., Google review</footer>
            </blockquote>
            <Link to="/about" className="mt-7 inline-flex text-sm font-semibold text-foreground underline underline-offset-4 hover:text-copper">
              More about our team →
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}

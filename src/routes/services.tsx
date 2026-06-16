import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { CTASection } from "@/components/site/CTA";
import { Droplets, Flame, Wrench, Bath, Sparkles, ShieldCheck, Gauge, Hammer, Waves } from "lucide-react";

const description =
  "Full-service residential plumbing in Mobile, TX: leak detection, water heaters, drain cleaning, sewer repair, repipes, fixtures, and 24/7 emergencies. Call (817) 880-9071.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Plumbing Services in Mobile, TX | Oasis Plumbing of Texas" },
      { name: "description", content: description },
      { property: "og:title", content: "Plumbing Services in Mobile, TX" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Droplets, t: "Leak Detection & Repair", d: "Acoustic and thermal locating, slab leaks, hidden drips behind walls — fixed cleanly." },
  { icon: Flame, t: "Water Heater Service", d: "Tank, tankless and hybrid installs. Anode swaps, thermostats, full replacements." },
  { icon: Wrench, t: "Drain Cleaning", d: "Sinks, tubs, kitchen lines and main sewer. Power augers and hydro-jetting available." },
  { icon: Bath, t: "Fixture Install", d: "Faucets, toilets, garbage disposals, water softeners and pressure regulators." },
  { icon: Sparkles, t: "Bath & Kitchen Remodels", d: "Plumbing rough-in and finish for renovations, additions and ADUs." },
  { icon: Waves, t: "Sewer & Repipe", d: "Trenchless sewer repair, line replacement and whole-home repipes in PEX or copper." },
  { icon: Gauge, t: "Gas Line Service", d: "Leak testing, new gas line runs for ranges, dryers and outdoor kitchens." },
  { icon: Hammer, t: "New Construction", d: "Full plumbing systems for custom homes and small commercial projects." },
  { icon: ShieldCheck, t: "24/7 Emergency", d: "Burst pipes, backups, flood control — same-day dispatch across the metro." },
];

function ServicesPage() {
  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-5 py-16 md:py-24">
        <p className="font-display text-sm uppercase tracking-[0.25em] text-copper">Services</p>
        <h1 className="mt-3 max-w-3xl text-5xl font-semibold leading-[1.05] md:text-6xl">
          Every plumbing job, one trusted local crew.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Residential repairs, installations and remodels across Mobile, TX and
          surrounding areas. Flat-rate pricing on most jobs — you'll know the
          number before we start the work.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.t} className="rounded-2xl border border-border bg-card p-7 shadow-card transition hover:-translate-y-1 hover:border-copper">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-deep text-deep-foreground">
                <s.icon className="h-5 w-5" />
              </div>
              <h2 className="mt-5 text-xl font-semibold">{s.t}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}

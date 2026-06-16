import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Phone, MapPin, Clock } from "lucide-react";

const description =
  "Contact Oasis Plumbing of Texas in Mobile — call (817) 880-9071 for same-day service. Mon–Sat, 8 AM – 6 PM.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Oasis Plumbing of Texas | (817) 880-9071" },
      { name: "description", content: description },
      { property: "og:title", content: "Contact Oasis Plumbing of Texas" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-5 py-16 md:py-24">
        <div className="max-w-2xl">
          <div>
            <p className="font-display text-sm uppercase tracking-[0.25em] text-copper">Contact</p>
            <h1 className="mt-3 text-5xl font-semibold leading-[1.05] md:text-6xl">Let's get your water flowing.</h1>
            <p className="mt-6 text-lg text-muted-foreground">
              The fastest way to reach us is a phone call — we answer live during
              business hours and dispatch 24/7 for true emergencies.
            </p>

            <div className="mt-10 space-y-5">
              <a href="tel:+18178809071" className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition hover:border-copper">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-deep text-deep-foreground"><Phone className="h-5 w-5" /></span>
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-wider text-muted-foreground">Call</span>
                  <span className="block font-display text-xl font-semibold">(817) 880-9071</span>
                </span>
              </a>
              <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-card">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-deep text-deep-foreground"><MapPin className="h-5 w-5" /></span>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Service area</p>
                  <p className="font-display font-semibold">Mobile, TX & surrounding communities</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-card">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-deep text-deep-foreground"><Clock className="h-5 w-5" /></span>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Hours</p>
                  <p className="font-display font-semibold">Mon–Sat · 8:00 AM – 6:00 PM</p>
                  <p className="text-sm text-muted-foreground">24/7 emergency dispatch</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

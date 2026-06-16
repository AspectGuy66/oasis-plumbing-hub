import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

const description =
  "Contact Oasis Plumbing of Texas in Mobile — call (817) 880-9071 for same-day service, or request a free quote online. Mon–Sat, 8 AM – 6 PM.";

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
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-5 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
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

          <div className="rounded-3xl border border-border bg-card p-8 shadow-elegant md:p-10">
            <h2 className="font-display text-2xl font-semibold">Request a quote</h2>
            <p className="mt-1 text-sm text-muted-foreground">Tell us about the job and we'll get back within one business day.</p>

            {sent ? (
              <div className="mt-8 rounded-2xl border border-copper/40 bg-copper/10 p-6 text-center">
                <Mail className="mx-auto h-6 w-6 text-copper" />
                <p className="mt-3 font-display text-lg font-semibold">Thanks — we've got it.</p>
                <p className="mt-1 text-sm text-muted-foreground">For anything urgent, please call (817) 880-9071.</p>
              </div>
            ) : (
              <form
                className="mt-6 grid gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Name" name="name" required />
                  <Field label="Phone" name="phone" type="tel" required />
                </div>
                <Field label="Email" name="email" type="email" />
                <Field label="Address (city)" name="city" placeholder="Mobile, TX" />
                <div>
                  <label className="mb-1.5 block text-sm font-medium">How can we help?</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-copper focus:ring-2 focus:ring-copper/30"
                    placeholder="Leaking under the kitchen sink, need a water heater replaced…"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-deep px-6 py-3.5 text-sm font-semibold text-deep-foreground shadow-elegant transition-transform hover:-translate-y-0.5"
                >
                  <Send className="h-4 w-4" /> Send request
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium">{label}{required && <span className="text-copper"> *</span>}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-copper focus:ring-2 focus:ring-copper/30"
      />
    </div>
  );
}

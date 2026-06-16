import { Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20">
      <div className="relative overflow-hidden rounded-3xl bg-deep px-8 py-14 text-deep-foreground shadow-elegant md:px-16 md:py-20">
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-copper/30 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-copper/15 blur-3xl" />
        <div className="relative grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div>
            <p className="font-display text-sm uppercase tracking-[0.25em] text-copper">Need a plumber today?</p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">
              Same-day service.<br />Honest, upfront pricing.
            </h2>
            <p className="mt-5 max-w-lg text-deep-foreground/75">
              From a stubborn leak to a full repipe, our licensed Texas plumbers
              show up on time, explain every option, and leave the job spotless.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href="tel:+18178809071"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-copper px-6 py-4 text-base font-semibold text-copper-foreground transition-transform hover:-translate-y-0.5"
            >
              <Phone className="h-5 w-5" />
              Call (817) 880-9071
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-4 text-base font-semibold text-deep-foreground hover:bg-white/5"
            >
              Request a quote online
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

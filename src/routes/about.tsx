import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { CTASection } from "@/components/site/CTA";
import pipesImage from "@/assets/pipes.jpg";

const description =
  "Oasis Plumbing of Texas is a family-trusted, locally-owned plumbing company serving Mobile, TX. Meet the team behind 213 five-star Google reviews.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Oasis Plumbing of Texas | Local Mobile, TX Plumbers" },
      { name: "description", content: description },
      { property: "og:title", content: "About Oasis Plumbing of Texas" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-5 py-16 md:py-24">
        <div className="grid gap-14 md:grid-cols-[1.1fr_1fr] md:items-center">
          <div>
            <p className="font-display text-sm uppercase tracking-[0.25em] text-copper">About us</p>
            <h1 className="mt-3 text-5xl font-semibold leading-[1.05] md:text-6xl">
              Built on referrals.<br />Backed by every neighbor we serve.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Oasis Plumbing of Texas is a locally-owned plumbing company based
              in Mobile, TX. We've grown the way good trades always do — one
              honest job at a time, and one happy neighbor telling another.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our master plumbers and apprentices live in the communities we serve.
              We show up in clean trucks, with the parts on board, and we leave
              your home the way we found it (only with the plumbing working again).
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border shadow-elegant">
            <img src={pipesImage} alt="Polished copper plumbing pipes" loading="lazy" width={1200} height={800} className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {[
            { k: "Honest pricing", v: "Flat-rate quotes before any work begins. No surprises, no upsells." },
            { k: "Real craftsmanship", v: "Texas master-plumber oversight on every install, repair and remodel." },
            { k: "Respect for your home", v: "Drop cloths, shoe covers and a tidy worksite — every time." },
          ].map((b) => (
            <div key={b.k} className="rounded-2xl border border-border bg-card p-7 shadow-card">
              <h3 className="font-display text-xl font-semibold">{b.k}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.v}</p>
            </div>
          ))}
        </div>
      </section>
      <CTASection />
    </Layout>
  );
}

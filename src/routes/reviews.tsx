import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { CTASection } from "@/components/site/CTA";
import { Star } from "lucide-react";

const description =
  "Read why neighbors rate Oasis Plumbing of Texas 4.8★ from 213 Google reviews — fast response, courteous staff, professional installation in Mobile, TX.";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Customer Reviews · 4.8★ | Oasis Plumbing of Texas" },
      { name: "description", content: description },
      { property: "og:title", content: "Reviews · Oasis Plumbing of Texas" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: ReviewsPage,
});

const reviews = [
  {
    name: "Denise Jones",
    when: "6 months ago",
    text: "I am so grateful for how quickly they were able to come the day before Thanksgiving. Terry did a great job. He worked quickly and made sure I felt comfortable about the service. Thanks!",
  },
  {
    name: "jesherrera13",
    when: "7 months ago",
    text: "TerryDon was awesome! He was friendly and very professional, he fixed our sink plumbing issue and was very knowledgeable!",
  },
  {
    name: "Matt Flemister",
    when: "3 years ago",
    text: "TerryDon was fantastic. Explained step by step what he was looking for as we went along. Explained options too. Fast response and very professional. Thank you TerryDon and Oasis.",
  },
];

const tags = ["professional installation", "quick response", "courteous staff", "quick job"];

function ReviewsPage() {
  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-5 py-16 md:py-24">
        <p className="font-display text-sm uppercase tracking-[0.25em] text-copper">Reviews</p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] md:text-6xl">
            213 neighbors. <span className="italic text-copper">4.8 stars.</span>
          </h1>
          <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 shadow-card">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} className="h-4 w-4 fill-copper text-copper" />
            ))}
            <span className="ml-1 text-sm font-semibold">4.8 / 5 · Google</span>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-foreground/70">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <article key={r.name} className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-card">
              <div className="flex gap-1">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-copper text-copper" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-foreground/85">"{r.text}"</p>
              <footer className="mt-6 border-t border-border pt-4">
                <p className="font-display font-semibold">{r.name}</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{r.when}</p>
              </footer>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-border bg-card p-8 text-center shadow-card">
          <p className="text-muted-foreground">Want to read all 213 reviews?</p>
          <a
            href="https://www.google.com/search?q=Oasis+Plumbing+of+Texas+Mobile+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex font-semibold text-foreground underline underline-offset-4 hover:text-copper"
          >
            View on Google →
          </a>
        </div>
      </section>
      <CTASection />
    </Layout>
  );
}

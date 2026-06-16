import { Link } from "@tanstack/react-router";
import { Droplets, Phone, MapPin, Clock } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-deep text-deep-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-copper text-copper-foreground">
              <Droplets className="h-5 w-5" />
            </span>
            <span className="font-display text-xl font-semibold">Oasis Plumbing of Texas</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-deep-foreground/70">
            Family-trusted plumbing in Mobile and the surrounding Texas communities.
            Honest pricing, fast response, work guaranteed.
          </p>
          <a
            href="tel:+18178809071"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-copper px-5 py-3 text-sm font-semibold text-copper-foreground"
          >
            <Phone className="h-4 w-4" /> (817) 880-9071
          </a>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-copper">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-deep-foreground/75">
            <li><Link to="/services" className="hover:text-copper">Services</Link></li>
            <li><Link to="/about" className="hover:text-copper">About Us</Link></li>
            <li><Link to="/reviews" className="hover:text-copper">Reviews</Link></li>
            <li><Link to="/contact" className="hover:text-copper">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-copper">Visit</h4>
          <ul className="mt-4 space-y-3 text-sm text-deep-foreground/75">
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-copper" /> Serving Mobile, TX & surrounding areas</li>
            <li className="flex gap-2"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-copper" /> Mon–Sat · 8:00 AM – 6:00 PM</li>
            <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-copper" /> 24/7 emergency dispatch</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-5 py-5 text-xs text-deep-foreground/55 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Oasis Plumbing of Texas. All rights reserved.</p>
          <p>Licensed · Insured · 4.8★ from 213 Google reviews</p>
        </div>
      </div>
    </footer>
  );
}

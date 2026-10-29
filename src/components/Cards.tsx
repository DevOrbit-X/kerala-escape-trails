import { Link } from "@tanstack/react-router";
import { Check, Clock, Star } from "lucide-react";
import { destinations, packages, reviews, formatINR } from "@/lib/data";

export function DestinationGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {destinations.map((d) => (
        <article key={d.name} className="group relative h-96 overflow-hidden rounded-2xl shadow-soft">
          <img src={d.image} alt={d.name} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
          <div className="hero-overlay absolute inset-0" />
          <div className="absolute inset-x-0 bottom-0 p-5 text-primary-foreground">
            <p className="text-xs uppercase tracking-wider opacity-80">{d.from}</p>
            <h3 className="text-2xl font-semibold">{d.name}</h3>
            <p className="text-sm font-medium">{d.tagline}</p>
            <p className="mt-2 text-sm opacity-85">{d.text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export function PackageGrid({ limit }: { limit?: number }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {packages.slice(0, limit).map((p) => (
        <article key={p.title} className="flex flex-col overflow-hidden rounded-2xl border bg-card shadow-soft">
          <img src={p.image} alt={p.title} loading="lazy" width={1024} height={768} className="h-52 w-full object-cover" />
          <div className="flex flex-1 flex-col p-6">
            <p className="flex items-center gap-1 text-xs font-semibold text-primary"><Clock className="h-3.5 w-3.5" /> {p.days}</p>
            <h3 className="mt-1 text-xl font-semibold text-primary-deep">{p.title}</h3>
            <ul className="mt-3 flex-1 space-y-1.5 text-sm text-muted-foreground">
              {p.includes.map((i) => <li key={i} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{i}</li>)}
            </ul>
            <div className="mt-5 flex items-end justify-between">
              <div>
                <p className="text-xs text-muted-foreground">from / person</p>
                <p className="text-2xl font-bold text-primary-deep">{formatINR(p.price)}</p>
              </div>
              <Link to="/book" search={{ destination: p.destination }} className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary-deep">Book</Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {reviews.map((r) => (
        <figure key={r.name} className="rounded-2xl bg-secondary p-6">
          <div className="flex gap-0.5 text-gold">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
          <blockquote className="mt-3 text-secondary-foreground">"{r.text}"</blockquote>
          <figcaption className="mt-4 text-sm font-semibold text-primary-deep">{r.name} <span className="font-normal text-muted-foreground">· {r.city}</span></figcaption>
        </figure>
      ))}
    </div>
  );
}

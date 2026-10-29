import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Leaf, Menu, X, Phone, Mail, MapPin } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/destinations", label: "Destinations" },
  { to: "/packages", label: "Packages" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
      <div className="container-site flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-semibold text-primary-deep">
          <Leaf className="h-6 w-6 text-primary" /> Kerala Escapes
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: true }} className="text-sm font-medium text-muted-foreground hover:text-primary" activeProps={{ className: "text-primary" }}>
              {n.label}
            </Link>
          ))}
          <Link to="/book" className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary-deep">Book now</Link>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="border-t bg-background md:hidden">
          <div className="container-site flex flex-col py-3">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-2 font-medium">{n.label}</Link>
            ))}
            <Link to="/book" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-primary py-2 text-center font-semibold text-primary-foreground">Book now</Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-primary-deep text-primary-foreground">
      <div className="container-site grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="flex items-center gap-2 font-display text-xl"><Leaf className="h-5 w-5 text-accent" /> Kerala Escapes</p>
          <p className="mt-3 text-sm opacity-80">Handpicked Kerala holidays for travellers from Tamil Nadu — from God's Own Country to your doorstep.</p>
        </div>
        <div>
          <p className="font-semibold">Explore</p>
          <ul className="mt-3 space-y-2 text-sm opacity-80">
            {nav.map((n) => <li key={n.to}><Link to={n.to} className="hover:opacity-100">{n.label}</Link></li>)}
          </ul>
        </div>
        <div className="space-y-2 text-sm opacity-90">
          <p className="font-semibold">Contact</p>
          <p className="flex gap-2"><Phone className="h-4 w-4" /> +91 98765 43210</p>
          <p className="flex gap-2"><Mail className="h-4 w-4" /> hello@keralaescapes.in</p>
          <p className="flex gap-2"><MapPin className="h-4 w-4" /> Anna Nagar, Chennai, Tamil Nadu</p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15 py-5 text-center text-xs opacity-70">© {new Date().getFullYear()} Kerala Escapes. All rights reserved.</div>
    </footer>
  );
}

export function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-semibold text-primary-deep md:text-4xl">{title}</h2>
      {text && <p className="mt-3 text-muted-foreground">{text}</p>}
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { SectionTitle } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Kerala Escapes" },
      { name: "description", content: "Call, email or visit Kerala Escapes in Chennai to plan your Kerala trip." },
      { property: "og:title", content: "Contact Kerala Escapes" },
      { property: "og:description", content: "Get in touch to plan your Kerala holiday from Tamil Nadu." },
    ],
  }),
  component: () => (
    <section className="container-site mt-16">
      <SectionTitle eyebrow="Contact" title="We'd love to plan your trip" />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { i: Phone, t: "Call us", d: "+91 98765 43210" },
          { i: Mail, t: "Email", d: "hello@keralaescapes.in" },
          { i: MapPin, t: "Office", d: "Anna Nagar, Chennai, Tamil Nadu" },
          { i: Clock, t: "Hours", d: "Mon–Sat, 9 AM – 7 PM" },
        ].map((c) => (
          <div key={c.t} className="rounded-2xl border bg-card p-6 shadow-soft">
            <c.i className="h-7 w-7 text-primary" />
            <p className="mt-3 font-semibold text-primary-deep">{c.t}</p>
            <p className="text-sm text-muted-foreground">{c.d}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link to="/book" className="rounded-full bg-primary px-7 py-3 font-semibold text-primary-foreground hover:bg-primary-deep">Book a trip online</Link>
      </div>
    </section>
  ),
});

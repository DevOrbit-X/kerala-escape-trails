import { createFileRoute } from "@tanstack/react-router";
import { BookingForm } from "@/components/BookingForm";
import { SectionTitle } from "@/components/SiteLayout";
import { DESTINATIONS, type Destination } from "@/lib/data";

export const Route = createFileRoute("/book")({
  validateSearch: (s: Record<string, unknown>): { destination?: Destination } =>
    DESTINATIONS.includes(s.destination as Destination) ? { destination: s.destination as Destination } : {},
  head: () => ({
    meta: [
      { title: "Book Your Trip — Kerala Escapes" },
      { name: "description", content: "Request a Kerala trip: choose destination, travel date and number of travellers." },
      { property: "og:title", content: "Book a Kerala Trip — Kerala Escapes" },
      { property: "og:description", content: "Quick booking for Munnar, Alleppey, Wayanad and Kochi." },
    ],
  }),
  component: Book,
});

function Book() {
  const { destination } = Route.useSearch();
  return (
    <section className="container-site mt-16 max-w-3xl">
      <SectionTitle eyebrow="Booking" title="Plan your Kerala escape" text="Tell us where and when — we'll call you to confirm." />
      <div className="mt-10"><BookingForm initialDestination={destination} /></div>
    </section>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { PackageGrid } from "@/components/Cards";
import { SectionTitle } from "@/components/SiteLayout";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Travel Packages & Prices — Kerala Escapes" },
      { name: "description", content: "Kerala tour packages from Tamil Nadu starting at ₹6,499 per person." },
      { property: "og:title", content: "Kerala Travel Packages — Kerala Escapes" },
      { property: "og:description", content: "Houseboats, hill retreats and heritage trips with clear prices." },
    ],
  }),
  component: () => (
    <section className="container-site mt-16">
      <SectionTitle eyebrow="Packages" title="Choose your Kerala trip" text="Prices are per person, including travel from Tamil Nadu." />
      <div className="mt-10"><PackageGrid /></div>
    </section>
  ),
});

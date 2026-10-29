import { createFileRoute } from "@tanstack/react-router";
import { DestinationGrid } from "@/components/Cards";
import { SectionTitle } from "@/components/SiteLayout";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Destinations — Kerala Escapes" },
      { name: "description", content: "Explore Munnar, Alleppey, Wayanad and Kochi — Kerala's most loved places." },
      { property: "og:title", content: "Kerala Destinations — Kerala Escapes" },
      { property: "og:description", content: "Munnar, Alleppey, Wayanad and Kochi trips from Tamil Nadu." },
    ],
  }),
  component: () => (
    <section className="container-site mt-16">
      <SectionTitle eyebrow="Destinations" title="Kerala's most loved places" text="Each just a short journey from Tamil Nadu." />
      <div className="mt-10"><DestinationGrid /></div>
    </section>
  ),
});

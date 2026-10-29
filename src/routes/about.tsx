import { createFileRoute } from "@tanstack/react-router";
import img from "@/assets/alleppey.jpg";
import { Reviews } from "@/components/Cards";
import { SectionTitle } from "@/components/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Kerala Escapes" },
      { name: "description", content: "We're a Tamil Nadu-based travel team crafting easy, memorable Kerala holidays." },
      { property: "og:title", content: "About Kerala Escapes" },
      { property: "og:description", content: "A Tamil Nadu travel team crafting memorable Kerala holidays." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="container-site mt-16 grid items-center gap-10 md:grid-cols-2">
        <img src={img} alt="Houseboat in Alleppey" loading="lazy" width={1024} height={768} className="rounded-2xl shadow-soft" />
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">About us</p>
          <h1 className="mt-2 text-4xl font-semibold text-primary-deep">Neighbours who know Kerala by heart</h1>
          <p className="mt-4 text-muted-foreground">Kerala Escapes is a travel team based in Tamil Nadu, helping families, couples and friends discover Kerala without the hassle. We plan your transport, stays and sightseeing so you can simply enjoy the journey.</p>
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            {[["5,000+", "Happy travellers"], ["4", "Destinations"], ["24/7", "Trip support"]].map(([n, l]) => (
              <div key={l} className="rounded-xl bg-secondary p-4"><p className="text-2xl font-bold text-primary">{n}</p><p className="text-xs text-muted-foreground">{l}</p></div>
            ))}
          </div>
        </div>
      </section>
      <section className="container-site mt-24">
        <SectionTitle eyebrow="Reviews" title="What our travellers say" />
        <div className="mt-10"><Reviews /></div>
      </section>
    </>
  );
}

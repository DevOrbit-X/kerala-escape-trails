import { createFileRoute, Link } from "@tanstack/react-router";
import { Bus, ShieldCheck, Wallet } from "lucide-react";
import hero from "@/assets/hero-munnar.jpg";
import heroPoster from "@/assets/hero-poster.jpg.asset.json";
import heroVideoDesktop from "@/assets/hero-kerala-1080.mp4.asset.json";
import heroVideoMobile from "@/assets/hero-kerala-720.mp4.asset.json";
import heroVideoDesktopWebm from "@/assets/hero-kerala-1080.webm.asset.json";
import heroVideoMobileWebm from "@/assets/hero-kerala-720.webm.asset.json";
import { DestinationGrid, PackageGrid, Reviews } from "@/components/Cards";
import { SectionTitle } from "@/components/SiteLayout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kerala Escapes — Kerala Tours from Tamil Nadu" },
      { name: "description", content: "Munnar, Alleppey, Wayanad and Kochi holiday packages from Chennai, Coimbatore and Madurai." },
      { property: "og:title", content: "Kerala Escapes — Kerala Tours from Tamil Nadu" },
      { property: "og:description", content: "Handpicked Kerala holiday packages for travellers from Tamil Nadu." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative flex min-h-[88vh] items-center overflow-hidden">
        <img src={hero} alt="Munnar tea hills at sunrise" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <video
          className="hero-video absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={heroPoster.url}
          aria-hidden="true"
          tabIndex={-1}
          disablePictureInPicture
        >
          <source src={heroVideoMobileWebm.url} media="(max-width: 768px)" type="video/webm" />
          <source src={heroVideoDesktopWebm.url} type="video/webm" />
          <source src={heroVideoMobile.url} media="(max-width: 768px)" type="video/mp4" />
          <source src={heroVideoDesktop.url} type="video/mp4" />
        </video>
        <div className="hero-overlay absolute inset-0" />
        <div className="container-site relative text-primary-foreground">
          <p className="text-sm font-semibold uppercase tracking-[0.25em]">FROM TAMIL NADU TO GOD'S OWN COUNTRY KERALA</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-tight md:text-7xl">Your Kerala escape starts here.</h1>
          <p className="mt-5 max-w-xl text-lg opacity-90">Misty hills, quiet backwaters and coastal heritage — with comfortable travel from Chennai, Coimbatore and Madurai.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/book" className="rounded-full bg-primary px-7 py-3 font-semibold text-primary-foreground hover:bg-primary-deep">Book your trip</Link>
            <Link to="/packages" className="rounded-full border border-primary-foreground/70 px-7 py-3 font-semibold hover:bg-primary-foreground/10">View packages</Link>
          </div>
        </div>
      </section>

      <section className="container-site -mt-14 relative grid gap-4 md:grid-cols-3">
        {[
          { icon: Bus, t: "Doorstep pickup", d: "AC travel from major Tamil Nadu cities" },
          { icon: Wallet, t: "Transparent prices", d: "No hidden costs, pay as you go" },
          { icon: ShieldCheck, t: "Trusted & safe", d: "Verified stays and local guides" },
        ].map((f) => (
          <div key={f.t} className="flex gap-4 rounded-2xl bg-card p-6 shadow-soft">
            <f.icon className="h-8 w-8 shrink-0 text-primary" />
            <div><p className="font-semibold text-primary-deep">{f.t}</p><p className="text-sm text-muted-foreground">{f.d}</p></div>
          </div>
        ))}
      </section>

      <section className="container-site mt-24">
        <SectionTitle eyebrow="Popular destinations" title="Where will Kerala take you?" />
        <div className="mt-10"><DestinationGrid /></div>
      </section>

      <section className="container-site mt-24">
        <SectionTitle eyebrow="Travel packages" title="Trips made for you" text="All-inclusive packages starting from Tamil Nadu." />
        <div className="mt-10"><PackageGrid limit={3} /></div>
        <div className="mt-8 text-center"><Link to="/packages" className="font-semibold text-primary hover:underline">See all packages →</Link></div>
      </section>

      <section className="container-site mt-24">
        <SectionTitle eyebrow="Reviews" title="Happy travellers" />
        <div className="mt-10"><Reviews /></div>
      </section>
    </>
  );
}

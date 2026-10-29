import munnar from "@/assets/hero-munnar.jpg";
import alleppey from "@/assets/alleppey.jpg";
import wayanad from "@/assets/wayanad.jpg";
import kochi from "@/assets/kochi.jpg";

export const DESTINATIONS = ["Munnar", "Alleppey", "Wayanad", "Kochi"] as const;
export type Destination = (typeof DESTINATIONS)[number];

export const destinations: { name: Destination; tagline: string; text: string; image: string; from: string }[] = [
  { name: "Munnar", tagline: "Tea hills & misty valleys", text: "Rolling tea estates, Eravikulam National Park and cool mountain air.", image: munnar, from: "Coimbatore · 5 hrs" },
  { name: "Alleppey", tagline: "Houseboats on the backwaters", text: "Drift through palm-lined canals on a traditional kettuvallam.", image: alleppey, from: "Madurai · 6 hrs" },
  { name: "Wayanad", tagline: "Forests, falls & wildlife", text: "Trek to waterfalls, explore spice farms and ancient Edakkal caves.", image: wayanad, from: "Coimbatore · 4 hrs" },
  { name: "Kochi", tagline: "Heritage by the sea", text: "Chinese fishing nets, Fort Kochi cafés and Kathakali evenings.", image: kochi, from: "Chennai · flight 1 hr" },
];

export const packages = [
  { title: "Munnar Hill Retreat", destination: "Munnar" as Destination, days: "3 Days / 2 Nights", price: 8999, image: munnar, includes: ["AC transport from Coimbatore", "Hill-view resort stay", "Tea museum & Mattupetty"] },
  { title: "Alleppey Houseboat Escape", destination: "Alleppey" as Destination, days: "2 Days / 1 Night", price: 7499, image: alleppey, includes: ["Private houseboat cruise", "All meals on board", "Pickup from Madurai"] },
  { title: "Wayanad Nature Trail", destination: "Wayanad" as Destination, days: "3 Days / 2 Nights", price: 9499, image: wayanad, includes: ["Jungle resort stay", "Waterfall & cave treks", "Breakfast & dinner"] },
  { title: "Kochi Heritage Walk", destination: "Kochi" as Destination, days: "2 Days / 1 Night", price: 6499, image: kochi, includes: ["Boutique hotel in Fort Kochi", "Guided heritage tour", "Kathakali show tickets"] },
  { title: "Grand Kerala Circuit", destination: "Munnar" as Destination, days: "6 Days / 5 Nights", price: 21999, image: alleppey, includes: ["Munnar + Alleppey + Kochi", "Dedicated driver from Chennai", "Hotels & houseboat"] },
];

export const reviews = [
  { name: "Priya S.", city: "Chennai", text: "The Alleppey houseboat was magical. Pickup was on time and everything was organised perfectly." },
  { name: "Karthik R.", city: "Coimbatore", text: "Our family trip to Munnar was stress-free. Great hotel and a very friendly driver." },
  { name: "Meena & Arun", city: "Madurai", text: "Wayanad exceeded our expectations. We're already planning our Kochi trip with them!" },
];

export const formatINR = (n: number) => "₹" + n.toLocaleString("en-IN");

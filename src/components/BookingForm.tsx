import { useState } from "react";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { DESTINATIONS, type Destination } from "@/lib/data";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  phone: z.string().trim().regex(/^[0-9+\s-]{6,20}$/, "Enter a valid phone number"),
  destination: z.enum(DESTINATIONS),
  travel_date: z.string().refine((d) => d >= new Date().toISOString().slice(0, 10), "Pick a future date"),
  travellers: z.coerce.number().int().min(1).max(20),
});

const field = "mt-1 w-full rounded-xl border border-input bg-card px-4 py-3 outline-none focus:border-ring focus:ring-2 focus:ring-ring/30";

export function BookingForm({ initialDestination }: { initialDestination?: Destination }) {
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const parsed = schema.safeParse(Object.fromEntries(new FormData(e.currentTarget)));
    if (!parsed.success) return setError(parsed.error.issues[0].message);
    setError(null);
    setStatus("sending");
    const { error } = await supabase.from("booking_requests").insert(parsed.data);
    if (error) {
      setStatus("idle");
      return setError("Something went wrong. Please try again.");
    }
    setStatus("done");
  }

  if (status === "done")
    return (
      <div className="rounded-2xl border bg-card p-10 text-center shadow-soft">
        <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
        <h3 className="mt-4 text-2xl font-semibold text-primary-deep">Booking request received!</h3>
        <p className="mt-2 text-muted-foreground">Our team will call you to confirm your trip.</p>
      </div>
    );

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-2xl border bg-card p-6 shadow-soft md:grid-cols-2 md:p-8">
      <label className="text-sm font-medium">Your name<input name="name" required maxLength={100} className={field} /></label>
      <label className="text-sm font-medium">Phone<input name="phone" type="tel" required maxLength={20} className={field} /></label>
      <label className="text-sm font-medium">Destination
        <select name="destination" defaultValue={initialDestination ?? "Munnar"} className={field}>
          {DESTINATIONS.map((d) => <option key={d}>{d}</option>)}
        </select>
      </label>
      <label className="text-sm font-medium">Travel date<input name="travel_date" type="date" required min={new Date().toISOString().slice(0, 10)} className={field} /></label>
      <label className="text-sm font-medium md:col-span-2">Number of travellers<input name="travellers" type="number" min={1} max={20} defaultValue={2} required className={field} /></label>
      {error && <p className="text-sm text-destructive md:col-span-2">{error}</p>}
      <button disabled={status === "sending"} className="rounded-full bg-primary py-3 font-semibold text-primary-foreground hover:bg-primary-deep disabled:opacity-60 md:col-span-2">
        {status === "sending" ? "Sending…" : "Request booking"}
      </button>
    </form>
  );
}

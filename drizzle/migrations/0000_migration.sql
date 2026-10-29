CREATE TABLE public.booking_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 100),
  phone text NOT NULL CHECK (char_length(phone) BETWEEN 6 AND 20),
  destination text NOT NULL CHECK (destination IN ('Munnar','Alleppey','Wayanad','Kochi')),
  travel_date date NOT NULL,
  travellers int NOT NULL CHECK (travellers BETWEEN 1 AND 20),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.booking_requests TO anon, authenticated;
GRANT ALL ON public.booking_requests TO service_role;
ALTER TABLE public.booking_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit a booking request" ON public.booking_requests FOR INSERT TO anon, authenticated WITH CHECK (true);
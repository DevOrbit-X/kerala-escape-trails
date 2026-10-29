<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Site content (destinations, packages, reviews) lives in src/lib/data.ts; shared header/footer wrap <Outlet /> in __root. Why: one place to edit copy and prices.
- Booking requests insert directly from the browser into booking_requests (anon insert-only RLS). Why: no login needed to book.

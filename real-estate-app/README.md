# Tour3D — Real Estate 3D Listings

A Next.js 16 + React 19 + PlayCanvas demo: each listing has an interactive 3D
walkthrough in the browser (WebGL2/WebGPU, glTF/GLB, no plugin).

## Getting started

```bash
cd real-estate-app
npm install
npm run dev
```

Open <http://localhost:3000>.

## Layout

- `app/page.tsx` — landing page + featured listings.
- `app/listings/page.tsx` — listings index.
- `app/listings/[id]/page.tsx` — listing detail with embedded 3D tour. Server
  Component, statically pre-rendered via `generateStaticParams`.
- `components/PropertyTour.tsx` — `@playcanvas/react` scene (camera, lights,
  GLB container, procedural placeholder).
- `components/PropertyTourClient.tsx` — `next/dynamic` wrapper with
  `ssr: false`, required because PlayCanvas needs `window`/WebGL.
- `lib/listings.ts` — in-memory listings. Swap for a database when ready.

## Adding a real 3D scan

Drop a `.glb` into `public/models/` and point the listing at it:

```ts
// lib/listings.ts
{ id: "loft-001", /* … */, modelUrl: "/models/loft-001.glb" }
```

Matterport/Polycam exports work directly. For huge captures use Gaussian
Splats — `@playcanvas/react` has `<GSplat />` + `useSplat()`.

## Charging money — NOT yet wired

The brief mentioned "charge money". This scaffold deliberately does **not**
include payments yet because doing it safely requires a few decisions:

1. **What is being sold?** Pick one:
   - Tour viewing fee (pay-per-view paywall on each listing).
   - Agent subscriptions (monthly fee per active listing).
   - Per-tour publishing fee (one-off at upload time).
2. **Server is required.** Stripe Checkout sessions and webhook signature
   verification both need a backend. This project does not use
   `output: "export"`, so Next.js API routes (`app/api/*/route.ts`) work — but
   you still need `STRIPE_SECRET_KEY` + `STRIPE_WEBHOOK_SECRET` in the deploy
   env. Never put the secret key in the client bundle.
3. **Auth + access control.** Once a buyer pays, we need to know which user
   has access to which tour. That implies user accounts (Supabase, Clerk,
   NextAuth, etc.) — not in scope for this scaffold.

When you're ready, tell me which monetisation model you want and I'll wire up
`/api/checkout` (Stripe Checkout) + `/api/stripe/webhook` (signature verify and
DB writes), plus a paywall on `app/listings/[id]/page.tsx`.

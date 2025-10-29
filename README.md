# Hiking Gallery – Azki Frontend Challenge

A hiking-themed image gallery built with Next.js (App Router) and TypeScript.


## Tech
- Next.js + TypeScript
- TailwindCSS
- Intercepting routes + parallel route `@modal`


## How to run
```bash
yarn 
yarn dev
# open http://localhost:3000

Architecture / Decisions
    • Data: Static IMAGES array in src/constants/gallery.ts.
    • Routing: /gallery lists images. Deep links at /gallery/[id].
    • Modal Routing: Intercepting route app/gallery/@modal/(.)[id]/page.tsx renders a modal over the gallery while the URL becomes /gallery/[id]. Refreshing this URL is handled by the server page app/gallery/[id]/page.tsx for a full-page detail.
    • Independence: Using a parallel route lets the modal UI render independently from the gallery without forcing a page reload.
    • Styling: Tailwind, custom components only (no UI libs).
    • Type-safety: Strong types for image items. Components typed.
    • Bonus: Theme toggle (light/dark), image hover transitions, skeleton preload state. Further optimizations: next/image responsive sizes.

State Persistence
    • URL is the state. When the modal is open, the route is /gallery/[id]. A refresh keeps you on the same photo; closing uses router.back() to return to /gallery without a full reload.

    
       

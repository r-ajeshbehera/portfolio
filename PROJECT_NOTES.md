# my-portfolio — local copy notes

This folder is a complete, organized copy of your `my-portfolio` repo (all `app/`, `components/`, `data/`, and config source files), with the 4 bug fixes from our earlier review already applied and the 3 confirmed-dead files removed. It is not yet a git repo — see "Next steps" below.

## What's included

Every source file from GitHub: all pages under `app/`, all 16 components, `data/blogs.jsx` and `data/projects.jsx`, and the project config (`package.json`, `next.config.mjs`, `jsconfig.json`, `postcss.config.js`, `tailwind.config.js`, `.gitignore`, `README.md`).

Applied fixes (same as `CHANGES.md` from before):
- `components/ThemeProvider.jsx` — swapped the broken `router.asPath` (Pages Router API that doesn't exist in App Router) for `usePathname()`, so theme sync on navigation actually works.
- `components/Navbar.jsx` — removed its duplicate theme-persistence logic (which conflicted with `ThemeProvider`'s) and fixed the Resume button firing three actions on one click.
- `app/about/page.jsx` and `app/contact/page.jsx` — fixed invalid nested `<p>` markup; `app/contact/page.jsx` also had ~130 lines of a commented-out previous version removed.

Removed (confirmed unused everywhere in the codebase):
- `components/ThemeManager.jsx` — superseded by `ThemeProvider`, never imported.
- `pages/api/submit-feedback.jsx` — dead API route; `FeedbackForm.jsx` posts to Supabase directly instead.
- `css/global.css`, `global1-4.css` — orphaned stylesheet, not imported anywhere. (Worth noting: your `.gitignore` already has a `css/global*.css` line, meaning these were committed *before* that ignore rule was added, then never removed — consistent with them being leftovers.)

## What's missing (couldn't be copied)

Binary files can't be transferred through the tools I have access to in this session, so these are **not** in this folder yet:

- `public/images/` — all site images (logo, profile photo, icons, project/blog screenshots)
- `public/certificates/` — your 3 certificate PDFs
- `public/resume.pdf`
- `package-lock.json` — this regenerates automatically the first time you run `npm install`, so it doesn't need to be copied

Easiest fix: copy those three things (`public/images`, `public/certificates`, `public/resume.pdf`) straight from your existing local clone of this repo into this folder. If you don't have a local clone handy, download the repo as a ZIP from GitHub (`Code` → `Download ZIP`) and pull just those files out.

## A security note, unrelated to the code

While extracting `app/globals.css` through your browser, one CSS value came through corrupted — `display: inline-flex` had been replaced with a string reading `万博官网manbetxapp` (Chinese gambling-site spam text). I fixed it back to the correct value in this copy, but the fact that it happened at all suggests something in your Chrome (likely a browser extension — I noticed a "Liner" highlighting extension active) is injecting content into pages you visit. That's worth a look: check `chrome://extensions` for anything unfamiliar or recently added, and remove anything you don't recognize.

## Also noticed, not changed

`tailwind.config.js` and `postcss.config.js` are both present, but `package.json` has no `tailwindcss` dependency, and `postcss.config.js`'s plugin list (`postcss-import`, `postcss-nested`, `autoprefixer`) doesn't include Tailwind either. So `tailwind.config.js` is vestigial — the site actually runs on plain CSS (`app/globals.css`) with `postcss-nested` providing the nesting syntax. Not broken, just dead config; safe to delete later if you want one less thing to think about.

## Next steps to get this on GitHub

This folder isn't a git repo yet. From inside `my-portfolio/`:

```bash
git init
git add .
git commit -m "Fix ThemeProvider route bug, remove dead code, fix invalid markup"
git remote add origin https://github.com/r-ajeshbehera/my-portfolio.git
git branch -M main
git push -u origin main --force
```

`--force` is needed because this local history doesn't share a common ancestor with what's on GitHub — it'll overwrite the remote with this content. If you'd rather merge cleanly instead of force-pushing, clone your existing repo separately, copy these changed files over it, and commit normally there instead.

Once pushed, run `npm install` before `npm run dev` / `npm run build` so `package-lock.json` gets generated and all dependencies are present.

## Fixed: app crashes entirely if Supabase env vars are missing

If you ran this without setting `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY`, you'd have hit: `Uncaught Error: supabaseUrl is required`, taking down the whole homepage rather than just the feedback widget. The cause: `FeedbackForm.jsx`, `FeedbackList.jsx`, `FeedbackSlider.jsx`, and `LikeDislike.jsx` each independently called `createClient(...)` at module load time, and `createClient` throws synchronously when the URL is empty. Since `FeedbackSlider` renders on the homepage, that throw crashed the entire app on first load, not just the Supabase-backed features.

Fixed by introducing `lib/supabaseClient.js`, a single shared client that's `null` (with a console warning) instead of throwing when the env vars aren't set. All four components now check `if (!supabase) return` before making calls, so missing Supabase credentials degrade gracefully -- feedback/likes just won't work -- instead of crashing the site.

**You still need to set the env vars for feedback and likes to actually function** -- copy `.env.example` to `.env` (for local `npm run dev`) or pass them as Docker build args (see below), filled in with your real Supabase project URL and anon key from the Supabase dashboard (Settings -> API).

## Enhancement pass: structure, reliability, SEO, and polish

On top of the earlier bug fixes, this pass added:

**Reliability -- routes that were previously missing:**
- `app/not-found.jsx` -- a real custom 404 page instead of Next.js's bare default.
- `app/error.jsx` -- a client-side error boundary with a "Try Again" button, so an unhandled render error shows a friendly recovery screen instead of a blank/default page.
- `app/loading.jsx` -- a spinner shown automatically during route transitions.

**Structure -- reduced duplication:**
- `hooks/usePaginatedList.js` -- the near-identical "scroll to header on return" effect and "slice to N items / show all" logic that was copy-pasted across `app/blog/page.jsx`, `app/blog/all/page.jsx`, `app/projects/page.jsx`, and `app/projects/all/page.jsx` is now defined once and reused.
- `data/blogs.jsx` -- documented why both `blogs` and `rawBlogs` exports exist (same array, two names); `Search.jsx` now imports `blogs` like every other file instead of aliasing `rawBlogs`.

**SEO -- previously only the root layout had a title/description, so every page showed the same generic metadata in search results and browser tabs:**
- `app/about/page.jsx` -- static page-specific title/description.
- `app/blog/[id]/page.jsx` and `app/projects/[id]/page.jsx` -- dynamic `generateMetadata` using each blog/project's own title and description.
- `app/icon.svg` -- a generated favicon (fixes the `favicon.ico 404` you saw in the console; Next.js serves this automatically from the `app/` folder).

**UX polish:**
- Mobile nav now closes on tap-outside (previously only the toggle button or picking a link would close it).
- `FeedbackList` and `FeedbackSlider` show animated skeleton placeholders while loading instead of plain "Loading..." text.
- Added `:focus-visible` outlines site-wide for keyboard navigation, smooth-scroll for anchor links, and `prefers-reduced-motion` support so the new animations respect that accessibility setting.
- Email field in the feedback form is now validated (previously accepted any string, including garbage, since it's optional but wasn't format-checked).

**Verification:** since this sandbox can't reach the npm registry or GitHub to run a real `npm install && npm run build`, I ran a brace/paren/bracket balance check across every `.js`/`.jsx` file (35 files, all balanced) and the full `app/globals.css` (475 open / 475 close) as a syntax smoke test. This catches gross mistakes but isn't a substitute for actually running `npm run build` once you have this pushed and `npm install` run -- please do that and let me know if anything doesn't compile.

**Not done, worth knowing about:**
- The like/dislike vote-integrity issue (a vote is tied to a `localStorage` UUID, so clearing storage or an incognito window lets someone vote again) wasn't addressed -- fixing that properly means Supabase-side changes (rate limiting, IP-based checks, or requiring auth), not just app code.
- No automated tests exist for this project; everything above was verified by careful manual review + the syntax check above, not a test suite.

## SEO discoverability + spam protection

- `app/sitemap.js` and `app/robots.js` -- Next.js special files that auto-generate `/sitemap.xml` (every static route plus every individual blog/project page) and `/robots.txt` pointing at it. Uses `NEXT_PUBLIC_SITE_URL` if set, otherwise defaults to `https://rajeshbehera.vercel.app`.
- Feedback form now has a honeypot field (`website`, hidden off-screen and out of the tab order via `.form-honeypot` in `app/globals.css`). Real users never see or fill it; bots that auto-fill every input on a page will, and get silently no-op'd instead of hitting Supabase -- they see a fake "success," so they don't know to try harder.

Deliberately not done: a real CAPTCHA (Turnstile/reCAPTCHA) needs you to create an account with one of those services and hand me a site key -- happy to wire it in whenever you want that extra layer. Also deliberately not done: moving blogs/projects into a database with an admin UI -- discussed and parked for now; worth revisiting once editing code to add content actually becomes a real pain point.

## New features + more bug fixes

**Open Graph / Twitter card images** -- `app/opengraph-image.jsx` (site-wide default) plus dynamic `app/blog/[id]/opengraph-image.jsx` and `app/projects/[id]/opengraph-image.jsx`, generated as real PNGs via Next.js's built-in `next/og` -- no image files needed. Share any project/blog link on LinkedIn, WhatsApp, or Twitter now and it shows a proper preview card instead of bare text. `app/layout.jsx` also gained `metadataBase`, `openGraph`, and `twitter` metadata defaults so these resolve correctly.

**Bug fix, found while doing the above:** the viewport meta tag had a typo -- `width-device-width` instead of `width=device-width` -- which is exactly the "key not recognized and ignored" warning from your browser console earlier. Fixed by replacing the hand-written `<meta>` tag with Next.js's dedicated `viewport` export (also the framework-recommended way to do this in the App Router).

**JSON-LD structured data** -- `app/layout.jsx` now includes a site-wide `Person` schema; blog posts include `BlogPosting` schema (headline, author, date); project pages include `CreativeWork` schema (name, description, tech stack as keywords). Lets Google show richer search results instead of a plain link.

**RSS feed** -- `app/rss.xml/route.js` generates a standard RSS 2.0 feed from `data/blogs.jsx`, linked from the footer and auto-discoverable via a `<link rel="alternate">` in the page head.

**Bug fix:** `LikeDislike.jsx` had no guard against rapid double-clicks -- two clicks in quick succession could fire overlapping Supabase requests before the first one's state update landed, leaving the displayed like/dislike count out of sync with the database. Added an in-flight guard (`isVoting`) that disables both buttons until the current request finishes.

## Color audit fixes

Two real color bugs found while reviewing the palette:

- **Dark mode `--link-hover-active` was `rgb(3, 26, 48)`** -- a near-black navy, essentially invisible against the dark-mode background (`#1f2937`) and the dark navbar/theme-toggle it's also used on. This affected hovered/active nav links, `.link-hover:hover` (footer "Designed by" link, blog/project "read more" links), and the theme-toggle button's border. Changed to `#93c5fd` (a light blue, brighter than the regular `--link-hover: #60a5fa` so the active/hover state visibly stands out, consistent with the rest of the dark-mode accent colors).
- **A later duplicate `.card` rule was silently overriding the themed card border** -- `border: 1px solid var(--border-color, #ddd)` used an undefined variable (`--border-color` doesn't exist anywhere), so every card's border fell back to a flat `#ddd` in both light and dark mode instead of the theme-aware `--card-border` (`#dbeafe` light / `#6b7280` dark) set by the main `.card` rule. Removed the conflicting `border`/`border-radius` overrides so cards use the correct themed border again.

Rest of the palette held up: consistent CSS-variable-based theming, a coherent blue accent (`#60a5fa`/`#3b82f6`), sensible neutral grays, and the gold star-rating color (`#ffd700`) matching in both themes.

## Dynamic color pass -- second accent color, glow, gradients

The site previously ran on a single blue accent for everything, and category labels/skill bars/scrollbars were flat, plain-colored. Added a violet secondary accent (`--accent-secondary`: `#8b5cf6` light / `#a78bfa` dark) and a soft `--accent-glow` tint, then used them for:

- Hero `<h1>` now renders as a blue-to-violet gradient (no `h1` color rule existed before, so this is additive).
- Buttons, the theme toggle, and scroll-to-top get a colored glow shadow on hover, layered on top of the existing scale/brightness hover effect rather than replacing it.
- Cards get a subtle accent-tinted ring on hover alongside the existing drop shadow.
- Project/blog category labels are now colored pill badges (tinted background, violet text) instead of plain inline text -- makes cards easier to scan.
- Skill bars use a blue-to-violet gradient fill instead of a flat color.
- Text selection (`::selection`) and the scrollbar thumb are themed with the same gradient, so browser chrome matches the site instead of defaulting to plain gray/blue.

All additions live in a new "Dynamic Accents" section at the end of `app/globals.css` and don't modify any existing rule's colors -- verified brace/paren counts stayed balanced after the edit.

## Running in Docker

A `Dockerfile`, `.dockerignore`, and `docker-compose.yml` are included, plus `next.config.mjs` now has `output: 'standalone'` for a smaller image. First, copy `.env.example` to `.env` and fill in your Supabase URL/anon key (found under Settings -> API in the Supabase dashboard) -- these are `NEXT_PUBLIC_*` vars, so Next.js bakes them into the client bundle at *build* time, not just runtime.

With Docker Compose (reads `.env` automatically):

```bash
docker compose up --build
```

Or plain Docker:

```bash
docker build -t my-portfolio \
  --build-arg NEXT_PUBLIC_SUPABASE_URL=your-url \
  --build-arg NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key \
  .
docker run -p 3000:3000 my-portfolio
```

Either way, the app is served at http://localhost:3000. If you skip the Supabase env vars, the site still runs -- the feedback form and like/dislike buttons will just fail their Supabase calls (they already fail gracefully in the code).

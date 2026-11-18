# DD — installable PWA

DD as a real, installable Progressive Web App: a Vite static front end plus one secure
serverless API route (`/api/decide`) that holds your Google Gemini API key server-side.
Runs on Gemini's free-tier `gemini-2.5-flash` model — no billing account required.

## 1. Folder structure

```
dd-app/
├─ api/
│  └─ decide.js          ← serverless backend (reads GEMINI_API_KEY, never exposed to the browser)
├─ public/
│  ├─ manifest.json       ← PWA manifest (name, colors, icons)
│  ├─ sw.js                ← service worker (offline app-shell caching)
│  └─ icons/
│     ├─ icon.svg
│     ├─ icon-180.png      ← apple-touch-icon
│     ├─ icon-192.png
│     ├─ icon-512.png
│     └─ icon-512-maskable.png
├─ src/
│  ├─ app.js               ← the whole app (state, rendering, all your existing logic — unchanged)
│  └─ styles.css           ← the Black & Red theme (unchanged)
├─ index.html              ← entry point, wires in the manifest + service worker
├─ vite.config.js
├─ vercel.json
├─ package.json
├─ .env.example
└─ .gitignore
```

Nothing about your decision logic, i18n, scoring, or onboarding flow changed. The only
real change under the hood: calls that used to go through the Claude Artifacts runtime
(`sample.json(...)`) now `fetch('/api/decide')`, and that endpoint calls the Gemini API
(via Google's `@google/genai` SDK) with a key that lives only on the server. The same
system prompt, JSON schema and `{ data, searched }` return shape are preserved exactly,
so `src/app.js` didn't need any further changes beyond the fetch shim it already had.

## 2. Run it locally

You'll need [Node.js](https://nodejs.org) 18+ and the [Vercel CLI](https://vercel.com/docs/cli)
(the CLI is what lets you run the `/api` serverless function locally alongside the front end —
plain `vite` alone won't serve `/api/decide`).

```bash
cd dd-app
npm install
npm install -g vercel        # one-time, if you don't have it already

cp .env.example .env
# edit .env and paste your real key (free, no billing needed — get one at
# https://aistudio.google.com/apikey):
#   GEMINI_API_KEY=AIza...

vercel dev                   # serves the app AND /api/decide on http://localhost:3000
```

Open `http://localhost:3000` on your laptop, or on your phone via your computer's LAN IP
(e.g. `http://192.168.1.23:3000`) to test "Add to Home Screen" before deploying.

(`npm run dev` / plain `vite` also works for quick UI iteration, but `/api/decide` calls
will 404 that way since Vite alone doesn't run serverless functions.)

## 3. Push to GitHub

```bash
git init
git add .
git commit -m "DD: installable PWA with secure serverless backend"
gh repo create dd-app --private --source=. --remote=origin --push
# (or, without the gh CLI: create an empty repo on github.com, then)
# git remote add origin https://github.com/<you>/dd-app.git
# git branch -M main
# git push -u origin main
```

`.env` is already in `.gitignore` — your API key never gets committed.

## 4. Deploy to Vercel

**Option A — CLI (fastest):**

```bash
vercel          # first run: links/creates the project, deploys a preview
vercel --prod    # promotes to your production URL
```

**Option B — Vercel dashboard:**

1. Go to [vercel.com/new](https://vercel.com/new) and import the GitHub repo you just pushed.
2. Framework preset: Vercel auto-detects **Vite** — leave build command `npm run build` and
   output directory `dist` as-is (already set in `vercel.json`).
3. Before the first deploy, open **Project Settings → Environment Variables** and add:
   - `GEMINI_API_KEY` = your real key (mark it for Production, Preview, and Development)
   - optionally `GEMINI_MODEL` if you want to pin a different model (defaults to `gemini-2.5-flash`)
4. Click **Deploy**. You'll get a URL like `https://dd-app.vercel.app`.

If you add the env var *after* an initial deploy, trigger one redeploy (Vercel dashboard →
Deployments → ⋯ → Redeploy) so the function picks it up.

## 5. Install on phones

- **iPhone (Safari):** open the Vercel URL → Share icon → **Add to Home Screen**.
- **Android (Chrome):** open the URL → Chrome will usually offer **Install app** / **Add to
  Home screen** automatically (or via the ⋮ menu) once the manifest + service worker are
  detected, which they are as soon as the site is served over HTTPS (Vercel does this by
  default).

Send your friends the same URL — no App Store, no TestFlight, just the link.

## Notes on persistence & security

- **Local persistence:** profile, decision history, and satisfaction/peace scores save to
  `localStorage` on each phone automatically (`src/app.js` already falls back to `localStorage`
  whenever no cloud database is configured, which is always true here — see `boot()`). Nothing
  is synced between devices; each install has its own history.
- **API key security:** `api/decide.js` runs only on Vercel's servers. The browser only ever
  talks to your own `/api/decide` endpoint over your own domain — it never sees
  `GEMINI_API_KEY`.
- **Live web grounding:** when the app wants real-world facts (prices, specs, recent
  news), `enableSearch` is sent to `/api/decide`, which turns on Gemini's built-in
  **Google Search grounding** tool (`tools: [{ googleSearch: {} }]`). Gemini decides on
  its own whether to search and folds the results into its answer within the same
  call — there's no separate search API key, and no manual tool-execution loop to
  maintain. The backend reports `searched: true` whenever Gemini's response includes
  grounding metadata (an actual search happened), which is what lights up the "🔎
  searched the web" badge in the app.
- **Multimodal images:** photos attached to an option are base64-encoded in the browser
  exactly as before and sent as `inlineData` parts to Gemini, so photo-based decisions
  keep working unchanged.
- **Free tier:** `gemini-2.5-flash` has a free quota (no billing account required) — see
  [ai.google.dev/pricing](https://ai.google.dev/pricing) for current limits. If you hit
  a rate limit, `/api/decide` returns a 429 and the app shows its existing "try again"
  error state.
- **Switching models/providers:** want a different Gemini model? Set `GEMINI_MODEL` (no
  code change needed). Want to go back to Anthropic's Claude instead? Swap the
  `@google/genai` call in `api/decide.js` for a `fetch('https://api.anthropic.com/v1/messages', ...)`
  call — the system prompt, `{ data, searched }` return shape, and everything in
  `src/app.js` can stay exactly as-is either way.

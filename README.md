# Aethel — React (Vite + TypeScript)

Luxury skincare landing built with React + TypeScript: responsive layout, side menu, cart drawer, scroll-in sections, and newsletter validation.

## Scripts

```bash
npm install
npm run dev          # http://localhost:5173 — base "/" 
npm run build        # production bundle for GitHub Pages
npm run preview      # test production build locally
```

### Recommended `build` script

After `vite build`, GitHub Pages needs `404.html` = `index.html` so SPA routes work on refresh. Either:

- **CI:** `.github/workflows/pages.yml` runs `cp dist/index.html dist/404.html` after build.
- **Local:** add to `package.json`:

```json
"build": "tsc -b && vite build && node scripts/copy-404.mjs"
```

(`scripts/copy-404.mjs` is included in this repo.)

## Assets

Put images in `public/assets/images/`:

| File | Use |
|------|-----|
| `banner.jfif` | Hero background |
| `facecare.jfif` | Face category |
| `bodycare.jfif` | Body category |
| `haircare.jfif` | Hair category |

## Stack

- React + TypeScript  
- Vite  
- React Router  

## GitHub Pages

Live URL shape: `https://<username>.github.io/Aethel-Beauty-Branding/`

1. **`vite.config.ts`** — `base` is `/Aethel-Beauty-Branding/` for production builds (not for `vite dev`).
2. **`src/App.tsx`** — `BrowserRouter` uses `import.meta.env.BASE_URL` as `basename`.
3. **Repo settings** — **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Push to **`main`**; check **Actions** for a green run. Wait 1–2 minutes after deploy.

### If the site is blank or assets 404

- Confirm the **repository name** matches the path in `vite.config.ts` (`GITHUB_PAGES_BASE`). If you rename the repo, update that constant and push again.
- Open the browser **Network** tab: JS/CSS should load from `/Aethel-Beauty-Branding/assets/...`.

### Rename repository?

Change `GITHUB_PAGES_BASE` in `vite.config.ts` to `/Your-New-Repo-Name/` (leading and trailing slashes).

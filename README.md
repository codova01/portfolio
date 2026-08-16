# Navya — Portfolio

React + Vite + Tailwind portfolio, dark ember/maroon aesthetic.

## Run locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## Build for production

```bash
npm run build
```

Outputs to `dist/`.

## Deploy (free, easiest: Vercel)

1. Push this repo to GitHub (see below).
2. Go to vercel.com → New Project → import your repo.
3. Framework preset: Vite. Leave build settings default. Deploy.

## Push to your existing GitHub repo

From inside this folder (or after copying these files into your cloned repo):

```bash
git add .
git commit -m "Add portfolio site"
git push
```

## Editing your content

All content lives in `src/App.jsx`:
- `PROJECTS` array — your project cards
- `SKILLS` array — skill groups
- Hero text, email, and social links are inline in the JSX — search for your name/email to find them.

Colors and fonts are defined in `tailwind.config.js` under `theme.extend`.

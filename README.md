# Plarem Web

Marketing site for [Plarem](https://plarem.app) — a location-based reminder app for Android. Attach a task to a place and get notified the moment you arrive, even with the app closed.

Built with [Next.js](https://nextjs.org) 16, React 19, and Tailwind CSS 4.

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Landing page — features, how it works, FAQ, download CTA |
| `/about` | Product story and values |
| `/support` | Troubleshooting and contact |
| `/press` | Press kit, store-listing copy, brand assets |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |

## Product copy

All store-listing text, FAQs, and feature descriptions live in a single file:

```
lib/app-data.ts
```

Edit that file to update copy across every page at once.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Copy `.env.example` to `.env.local` and set your production URL:

```bash
cp .env.example .env.local
```

## Deploy

The site is designed for [Vercel](https://vercel.com). Set `NEXT_PUBLIC_SITE_URL` to your production domain in the Vercel project environment variables.

```bash
npm run build   # verify locally
npx vercel      # deploy
```

## Related

- Mobile app repo: `plarem` (React Native, Android package `com.plarem`)

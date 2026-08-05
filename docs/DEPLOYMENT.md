# Deployment

Repository: <https://github.com/ShauryaCoder101/strucon> (branch `main`)

## Deploy to Vercel

Vercel needs to be connected with your own account, so these steps are done from
the dashboard once. After that, every `git push` to `main` deploys automatically.

1. Go to <https://vercel.com/new> and sign in with GitHub.
2. **Import** the `ShauryaCoder101/strucon` repository.
3. Framework preset is detected automatically as **Next.js** — leave the build
   command, output directory, and install command at their defaults.
4. Add the environment variables below (Settings → Environment Variables), then
   click **Deploy**.

### Environment variables

| Variable | Required | Purpose |
|----------|----------|---------|
| `ADMIN_PASSWORD` | Yes, to use `/admin` | Password staff type at `/admin/login`. Use a long, random value. |
| `ADMIN_TOKEN` | Yes, to use `/admin` | Opaque session-cookie value. Use a separate long random string. |
| `RESEND_API_KEY` | For live lead emails | Not yet wired — see [REQUIREMENTS.md](../REQUIREMENTS.md) §6. |
| `LEADS_TO_EMAIL` | For live lead emails | Inbox that receives form submissions. |

> **Security:** the repository is public, so the app refuses admin sign-in
> entirely when `ADMIN_PASSWORD` / `ADMIN_TOKEN` are unset in production. There is
> no default password on a live deployment — this is deliberate.

Generate strong values with:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

## Known limitation: admin saving on Vercel

The built-in CMS persists content by writing JSON to `content-data/` on disk.
**Vercel's serverless filesystem is read-only**, so on Vercel:

- ✅ The whole public site works — all 44 routes, forms, SEO, schema.
- ✅ `/admin` loads and content is viewable/editable in the UI.
- ❌ **Save fails.** The API returns a clear message rather than a generic error.

Until a storage backend is connected, content changes are made by editing
`src/content/*.ts` (or `content-data/*.json`) locally and pushing to `main`.

### Options to restore admin saving

| Option | Effort | Notes |
|--------|--------|-------|
| **Vercel Blob** | Small | Swap the read/write functions in `src/lib/content-store.ts`. The store is already abstracted behind `readCollection` / `writeCollection`, so this is a contained change. |
| **Vercel Postgres / Neon** | Medium | Better if you later want versioning or multiple editors. |
| **Host with a persistent disk** (Railway, Render, VPS) | None (code) | Works as-is, no code change; loses Vercel's edge network. |

## Before pointing strucon.net at this

See the go-live checklist in [business-case.html](business-case.html) §10 —
in particular the 301 redirect map from the old WordPress URLs, and verifying
the placeholder stats, ISO certification version, client names, and team bios.

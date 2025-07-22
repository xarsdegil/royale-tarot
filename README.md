# Royale Tarot

Monorepo layout:

- `apps/frontend` – Next.js 14 App Router UI
- `apps/backend` – Express API server
- `packages/common` – shared types and helpers
- `i18n/en.json` – English translations

## Development

```bash
pnpm install
pnpm dev       # run frontend and backend in parallel
```

## Build

```bash
pnpm turbo build
```

Environment variables:

- `CR_TOKEN` – Clash Royale API token
- `OPENAI_API_KEY` – OpenAI key for future text generation

## Migration Checklist

- move old Next.js project into `apps/frontend`
- convert pages to App Router structure
- added Express backend with example `cr` route
- shared code extracted to `packages/common`
- new workspace scripts using pnpm + Turborepo

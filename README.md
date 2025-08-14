# Monorepo Template

Opinionated monorepo scaffold with pnpm workspaces and Turborepo pipeline.

Quick start

1. Install pnpm: https://pnpm.io/
2. Bootstrap:

```bash
pnpm install
pnpm -w run build
```

Structure

- `packages/*` - shared packages (libraries)
- `apps/*` - runnable applications. This template includes:
	- `apps/api` — backend API service
	- `apps/backend` — internal backend service
	- `apps/frontend` — frontend app (client)
	- `apps/website` — public website
- `tools/*` - developer tooling scripts
- `docs/*` - repository-level documentation and architecture notes

How to use this repo as a template

- Customize `package.json` and the workspaces list.
- Add new `packages` or `apps` folders and update their package.json.
- Push this repo as a GitHub template and use it to bootstrap new projects.

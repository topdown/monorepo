# Using this repository as a template

This repository is an opinionated monorepo scaffold (pnpm workspaces + Turborepo). Use the GitHub "Use this template" button to create a new repository from this template.

Quick checklist after creating a repo from this template

- Update repository metadata
  - Repository name, description, and topics on GitHub.
  - `LICENSE` if you want a different license.
- Replace project-wide package names
  - Search for `monorepo-template`, `@monorepo`, and replace with your org/namespace.
  - Update `package.json` (root) fields: `name`, `version`, `author`, and any project scripts.
- Adjust workspaces
  - Update `pnpm-workspace.yaml` if you add/remove top-level workspace globs.
- CI and secrets
  - Configure GitHub Actions secrets (for publishing, releases, etc.).
  - Review `.github/workflows/ci.yml` and update node versions or steps as needed.
- Publishing packages
  - For packages you want to publish to npm, add `publishConfig` or CI steps and set package `name` and `version`.
  - Consider using `changesets` or `pnpm` + CI to automate releases.
- Tooling and linting
  - Add or update linters, formatters, and commit hooks (prettier, eslint, husky) to match your preferences.
- Docs
  - Update `README.md` with project-specific instructions and architecture notes.

Bootstrap locally (recommended)

```bash
# enable node package manager shim
corepack enable
corepack prepare pnpm@latest --activate

# install dependencies and build everything
pnpm install
pnpm -w run build
```

Recommended minimal changes for a fresh project

- Replace the example `@monorepo/utils` package name and update `apps/*` dependencies to your package names.
- Add a CI step that runs tests and publishes on tags (if you plan to publish packages).
- Add a `TEMPLATE-SETUP.md` if you need project-specific onboarding steps for contributors.

Troubleshooting

- If you see module resolution errors between packages, run `pnpm install` after changing package names and ensure each package `package.json` has correct `name` and `main/types` fields.
- If `pnpm` activation fails, ensure you have Node >= 16 and Corepack available; you can also install pnpm globally: `npm i -g pnpm`.

Optional enhancements

- Add `changesets` for release management.
- Add `lint-staged` + `husky` for pre-commit checks.
- Add template placeholders (like `{{PROJECT_NAME}}`) and a small script to replace them on repo creation.

If you want, I can:
- Customize this `TEMPLATE.md` to include project-specific placeholders and a setup script.
- Add a `TEMPLATE-SETUP` script that performs find/replace for package names and repo metadata.

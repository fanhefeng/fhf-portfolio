# Deployment targets

- `main` contains the Vite source. The existing Vercel Git integration builds it for production.
- `npm run deploy` builds locally and publishes `dist` to `gh-pages` for GitHub Pages.
- `gh-pages` contains generated assets, not a Vite project. Do not run `vite build` on that branch.

`public/vercel.json` is intentionally copied by Vite to the build output root. It disables Vercel automatic deployments **only for `gh-pages`**, preventing a second build of the generated files. Other branches keep their default behavior. Keep this file in `public` so every Pages publish preserves the rule. It does not change Vercel project settings, domains, protection, or the production branch.

Reference: https://vercel.com/docs/project-configuration/git-configuration#git.deploymentenabled

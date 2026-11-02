# IS117 · Build, collaborate, demonstrate

Fall 2026 project and Demo Day guide for Keith Williams's IS117 sections 005 and 007 at NJIT.

**[Read the published guide](https://kaw393939.github.io/is117-demo-days/)** · **[Request a Demo Day slot](https://github.com/kaw393939/is117-demo-days/issues/new/choose)**

Students build an individual portfolio, an individual Plain White T-Shirt business, and a partner/group business project. IS117 develops early foundations for internships and customer-facing engineering; it does not by itself establish FDE job readiness.

## Develop the site

Use Node.js 22 or later (CI uses Node 24).

```sh
npm ci
npm run docs:dev
npm run check
npm run docs:build
npm run docs:preview
```

Content lives in `docs/`. VitePress config/theme live in `docs/.vitepress/`. GitHub Actions publishes `main` to GitHub Pages. No paid service or API key is needed to build this documentation site.

## Maintain the schedule

`data/demo-schedule.json` is the schedule source of truth. Edit an assignment with an issue number and team/project label, run `npm run schedule:sync`, and commit the data and generated pages. Never edit the generated section pages directly. See [maintainer instructions](docs/course/maintaining.md).

Issue forms collect requests; they do not automatically reserve a slot or publish student information. Instructor confirmation and the schedule table establish the booking. No names or bookings are prepopulated.

## Course authority

Canvas retains grading policies, official assignment due dates, feedback, and private course communication. This guide publishes the instructor's project direction and Demo Day logistics. New guidance applies to future work, not retroactively to earlier submissions. See [schedule sources](docs/course/sources.md).

## Reference assets

Competitor screenshots are educational references to third-party websites, captured November 2, 2026. They are not student storefront assets and are not licensed for reuse by this repository. Other linked resources remain the property of their owners.

## Dependency maintenance

VitePress is pinned to stable 1.6.4. Its Vite dependency is overridden to patched 6.4.5 to avoid advisories in the older default dependency tree; the production build and browser preview are verified with this combination. Recheck compatibility and audit results when updating either version.

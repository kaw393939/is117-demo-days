# Checks actually run on the class examples

**Checked November 2, 2026.** These are implementation checks performed on the real class-demo code. They are separate from the fictional student submissions, peer conversations, and illustrative grades.

## Automated checks

Command: `npm run check:examples` using Node 24.

| Behavior | Recorded result |
| --- | --- |
| Twelve A/B pages and twelve preview images exist and are served | Pass |
| Six project packets and six professional-profile files exist | Pass |
| Four store/service workflows accept valid synthetic inputs | Pass |
| Shirt quantities outside 1–5, unsupported sizes, and invalid emails are rejected | Pass |
| The server calculates shirt totals from its product data, ignoring a false submitted total | Pass |
| Unsupported service/topic values and invalid emails are rejected | Pass |
| Created records can be read; SQLite records survive a server restart | Pass |
| The local server does not serve its `server.mjs` source | Pass |

The test source is [scripts/check-examples.mjs](https://github.com/kaw393939/is117-demo-days/blob/main/scripts/check-examples.mjs). A passing server test is not a complete browser or usability test.

## Browser checks from the example release

| Check | Recorded result |
| --- | --- |
| Campus Cotton: missing size blocks order review | Observed |
| Campus Cotton: two shirts produce a $50 review and simulated confirmation | Observed |
| Studio White: three shirts produce $126; the SQLite record remains after reload | Observed |
| Room Ready: desk request produces a pending receipt without claiming a booked appointment | Observed |
| All twelve product versions at a 390px viewport | No page-wide horizontal overflow observed |
| Portfolio case studies and résumé/profile links | Rendered and available |

The real interface previews in each submission come from those runnable products. The generated concept photos are labeled as illustrations of fictional businesses.

## Limits

No manufactured product, customer demand, sales improvement, real booking, external email, or hiring outcome was tested. No full accessibility audit is claimed. A screenshot cannot prove that a peer performed a task, and a working application cannot prove a student's understanding.

[How the sample grades work](/examples/submissions/grading-guide) · [Run the source yourself](/examples/submissions/run-examples).

# IS117 site audit and student walkthrough · November 2, 2026

The main problem was deciding what to do next, rather than broken pages. A simulated student walkthrough exposed an unclear submission map, several overlapping process descriptions, long example pages, and a search result that put examples ahead of explanations.

This is an expert walkthrough from a student's perspective, not a study with actual NJIT students. It supports practical design changes; it does not prove student comprehension or improved learning outcomes.

## Link and content checks

- The initial live crawl checked **150 internal URLs**, including linked pages, scripts, images, and downloads: **no internal HTTP errors or 404s**.
- It checked **102 external URLs**. One section-007 GitHub signup URL returned **429 / rate limited**. The browser also showed a temporary login-limit notice. This is not evidence that the issue template is missing; the repository contains it. Retry through the Demo Days page after GitHub's limit clears. The other requests returned successful responses.
- The expanded local audit checked **260 resources** from the build, including otherwise unlinked guide pages, fonts, scripts, raw source, profiles, and downloads: **no HTTP errors**.
- A static parser flagged twelve `#main` links in the example shells. In-browser checks confirmed that JavaScript creates the target on all twelve pages. These were false positives, not broken skip links.
- All twelve public A/B products rendered their main content. Their generated links and image URLs were added to the audit inventory.
- Source checks cover 49 guide pages, 26 nonoverlapping demo slots, six completed packets, 24 rubric assessments, and accurate score totals. Product checks cover valid/invalid inputs, server-calculated totals, and SQLite persistence.
- A real navigation problem was found during the revised walkthrough: a search result could target text inside a closed disclosure without revealing it. The theme now opens containing disclosures for initial deep links, route changes, and hash links. This behavior is checked in the browser before release.

An HTTP 200 does not prove that every external job is still accepting applications or that all page content remains accurate. Career pages retain their dated evidence notes. This review is not a complete accessibility audit. The intentional VitePress 404 page is not counted as a broken link.

## Student tasks, findings, and changes

| Student task | What was confusing | Change |
| --- | --- | --- |
| Start this week's work | Home described the course but left several possible next links | A short start sequence: read the assignment, inspect one research example, get the template, bring notes to Nov 5 |
| Work out what to submit | Three projects × four steps appeared to conflict with eight reviews | An explicit map: four individual reviews cover T-shirt + portfolio; four group reviews cover the shared business record |
| Understand “two” | Two samples per category could be confused with the two versions students must build | One research table; two audience/position ideas; two short approaches; two working versions of each student's project |
| Learn a new term | Searching “persona” put six sample cards before the method | Instructional pages receive search priority; the teaching guide has a clear vocabulary-based title |
| Connect research to code | Students had to infer the relationship across separate explanations | A concrete observation → persona hypothesis → story → feature → acceptance check → feedback example |
| Write a specification | An eight-part sequence could feel like another assignment alongside the four milestones | A small A/B plan and a four-action write/build/try/update loop; detailed template remains optional |
| Learn from graded work | Every milestone's full rubric was visible at once | Step links and separate feedback disclosures, with all submitted work preserved |
| Save the template | A rendered web page is less convenient to copy into a repository | A real Markdown download, generated from the guide's template |
| Explain SQLite | A public static demo could be mistaken for meeting the backend requirement | Distinguish public browser storage from a runnable SQLite backend; state what code, setup, and actual checks show |
| Plan group scope | A work-allocation example might imply a required staff dashboard | Explicitly label it one possible split; a receipt/history workflow can be enough |

The assignment page now explains where to keep work if the matching Canvas submission entry is not visible. It does not invent a submission box, uploader rule, or gradebook points. Those still need instructor setup in Canvas.

## Reading load and level

The pages use direct actions, familiar terms, small examples, and technical words explained in context. Necessary terms such as persona, specification, backend, and SQLite remain because students need to learn them. The goal is accessible college-level instruction, not removing the professional process.

Approximate visible-word counts from the browser's `main.innerText`, excluding closed disclosures and navigation:

| Page | Before | After | Interpretation |
| --- | ---: | ---: | --- |
| Campus Cotton example | 951 | 539 | About **43% less text on first opening**; full work and feedback remain available |
| Research/personas/stories guide | 561 | About 400 | About **29% less initial text**, with a concrete example before the detailed method |
| Assignment | 515 | 588 | Slightly longer to fill the important hand-in gap; optional comparisons and final details are folded away |

These are interface measurements, not reading-level scores or evidence of faster learning. Folding text is useful only when labels are clear and search/deep links reveal the right section. The content does not introduce extra required deliverables or alter the four-part rubric.

## What should happen next

1. **Before the first research deadline: finish Canvas alignment.** Publish the corresponding individual/group entries, confirm due dates and gradebook points, and link directly to the guide. Clarify whether each group member submits or Canvas handles a group submission. The public site cannot resolve those settings. Confirm presentation delivery arrangements there as well.
2. **Try a small real-student pilot.** Ask three to five students, without coaching, to find their first deadline, locate the template, explain what “two versions” means, identify the submission destination, and find the SQLite expectation. Note where they hesitate. A useful initial target is completing each lookup within a few minutes; do not turn this into another graded assignment.
3. **Use one example in class for each cycle.** Show a short piece of student work, ask students to suggest a rubric score/revision, then reveal feedback. This makes the examples active learning tools rather than a reading list.
4. **Keep the weekly route current.** Update the home-page start task as the class moves to planning, building, and peer review. Keep the existing predictable schedule and protected feedback time.
5. **Refine only after observing the pilot.** If students still lose their place, add a simple current-step/section chooser. Avoid adding more pages, frameworks, templates, or mandatory reports before confirming the need.

The intended learning loop is: **see a small example → make a choice → build/check it → get feedback → explain the improvement**. Evaluate that loop through students' work and explanations, rather than treating a larger site or longer report as better learning.

## Evidence and maintenance

Local audit artifacts are in `../outputs/is117-site-audit/`: initial crawl, expanded crawl, runtime checks, and before/after reading measurements. Screenshots accompany the delivered review. Regenerate worked pages and the editable template with `npm run examples:generate`; retain the established content, product, assessment, and production-build checks.

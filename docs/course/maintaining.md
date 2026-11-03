# Maintaining this guide

## Editing and publishing

Edit Markdown in `docs/`, run `npm ci` if needed, then `npm run check` and `npm run docs:build`. Push to `main`; GitHub Actions builds and publishes GitHub Pages. Pull requests run the same content/build checks without deployment.

## Confirm a Demo Day request

1. Review the issue's section, team size, slot preference, links, and contribution plan.
2. Check the schedule data and other pending requests for conflicts. A request does not reserve a slot automatically.
3. Edit `data/demo-schedule.json`. Set the slot's `assignment` to an object such as `{"issue": 12, "team": "Example project"}`. Use an actual signup issue; the example number is not a booking.
4. For a trio use the reserved 12-minute slot. Other changes to slot sizes/times require checking the day's ending time and notifying affected teams.
5. Run `npm run schedule:sync`, `npm run check`, and `npm run docs:build`. Commit both data and generated schedule pages.
6. Comment on the signup issue with the confirmed section/date/time/slot, apply `confirmed`, and remove `signup-request` if appropriate. Publish the change. Closing an issue alone does not cancel a slot; update the data too.

Do not publish rosters or private student records. Team handles and public-facing project titles are sufficient. Resolve private circumstances through Canvas.

## Keep career references useful

For each internship retain the employer URL, research date, location, eligibility, deadline wording, and evidence status. Mark closed or unverified roles as examples. Do not convert an annualized salary into an internship payout. No automated deadline monitoring is configured.

## Course changes

Update schedule/source notes when Canvas or registrar details change. Keep graded deadlines in Canvas and distinguish planning targets from due dates. Preserve prior assignment criteria for already-submitted work.

## Milestone publication status

Both sections have **twelve published 100-point progress reviews plus three published 100-point final assessments**: fifteen grading entries per section, not fifteen checkpoints. Five cycle modules and a **Final Products** module expose the corresponding links. The course homes are short outlines with four published reference pages; the earlier Node module is now labeled **Earlier Lessons — Node.js Web Server**.

Student View followed both homes to all four reference pages and Modules. All twelve review headings matched their intended stage/project, and all three final entries per section opened. Career Research is a private two-role-card/250–350-word reflection, due November 12 at 8:30 a.m. in 007 and 11:30 a.m. in 005. Group and portfolio timing follow each section's class plan. Portfolio Build may show the group project in progress; SQLite needs planning before T-shirt Build.

All four group checkpoints per section use the correct final-project team set and individual grading. Teams form November 5; actual membership and shared submission behavior still need confirmation with students. A changed submitted URL goes through Canvas Inbox. Continue the same sites and records through December 6; final assessments reuse those links and Demo Day evidence without a second individual upload.

## Review categories and final assessment setup

The instructor confirmed **50% Assignments / 50% Projects and Tests** on November 2. Academic Engagement remains 0%. All twelve 100-point progress reviews per section belong in Assignments, including Improve and career Research. The earlier AI reading also belongs in Assignments; in 007, assignment **764116** was moved there from Projects and Tests, changing only its category. Other earlier assignment categories, points, and criteria were unchanged; no recorded assignment scores were edited.

Each section has three distinct **100-point final assessment rows** in Projects and Tests: T-shirt, group business, and portfolio. Hands On Test 1 remains 100 points there. These four equal items each account for 12.5% of the course; the three final products together account for 37.5%. Use Complete, Thoughtful, Checked, and Understood, 25 points each. Final entries have **No submission** and a December 6, 11:59 p.m. readiness date. The instructor assesses the existing links, finished products, each student's contribution, and Demo Day explanation.

**Saved settings and student access verified:** 007 T-shirt **769161**, group **769162**, portfolio **769163**; 005 T-shirt **769167**, group **769168**, portfolio **769169**. All six were reopened and verified: published, Projects and Tests, 100 points, No submission, counted in grading, and individual assessment. The date field did not fully hydrate during the first setting read, so deadline confirmation comes from Student View: all six showed December 6 at 11:59 p.m., 100 points, no Start Assignment button, and the no-extra-upload instructions. Both published Final Products modules showed all three links: 007 module **368676** and 005 module **368677**.

Both Canvas Syllabus pages now contain a dated November 2 clarification of the 50/50 categories, three current final products, and legacy-attachment conflict. Original attachments were retained; their module-item labels now say **Earlier syllabus attachment — current grading and dates are on Canvas Syllabus**, verified after reloading. Five Improve descriptions and four Weekly Work/Demo Days reference pages were read back after replacing old “no extra assignment” shorthand with final-assessment reuse and no extra upload.

These checks establish saved settings, publication, and visible instructions. Student View was exited without a submission, reset, or grade entry. Actual student submissions, final grading, real team behavior, human peer participation, and a volunteer usability pilot remain untested. No Canvas import/export was used. No recorded assignment scores were edited; corrected category placement governs the calculated course totals. Grade calculations were not tested using real student data.

## Keep the student path simple

The five top-level destinations are Start here, Examples, Schedule, Demo Days, and Careers. The introduction at `/course/overview` connects the three projects, work management, and professional goals; the home page and first navigation item lead there. Keep career actions distinct from graded submissions and link to current original opportunity/event sources. Keep task instructions on milestone/project pages and put deeper references behind contextual links. Preserve existing URLs. Use familiar terms and define necessary vocabulary on first use. Keep example details expandable, label fictional evidence, and retain both versions without doubling the required technical scope. Update the source download whenever runnable examples change.

## Keep examples and brand references together

Edit project facts/briefs in `docs/public/samples/projects.json`, source interpretations in `data/brand-references.json`, assessment evidence in `data/graded-examples.json`, and the generator in `scripts/generate-student-examples.mjs`. Run `npm run examples:generate` to synchronize the six guide pages, completed records, assessments, starter, and ZIPs. If working UI changes, recapture all twelve previews through the browser before packaging. Update the technical receipt with checks actually performed. Preserve the distinction between fictional student/peer scenarios and actual implementation checks.

Never turn an interpreted archetype into an official brand claim, a source's displayed reviews into independently verified evidence, or a combined visual/hierarchy comparison into a causal conversion result. Recheck live pages when their flows change.

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

Section 007 has twelve published 100-point assignments with revised HTML saved and publication verified through Chrome. Existing grading-category weights are unchanged. Career exploration is portfolio Research (Nov 12), followed by portfolio Plan (Nov 17). Group deadlines are Research Nov 17, Plan Nov 24, Build Dec 3 (8:30 a.m.), and Improve Dec 6 (11:59 p.m.). All five project modules and their items are published; headings and instruction-link labels match the staggered schedule. All four group checkpoints use “IS117 Final Project Teams — 007” and individual grading; Build/Improve settings were reopened and checked after saving.

The published Canvas home is a short outline with four published reference pages: Foundations/Earlier Work, Weekly Projects, Career/Portfolio, and Demo Days. After publication, Student View followed the home outline to all four reference pages and showed all twelve checkpoint links in Modules. Portfolio Research opened with Start Assignment, text entry, 100 points, November 12 at 8:30 a.m., and the private two-card/250–350-word reflection instructions. The current-meeting and next-class links were visible on the home page. These checks verified access, not an actual submission or grade. Student View was exited without submitting or resetting it. Teams form November 5; confirm the real pairs/trio in the group set then. Actual student submission, group submission, and grade behavior have not been tested. No student work or grades were entered.

The cross-unit review clarified that portfolio examples' reference research is optional, a portfolio checkpoint can show the group project in progress, SQLite must be planned before T-shirt Build, and December 3 individual review records lead to updates at the same URLs through December 6. A changed submitted URL should be reported through Canvas Inbox; no extra individual assignment is added.

Section 005 has an updated [class-by-class plan](/course/section-005), twelve published project checkpoints, and five published project modules with all their items. Its course home and four reference pages are published. Assignment and module publication were verified after reloading Canvas. Student View confirmed the Monday/Thursday 11:30 a.m. meeting details and short home outline, followed all four reference-page links from home and back, and showed all twelve checkpoint links in Modules. Career Research opened with Start Assignment, text entry, 100 points, and November 12 at 11:30 a.m.; portfolio Build opened with Start Assignment, November 23 at 11:30 a.m., and the actual-profile, three-repository, résumé, and group-in-progress instructions. Student View was exited without submitting or resetting it. Actual submission, group submission, and grade behavior remain untested. Teams form November 5; confirm real membership then. Use Section 005’s own dates, not Section 007’s. No Canvas import/export was used and no student grade/submission was changed. The [worked journey](/examples/student-journey) and [term role-play](/examples/term-walkthrough) follow the new sequence and label extra portfolio reference research as optional.

## Keep the student path simple

The five top-level destinations are Start here, Examples, Schedule, Demo Days, and Careers. The introduction at `/course/overview` connects the three projects, work management, and professional goals; the home page and first navigation item lead there. Keep career actions distinct from graded submissions and link to current original opportunity/event sources. Keep task instructions on milestone/project pages and put deeper references behind contextual links. Preserve existing URLs. Use familiar terms and define necessary vocabulary on first use. Keep example details expandable, label fictional evidence, and retain both versions without doubling the required technical scope. Update the source download whenever runnable examples change.

## Keep examples and brand references together

Edit project facts/briefs in `docs/public/samples/projects.json`, source interpretations in `data/brand-references.json`, assessment evidence in `data/graded-examples.json`, and the generator in `scripts/generate-student-examples.mjs`. Run `npm run examples:generate` to synchronize the six guide pages, completed records, assessments, starter, and ZIPs. If working UI changes, recapture all twelve previews through the browser before packaging. Update the technical receipt with checks actually performed. Preserve the distinction between fictional student/peer scenarios and actual implementation checks.

Never turn an interpreted archetype into an official brand claim, a source's displayed reviews into independently verified evidence, or a combined visual/hierarchy comparison into a causal conversion result. Recheck live pages when their flows change.

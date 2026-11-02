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

Section 007 now has twelve unpublished placeholders: four T-shirt, four team-business, three portfolio, and one career reflection. Its career deadline is November 12 at 8:30 a.m. Five unpublished weekly/career modules connect the existing assignments to the central class plan. Six concise HTML descriptions are saved (T-shirt Research/Plan, team Research/Plan, career, and portfolio Improve); six remain pending because Safari’s full editor intermittently renders blank. The first two team assignments use the new empty final-project group set with individual grading. Remaining team settings and actual pairs/trio require completion before publication. The course home now links the central class plan and uses the revised project scope and schedule. Section 005’s nine earlier combined-review drafts are unchanged. No import or export was used; earlier submissions and category weights were preserved.

A subsequent Safari-only retry confirmed the assignment detail pages load but the edit form can remain entirely absent; prepared HTML cannot be pasted until an input exists. Section 007 Student View verified the updated home link and hidden draft modules, then was exited without a submission. [The full term role-play and actual checks](/examples/term-walkthrough) distinguish fictional interactions from browser/SQLite verification.

Before publishing, verify descriptions, one team submission per actual pair/trio, dates, student visibility, and the complete submission flow. Do not infer readiness from placeholder creation.

## Keep the student path simple

The five top-level destinations are Start here, Examples, Schedule, Demo Days, and Careers. The introduction at `/course/overview` connects the three projects, work management, and professional goals; the home page and first navigation item lead there. Keep career actions distinct from graded submissions and link to current original opportunity/event sources. Keep task instructions on milestone/project pages and put deeper references behind contextual links. Preserve existing URLs. Use familiar terms and define necessary vocabulary on first use. Keep example details expandable, label fictional evidence, and retain both versions without doubling the required technical scope. Update the source download whenever runnable examples change.

## Keep examples and brand references together

Edit project facts/briefs in `docs/public/samples/projects.json`, source interpretations in `data/brand-references.json`, assessment evidence in `data/graded-examples.json`, and the generator in `scripts/generate-student-examples.mjs`. Run `npm run examples:generate` to synchronize the six guide pages, completed records, assessments, starter, and ZIPs. If working UI changes, recapture all twelve previews through the browser before packaging. Update the technical receipt with checks actually performed. Preserve the distinction between fictional student/peer scenarios and actual implementation checks.

Never turn an interpreted archetype into an official brand claim, a source's displayed reviews into independently verified evidence, or a combined visual/hierarchy comparison into a causal conversion result. Recheck live pages when their flows change.

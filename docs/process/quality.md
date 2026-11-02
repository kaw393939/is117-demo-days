# Test your site and get feedback

**Quality assurance (QA)** means checking the work. It asks whether the result works for the intended user and matches the specification. Keep a short record with the scenario, expected result, actual result, date, reviewer, and any fix/retest.

## Check the meaningful paths

| Area | What to check |
| --- | --- |
| Core workflow | Complete the main customer task from beginning to end |
| Invalid and missing input | Explain errors and preserve useful information |
| Data | Verify expected reads/writes, totals, duplicate handling, and persistence where specified |
| Responsive design | Review desktop and narrow screens; check navigation, forms, and overflow |
| Accessibility basics | Keyboard operation, visible focus, labeled inputs, useful headings and alternative text |
| Content and persuasion | Audience, benefit, next action, pricing, and claims are clear and consistent |
| Deployment | Live links, assets, deep links, setup steps, and any server/database dependency work |
| AI behavior, if present | Try incorrect/unexpected input, identify limits, and define human review/fallback |

For the group project, each member tests another member's work and records an issue or review result. Use automated tests for important logic when appropriate and manual checks for the experience. A passing build alone is not a usability test.

## Check understanding before explaining

Ask your peer: **What is offered? Who is it for? What gives a reason to trust it? What would you do next?** Then give the main task and observe without coaching. Check whether the copy and visual direction support the intended promise. Verify the evidence behind persuasion claims; a displayed review count is not independent proof of quality.

## Progress reviews

Use [one submission per active project each week](/course/milestones#how-to-submit). The [class schedule](/course/schedule) reserves time for partner work and feedback. Attendance is required. During each stage, use [GitHub issues](/process/github-feedback) to record peer observations, your response, and the check of the changed work.

For each review, retain: the version shown, reviewer/date, feedback, the action taken, and the result. Each of the three projects must include an actual peer walkthrough, at least one meaningful feedback-driven change, and a retest. Document this in each case study.

<LearningDiagram kind="feedback" />

## Explain limitations

A best attempt can have incomplete features. Identify them clearly, show the working portion, and explain the next step. Do not represent a mocked interaction as a live integration or an untested claim as a measured result. See the [QA template](/templates/qa).

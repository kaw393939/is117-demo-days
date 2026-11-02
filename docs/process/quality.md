# Quality assurance and reviews

Quality assurance asks whether the result works for the intended user and matches the specification. Keep a short record with the scenario, expected result, actual result, date, reviewer, and any fix/retest.

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

## Progress reviews

Complete **four individual reviews** covering the portfolio and T-shirt project, and **four group reviews**, as stated in Canvas. The instructor will announce the review dates/arrangements. Suggested stages are scope/specification, design/first build, integrated workflow, and final QA/rehearsal; these are not additional dated assignments.

For each review, retain: the version shown, reviewer/date, feedback, the action taken, and the result. Include at least one example of a decision changed by feedback in your case study.

## Explain limitations

A best attempt can have incomplete features. Identify them clearly, show the working portion, and explain the next step. Do not represent a mocked interaction as a live integration or an untested claim as a measured result. See the [QA template](/templates/qa).

# Check your work

**Quality assurance (QA) means checking whether the result works for its intended user and matches the specification.** Start with the main task. Then check a likely mistake and the way the site explains the result.

For peer feedback, use the [five-step review](/process/collaboration). Record observations and changes in a [GitHub issue](/process/github-feedback), then link it from your existing project record. Each final project needs an actual peer walkthrough, a meaningful change based on the feedback, and a retest. A simulated customer or AI review does not replace the peer.

## Before next class

- **Bring:** a link to your current record or version and one task you want checked.
- **Do in class:** try a peer's task without coaching, then swap roles. Group members test each other's work.
- **Update:** record the observation, choose a response, make the change, and retry the task.
- **Submit:** use the same project record and the due date in your section's Canvas assignment. Do not add a separate review report.

Attendance is required. The [class schedule](/course/schedule) reserves time for this work; a submission does not replace participation.

## Choose checks that fit your project

| Check | What to try |
| --- | --- |
| Main workflow | Complete the customer task from beginning to end. Check the receipt or result as well as the form. |
| Mistakes | Leave a required field blank or enter an invalid value. Check that the error explains how to continue and preserves useful input. |
| Data and totals | Check the expected price, saved fields, status, and persistence. Test duplicate handling where your spec requires it. |
| Narrow screen | Try navigation and forms at a phone width. Check for clipped controls, unreadable text, and sideways overflow. |
| Accessibility basics | Use the keyboard, look for visible focus, and check input labels, headings, and useful image descriptions. |
| Content | Can a peer explain who it is for, the benefit, the next action, and any price or limitation? Verify evidence for persuasive claims. |
| Live site and setup | Open important links and assets. Follow the README on a fresh start; identify any server or database dependency. |
| AI feature, if present | Try unexpected input. Check limits, output validation, sensitive information handling, and the human fallback you specified. |

Use automated checks for important logic when useful and manual checks for the experience. A passing build does not show that a person can use the site. A public static preview also does not prove that the local SQLite backend works: run the backend and check its saved data separately.

<details>
<summary>What counts as useful test evidence?</summary>

Keep the version, task, expected result, actual result, date, tester, and fix/retest. A short issue comment can hold this; you do not need another document.

Example: “Nov. 19, build A, Sam tested: submit a request with no service selected. Expected: explain missing service and keep the notes. Actual: the notes disappeared. Fixed in linked commit. Sam retried: error appeared and notes remained.”

Ask a peer what the site offers and what they would do next **before explaining it**. Observe the task without coaching. Review a claim's evidence rather than treating a displayed review count or trust badge as proof.

</details>

<LearningDiagram kind="feedback" />

## Be clear about limits

A best attempt can have unfinished features. Identify them, show the working portion, and explain the next step. Label simulated payment, sample data, mocked integrations, and untested claims accurately. Keep unresolved issues open with a next action.

[QA record starter](/templates/qa) · [How to submit](/course/milestones#how-to-submit).

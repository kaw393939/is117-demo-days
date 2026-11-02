# Study Slot — 4. Get feedback and improve

Fictional completed student work by Jordan Rivera and Riley Park. Peer conversations are teaching scenarios. This is a filled example, not a worksheet.

### Completed peer-feedback record — fictional scenario

**Reviewer:** Jamie Ross, a fictional classmate. **Session:** November 30, 2026; retest in the same fictional session. These are scenario events, not actual interviews.

| Task | Before the change | Change made | Retest result |
| --- | --- | --- | --- |
| Request help with CSS for a preferred window and explain the next step. | Jamie thought selecting a window meant that a tutor was available at that time. | Label it “Preferred window” and show “Pending tutor confirmation” in the receipt. | After we changed the label and receipt, Jamie said the request was pending. We did not record a second attempt with a missing topic after the wording change. |

**What this tells me:** We checked the new message, but our peer record does not cover the revised error path.

#### Brand understanding — fictional teaching scenario

The reviewer described the page as polished and found the preparation/process note. I did not ask them to explain the intended audience or why the promise mattered. That leaves a comprehension gap even though the interface works.

**Brand feedback:** The brand elements are present, but a label and polished visuals do not repair the weak audience reasoning. Explain which observation supports the niche and ask the peer to explain the promise before judging appearance.

#### Completed QA record

The following implementation checks were actually run on the class examples. They are separate from the fictional student/peer account. [Read the technical receipt](/examples/submissions/technical-checks).

| Check | Expected | Recorded implementation result |
| --- | --- | --- |
| Valid request | Receipt has selected item/topic, preferred window, and pending status. | Automated checks passed for this project; the shared browser flow was checked on Room Ready. |
| Invalid input | Unsupported item/topic or invalid email is rejected. | Automated server checks passed. |
| Persistence | A saved request can be read back. | Automated create/read checks passed. |
| Keyboard / full accessibility | A visitor should reach and use every control. | No full accessibility audit is claimed; the example record does not establish one. |

#### AI-use record

We used the AI coding assistant to draft the request form and help debug the layout. Jordan owned validation and the receipt; Riley owned the service explanation and layout. We reviewed each other’s changes, but our record is stronger on the valid path than on negative cases.

#### My short portfolio case study

“I built Study Slot for a first-year student requesting help with introductory web development. I compared two positions, chose a primary audience, and turned that need into three user stories. I built two presentations and chose A. My comparison supports a direction, but needs better task evidence. Feedback identified this problem: jamie thought selecting a window meant that a tutor was available at that time. I made this change: label it “Preferred window” and show “Pending tutor confirmation” in the receipt. After we changed the label and receipt, Jamie said the request was pending. We did not record a second attempt with a missing topic after the wording change. No tutor is contacted. Availability is fictional; this is a request workflow, not a live booking platform.”

#### Individual contribution statements

**Riley:** “I planned the service explanation, built the responsive page composition, and reviewed the form’s labels and confirmation wording. I used AI for layout suggestions and checked the result against our scope.”

**Jordan:** “I planned the request data, implemented validation and the receipt/history flow, and reviewed the service explanation and navigation. I checked generated logic against valid and invalid inputs.”

Our statements identify work, but the record should name a specific cross-review result for each member.

#### Final handoff

- Selected product: [Version A](/samples/study-slot/a.html).
- Alternate product: [Version B](/samples/study-slot/b.html).
- Source: [class-demo repository](https://github.com/kaw393939/is117-demo-days/tree/main/docs/public/samples); the download includes the runnable code and these completed records.
- Remaining limitation: No tutor is contacted. Availability is fictional; this is a request workflow, not a live booking platform.

The written record models the student's explanation. It does not establish that an actual student demonstrated understanding in a live conversation.

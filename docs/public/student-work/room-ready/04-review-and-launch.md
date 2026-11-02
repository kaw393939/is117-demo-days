# Room Ready — 4. Get feedback and improve

Fictional completed student work by Maya Chen and Avery Ellis. Peer conversations are teaching scenarios. This is a filled example, not a worksheet.

### Completed peer-feedback record — fictional scenario

**Reviewer:** Morgan Lee, a fictional classmate. **Session:** example review session, followed by a retest. These are scenario events, not actual interviews.

| Task | Before the change | Change made | Retest result |
| --- | --- | --- | --- |
| Request assembly for a desk, select a preferred window, and explain whether you have a confirmed appointment. | The original booking-style wording led Morgan to assume that submitting the form guaranteed an appointment. | Use “Send demo request” and explain that an operator would confirm scope, price, and availability later. | After we changed the action to Send demo request and clarified the pending receipt, Morgan submitted a desk request and correctly explained that an operator would confirm scope and availability later. |

**What this tells me:** This checks a classroom request flow. No real operator, scheduling integration, or business outcome was tested.

#### Completed QA record

The following implementation checks were actually run on the class examples. They are separate from the fictional student/peer account. [Read the technical receipt](/examples/submissions/technical-checks).

| Check | Expected | Recorded implementation result |
| --- | --- | --- |
| Valid request | Receipt has selected item/topic, preferred window, and pending status. | Automated checks passed for this project; the shared browser flow was checked on Room Ready. |
| Invalid input | Unsupported item/topic or invalid email is rejected. | Automated server checks passed. |
| Persistence | A saved request can be read back. | Automated create/read checks passed. |
| Keyboard / full accessibility | A visitor should reach and use every control. | No full accessibility audit is claimed; the example record does not establish one. |

#### AI-use record

We used the AI coding assistant for layout and validation drafts. Maya revised the service explanation and responsive layout; Avery implemented the request and receipt flow. We reviewed each other’s work, checked invalid inputs, and compared the receipt wording with the specification.

#### My short portfolio case study

“I built Room Ready for a newark-area renter who needs help assembling a desk. I compared two positions, chose a primary audience, and turned that need into three user stories. I built two presentations and chose A. The scope and confirmation language are clearer before the visitor starts the form. Feedback identified this problem: the original booking-style wording led Morgan to assume that submitting the form guaranteed an appointment. I made this change: use “Send demo request” and explain that an operator would confirm scope, price, and availability later. After we changed the action to Send demo request and clarified the pending receipt, Morgan submitted a desk request and correctly explained that an operator would confirm scope and availability later. No actual service, operator notification, or scheduling integration exists. Any price shown is illustrative.”

#### Individual contribution statements

**Maya:** “I planned the service explanation, built the responsive page composition, and reviewed the form’s labels and confirmation wording. I used AI for layout suggestions and checked the result against our scope.”

**Avery:** “I planned the request data, implemented validation and the receipt/history flow, and reviewed the service explanation and navigation. I checked generated logic against valid and invalid inputs.”

Our cross-review exposed the booking-language problem, which we corrected before the final scenario walkthrough.

#### Final handoff

- Selected product: [Version A](/samples/room-ready/a.html).
- Alternate product: [Version B](/samples/room-ready/b.html).
- Source: [class-demo repository](https://github.com/kaw393939/is117-demo-days/tree/main/docs/public/samples); the download includes the runnable code and these completed records.
- Remaining limitation: No actual service, operator notification, or scheduling integration exists. Any price shown is illustrative.

The written record models the student's explanation. It does not establish that an actual student demonstrated understanding in a live conversation.

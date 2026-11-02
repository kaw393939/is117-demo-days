# Room Ready: submitted work and feedback

**Group business · Stronger example · Fictional student: Maya Chen and Avery Ellis**

Read the completed submission, then compare it with the instructor’s score and feedback. The work and peer comments are fictional teaching scenarios. The linked product is real runnable code.

<SampleAssessment slug="room-ready" />

[Version A](/samples/room-ready/a.html) · [Version B](/samples/room-ready/b.html) · [Download all six submissions](/downloads/is117-graded-student-submissions.zip) · [How to read these grades](/examples/submissions/grading-guide)

**Read one step at a time:** [Research](#_1-research) · [Plan](#_2-plan) · [Build](#_3-build-and-compare) · [Improve](#_4-get-feedback-and-improve). Open the student work, then open the rubric feedback to compare your judgment.

[Try this project's fictional client](/process/simulated-customer).

## 1. Research

<details open>
<summary>Read the completed student submission</summary>

### Submitted by Maya Chen and Avery Ellis

**Project:** Room Ready. **Research date:** November 2, 2026.

#### My competitive landscape

I compared related service and scheduling workflows. A related workflow is not necessarily a direct competitor.

| Source | Site | Observation | Decision it suggests |
| --- | --- | --- | --- |
| R1 | [Taskrabbit](https://www.taskrabbit.com/how-it-works) | Task, location, provider comparison, then confirmation. | Explain the steps before the request. |
| R2 | [Handy](https://www.handy.com/services/furniture-assembly) | A page dedicated to furniture assembly. | Name the supported service clearly. |
| R3 | [IKEA assembly](https://www.ikea.com/us/en/customer-service/services/assembly/) | Assembly offered through Taskrabbit with follow-up steps. | Distinguish a request from a confirmed appointment; this is a partner channel, not an independent competitor. |

#### Two positions I considered

- **Position A:** Furniture assembly request service.
- **Position B:** All-purpose home-services marketplace.

#### Two persona cards

| | Persona A | Persona B |
| --- | --- | --- |
| Situation | A Newark-area renter who needs help assembling a desk | An operator reviewing incoming assembly requests |
| Goal | Describe the item and request help without assuming a booking is confirmed. | A scannable request queue and complete job details. |
| Concern | What information is needed, and what happens after I submit? | Will the site focus on my task and make the next step clear? |
| Information needed | Supported services/topics, required details, and pending status. | A scannable request queue and complete job details. |
| Evidence / assumption | Reference pages show useful ways to present information. This user need remains my hypothesis. | A plausible second audience. I have not validated this profile through customer research. |

#### My audience choice

We chose a narrow assembly-request service instead of a marketplace. Our renter needs to explain one item and know what happens next. The operator needs complete details, but matching many providers or promising live availability would make this project too large.

**What the research does not prove:** Website observations do not establish demand, customer preferences, sales, or the quality of a competing product.

</details>

<details>
<summary>See the rubric score and feedback: 92/100</summary>

<SampleAssessment slug="room-ready" stage="research" />

</details>

## 2. Plan

<details>
<summary>Read the completed student submission</summary>

### My submitted website specifications

**Goal:** Describe the item and request help without assuming a booking is confirmed.

#### Specification A

- **Approach:** Service first: explain scope and next steps before the request form.
- **Sections:** Service scope; how requests work; request form; pending receipt/history.
- **Main action:** Service/topic explanation → required choices → complete request → pending receipt → request history.
- **Brand:** Caregiver; helpful and direct.

#### Specification B

- **Approach:** Request first: show the short form immediately, with scope and process alongside it.
- **Sections:** Request form first; supported scope alongside it; pending receipt/history.
- **Main action:** Service/topic explanation → required choices → complete request → pending receipt → request history.
- **Comparison:** Same core content and data, different information order and presentation.

#### Shared user stories, features, and checks

| ID | User story | Essential feature | Acceptance check |
| --- | --- | --- | --- |
| S1 | As a renter, I want to know what assembly work is supported so I can decide whether to inquire. | F1: A short scope statement: desks, chairs, and shelving; no electrical, mounting, or repair work. | The supported work and exclusions are visible before submitting. |
| S2 | As a renter, I want to provide my item and preferred window so the operator can assess the request. | F2: Required service, preferred window, and demo-email fields. | An empty required field prevents submission and a valid request retains the selected values. |
| S3 | As an operator, I want a complete request summary so I can identify the next action. | F3: A receipt/reference and a same-session request history. | The receipt says request received, not appointment confirmed, and the record appears in history. |

**Priority:** F1–F3 are essential. The audience-specific information order is the design difference I am exploring. I am deferring provider matching, real addresses, payments, live availability, and automated quotes.

**Inputs and data:** Supported item/topic, preferred window, and synthetic email. A saved request contains its reference, choices, and pending status. Public mode uses browser storage; the optional local server uses SQLite. Email is not persisted.

**States:** Required choice missing; valid input ready; save in progress; success receipt; save failure shown without a false success claim.

**Limits:** No actual service, operator notification, or scheduling integration exists. Any price shown is illustrative.

#### Why I planned it this way

Both proposals collect the same item, preferred window, and demo email. A explains supported work first; B leads with the form. We will compare whether a visitor understands the service and knows a request still needs confirmation.

#### Team work plan

| Member | Design and build | Cross-review | Planned effort |
| --- | --- | --- | --- |
| Maya Chen | Service explanation, two page compositions, responsive layout. | Form labels, required fields, receipt language. | 5 |
| Avery Ellis | Request controls, validation, receipt and history. | Service scope, navigation, narrow-screen layout. | 5 |

We treated integration and retesting as shared tasks and rechecked the totals before the final review. Each member reviewed a part they did not implement.

</details>

<details>
<summary>See the rubric score and feedback: 95/100</summary>

<SampleAssessment slug="room-ready" stage="plan" />

</details>

## 3. Build and compare

<details>
<summary>Read the completed student submission</summary>

### My completed product submission

[Version A](/samples/room-ready/a.html) · [Version B](/samples/room-ready/b.html)

**Launch choice:** Version A. The scope and confirmation language are clearer before the visitor starts the form.

**Task used for comparison:** Request assembly for a desk, select a preferred window, and explain whether you have a confirmed appointment.

| Version | Recorded observation in this fictional review |
| --- | --- |
| A | The reviewer read the supported items and described the next step before starting the form. |
| B | The reviewer reached the form sooner but asked whether the selected window was already reserved. |

**What I kept:** The shared core task works in both presentations. My decision follows the stated visitor task; I did not treat a preference as proof of higher sales or hiring success.

**Code and setup:** [Shared class-demo source](https://github.com/kaw393939/is117-demo-days/tree/main/docs/public/samples). The downloadable submission bundle includes the product source. Run `node product-source/server.mjs` from the bundle root, then use the printed local address. The public version stores synthetic records in this browser; the local version demonstrates SQLite.

#### My explanation of how it works

The interface validates the item and preferred window. The local server checks both against allowed values and writes a request record. The history shows the stored request, but it is not a secure staff dashboard or a real operator notification.

**Known limit:** No actual service, operator notification, or scheduling integration exists. Any price shown is illustrative.

</details>

<VersionComparison slug="room-ready" />

<details>
<summary>See the rubric score and feedback: 93/100</summary>

<SampleAssessment slug="room-ready" stage="build" />

</details>

## 4. Get feedback and improve

<details>
<summary>Read the completed student submission</summary>

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

</details>

<details>
<summary>See the rubric score and feedback: 94/100</summary>

<SampleAssessment slug="room-ready" stage="improve" />

</details>

## Instructor’s suggested revision

Our success check is that a visitor can submit a complete request and explain that it is pending. We do not count the demo as successful if the visitor believes a time has been booked.

[Back to all six examples](/examples/submissions/) · [Assignment rubric](/course/milestones#how-each-step-is-graded).

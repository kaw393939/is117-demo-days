# Study Slot: submitted work and feedback

**Group business · Developing example · Fictional student: Jordan Rivera and Riley Park**

Read the completed submission, then compare it with the instructor’s score and feedback. The work and peer comments are fictional teaching scenarios. The linked product is real runnable code.

<SampleAssessment slug="study-slot" />

[Version A](/samples/study-slot/a.html) · [Version B](/samples/study-slot/b.html) · [Download all six submissions](/downloads/is117-graded-student-submissions.zip) · [How to read these grades](/examples/submissions/grading-guide)

[Try this project's fictional client](/process/simulated-customer).

## 1. Research

<details open>
<summary>Read the completed student submission</summary>

### Submitted by Jordan Rivera and Riley Park

**Project:** Study Slot. **Research date:** November 2, 2026.

#### My competitive landscape

I compared related service and scheduling workflows. A related workflow is not necessarily a direct competitor.

| Source | Site | Observation | Decision it suggests |
| --- | --- | --- | --- |
| R1 | [Calendly](https://calendly.com/scheduling) | Scheduling links and availability controls. | Make time choice explicit. |
| R2 | [Acuity](https://acuityscheduling.com/) | Booking and client-management features; education use cases. | Collect the topic before the session. |
| R3 | [Square Appointments](https://squareup.com/us/en/appointments) | Appointment-booking product. | Show a clear scheduling action. These are adjacent workflow references, not tutoring competitors. |

#### Two positions I considered

- **Position A:** Focused web-development tutoring requests.
- **Position B:** An all-subject instant-booking platform.

#### Two persona cards

| | Persona A | Persona B |
| --- | --- | --- |
| Situation | A first-year student requesting help with introductory web development | A tutor reviewing the student’s request |
| Goal | Describe a topic and request a suitable tutoring window. | Topic, preferred window, and a clear pending status. |
| Concern | Will the tutor know what I need, and is the time actually available? | Will the site focus on my task and make the next step clear? |
| Information needed | Supported services/topics, required details, and pending status. | Topic, preferred window, and a clear pending status. |
| Evidence / assumption | Reference pages show useful ways to present information. This user need remains my hypothesis. | A plausible second audience. I have not validated this profile through customer research. |

#### My audience choice

We chose beginning web-development students because they can use a small set of topics. We compared scheduling tools, but did not compare actual tutoring services. That gives us ideas for the request flow, not enough evidence about what would make a tutoring offer different.

**What the research does not prove:** Website observations do not establish demand, customer preferences, sales, or the quality of a competing product.

</details>

<SampleAssessment slug="study-slot" stage="research" />

## 2. Plan

<details>
<summary>Read the completed student submission</summary>

### My submitted website specifications

**Goal:** Describe a topic and request a suitable tutoring window.

#### Specification A

- **Approach:** Topic first: explain supported topics, then collect the request.
- **Sections:** Service scope; how requests work; request form; pending receipt/history.
- **Main action:** Service/topic explanation → required choices → complete request → pending receipt → request history.
- **Brand:** Sage; patient, encouraging, specific.

#### Specification B

- **Approach:** Time first: show the request controls first and list topics alongside them.
- **Sections:** Request form first; supported scope alongside it; pending receipt/history.
- **Main action:** Service/topic explanation → required choices → complete request → pending receipt → request history.
- **Comparison:** Same core content and data, different information order and presentation.

#### Shared user stories, features, and checks

| ID | User story | Essential feature | Acceptance check |
| --- | --- | --- | --- |
| S1 | As a student, I want to see supported topics so I can decide whether to request help. | F1: HTML, CSS, and introductory JavaScript listed with boundaries. | The supported topics should be clear. |
| S2 | As a student, I want to choose a topic and preferred window so I can make a useful request. | F2: Labeled topic/window controls and validated demo email. | Submission requires both choices; selecting a preference does not claim live availability. |
| S3 | As a tutor, I want the request details together so I can prepare and respond. | F3: Pending-request confirmation and readable request history. | The receipt includes topic, preferred window, and pending status; no calendar event is claimed. |

**Priority:** F1–F3 are essential. The audience-specific information order is the design difference I am exploring. I am deferring live calendar sync, accounts, AI tutoring, real notifications, and payments.

**Inputs and data:** Supported item/topic, preferred window, and synthetic email. A saved request contains its reference, choices, and pending status. Public mode uses browser storage; the optional local server uses SQLite. Email is not persisted.

**States:** Required choice missing; valid input ready; save in progress; success receipt; save failure shown without a false success claim.

**Limits:** No tutor is contacted. Availability is fictional; this is a request workflow, not a live booking platform.

#### Why I planned it this way

Our two plans put the topic explanation or the request controls first. We split the work into the page and the form. Both members help review, but our first task list does not explain how long integration and retesting will take.

#### Team work plan

| Member | Design and build | Cross-review | Planned effort |
| --- | --- | --- | --- |
| Riley Park | Service explanation, two page compositions, responsive layout. | Form labels, required fields, receipt language. | 5 |
| Jordan Rivera | Request controls, validation, receipt and history. | Service scope, navigation, narrow-screen layout. | 5 |

We planned equal totals, but described integration only as “finish together.” That leaves the ownership and effort of the last step unclear.

</details>

<SampleAssessment slug="study-slot" stage="plan" />

## 3. Build and compare

<details>
<summary>Read the completed student submission</summary>

### My completed product submission

[Version A](/samples/study-slot/a.html) · [Version B](/samples/study-slot/b.html)

**Launch choice:** Version A. Topic context helps a student decide whether this service fits their question before choosing a time.

**Task used for comparison:** Request help with CSS for a preferred window and explain the next step.

| Version | Recorded observation in this fictional review |
| --- | --- |
| A | The reviewer understood that the supported topics were HTML, CSS, and introductory JavaScript. |
| B | The reviewer could select a preferred window but initially treated the choice as a reservation. |

**What I kept:** The shared core task works in both presentations. The versions work, but my comparison notes are less complete than the product itself. I need stronger task evidence for the choice.

**Code and setup:** [Shared class-demo source](https://github.com/kaw393939/is117-demo-days/tree/main/docs/public/samples). The downloadable submission bundle includes the product source. Run `node product-source/server.mjs` from the bundle root, then use the printed local address. The public version stores synthetic records in this browser; the local version demonstrates SQLite.

#### My explanation of how it works

The request sends a topic and preferred window to storage. The returned status means pending, not booked. Our explanation identifies the fields and status, but does not explain the request-history handoff as clearly as the form.

**Known limit:** No tutor is contacted. Availability is fictional; this is a request workflow, not a live booking platform.

</details>

<VersionComparison slug="study-slot" />

<SampleAssessment slug="study-slot" stage="build" />

## 4. Get feedback and improve

<details>
<summary>Read the completed student submission</summary>

### Completed peer-feedback record — fictional scenario

**Reviewer:** Jamie Ross, a fictional classmate. **Session:** example review session, followed by a retest. These are scenario events, not actual interviews.

| Task | Before the change | Change made | Retest result |
| --- | --- | --- | --- |
| Request help with CSS for a preferred window and explain the next step. | Jamie thought selecting a window meant that a tutor was available at that time. | Label it “Preferred window” and show “Pending tutor confirmation” in the receipt. | After we changed the label and receipt, Jamie said the request was pending. We did not record a second attempt with a missing topic after the wording change. |

**What this tells me:** We checked the new message, but our peer record does not cover the revised error path.

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

</details>

<SampleAssessment slug="study-slot" stage="improve" />

## Instructor’s suggested revision

Our next review will use two tasks: submit a CSS request and try submitting without a topic. Riley will review the receipt; Jordan will review whether the service explanation matches the available topics.

[Back to all six examples](/examples/submissions/) · [Assignment rubric](/course/milestones#how-each-step-is-graded).

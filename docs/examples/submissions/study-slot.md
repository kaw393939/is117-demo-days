# Study Slot: complete submission example

**Group business · Four short milestones · Introductory scope**

::: warning Teaching example
The business/student is fictional. Personas are hypotheses inferred from website observations. Peer comments and contribution statements below are invented examples of documentation, not reports of actual interviews or student work. Perform and document your own walkthrough; do not submit these comments as your evidence.
:::

[Version A](/samples/study-slot/a.html) · [Version B](/samples/study-slot/b.html) · [All six examples](/examples/submissions/)

![Study Slot: AI-generated classroom concept image, not a real product or student record](/samples/study-slot/concept.jpg)

*AI-generated concept imagery. The runnable versions show the actual interface.*

<LearningDiagram kind="process" />

## 1. Research

### A small competitive landscape

Source pages checked November 2, 2026. Observations concern the public pages, not a completed purchase, tested service, or proof of customer demand. For a service, distinguish direct competitors from adjacent workflow references.

| Source | Observation | Implication for this project |
| --- | --- | --- |
| [Calendly](https://calendly.com/scheduling) | Scheduling links and availability controls | Make time choice explicit. |
| [Acuity](https://acuityscheduling.com/) | Booking and client-management features; education use cases | Collect the topic before the session. |
| [Square Appointments](https://squareup.com/us/en/appointments) | Appointment-booking product | Show a clear scheduling action. These are adjacent workflow references, not tutoring competitors. |

**Two positions:** A — Focused web-development tutoring requests. B — An all-subject instant-booking platform.

### Two persona hypotheses

| | Persona 1 | Persona 2 |
| --- | --- | --- |
| Situation | A first-year student requesting help with introductory web development | A tutor reviewing the student’s request |
| Goal / need | Describe a topic and request a suitable tutoring window. | Topic, preferred window, and a clear pending status |
| Uncertainty | Will the tutor know what I need, and is the time actually available? | Does this product focus on my task? |
| Evidence and assumption | The reference pages provide ways to inspect relevant information. We hypothesize this visitor needs it too. | A plausible alternative audience; not validated by competitor pages alone. |

**Choice:** Design for the student’s request while including the information the tutor needs to respond. A persona summarizes a useful need; arbitrary ages, names, salaries, and hobbies would not establish evidence.

## 2. Plan

### Two concise website specifications

| | Approach A | Approach B |
| --- | --- | --- |
| Information order | Topic first: explain supported topics, then collect the request. | Time first: show the request controls first and list topics alongside them. |
| Shared required workflow | Scope → topic/service and window → validated request → pending receipt | Same workflow and information, presented in another order |
| Design direction | Sage; patient, encouraging, specific | Same honest brand and content; alternate hierarchy/composition |
| Tradeoff | The selected need receives early emphasis. | An alternate entry point may suit a different visitor. |

Both approaches use the stories and acceptance criteria below. Comparing them changes the presentation; it does not double the entire technical scope.

### User stories → features → acceptance criteria

| ID | User story | Essential feature | Acceptance check |
| --- | --- | --- | --- |
| STUDY-SLOT-1 | As a student, I want to see supported topics so I can decide whether to request help. | HTML, CSS, and introductory JavaScript listed with boundaries. | The site makes clear it offers guidance, not completion of assessed work. |
| STUDY-SLOT-2 | As a student, I want to choose a topic and preferred window so I can make a useful request. | Labeled topic/window controls and validated demo email. | Submission requires both choices; selecting a preference does not claim live availability. |
| STUDY-SLOT-3 | As a tutor, I want the request details together so I can prepare and respond. | Pending-request confirmation and readable request history. | The receipt includes topic, preferred window, and pending status; no calendar event is claimed. |

**Data / technology:** HTML, CSS, JavaScript with demo order/request records; browser storage on GitHub Pages and SQLite when run through the supplied Node server. **Deferred:** Live calendar sync, accounts, AI tutoring, real notifications, and payments.

### Example equal-work plan

| Member | Design + development | QA/review of partner’s work | Effort |
| --- | --- | --- | --- |
| Partner 1 | Service explanation, two page compositions, responsive navigation | Check form labels, required fields, and pending-status wording | 5 points |
| Partner 2 | Request form, validation, receipt and request history | Check service scope, navigation, mobile layout and keyboard access | 5 points |

Use issues, branches, and reviewed pull requests to record actual work. Rebalance if the estimates prove wrong. Both members participate in decisions and integration.

**Contribution statement 1 (fictional):** “I wrote the service explanation and built the responsive layouts. I reviewed my partner’s request form and raised the confirmation-wording issue. I used AI for layout suggestions and checked the result on a narrow screen.”

**Contribution statement 2 (fictional):** “I implemented the request form and receipt, then integrated them with my partner’s page. I reviewed the service-scope copy and tested the navigation. I checked AI-generated validation against missing and valid inputs.”

## 3. Build and compare

[Version A](/samples/study-slot/a.html) · [Version B](/samples/study-slot/b.html)

Both versions contain the essential workflow. Keep the offer, underlying data, and task consistent enough to compare their presentation. Use the same task below with each version. Compare whether the visitor understands the offer, finds needed information, completes the task, and explains the next step.

**Example launch decision:** Select **A**. Topic context helps a student decide whether this service fits their question before choosing a time. This is a teaching decision, not a measured conversion result or evidence of market demand. A student's actual decision should reflect their own observations.

The public examples save demo records in this browser. The downloadable Node 24 server stores records in SQLite. A static page by itself cannot demonstrate server-side persistence. [Run and inspect the SQLite example](/examples/submissions/run-examples).

## 4. Review, improve, and launch

### Sample peer-walkthrough record — fictional

| Field | Example entry |
| --- | --- |
| Reviewer | A classmate outside the project; replace with your actual reviewer/date |
| Task | Request help with CSS for a preferred window and explain the next step. |
| Observation / feedback | I thought selecting a time reserved it immediately. |
| Meaningful change | Label it “Preferred window” and show “Pending tutor confirmation” in the receipt. |
| Verification to perform | Ask the reviewer to explain the difference between requesting a window and booking a confirmed session. |

The linked versions include the improved wording or feature so you can inspect the intended result. That does **not** mean a real peer performed this walkthrough. Your record must include what actually happened and what changed in your own project.

### QA record to complete

| Scenario | Expected result | Student’s actual result |
| --- | --- | --- |
| Main task | The receipt includes topic, preferred window, and pending status; no calendar event is claimed. | Run and record your result |
| Missing input / missing evidence | Required fields block submission. | Run and record your result |
| Keyboard and phone-sized screen | Controls are reachable, focus is visible, and text does not require horizontal scrolling. | Run and record your result |
| After the feedback change | Ask the reviewer to explain the difference between requesting a window and booking a confirmed session. | Record the actual reviewer response |

### Short portfolio case-study example

**Problem:** Describe a topic and request a suitable tutoring window. **Decision:** Compare A/B, then select A. **Reason:** Topic context helps a student decide whether this service fits their question before choosing a time. **Feedback-driven improvement:** Label it “Preferred window” and show “Pending tutor confirmation” in the receipt. **Limitation:** No tutor is contacted. Availability is fictional; this is a request workflow, not a live booking platform.

**AI-use statement (illustrative):** “I used AI to propose alternatives and draft parts of the implementation. I reviewed the generated code against the specification, checked the core workflow, and revised the wording after feedback. I can explain the data flow and the checks I performed.” Replace this with your actual tool, task, checks, and contribution.

### Final submission format

- Selected launch version: [Version A](/samples/study-slot/a.html).
- Comparison version: [Version B](/samples/study-slot/b.html).
- Repository: link to your actual public repository and README, not a fabricated URL. The class example source is in [this repository](https://github.com/kaw393939/is117-demo-days/tree/main/docs/public/samples).
- Documentation: research, persona choice, specification, A/B decision, actual peer feedback, change, QA results, AI-use statement, and limitations. Keep it short; this page models the structure.

**Known limitation:** No tutor is contacted. Availability is fictional; this is a request workflow, not a live booking platform.

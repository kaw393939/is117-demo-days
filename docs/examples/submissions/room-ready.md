# Room Ready: complete submission example

**Group business · Four short milestones · Introductory scope**

::: warning Teaching example
The business/student is fictional. Personas are hypotheses inferred from website observations. Peer comments and contribution statements below are invented examples of documentation, not reports of actual interviews or student work. Perform and document your own walkthrough; do not submit these comments as your evidence.
:::

[Version A](/samples/room-ready/a.html) · [Version B](/samples/room-ready/b.html) · [All six examples](/examples/submissions/)

![Room Ready: AI-generated classroom concept image, not a real product or student record](/samples/room-ready/concept.jpg)

*AI-generated concept imagery. The runnable versions show the actual interface.*

<LearningDiagram kind="process" />

## 1. Research

### A small competitive landscape

Source pages checked November 2, 2026. Observations concern the public pages, not a completed purchase, tested service, or proof of customer demand. For a service, distinguish direct competitors from adjacent workflow references.

| Source | Observation | Implication for this project |
| --- | --- | --- |
| [Taskrabbit](https://www.taskrabbit.com/how-it-works) | Task, location, provider comparison, then confirmation | Explain the steps before the request. |
| [Handy](https://www.handy.com/services/furniture-assembly) | A page dedicated to furniture assembly | Name the supported service clearly. |
| [IKEA assembly](https://www.ikea.com/us/en/customer-service/services/assembly/) | Assembly offered through Taskrabbit with follow-up steps | Distinguish a request from a confirmed appointment; this is a partner channel, not an independent competitor. |

**Two positions:** A — Furniture assembly request service. B — All-purpose home-services marketplace.

### Two persona hypotheses

| | Persona 1 | Persona 2 |
| --- | --- | --- |
| Situation | A Newark-area renter who needs help assembling a desk | An operator reviewing incoming assembly requests |
| Goal / need | Describe the item and request help without assuming a booking is confirmed. | A scannable request queue and complete job details |
| Uncertainty | What information is needed, and what happens after I submit? | Does this product focus on my task? |
| Evidence and assumption | The reference pages provide ways to inspect relevant information. We hypothesize this visitor needs it too. | A plausible alternative audience; not validated by competitor pages alone. |

**Choice:** Serve the renter first, with a small request summary to demonstrate the handoff to the operator. A persona summarizes a useful need; arbitrary ages, names, salaries, and hobbies would not establish evidence.

## 2. Plan

### Two concise website specifications

| | Approach A | Approach B |
| --- | --- | --- |
| Information order | Service first: explain scope and next steps before the request form. | Request first: show the short form immediately, with scope and process alongside it. |
| Shared required workflow | Scope → topic/service and window → validated request → pending receipt | Same workflow and information, presented in another order |
| Design direction | Caregiver; helpful and direct | Same honest brand and content; alternate hierarchy/composition |
| Tradeoff | The selected need receives early emphasis. | An alternate entry point may suit a different visitor. |

Both approaches use the stories and acceptance criteria below. Comparing them changes the presentation; it does not double the entire technical scope.

### User stories → features → acceptance criteria

| ID | User story | Essential feature | Acceptance check |
| --- | --- | --- | --- |
| ROOM-READY-1 | As a renter, I want to know what assembly work is supported so I can decide whether to inquire. | A short scope statement: desks, chairs, and shelving; no electrical, mounting, or repair work. | The supported work and exclusions are visible before submitting. |
| ROOM-READY-2 | As a renter, I want to provide my item and preferred window so the operator can assess the request. | Required service, preferred window, and demo-email fields. | An empty required field prevents submission and a valid request retains the selected values. |
| ROOM-READY-3 | As an operator, I want a complete request summary so I can identify the next action. | A receipt/reference and a same-session request history. | The receipt says request received, not appointment confirmed, and the record appears in history. |

**Data / technology:** HTML, CSS, JavaScript with demo order/request records; browser storage on GitHub Pages and SQLite when run through the supplied Node server. **Deferred:** Provider matching, real addresses, payments, live availability, and automated quotes.

### Example equal-work plan

| Member | Design + development | QA/review of partner’s work | Effort |
| --- | --- | --- | --- |
| Partner 1 | Service explanation, two page compositions, responsive navigation | Check form labels, required fields, and pending-status wording | 5 points |
| Partner 2 | Request form, validation, receipt and request history | Check service scope, navigation, mobile layout and keyboard access | 5 points |

Use issues, branches, and reviewed pull requests to record actual work. Rebalance if the estimates prove wrong. Both members participate in decisions and integration.

**Contribution statement 1 (fictional):** “I wrote the service explanation and built the responsive layouts. I reviewed my partner’s request form and raised the confirmation-wording issue. I used AI for layout suggestions and checked the result on a narrow screen.”

**Contribution statement 2 (fictional):** “I implemented the request form and receipt, then integrated them with my partner’s page. I reviewed the service-scope copy and tested the navigation. I checked AI-generated validation against missing and valid inputs.”

## 3. Build and compare

[Version A](/samples/room-ready/a.html) · [Version B](/samples/room-ready/b.html)

Both versions contain the essential workflow. Keep the offer, underlying data, and task consistent enough to compare their presentation. Use the same task below with each version. Compare whether the visitor understands the offer, finds needed information, completes the task, and explains the next step.

**Example launch decision:** Select **A**. The scope and confirmation language are clearer before the visitor starts the form. This is a teaching decision, not a measured conversion result or evidence of market demand. A student's actual decision should reflect their own observations.

The public examples save demo records in this browser. The downloadable Node 24 server stores records in SQLite. A static page by itself cannot demonstrate server-side persistence. [Run and inspect the SQLite example](/examples/submissions/run-examples).

## 4. Review, improve, and launch

### Sample peer-walkthrough record — fictional

| Field | Example entry |
| --- | --- |
| Reviewer | A classmate outside the project; replace with your actual reviewer/date |
| Task | Request assembly for a desk, select a preferred window, and explain whether you have a confirmed appointment. |
| Observation / feedback | The original button sounded like an instant confirmed booking. |
| Meaningful change | Use “Send demo request” and explain that an operator would confirm scope, price, and availability later. |
| Verification to perform | Ask the reviewer whether the receipt guarantees an appointment; they should answer no. |

The linked versions include the improved wording or feature so you can inspect the intended result. That does **not** mean a real peer performed this walkthrough. Your record must include what actually happened and what changed in your own project.

### QA record to complete

| Scenario | Expected result | Student’s actual result |
| --- | --- | --- |
| Main task | The receipt says request received, not appointment confirmed, and the record appears in history. | Run and record your result |
| Missing input / missing evidence | Required fields block submission. | Run and record your result |
| Keyboard and phone-sized screen | Controls are reachable, focus is visible, and text does not require horizontal scrolling. | Run and record your result |
| After the feedback change | Ask the reviewer whether the receipt guarantees an appointment; they should answer no. | Record the actual reviewer response |

### Short portfolio case-study example

**Problem:** Describe the item and request help without assuming a booking is confirmed. **Decision:** Compare A/B, then select A. **Reason:** The scope and confirmation language are clearer before the visitor starts the form. **Feedback-driven improvement:** Use “Send demo request” and explain that an operator would confirm scope, price, and availability later. **Limitation:** No actual service, operator notification, or scheduling integration exists. Any price shown is illustrative.

**AI-use statement (illustrative):** “I used AI to propose alternatives and draft parts of the implementation. I reviewed the generated code against the specification, checked the core workflow, and revised the wording after feedback. I can explain the data flow and the checks I performed.” Replace this with your actual tool, task, checks, and contribution.

### Final submission format

- Selected launch version: [Version A](/samples/room-ready/a.html).
- Comparison version: [Version B](/samples/room-ready/b.html).
- Repository: link to your actual public repository and README, not a fabricated URL. The class example source is in [this repository](https://github.com/kaw393939/is117-demo-days/tree/main/docs/public/samples).
- Documentation: research, persona choice, specification, A/B decision, actual peer feedback, change, QA results, AI-use statement, and limitations. Keep it short; this page models the structure.

**Known limitation:** No actual service, operator notification, or scheduling integration exists. Any price shown is illustrative.

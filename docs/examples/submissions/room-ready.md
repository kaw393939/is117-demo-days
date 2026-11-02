# Room Ready

**Group business · A small example of all four submissions**

| Customer / reader | Goal | Example launch choice |
| --- | --- | --- |
| A Newark-area renter who needs help assembling a desk | Describe the item and request help without assuming a booking is confirmed. | **Version A** — The scope and confirmation language are clearer before the visitor starts the form. |

[Try version A](/samples/room-ready/a.html) · [Try version B](/samples/room-ready/b.html) · [Choose another example](/examples/submissions/)

*This is fictional teaching work. Personas are assumptions; sample peer comments and contribution claims below are invented examples. Use your own research and actual feedback in your submission.*

**Try the fictional client:** [how to use the customer brief](/process/simulated-customer). <a href="/is117-demo-days/samples/room-ready/customer/AGENTS.md" download="AGENTS.md">Download this project’s AGENTS.md</a>.

## 1. Research

<details open>
<summary>See the research submission</summary>

### Compare three sites

Source pages checked November 2, 2026. These are observations, not a purchase test or proof of demand. Some references are adjacent workflows or partner channels, as noted.

| Reference | Observation → lesson |
| --- | --- |
| [Taskrabbit](https://www.taskrabbit.com/how-it-works) | Task, location, provider comparison, then confirmation. Explain the steps before the request. |
| [Handy](https://www.handy.com/services/furniture-assembly) | A page dedicated to furniture assembly. Name the supported service clearly. |
| [IKEA assembly](https://www.ikea.com/us/en/customer-service/services/assembly/) | Assembly offered through Taskrabbit with follow-up steps. Distinguish a request from a confirmed appointment; this is a partner channel, not an independent competitor. |

**Two possible positions:** A — Furniture assembly request service. B — All-purpose home-services marketplace.

### Compare two personas

| | Persona 1 | Persona 2 |
| --- | --- | --- |
| Situation | A Newark-area renter who needs help assembling a desk | An operator reviewing incoming assembly requests |
| Need | Describe the item and request help without assuming a booking is confirmed. | A scannable request queue and complete job details |
| Main concern | What information is needed, and what happens after I submit? | Will this site focus on my task? |

**Evidence versus assumption:** Reference sites show how others present useful information. We hypothesize that these visitors need it too; we have not interviewed them.

**Choice:** Serve the renter first, with a small request summary to demonstrate the handoff to the operator.

</details>

## 2. Plan

<details>
<summary>See two short website plans and the user stories</summary>

| Plan A | Plan B |
| --- | --- |
| Service first: explain scope and next steps before the request form. | Request first: show the short form immediately, with scope and process alongside it. |

**Brand:** Caregiver; helpful and direct. Both plans support the same core task and use the stories below. We change the information order and presentation, rather than doubling the whole project.

| Story | User need | Feature and check for success |
| --- | --- | --- |
| 1 | As a renter, I want to know what assembly work is supported so I can decide whether to inquire. | A short scope statement: desks, chairs, and shelving; no electrical, mounting, or repair work. The supported work and exclusions are visible before submitting. |
| 2 | As a renter, I want to provide my item and preferred window so the operator can assess the request. | Required service, preferred window, and demo-email fields. An empty required field prevents submission and a valid request retains the selected values. |
| 3 | As an operator, I want a complete request summary so I can identify the next action. | A receipt/reference and a same-session request history. The receipt says request received, not appointment confirmed, and the record appears in history. |

**Build with:** HTML, CSS, JavaScript and demo records; browser storage on the public site, SQLite in the local server version.

**Leave for later:** Provider matching, real addresses, payments, live availability, and automated quotes.

### Shared work and individual contributions

| Member | Owns | Reviews | Planned effort |
| --- | --- | --- | --- |
| Partner 1 | Service explanation and responsive layouts | Form labels, required inputs, pending-status wording | 5 points |
| Partner 2 | Form, validation, receipt and request history | Scope, navigation, phone layout and keyboard use | 5 points |

Points estimate effort, not grades. Both people help design, code, and test. Update the plan if the effort changes. Record actual issues, branches, changes, and reviews.

**Contribution 1 — fictional example:** “I built the service explanation and layouts. I reviewed my partner’s form and raised the confirmation-wording issue. AI suggested layouts; I checked the phone view.”

**Contribution 2 — fictional example:** “I built the form and receipt, then integrated them with my partner’s page. I reviewed the scope and navigation. I checked AI-drafted validation with missing and valid inputs.”

</details>

## 3. Build and compare

<VersionComparison slug="room-ready" />

<details>
<summary>See the comparison and launch decision</summary>

Give a peer the same task in both versions: **Request assembly for a desk, select a preferred window, and explain whether you have a confirmed appointment.** Watch whether they understand the offer, find what they need, and finish the task.

**Example choice: A.** The scope and confirmation language are clearer before the visitor starts the form. This models a reasoned choice; it is not a measured sales result. Your choice should use your actual observations.

The public demo uses browser storage. [Run the downloadable SQLite version](/examples/submissions/run-examples) to see server-side persistence.

</details>

## 4. Get feedback and improve

<details>
<summary>See the feedback record, checks, and final submission</summary>

### Sample walkthrough — fictional

| What to record | Example |
| --- | --- |
| Reviewer / date | A classmate; replace with your actual reviewer and date |
| Task | Request assembly for a desk, select a preferred window, and explain whether you have a confirmed appointment. |
| Observation | The original button sounded like an instant confirmed booking. |
| Change | Use “Send demo request” and explain that an operator would confirm scope, price, and availability later. |
| Retest to perform | Ask the reviewer whether the receipt guarantees an appointment; they should answer no. |

The linked pages include the intended improvement. A real peer did not perform this sample walkthrough. Record what actually happens in your own test.

### Checks to run

| Scenario | Expected result | Your actual result |
| --- | --- | --- |
| Main task | The receipt says request received, not appointment confirmed, and the record appears in history. | Run and record |
| Missing input / evidence | Required fields block submission. | Run and record |
| Keyboard and phone view | Controls are reachable, focus is visible, and text fits. | Run and record |
| After the change | Repeat the peer’s task. | Record the real response |

### Short case-study example

“Describe the item and request help without assuming a booking is confirmed. I compared two approaches and chose A. The scope and confirmation language are clearer before the visitor starts the form. Feedback led me to use “Send demo request” and explain that an operator would confirm scope, price, and availability later.” In your own case study, add what you personally built and what you checked.

**AI-use example:** “I used AI for alternatives and draft code. I reviewed it against the plan, checked the main task and missing inputs, and changed the wording after feedback.” Replace this with your actual tool, task, changes, and checks.

**Final submission:** selected version, alternate version, actual repository, and this short process record. Each group member also submits their own contribution statement.

**Limitation:** No actual service, operator notification, or scheduling integration exists. Any price shown is illustrative.

</details>

[Your assignment & grading](/course/milestones) · [Due dates](/course/schedule) · [Copy the short template](/templates/four-milestones).

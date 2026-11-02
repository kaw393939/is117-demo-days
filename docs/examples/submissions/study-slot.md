# Study Slot

**Group business · A small example of all four submissions**

| Customer / reader | Goal | Example launch choice |
| --- | --- | --- |
| A first-year student requesting help with introductory web development | Describe a topic and request a suitable tutoring window. | **Version A** — Topic context helps a student decide whether this service fits their question before choosing a time. |

[Try version A](/samples/study-slot/a.html) · [Try version B](/samples/study-slot/b.html) · [Choose another example](/examples/submissions/)

*This is fictional teaching work. Personas are assumptions; sample peer comments and contribution claims below are invented examples. Use your own research and actual feedback in your submission.*

**Try the fictional client:** [how to use the customer brief](/process/simulated-customer). <a href="/is117-demo-days/samples/study-slot/customer/AGENTS.md" download="AGENTS.md">Download this project’s AGENTS.md</a>.

## 1. Research

<details open>
<summary>See the research submission</summary>

### Compare three sites

Source pages checked November 2, 2026. These are observations, not a purchase test or proof of demand. Some references are adjacent workflows or partner channels, as noted.

| Reference | Observation → lesson |
| --- | --- |
| [Calendly](https://calendly.com/scheduling) | Scheduling links and availability controls. Make time choice explicit. |
| [Acuity](https://acuityscheduling.com/) | Booking and client-management features; education use cases. Collect the topic before the session. |
| [Square Appointments](https://squareup.com/us/en/appointments) | Appointment-booking product. Show a clear scheduling action. These are adjacent workflow references, not tutoring competitors. |

**Two possible positions:** A — Focused web-development tutoring requests. B — An all-subject instant-booking platform.

### Compare two personas

| | Persona 1 | Persona 2 |
| --- | --- | --- |
| Situation | A first-year student requesting help with introductory web development | A tutor reviewing the student’s request |
| Need | Describe a topic and request a suitable tutoring window. | Topic, preferred window, and a clear pending status |
| Main concern | Will the tutor know what I need, and is the time actually available? | Will this site focus on my task? |

**Evidence versus assumption:** Reference sites show how others present useful information. We hypothesize that these visitors need it too; we have not interviewed them.

**Choice:** Design for the student’s request while including the information the tutor needs to respond.

</details>

## 2. Plan

<details>
<summary>See two short website plans and the user stories</summary>

| Plan A | Plan B |
| --- | --- |
| Topic first: explain supported topics, then collect the request. | Time first: show the request controls first and list topics alongside them. |

**Brand:** Sage; patient, encouraging, specific. Both plans support the same core task and use the stories below. We change the information order and presentation, rather than doubling the whole project.

| Story | User need | Feature and check for success |
| --- | --- | --- |
| 1 | As a student, I want to see supported topics so I can decide whether to request help. | HTML, CSS, and introductory JavaScript listed with boundaries. The site makes clear it offers guidance, not completion of assessed work. |
| 2 | As a student, I want to choose a topic and preferred window so I can make a useful request. | Labeled topic/window controls and validated demo email. Submission requires both choices; selecting a preference does not claim live availability. |
| 3 | As a tutor, I want the request details together so I can prepare and respond. | Pending-request confirmation and readable request history. The receipt includes topic, preferred window, and pending status; no calendar event is claimed. |

**Build with:** HTML, CSS, JavaScript and demo records; browser storage on the public site, SQLite in the local server version.

**Leave for later:** Live calendar sync, accounts, AI tutoring, real notifications, and payments.

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

<VersionComparison slug="study-slot" />

<details>
<summary>See the comparison and launch decision</summary>

Give a peer the same task in both versions: **Request help with CSS for a preferred window and explain the next step.** Watch whether they understand the offer, find what they need, and finish the task.

**Example choice: A.** Topic context helps a student decide whether this service fits their question before choosing a time. This models a reasoned choice; it is not a measured sales result. Your choice should use your actual observations.

The public demo uses browser storage. [Run the downloadable SQLite version](/examples/submissions/run-examples) to see server-side persistence.

</details>

## 4. Get feedback and improve

<details>
<summary>See the feedback record, checks, and final submission</summary>

### Sample walkthrough — fictional

| What to record | Example |
| --- | --- |
| Reviewer / date | A classmate; replace with your actual reviewer and date |
| Task | Request help with CSS for a preferred window and explain the next step. |
| Observation | I thought selecting a time reserved it immediately. |
| Change | Label it “Preferred window” and show “Pending tutor confirmation” in the receipt. |
| Retest to perform | Ask the reviewer to explain the difference between requesting a window and booking a confirmed session. |

The linked pages include the intended improvement. A real peer did not perform this sample walkthrough. Record what actually happens in your own test.

### Checks to run

| Scenario | Expected result | Your actual result |
| --- | --- | --- |
| Main task | The receipt includes topic, preferred window, and pending status; no calendar event is claimed. | Run and record |
| Missing input / evidence | Required fields block submission. | Run and record |
| Keyboard and phone view | Controls are reachable, focus is visible, and text fits. | Run and record |
| After the change | Repeat the peer’s task. | Record the real response |

### Short case-study example

“Describe a topic and request a suitable tutoring window. I compared two approaches and chose A. Topic context helps a student decide whether this service fits their question before choosing a time. Feedback led me to label it “Preferred window” and show “Pending tutor confirmation” in the receipt.” In your own case study, add what you personally built and what you checked.

**AI-use example:** “I used AI for alternatives and draft code. I reviewed it against the plan, checked the main task and missing inputs, and changed the wording after feedback.” Replace this with your actual tool, task, changes, and checks.

**Final submission:** selected version, alternate version, actual repository, and this short process record. Each group member also submits their own contribution statement.

**Limitation:** No tutor is contacted. Availability is fictional; this is a request workflow, not a live booking platform.

</details>

[Your assignment & grading](/course/milestones) · [Due dates](/course/schedule) · [Copy the short template](/templates/four-milestones).

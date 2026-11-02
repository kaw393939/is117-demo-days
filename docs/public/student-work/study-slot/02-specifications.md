# Study Slot — 2. Plan

Fictional completed student work by Jordan Rivera and Riley Park. Peer conversations are teaching scenarios. This is a filled example, not a worksheet.

### My submitted website specifications

**Goal:** Describe a topic and request a suitable tutoring window.

#### My compact brand brief

- **Promise:** An approachable first request for beginner web-development guidance.
- **Character and voice:** Sage; patient, encouraging, specific.
- **Actual hero copy, held steady in A/B:** “Tell us the topic. Choose a time to ask for help.” / “Stuck on HTML, CSS, or a first JavaScript question? Start with the topic and a preferred window. A tutor would confirm the next step.”
- **Original logo and live style guide:** [Brand notes](/samples/study-slot/style-guide.html), with type, colors, logo, and both visual directions. These are original class-example assets, not museum reproductions.
- **Visual A:** Swiss modernist-inspired: aligned sans-serif hierarchy, a firm rule, and repeated geometric modules; translate structure rather than reproduce the historical poster. [Source: Josef Müller-Brockmann, Musica Viva, 1957 — MoMA](https://www.moma.org/collection/works/4885).
- **Visual B:** Memphis postmodernist-inspired: juxtaposed type, an offset frame, and contrasting geometric shapes; translate unexpected relationships rather than reproduce the furniture. [Source: Ettore Sottsass, Carlton room divider, 1981 — The Met](https://www.metmuseum.org/art/collection/search/486989).
- **Comparison limit:** Both visual treatment and content order change in these examples. The offer, hero wording, and main action stay the same, but I cannot isolate which change caused a preference. A stricter visual-only experiment would hold content order steady too.

| Principle | Actual page element | Proposed mechanism | Evidence or limit |
| --- | --- | --- | --- |
| Reciprocity | Bring one question — a free preparation guide | Offer useful guidance before asking the visitor to choose or request. | The page offers value; no change in purchase or request rates was measured. |
| Liking | Welcoming language that addresses the visitor’s situation | A sincere relatable voice may make the offer feel approachable. | We have not measured this effect; no invented customers or testimonials are used. |

**How the promise becomes a feature:** An approachable first request for beginner web-development guidance. → S1 / F1 below → The site makes clear it offers guidance, not completion of assessed work. The peer should also explain the offer, intended reader, reason to trust it, and next action before I coach them. No conversion or hiring result is claimed.

#### Specification A

- **Approach:** Topic first: explain supported topics, then collect the request. Swiss modernist-inspired: aligned sans-serif hierarchy, a firm rule, and repeated geometric modules; translate structure rather than reproduce the historical poster.
- **Sections:** Service scope; how requests work; request form; pending receipt/history.
- **Main action:** Service/topic explanation → required choices → complete request → pending receipt → request history.
- **Brand:** Sage; patient, encouraging, specific.

#### Specification B

- **Approach:** Time first: show the request controls first and list topics alongside them. Memphis postmodernist-inspired: juxtaposed type, an offset frame, and contrasting geometric shapes; translate unexpected relationships rather than reproduce the furniture.
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

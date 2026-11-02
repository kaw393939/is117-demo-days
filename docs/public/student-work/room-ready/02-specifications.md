# Room Ready — 2. Plan

Fictional completed student work by Maya Chen and Avery Ellis. Peer conversations are teaching scenarios. This is a filled example, not a worksheet.

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

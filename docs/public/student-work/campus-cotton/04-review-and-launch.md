# Campus Cotton — 4. Get feedback and improve

Fictional completed student work by Maya Chen. Peer conversations are teaching scenarios. This is a filled example, not a worksheet.

### Completed peer-feedback record — fictional scenario

**Reviewer:** Taylor Brooks, a fictional classmate. **Session:** November 30, 2026; retest in the same fictional session. These are scenario events, not actual interviews.

| Task | Before the change | Change made | Retest result |
| --- | --- | --- | --- |
| Find the measurement guide, choose M, add two shirts, and complete a simulated checkout. | The reviewer asked where the measurements were before choosing M. | Place the measurement disclosure immediately above the size selector in both versions. | After the disclosure moved beside the size selector, Taylor opened it without a hint, chose M, reviewed two shirts at $50, and reached the simulated confirmation. |

**What this tells me:** One classmate is useful feedback, not evidence that the layout will increase sales.

#### Completed QA record

The following implementation checks were actually run on the class examples. They are separate from the fictional student/peer account. [Read the technical receipt](/examples/submissions/technical-checks).

| Check | Expected | Recorded implementation result |
| --- | --- | --- |
| Quantity total | 2 × $25 = $50 | The shared implementation supports this calculation; server tests also verify two-item totals and reject a submitted false total. |
| Invalid input | Missing/unsupported size, bad quantity, or invalid email must not create a valid order. | Automated server validation passed; browser required-size behavior was checked on Campus Cotton. |
| Persistence | A server order remains after restart. | Automated SQLite restart check passed. |
| Keyboard / full accessibility | A visitor should reach and use every control. | No full accessibility audit is claimed; the example record does not establish one. |

#### AI-use record

I used the AI coding assistant to suggest two information orders and draft the form logic. I kept the simple one-price offer, reviewed the event handlers, and checked missing-size, quantity, confirmation, and stored-record behavior. The generated shirt image is labeled as concept imagery.

#### My short portfolio case study

“I built Campus Cotton for a student buying an everyday white tee online. I compared two positions, chose a primary audience, and turned that need into three user stories. I built two presentations and chose A. The selected shopper can get to fit and price information immediately. Feedback identified this problem: the reviewer asked where the measurements were before choosing M. I made this change: place the measurement disclosure immediately above the size selector in both versions. After the disclosure moved beside the size selector, Taylor opened it without a hint, chose M, reviewed two shirts at $50, and reached the simulated confirmation. AI-generated shirt imagery is a concept, not a photograph of manufactured stock. Fabric, measurements, and policies are classroom assumptions.”

#### Final handoff

- Selected product: [Version A](/samples/campus-cotton/a.html).
- Alternate product: [Version B](/samples/campus-cotton/b.html).
- Source: [class-demo repository](https://github.com/kaw393939/is117-demo-days/tree/main/docs/public/samples); the download includes the runnable code and these completed records.
- Remaining limitation: AI-generated shirt imagery is a concept, not a photograph of manufactured stock. Fabric, measurements, and policies are classroom assumptions.

The written record models the student's explanation. It does not establish that an actual student demonstrated understanding in a live conversation.

# Campus Cotton: submitted work and feedback

**T-shirt store · Stronger example · Fictional student: Maya Chen**

Read the completed submission, then compare it with the instructor’s score and feedback. The work and peer comments are fictional teaching scenarios. The linked product is real runnable code.

<SampleAssessment slug="campus-cotton" />

[Version A](/samples/campus-cotton/a.html) · [Version B](/samples/campus-cotton/b.html) · [Download all six submissions](/downloads/is117-graded-student-submissions.zip) · [How to read these grades](/examples/submissions/grading-guide)

**Read one step at a time:** [Research](#_1-research) · [Plan](#_2-plan) · [Build](#_3-build-and-compare) · [Improve](#_4-get-feedback-and-improve). Open the student work, then open the rubric feedback to compare your judgment.

## 1. Research

<details open>
<summary>Read the completed student submission</summary>

### Submitted by Maya Chen

**Project:** Campus Cotton. **Research date:** November 2, 2026.

#### My competitive landscape

I compared selected white T-shirt pages from brands with larger catalogs.

| Source | Site | Observation | Decision it suggests |
| --- | --- | --- | --- |
| R1 | [Fresh Clean Tees](https://freshcleantees.com/products/white-crew-neck) | Length choices and fit information. | Put measurements next to size selection. |
| R2 | [True Classic](https://www.trueclassictees.com/products/white-crew-neck-tee) | Product options and membership pricing paths. | Explain the single-item offer without extra pricing paths. |
| R3 | [Buck Mason](https://www.buckmason.com/products/white-slub-curved-hem-tee) | Specific fabric and production details. | Use specific product facts rather than vague premium claims. |

#### Two positions I considered

- **Position A:** Affordable everyday essentials.
- **Position B:** Campus club bulk supplier.

#### Two persona cards

| | Persona A | Persona B |
| --- | --- | --- |
| Situation | A student buying an everyday white tee online | A club organizer comparing shirts for an event |
| Goal | Choose a size and understand the total without hunting for information. | Bulk ordering and custom printing. |
| Concern | Will it fit, and what will I actually pay? | Will the site focus on my task and make the next step clear? |
| Information needed | Fit, price, product facts, and order summary. | Bulk ordering and custom printing. |
| Evidence / assumption | Reference pages show useful ways to present information. This user need remains my hypothesis. | A plausible second audience. I have not validated this profile through customer research. |

#### My audience choice

I chose the individual student shopper because fit and total price are decisions I can help with in one small shopping flow. A club organizer would need quantity pricing and printing options. That would be a different business, so I left it out.

**What the research does not prove:** Website observations do not establish demand, customer preferences, sales, or the quality of a competing product.

</details>

<details>
<summary>See the rubric score and feedback: 98/100</summary>

<SampleAssessment slug="campus-cotton" stage="research" />

</details>

## 2. Plan

<details>
<summary>Read the completed student submission</summary>

### My submitted website specifications

**Goal:** Choose a size and understand the total without hunting for information.

#### Specification A

- **Approach:** Shop first: price, measurements, and size selection appear together.
- **Sections:** Headline; measurements and purchase controls first; product image/facts alongside; order summary and confirmation.
- **Main action:** Product facts → measurements → size/quantity → order review → simulated checkout → receipt.
- **Brand:** Everyperson; plain, practical, welcoming.

#### Specification B

- **Approach:** Story first: a campus-day narrative leads into the same product and checkout.
- **Sections:** Headline and product context/image first; measurements and purchase controls next; order summary and confirmation.
- **Main action:** Product facts → measurements → size/quantity → order review → simulated checkout → receipt.
- **Comparison:** Same core content and data, different information order and presentation.

#### Shared user stories, features, and checks

| ID | User story | Essential feature | Acceptance check |
| --- | --- | --- | --- |
| S1 | As a shopper unsure about fit, I want garment measurements beside sizes so I can choose with more confidence. | F1: An expandable measurement guide beside a required size selector. | Open the guide, return to the selector, and keep the selected size. |
| S2 | As a price-conscious shopper, I want an itemized total so I can understand the demo purchase. | F2: Quantity control and a summary using one $25 classroom concept price. | Two shirts show $50; demo shipping and tax are explicitly $0. |
| S3 | As a shopper, I want a clear confirmation so I know the simulated checkout completed. | F3: Validated checkout followed by a demo reference and stored order. | Missing size/email prevents checkout; a valid submission produces a reference. |

**Priority:** F1–F3 are essential. The audience-specific information order is the design difference I am exploring. I am deferring discount codes, accounts, bulk orders, and real payments.

**Inputs and data:** Size S/M/L, whole quantity 1–5, and synthetic email. Product prices and order records are held by SQLite in local-server mode; public mode uses browser storage. Email is not persisted.

**States:** Required choice missing; valid input ready; save in progress; success receipt; save failure shown without a false success claim.

**Limits:** AI-generated shirt imagery is a concept, not a photograph of manufactured stock. Fabric, measurements, and policies are classroom assumptions.

#### Why I planned it this way

Both plans keep the same shirt, price, measurements, and checkout. A puts shopping information first; B gives more space to the story. Keeping the offer fixed lets me compare the information order instead of changing everything at once.

</details>

<details>
<summary>See the rubric score and feedback: 100/100</summary>

<SampleAssessment slug="campus-cotton" stage="plan" />

</details>

## 3. Build and compare

<details>
<summary>Read the completed student submission</summary>

### My completed product submission

[Version A](/samples/campus-cotton/a.html) · [Version B](/samples/campus-cotton/b.html)

**Launch choice:** Version A. The selected shopper can get to fit and price information immediately.

**Task used for comparison:** Find the measurement guide, choose M, add two shirts, and complete a simulated checkout.

| Version | Recorded observation in this fictional review |
| --- | --- |
| A | The reviewer located price and the measurement disclosure together before selecting M. |
| B | The reviewer noticed the campus story first, then moved down to the product information to choose a size. |

**What I kept:** The shared core task works in both presentations. My decision follows the stated visitor task; I did not treat a preference as proof of higher sales or hiring success.

**Code and setup:** [Shared class-demo source](https://github.com/kaw393939/is117-demo-days/tree/main/docs/public/samples). The downloadable submission bundle includes the product source. Run `node product-source/server.mjs` from the bundle root, then use the printed local address. The public version stores synthetic records in this browser; the local version demonstrates SQLite.

#### My explanation of how it works

The browser requires a size and calculates a preview total. In local-server mode, the server validates size and quantity again and calculates the authoritative total from its product table. Changing the browser total cannot change the saved price.

**Known limit:** AI-generated shirt imagery is a concept, not a photograph of manufactured stock. Fabric, measurements, and policies are classroom assumptions.

</details>

<VersionComparison slug="campus-cotton" />

<details>
<summary>See the rubric score and feedback: 98/100</summary>

<SampleAssessment slug="campus-cotton" stage="build" />

</details>

## 4. Get feedback and improve

<details>
<summary>Read the completed student submission</summary>

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

</details>

<details>
<summary>See the rubric score and feedback: 98/100</summary>

<SampleAssessment slug="campus-cotton" stage="improve" />

</details>

## Instructor’s suggested revision

I observed fit guides on the reference sites. That suggests sizing information may matter; my persona remains a hypothesis. My peer task checks whether this design makes that information easy to find.

[Back to all six examples](/examples/submissions/) · [Assignment rubric](/course/milestones#how-each-step-is-graded).

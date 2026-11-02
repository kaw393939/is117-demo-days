# Studio White: submitted work and feedback

**T-shirt store · Developing example · Fictional student: Jordan Rivera**

Read the completed submission, then compare it with the instructor’s score and feedback. The work and peer comments are fictional teaching scenarios. The linked product is real runnable code.

<SampleAssessment slug="studio-white" />

[Version A](/samples/studio-white/a.html) · [Version B](/samples/studio-white/b.html) · [Download all six submissions](/downloads/is117-graded-student-submissions.zip) · [How to read these grades](/examples/submissions/grading-guide)

## 1. Research

<details open>
<summary>Read the completed student submission</summary>

### Submitted by Jordan Rivera

**Project:** Studio White. **Research date:** November 2, 2026.

#### My competitive landscape

I compared selected white T-shirt pages from brands with larger catalogs.

| Source | Site | Observation | Decision it suggests |
| --- | --- | --- | --- |
| R1 | [Fresh Clean Tees](https://freshcleantees.com/products/white-crew-neck) | Length choices and fit information. | Put measurements next to size selection. |
| R2 | [True Classic](https://www.trueclassictees.com/products/white-crew-neck-tee) | Product options and membership pricing paths. | Explain the single-item offer without extra pricing paths. |
| R3 | [Buck Mason](https://www.buckmason.com/products/white-slub-curved-hem-tee) | Specific fabric and production details. | Use specific product facts rather than vague premium claims. |

#### Two positions I considered

- **Position A:** Minimal workday wardrobe.
- **Position B:** Discount basics.

#### Two persona cards

| | Persona A | Persona B |
| --- | --- | --- |
| Situation | An early-career creative choosing a simple workday wardrobe | A shopper seeking the lowest available price |
| Goal | Understand the fit and product details before choosing one tee. | Rapid price comparison and frequent discounts. |
| Concern | Does the presentation explain a meaningful difference? | Will the site focus on my task and make the next step clear? |
| Information needed | Fit, price, product facts, and order summary. | Rapid price comparison and frequent discounts. |
| Evidence / assumption | Reference pages show useful ways to present information. This user need remains my hypothesis. | A plausible second audience. I have not validated this profile through customer research. |

#### My audience choice

I chose a workday shopper because I like the restrained look of the references and think it looks more professional. I have not checked whether that shopper cares more about materials, fit, or price.

**What the research does not prove:** Website observations do not establish demand, customer preferences, sales, or the quality of a competing product.

</details>

<SampleAssessment slug="studio-white" stage="research" />

## 2. Plan

<details>
<summary>Read the completed student submission</summary>

### My submitted website specifications

**Goal:** Understand the fit and product details before choosing one tee.

#### Specification A

- **Approach:** Editorial first: product story and material concept precede the purchase panel.
- **Sections:** Brand/product context; product facts/image; shopping controls; summary and confirmation.
- **Main action:** Product facts → measurements → size/quantity → order review → simulated checkout → receipt.
- **Brand:** Creator; calm, specific, restrained.

#### Specification B

- **Approach:** Product facts first: fit, price, and selection lead; the story follows.
- **Sections:** Brand headline; purchase panel/product facts; product context; summary and confirmation.
- **Main action:** Product facts → measurements → size/quantity → order review → simulated checkout → receipt.
- **Comparison:** Same core content and data, different information order and presentation.

#### Shared user stories, features, and checks

| ID | User story | Essential feature | Acceptance check |
| --- | --- | --- | --- |
| S1 | As a workday shopper, I want fit measurements before buying so I can judge the silhouette. | F1: Labeled flat-garment measurements and a size selector. | The product information should be easy to find. |
| S2 | As a careful buyer, I want a clear material description so I can understand the concept. | F2: A visible product-facts section with classroom assumptions labeled. | A visitor can locate material, fit, and care without opening checkout. |
| S3 | As a buyer, I want to review my choices before completing the demo order. | F3: An editable quantity, size, and total before validated confirmation. | Three shirts show $126; confirmation states that no real order or payment occurred. |

**Priority:** F1–F3 are essential. The audience-specific information order is the design difference I am exploring. I am deferring subscriptions, performance claims, provenance certification, and real fulfillment.

**Inputs and data:** Size S/M/L, whole quantity 1–5, and synthetic email. Product prices and order records are held by SQLite in local-server mode; public mode uses browser storage. Email is not persisted.

**States:** Required choice missing; valid input ready; save in progress; success receipt; save failure shown without a false success claim.

**Limits:** No manufacturing or sustainability claim is verified. Concept price $42 is an assumption, not a market-tested price.

#### Why I planned it this way

I made an editorial page and a facts-first page. Both have the same shopping controls. I prefer the facts-first layout because it looks cleaner. My plan says visitors should find information easily, but it does not name a separate task for comparing the two layouts.

</details>

<SampleAssessment slug="studio-white" stage="plan" />

## 3. Build and compare

<details>
<summary>Read the completed student submission</summary>

### My completed product submission

[Version A](/samples/studio-white/a.html) · [Version B](/samples/studio-white/b.html)

**Launch choice:** Version B. Product details are accessible immediately while the visual style still supports the brand.

**Task used for comparison:** Find the product facts, choose L, review three shirts, and complete the demo checkout.

| Version | Recorded observation in this fictional review |
| --- | --- |
| A | The reviewer said the editorial page looked polished. |
| B | The reviewer preferred seeing practical product details earlier. I recorded a preference, but did not record a full task attempt on both versions. |

**What I kept:** The shared core task works in both presentations. The versions work, but my comparison notes are less complete than the product itself. I need stronger task evidence for the choice.

**Code and setup:** [Shared class-demo source](https://github.com/kaw393939/is117-demo-days/tree/main/docs/public/samples). The downloadable submission bundle includes the product source. Run `node product-source/server.mjs` from the bundle root, then use the printed local address. The public version stores synthetic records in this browser; the local version demonstrates SQLite.

#### My explanation of how it works

The page reads the concept price from the project data. Quantity changes update the displayed total, and checkout returns a demo reference. I can describe the interface, but my first explanation did not distinguish browser storage from SQLite server storage.

**Known limit:** No manufacturing or sustainability claim is verified. Concept price $42 is an assumption, not a market-tested price.

</details>

<VersionComparison slug="studio-white" />

<SampleAssessment slug="studio-white" stage="build" />

## 4. Get feedback and improve

<details>
<summary>Read the completed student submission</summary>

### Completed peer-feedback record — fictional scenario

**Reviewer:** Casey Lane, a fictional classmate. **Session:** example review session, followed by a retest. These are scenario events, not actual interviews.

| Task | Before the change | Change made | Retest result |
| --- | --- | --- | --- |
| Find the product facts, choose L, review three shirts, and complete the demo checkout. | Casey said the story was attractive but practical product details were harder to notice. | Choose the facts-first version and keep a labeled product-facts section beside the purchase controls. | After selecting B, Casey found the Product facts heading and said the information was easier to see. I did not ask Casey to complete the whole checkout again. |

**What this tells me:** The retest supports the visibility change. It does not establish that the full revised journey became easier.

#### Completed QA record

The following implementation checks were actually run on the class examples. They are separate from the fictional student/peer account. [Read the technical receipt](/examples/submissions/technical-checks).

| Check | Expected | Recorded implementation result |
| --- | --- | --- |
| Quantity total | 3 × $42 = $126 | The shared implementation supports this calculation; server tests also verify two-item totals and reject a submitted false total. |
| Invalid input | Missing/unsupported size, bad quantity, or invalid email must not create a valid order. | Automated server validation passed; browser required-size behavior was checked on Campus Cotton. |
| Persistence | A server order remains after restart. | Automated SQLite restart check passed. |
| Keyboard / full accessibility | A visitor should reach and use every control. | No full accessibility audit is claimed; the example record does not establish one. |

#### AI-use record

I asked the AI coding assistant to help produce two layouts and connect the shared controls. I reviewed the rendered pages and checked a valid order. I used the supplied negative-input checks, but my notes do not explain what each failing input would protect against.

#### My short portfolio case study

“I built Studio White for an early-career creative choosing a simple workday wardrobe. I compared two positions, chose a primary audience, and turned that need into three user stories. I built two presentations and chose B. My comparison supports a direction, but needs better task evidence. Feedback identified this problem: casey said the story was attractive but practical product details were harder to notice. I made this change: choose the facts-first version and keep a labeled product-facts section beside the purchase controls. After selecting B, Casey found the Product facts heading and said the information was easier to see. I did not ask Casey to complete the whole checkout again. No manufacturing or sustainability claim is verified. Concept price $42 is an assumption, not a market-tested price.”

#### Final handoff

- Selected product: [Version B](/samples/studio-white/b.html).
- Alternate product: [Version A](/samples/studio-white/a.html).
- Source: [class-demo repository](https://github.com/kaw393939/is117-demo-days/tree/main/docs/public/samples); the download includes the runnable code and these completed records.
- Remaining limitation: No manufacturing or sustainability claim is verified. Concept price $42 is an assumption, not a market-tested price.

The written record models the student's explanation. It does not establish that an actual student demonstrated understanding in a live conversation.

</details>

<SampleAssessment slug="studio-white" stage="improve" />

## Instructor’s suggested revision

For the next review, I will ask the same shopper to find fit, material, and price on both versions before choosing L. I will choose the version that makes that task clearer and record what happened, rather than relying only on a preference.

[Back to all six examples](/examples/submissions/) · [Assignment rubric](/course/milestones#how-each-step-is-graded).

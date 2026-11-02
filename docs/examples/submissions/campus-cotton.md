# Campus Cotton: complete submission example

**Individual T-shirt store · Four short milestones · Introductory scope**

::: warning Teaching example
The business/student is fictional. Personas are hypotheses inferred from website observations. Peer comments and contribution statements below are invented examples of documentation, not reports of actual interviews or student work. Perform and document your own walkthrough; do not submit these comments as your evidence.
:::

[Version A](/samples/campus-cotton/a.html) · [Version B](/samples/campus-cotton/b.html) · [All six examples](/examples/submissions/)

![Campus Cotton: AI-generated classroom concept image, not a real product or student record](/samples/campus-cotton/concept.jpg)

*AI-generated concept imagery. The runnable versions show the actual interface.*

<LearningDiagram kind="process" />

## 1. Research

### A small competitive landscape

Source pages checked November 2, 2026. Observations concern the public pages, not a completed purchase, tested service, or proof of customer demand. The selected products come from brands with larger catalogs. No current-price comparison is needed for this example.

| Source | Observation | Implication for this project |
| --- | --- | --- |
| [Fresh Clean Tees](https://freshcleantees.com/products/white-crew-neck) | Length choices and fit information | Put measurements next to size selection. |
| [True Classic](https://www.trueclassictees.com/products/white-crew-neck-tee) | Product options and membership pricing paths | Explain the single-item offer without extra pricing paths. |
| [Buck Mason](https://www.buckmason.com/products/white-slub-curved-hem-tee) | Specific fabric and production details | Use specific product facts rather than vague premium claims. |

**Two positions:** A — Affordable everyday essentials. B — Campus club bulk supplier.

### Two persona hypotheses

| | Persona 1 | Persona 2 |
| --- | --- | --- |
| Situation | A student buying an everyday white tee online | A club organizer comparing shirts for an event |
| Goal / need | Choose a size and understand the total without hunting for information. | Bulk ordering and custom printing |
| Uncertainty | Will it fit, and what will I actually pay? | Does this product focus on my task? |
| Evidence and assumption | The reference pages provide ways to inspect relevant information. We hypothesize this visitor needs it too. | A plausible alternative audience; not validated by competitor pages alone. |

**Choice:** Choose the individual shopper. Bulk and custom orders would expand the project beyond one clear purchase journey. A persona summarizes a useful need; arbitrary ages, names, salaries, and hobbies would not establish evidence.

## 2. Plan

### Two concise website specifications

| | Approach A | Approach B |
| --- | --- | --- |
| Information order | Shop first: price, measurements, and size selection appear together. | Story first: a campus-day narrative leads into the same product and checkout. |
| Shared required workflow | Product → size/quantity → review → simulated checkout → confirmation | Same workflow and information, presented in another order |
| Design direction | Everyperson; plain, practical, welcoming | Same honest brand and content; alternate hierarchy/composition |
| Tradeoff | The selected need receives early emphasis. | An alternate entry point may suit a different visitor. |

Both approaches use the stories and acceptance criteria below. Comparing them changes the presentation; it does not double the entire technical scope.

### User stories → features → acceptance criteria

| ID | User story | Essential feature | Acceptance check |
| --- | --- | --- | --- |
| CAMPUS-COTTON-1 | As a shopper unsure about fit, I want garment measurements beside sizes so I can choose with more confidence. | An expandable measurement guide beside a required size selector. | Open the guide, return to the selector, and keep the selected size. |
| CAMPUS-COTTON-2 | As a price-conscious shopper, I want an itemized total so I can understand the demo purchase. | Quantity control and a summary using one $25 classroom concept price. | Two shirts show $50; demo shipping and tax are explicitly $0. |
| CAMPUS-COTTON-3 | As a shopper, I want a clear confirmation so I know the simulated checkout completed. | Validated checkout followed by a demo reference and stored order. | Missing size/email prevents checkout; a valid submission produces a reference. |

**Data / technology:** HTML, CSS, JavaScript with demo order/request records; browser storage on GitHub Pages and SQLite when run through the supplied Node server. **Deferred:** Discount codes, accounts, bulk orders, and real payments.

## 3. Build and compare

[Version A](/samples/campus-cotton/a.html) · [Version B](/samples/campus-cotton/b.html)

Both versions contain the essential workflow. Keep the offer, underlying data, and task consistent enough to compare their presentation. Use the same task below with each version. Compare whether the visitor understands the offer, finds needed information, completes the task, and explains the next step.

**Example launch decision:** Select **A**. The selected shopper can get to fit and price information immediately. This is a teaching decision, not a measured conversion result or evidence of market demand. A student's actual decision should reflect their own observations.

The public examples save demo records in this browser. The downloadable Node 24 server stores records in SQLite. A static page by itself cannot demonstrate server-side persistence. [Run and inspect the SQLite example](/examples/submissions/run-examples).

## 4. Review, improve, and launch

### Sample peer-walkthrough record — fictional

| Field | Example entry |
| --- | --- |
| Reviewer | A classmate outside the project; replace with your actual reviewer/date |
| Task | Find the measurement guide, choose M, add two shirts, and complete a simulated checkout. |
| Observation / feedback | I found the size options but did not notice where measurements were. |
| Meaningful change | Place the measurement disclosure immediately above the size selector in both versions. |
| Verification to perform | Ask the reviewer to locate the guide without a hint and repeat the task. |

The linked versions include the improved wording or feature so you can inspect the intended result. That does **not** mean a real peer performed this walkthrough. Your record must include what actually happened and what changed in your own project.

### QA record to complete

| Scenario | Expected result | Student’s actual result |
| --- | --- | --- |
| Main task | Missing size/email prevents checkout; a valid submission produces a reference. | Run and record your result |
| Missing input / missing evidence | Required fields block submission. | Run and record your result |
| Keyboard and phone-sized screen | Controls are reachable, focus is visible, and text does not require horizontal scrolling. | Run and record your result |
| After the feedback change | Ask the reviewer to locate the guide without a hint and repeat the task. | Record the actual reviewer response |

### Short portfolio case-study example

**Problem:** Choose a size and understand the total without hunting for information. **Decision:** Compare A/B, then select A. **Reason:** The selected shopper can get to fit and price information immediately. **Feedback-driven improvement:** Place the measurement disclosure immediately above the size selector in both versions. **Limitation:** AI-generated shirt imagery is a concept, not a photograph of manufactured stock. Fabric, measurements, and policies are classroom assumptions.

**AI-use statement (illustrative):** “I used AI to propose alternatives and draft parts of the implementation. I reviewed the generated code against the specification, checked the core workflow, and revised the wording after feedback. I can explain the data flow and the checks I performed.” Replace this with your actual tool, task, checks, and contribution.

### Final submission format

- Selected launch version: [Version A](/samples/campus-cotton/a.html).
- Comparison version: [Version B](/samples/campus-cotton/b.html).
- Repository: link to your actual public repository and README, not a fabricated URL. The class example source is in [this repository](https://github.com/kaw393939/is117-demo-days/tree/main/docs/public/samples).
- Documentation: research, persona choice, specification, A/B decision, actual peer feedback, change, QA results, AI-use statement, and limitations. Keep it short; this page models the structure.

**Known limitation:** AI-generated shirt imagery is a concept, not a photograph of manufactured stock. Fabric, measurements, and policies are classroom assumptions.

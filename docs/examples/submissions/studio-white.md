# Studio White: complete submission example

**Individual T-shirt store · Four short milestones · Introductory scope**

::: warning Teaching example
The business/student is fictional. Personas are hypotheses inferred from website observations. Peer comments and contribution statements below are invented examples of documentation, not reports of actual interviews or student work. Perform and document your own walkthrough; do not submit these comments as your evidence.
:::

[Version A](/samples/studio-white/a.html) · [Version B](/samples/studio-white/b.html) · [All six examples](/examples/submissions/)

![Studio White: AI-generated classroom concept image, not a real product or student record](/samples/studio-white/concept.jpg)

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

**Two positions:** A — Minimal workday wardrobe. B — Discount basics.

### Two persona hypotheses

| | Persona 1 | Persona 2 |
| --- | --- | --- |
| Situation | An early-career creative choosing a simple workday wardrobe | A shopper seeking the lowest available price |
| Goal / need | Understand the fit and product details before choosing one tee. | Rapid price comparison and frequent discounts |
| Uncertainty | Does the presentation explain a meaningful difference? | Does this product focus on my task? |
| Evidence and assumption | The reference pages provide ways to inspect relevant information. We hypothesize this visitor needs it too. | A plausible alternative audience; not validated by competitor pages alone. |

**Choice:** Choose the workday shopper. Specific information and a restrained presentation fit this concept better than price-led promotions. A persona summarizes a useful need; arbitrary ages, names, salaries, and hobbies would not establish evidence.

## 2. Plan

### Two concise website specifications

| | Approach A | Approach B |
| --- | --- | --- |
| Information order | Editorial first: product story and material concept precede the purchase panel. | Product facts first: fit, price, and selection lead; the story follows. |
| Shared required workflow | Product → size/quantity → review → simulated checkout → confirmation | Same workflow and information, presented in another order |
| Design direction | Creator; calm, specific, restrained | Same honest brand and content; alternate hierarchy/composition |
| Tradeoff | More context before the visitor acts. | The selected need receives early emphasis. |

Both approaches use the stories and acceptance criteria below. Comparing them changes the presentation; it does not double the entire technical scope.

### User stories → features → acceptance criteria

| ID | User story | Essential feature | Acceptance check |
| --- | --- | --- | --- |
| STUDIO-WHITE-1 | As a workday shopper, I want fit measurements before buying so I can judge the silhouette. | Labeled flat-garment measurements and a size selector. | The guide labels centimeters and distinguishes garment dimensions from body measurements. |
| STUDIO-WHITE-2 | As a careful buyer, I want a clear material description so I can understand the concept. | A visible product-facts section with classroom assumptions labeled. | A visitor can locate material, fit, and care without opening checkout. |
| STUDIO-WHITE-3 | As a buyer, I want to review my choices before completing the demo order. | An editable quantity, size, and total before validated confirmation. | Three shirts show $126; confirmation states that no real order or payment occurred. |

**Data / technology:** HTML, CSS, JavaScript with demo order/request records; browser storage on GitHub Pages and SQLite when run through the supplied Node server. **Deferred:** Subscriptions, performance claims, provenance certification, and real fulfillment.

## 3. Build and compare

[Version A](/samples/studio-white/a.html) · [Version B](/samples/studio-white/b.html)

Both versions contain the essential workflow. Keep the offer, underlying data, and task consistent enough to compare their presentation. Use the same task below with each version. Compare whether the visitor understands the offer, finds needed information, completes the task, and explains the next step.

**Example launch decision:** Select **B**. Product details are accessible immediately while the visual style still supports the brand. This is a teaching decision, not a measured conversion result or evidence of market demand. A student's actual decision should reflect their own observations.

The public examples save demo records in this browser. The downloadable Node 24 server stores records in SQLite. A static page by itself cannot demonstrate server-side persistence. [Run and inspect the SQLite example](/examples/submissions/run-examples).

## 4. Review, improve, and launch

### Sample peer-walkthrough record — fictional

| Field | Example entry |
| --- | --- |
| Reviewer | A classmate outside the project; replace with your actual reviewer/date |
| Task | Find the product facts, choose L, review three shirts, and complete the demo checkout. |
| Observation / feedback | The story was attractive, but I had to search for practical product details. |
| Meaningful change | Choose the facts-first version and keep a labeled product-facts section beside the purchase controls. |
| Verification to perform | Ask a peer to find fit and material information before selecting a size. |

The linked versions include the improved wording or feature so you can inspect the intended result. That does **not** mean a real peer performed this walkthrough. Your record must include what actually happened and what changed in your own project.

### QA record to complete

| Scenario | Expected result | Student’s actual result |
| --- | --- | --- |
| Main task | Three shirts show $126; confirmation states that no real order or payment occurred. | Run and record your result |
| Missing input / missing evidence | Required fields block submission. | Run and record your result |
| Keyboard and phone-sized screen | Controls are reachable, focus is visible, and text does not require horizontal scrolling. | Run and record your result |
| After the feedback change | Ask a peer to find fit and material information before selecting a size. | Record the actual reviewer response |

### Short portfolio case-study example

**Problem:** Understand the fit and product details before choosing one tee. **Decision:** Compare A/B, then select B. **Reason:** Product details are accessible immediately while the visual style still supports the brand. **Feedback-driven improvement:** Choose the facts-first version and keep a labeled product-facts section beside the purchase controls. **Limitation:** No manufacturing or sustainability claim is verified. Concept price $42 is an assumption, not a market-tested price.

**AI-use statement (illustrative):** “I used AI to propose alternatives and draft parts of the implementation. I reviewed the generated code against the specification, checked the core workflow, and revised the wording after feedback. I can explain the data flow and the checks I performed.” Replace this with your actual tool, task, checks, and contribution.

### Final submission format

- Selected launch version: [Version B](/samples/studio-white/b.html).
- Comparison version: [Version A](/samples/studio-white/a.html).
- Repository: link to your actual public repository and README, not a fabricated URL. The class example source is in [this repository](https://github.com/kaw393939/is117-demo-days/tree/main/docs/public/samples).
- Documentation: research, persona choice, specification, A/B decision, actual peer feedback, change, QA results, AI-use statement, and limitations. Keep it short; this page models the structure.

**Known limitation:** No manufacturing or sustainability claim is verified. Concept price $42 is an assumption, not a market-tested price.

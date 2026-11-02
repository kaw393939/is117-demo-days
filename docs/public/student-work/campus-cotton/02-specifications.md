# Campus Cotton — 2. Plan

Fictional completed student work by Maya Chen. Peer conversations are teaching scenarios. This is a filled example, not a worksheet.

### My submitted website specifications

**Goal:** Choose a size and understand the total without hunting for information.

#### My compact brand brief

- **Promise:** A straightforward single-tee purchase with fit and total visible.
- **Character and voice:** Everyperson; plain, practical, welcoming.
- **Actual hero copy, held steady in A/B:** “A straightforward everyday tee.” / “One everyday white tee. Check the measurements, choose your size, and see the whole demo total before you decide.”
- **Original logo and live style guide:** [Brand notes](/samples/campus-cotton/style-guide.html), with type, colors, logo, and both visual directions. These are original class-example assets, not museum reproductions.
- **Visual A:** Swiss modernist-inspired: aligned sans-serif hierarchy, a firm rule, and repeated geometric modules; translate structure rather than reproduce the historical poster. [Source: Josef Müller-Brockmann, Musica Viva, 1957 — MoMA](https://www.moma.org/collection/works/4885).
- **Visual B:** Memphis postmodernist-inspired: juxtaposed type, an offset frame, and contrasting geometric shapes; translate unexpected relationships rather than reproduce the furniture. [Source: Ettore Sottsass, Carlton room divider, 1981 — The Met](https://www.metmuseum.org/art/collection/search/486989).
- **Comparison limit:** Both visual treatment and content order change in these examples. The offer, hero wording, and main action stay the same, but I cannot isolate which change caused a preference. A stricter visual-only experiment would hold content order steady too.

| Principle | Actual page element | Proposed mechanism | Evidence or limit |
| --- | --- | --- | --- |
| Reciprocity | Before you choose a size — a free preparation guide | Offer useful guidance before asking the visitor to choose or request. | The page offers value; no change in purchase or request rates was measured. |
| Liking | Welcoming language that addresses the visitor’s situation | A sincere relatable voice may make the offer feel approachable. | We have not measured this effect; no invented customers or testimonials are used. |

**How the promise becomes a feature:** A straightforward single-tee purchase with fit and total visible. → S1 / F1 below → Open the guide, return to the selector, and keep the selected size. The peer should also explain the offer, intended reader, reason to trust it, and next action before I coach them. No conversion or hiring result is claimed.

#### Specification A

- **Approach:** Shop first: price, measurements, and size selection appear together. Swiss modernist-inspired: aligned sans-serif hierarchy, a firm rule, and repeated geometric modules; translate structure rather than reproduce the historical poster.
- **Sections:** Headline; measurements and purchase controls first; product image/facts alongside; order summary and confirmation.
- **Main action:** Product facts → measurements → size/quantity → order review → simulated checkout → receipt.
- **Brand:** Everyperson; plain, practical, welcoming.

#### Specification B

- **Approach:** Product context first: imagery and product facts lead into the same measurements and checkout. Memphis postmodernist-inspired: juxtaposed type, an offset frame, and contrasting geometric shapes; translate unexpected relationships rather than reproduce the furniture.
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

Both plans keep the same shirt, price, measurements, hero wording, and checkout. A pairs a structured visual treatment with shopping information first; B pairs expressive framing with product imagery first. I compare the whole presentations, not an isolated cause of preference.

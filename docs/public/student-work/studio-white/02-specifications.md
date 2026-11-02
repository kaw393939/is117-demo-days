# Studio White — 2. Plan

Fictional completed student work by Jordan Rivera. Peer conversations are teaching scenarios. This is a filled example, not a worksheet.

### My submitted website specifications

**Goal:** Understand the fit and product details before choosing one tee.

#### My compact brand brief

- **Promise:** A considered starting point for a creative workday wardrobe.
- **Character and voice:** Creator; calm, specific, restrained.
- **Actual hero copy, held steady in A/B:** “One white tee. A considered choice.” / “A plain white starting point for your workday wardrobe. Explore the fit and classroom product details, then choose what works for you.”
- **Original logo and live style guide:** [Brand notes](/samples/studio-white/style-guide.html), with type, colors, logo, and both visual directions. These are original class-example assets, not museum reproductions.
- **Visual A:** Swiss modernist-inspired: aligned sans-serif hierarchy, a firm rule, and repeated geometric modules; translate structure rather than reproduce the historical poster. [Source: Josef Müller-Brockmann, Musica Viva, 1957 — MoMA](https://www.moma.org/collection/works/4885).
- **Visual B:** Memphis postmodernist-inspired: juxtaposed type, an offset frame, and contrasting geometric shapes; translate unexpected relationships rather than reproduce the furniture. [Source: Ettore Sottsass, Carlton room divider, 1981 — The Met](https://www.metmuseum.org/art/collection/search/486989).
- **Comparison limit:** Both visual treatment and content order change in these examples. The offer, hero wording, and main action stay the same, but I cannot isolate which change caused a preference. A stricter visual-only experiment would hold content order steady too.

| Principle | Actual page element | Proposed mechanism | Evidence or limit |
| --- | --- | --- | --- |
| Reciprocity | Start with the silhouette — a free preparation guide | Offer useful guidance before asking the visitor to choose or request. | The page offers value; no change in purchase or request rates was measured. |
| Liking | Welcoming language that addresses the visitor’s situation | A sincere relatable voice may make the offer feel approachable. | We have not measured this effect; no invented customers or testimonials are used. |

**How the promise becomes a feature:** A considered starting point for a creative workday wardrobe. → S1 / F1 below → The guide labels centimeters and distinguishes garment dimensions from body measurements. The peer should also explain the offer, intended reader, reason to trust it, and next action before I coach them. No conversion or hiring result is claimed.

#### Specification A

- **Approach:** Editorial first: product story and material concept precede the purchase panel. Swiss modernist-inspired: aligned sans-serif hierarchy, a firm rule, and repeated geometric modules; translate structure rather than reproduce the historical poster.
- **Sections:** Brand/product context; product facts/image; shopping controls; summary and confirmation.
- **Main action:** Product facts → measurements → size/quantity → order review → simulated checkout → receipt.
- **Brand:** Creator; calm, specific, restrained.

#### Specification B

- **Approach:** Product facts first: fit, price, and selection lead; the story follows. Memphis postmodernist-inspired: juxtaposed type, an offset frame, and contrasting geometric shapes; translate unexpected relationships rather than reproduce the furniture.
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

# Studio White — 2. Plan

Fictional completed student work by Jordan Rivera. Peer conversations are teaching scenarios. This is a filled example, not a worksheet.

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

# Campus Cotton — 2. Plan

Fictional completed student work by Maya Chen. Peer conversations are teaching scenarios. This is a filled example, not a worksheet.

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

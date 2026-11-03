# Day One Cotton — one evolving project record
Fictional Nina Shah. Actual artifact work and tests: November 2, 2026. The class checkpoints below are a rehearsal of future dates, not claimed attendance. AI drafted code and this record; the assistant selected scope, inspected it and ran the checks. Server adapted from the course sample.

## 1. Research — due November 10
**Question:** can a single white-shirt store make fit and total cost easy for a student commuter?

| Source checked Nov 2 | Observation | My design inference |
| --- | --- | --- |
| [UNIQLO Supima crew](https://www.uniqlo.com/us/en/products/E438715-000/00?colorDisplayCode=00) | White option, sizes, product details and care information. This is a women's product, an adjacent reference rather than the same garment. | Put measurements and care beside the choice. |
| [Everlane organic crew](https://www.everlane.com/products/mens-essential-organic-crew-uniform-white) | Material/fit explanation and fit reviews support the product story. | Give specific product facts; do not invent reviews or borrow certifications. |
| [Fresh Clean Threads six-pack](https://freshcleantees.com/products/all-white-crew-6-pack) | A multi-pack is the central offer; the site also provides fit help. | My one-shirt project should show unit price and quantity without bundle complexity. |

These are interface observations, not proof of demand or comparative garment quality. No copied competitor prices, images or testimonials.

**Two positions/personas:** A: a commuter, Sam, who wants one simple replacement tee and needs clear fit before spending. B: a style-focused student, Alex, who wants a statement brand and editorial imagery. Both are hypotheses, not interview findings. Choose A: the fit/price problem is small enough to demonstrate and fits the single-product scope. Do not claim an unserved market from three websites.

**Design and brand:** modernist structure: grid, clear hierarchy, restrained type, useful facts. Everyperson archetype: plain language, predictable choices. Postmodern alternative B would use expressive composition and a stronger fashion story; save that for a different audience. Ethical Cialdini choices: reciprocity through useful fit guidance; commitment/consistency through keeping the shopper's chosen size and quantity consistent in the receipt. These are design interpretations, not claims that conversion increased. No fake scarcity or social proof.

**Class-review rehearsal:** ask a real peer “Who is this for, and what evidence supports that?” Pending actual peer. No GitHub issue is fabricated.

## 2. Plan — due November 17
**A:** balanced product story/illustration followed by adjacent size guide and bag. **B:** stacked, fit-first page with a shorter illustration. Same data and workflow, different hierarchy. Choose after trying the same task, not after counting features.

| User story | Acceptance check |
| --- | --- |
| As a shopper, I can compare a tee I own with the size guide. | S/M/L show flat garment width and length with cm and measuring instructions. |
| I can see the cost before ordering. | Quantity 2 displays $48, with simulation charges disclosed. |
| I can correct an incomplete choice. | Empty size or quantity outside 1–5 cannot save an order. |
| I can review what was saved. | Receipt/history show reference, size, quantity and server-calculated total; survive local server restart. |

Essential: one product, clear fit, quantity, total, simulated checkout and actual local SQLite. Cut: accounts, payments, shipping integration and promotions. Use synthetic email; never persist it. Public Pages stores only in this browser; the local server is a separate demonstration. Specification is this Plan section, not a second report.

## 3. Build A/B — due November 24
Working [A](/student-trial/shirt/a.html) and [B](/student-trial/shirt/b.html). Shared CSS/JS and Node SQLite backend. Public static simulation is labeled. SVG shirt is an illustration, not a photo of a real garment. A better matches a quick product overview; B gives the same offer a more sequential rhythm. Selection is the assistant's heuristic judgment, not a student preference experiment. Launch A.

Actual browser run: missing size saved nothing. A M × 2 saved DEMO-6CAEBF2E at $48. B S × 1 saved DEMO-3D43BC24 at $24. B could see A's local history. See review hub for final retests/backend checks.

## 4. Improve — checkpoint December 3; same links through December 6
**Observed issue S1:** the “Choose your size” anchor lands in the bag; the measurement explanation could be missed, especially in a stacked layout. Added a compact measurement reminder inside the bag. Also put sample delivery/tax immediately under total and repeated size/quantity in the receipt.
**Retest:** see the dated review hub and actual browser receipts. No payment or email sent.
**Real peer:** still required. The change above comes from assistant inspection, not a human peer. Ask the peer to buy M × 2, explain the measurements and tell whether payment happened. Record their actual GitHub issue, response/change and retest before claiming full review credit.

**Demo talk:** “I chose a commuter audience; the size guide became a requirement. JavaScript updates the visible total. The Node server validates inputs, reads its own price and saves a SQLite record. The public preview uses browser storage. I can show the difference.”


[Back to the three products and assessment](/examples/student-trial).

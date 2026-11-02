# Worked example: from research to specification

This is an optional **planning example**. Its QA table is a place to record future results. For a completed submission, runnable product, actual technical checks, and rubric feedback, open [Campus Cotton](/examples/submissions/campus-cotton) or [Studio White](/examples/submissions/studio-white).

## Business and audience

**Working concept:** “Everyday White,” a fictional college-focused T-shirt company. **Promise:** Clear fit information and an uncomplicated shopping experience. **Concept price:** $25 per shirt; this is not a validated business model. Use an original name/identity for your own work.

## Prioritized features

| ID | Feature | Priority | Research / business rationale |
| --- | --- | --- | --- |
| F1 | Product page with honest imagery, fit, fabric, and care | Essential | All four competitors explain the product; photos show fit/detail |
| F2 | Size selection with measurement guide | Essential | Fit is a major source of differentiation and uncertainty |
| F3 | Cart quantity and itemized total | Essential | The customer must understand the simulated purchase |
| F4 | Validated simulated checkout and SQLite order storage | Essential | Complete the course's simulated-store workflow |
| F5 | Brand story and audience-specific copy | Essential | Communicate why this offer matters |
| F6 | Short/regular/tall comparison | Differentiating, optional | Seen in fit-focused competitors; requires clear measurements |
| F7 | Real payments, memberships, subscriptions, huge catalog | Deferred | Unnecessary for this project's core simulated journey |

## User stories and acceptance checks

**As a buyer, I can choose a size confidently.** Given the product page, when I open the guide, I can read garment measurements and return to selection. Missing size selection produces a clear prompt.

**As a buyer, I can review a purchase.** Given a $25 shirt and quantity 2, the subtotal is $50. Changing quantity updates the summary. Shipping/tax are either explicitly excluded in the simulation or calculated by the stated rule; no unexplained charges appear.

**As a buyer, I can complete a demo order.** Invalid required inputs produce useful messages. Valid synthetic input produces a clearly simulated confirmation and one SQLite order. A failed write shows an error rather than false success. The app does not request card data.

## Minimal data model

`products`: identifier, name, price in integer cents, description. `orders`: identifier, creation time, demo status, total cents. `order_items`: order identifier, product identifier, size, quantity, unit price cents. Add only fields your workflow needs; use synthetic customer data in demonstrations.

## Build tasks

Create the interface and states; connect product data; implement cart totals; validate the demo order; save/read SQLite data; handle errors; verify the journey; document setup and deployment. Each task should reference its feature and acceptance check.

## QA evidence example

| Check | Expected | Actual |
| --- | --- | --- |
| Quantity 2 | $50 subtotal | Student records actual result |
| No size | Clear prompt; no misleading confirmation | Student records actual result |
| Valid synthetic order | Confirmation + matching database record | Student records actual result |
| Failed storage | Error state, no false success | Student records actual result |

These are planned checks, not claimed test passes. Use your real results and report unfinished behavior honestly.

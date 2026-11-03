# Your T-shirt store

Everyone starts with the same product: a plain white T-shirt. Choose whom it is for, give it your own brand, and build a professional-looking **simulated online store**.

**Examples:** [Campus Cotton](/examples/submissions/campus-cotton) · [Studio White](/examples/submissions/studio-white).

## What the finished store needs

| A visitor can… | What you show |
| --- | --- |
| Understand the offer | Clear audience, brand, price, product images, and useful product information. |
| Choose a shirt | Labeled size choices, fit information, and clear selection states. |
| Review the purchase | A cart or order summary with correct quantities and totals. |
| Finish a demo checkout | Required inputs checked, a clear demo label, and confirmation. |
| See data work | SQLite-backed product or order data connected to the application. |
| Find help | Clear contact, delivery, and return information for the fictional business. |

No real payments or payment-card collection. Use synthetic orders and label fictional product claims and policies. A static GitHub Pages site cannot run a server-side SQLite database: explain how to run your backend and what your published version can do.

## Show how your data works

Your **public site** lets a visitor try the store. Your **backend** is the server code that reads or saves SQLite data. Explain both in your setup notes.

- Link the published A/B pages and label any browser-storage simulation.
- Include the backend code and the command needed to run it. Say where the SQLite file is created.
- Try one synthetic order, inspect its saved record, then reload or restart and check what remains. Record the actual result and any limits.

**Keep the proof short:** “Public mode: [browser simulation or live backend]. Local start: [command]. Persistence check: [synthetic reference and what remained after restart].” Put it in the existing record, not another report.

Browser storage alone does not meet the SQLite requirement. If your public host cannot run the backend, provide runnable local setup steps and demonstrate that version. [Use the supported SQLite starter: run, save, and reopen one order](/examples/submissions/run-examples).

## Follow the four steps

1. **Research:** compare three clothing sites. Consider two market positions and two customer personas. Choose an audience and explain your evidence and assumptions.
2. **Plan:** compare two short website approaches. Write three to five user stories, essential features, and checks for success.
3. **Build:** make two working versions. They can share code; change something meaningful about how they serve or communicate with the customer.
4. **Improve:** ask a peer to try the selected version. Make at least one meaningful change from their feedback, retest it, and publish your choice.

Reuse and improve your Brand Studio work: audience promise, archetype/voice, original logo and style guide, two visual routes, and two honest persuasion applications. Show how those decisions appear in the store. [Find your angle](/process/find-your-angle). Keep that earlier milestone's original scope separate from this final store.

**How this grows from Brand Studio:** keep your existing brand and code where useful. Brand Studio required the size selector and demo bag, without full checkout. The final project adds a simulated checkout and SQLite data, supported by research, a plan, and peer review. Link your existing `SPEC.md`, reviewed `LEARNING.md`, and feature pull request instead of copying them into another report. Brand Studio keeps its original 30/40/30 rubric; the new checkpoints use the four-part rubric.

## What you submit

Your selected site, alternate version, repository, and [short process document](/templates/four-milestones). Include the store in your portfolio and demonstrate a purchase at Demo Day. Keep these links in the existing review record; the final grading entry reuses that work and your Demo Day explanation, with no second upload or report.

[Assignment & simple rubric](/course/milestones) · [Due dates](/course/schedule) · [Learn research and user stories](/process/research-to-features).

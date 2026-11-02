# Studio White — 4. Get feedback and improve

Fictional completed student work by Jordan Rivera. Peer conversations are teaching scenarios. This is a filled example, not a worksheet.

### Completed peer-feedback record — fictional scenario

**Reviewer:** Casey Lane, a fictional classmate. **Session:** November 30, 2026; retest in the same fictional session. These are scenario events, not actual interviews.

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

# Studio White — 3. Build and compare

Fictional completed student work by Jordan Rivera. Peer conversations are teaching scenarios. This is a filled example, not a worksheet.

### My completed product submission

[Version A](/samples/studio-white/a.html) · [Version B](/samples/studio-white/b.html)

**Launch choice:** Version B. Product details are accessible immediately while the visual style still supports the brand.

**What stays steady:** the product/service, hero headline and supporting copy, main action, and shared data. Visual treatment and hierarchy both change, so this is a combined design comparison, not an isolated causal experiment. [Inspect the brand notes](/samples/studio-white/style-guide.html).

**Task used for comparison:** Find the product facts, choose L, review three shirts, and complete the demo checkout.

| Version | Recorded observation in this fictional review |
| --- | --- |
| A | The reviewer said the editorial page looked polished. |
| B | The reviewer preferred seeing practical product details earlier. I recorded a preference, but did not record a full task attempt on both versions. |

**What I kept:** The shared core task works in both presentations. The versions work, but my comparison notes are less complete than the product itself. I need stronger task evidence for the choice.

**Code and setup:** [Shared class-demo source](https://github.com/kaw393939/is117-demo-days/tree/main/docs/public/samples). The downloadable submission bundle includes the product source. Run `node product-source/server.mjs` from the bundle root, then use the printed local address. The public version stores synthetic records in this browser; the local version demonstrates SQLite.

#### My explanation of how it works

The page reads the concept price from the project data. Quantity changes update the displayed total, and checkout returns a demo reference. I can describe the interface, but my first explanation did not distinguish browser storage from SQLite server storage.

**Known limit:** No manufacturing or sustainability claim is verified. Concept price $42 is an assumption, not a market-tested price.

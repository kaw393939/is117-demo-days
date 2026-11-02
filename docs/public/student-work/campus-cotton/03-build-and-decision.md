# Campus Cotton — 3. Build and compare

Fictional completed student work by Maya Chen. Peer conversations are teaching scenarios. This is a filled example, not a worksheet.

### My completed product submission

[Version A](/samples/campus-cotton/a.html) · [Version B](/samples/campus-cotton/b.html)

**Launch choice:** Version A. The selected shopper can get to fit and price information immediately.

**What stays steady:** the product/service, hero headline and supporting copy, main action, and shared data. Visual treatment and hierarchy both change, so this is a combined design comparison, not an isolated causal experiment. [Inspect the brand notes](/samples/campus-cotton/style-guide.html).

**Task used for comparison:** Find the measurement guide, choose M, add two shirts, and complete a simulated checkout.

| Version | Recorded observation in this fictional review |
| --- | --- |
| A | The reviewer located price and the measurement disclosure together before selecting M. |
| B | The reviewer noticed the product imagery first, then moved to the measurement and selection controls. |

**What I kept:** The shared core task works in both presentations. My decision follows the stated visitor task; I did not treat a preference as proof of higher sales or hiring success.

**Code and setup:** [Shared class-demo source](https://github.com/kaw393939/is117-demo-days/tree/main/docs/public/samples). The downloadable submission bundle includes the product source. Run `node product-source/server.mjs` from the bundle root, then use the printed local address. The public version stores synthetic records in this browser; the local version demonstrates SQLite.

#### My explanation of how it works

The browser requires a size and calculates a preview total. In local-server mode, the server validates size and quantity again and calculates the authoritative total from its product table. Changing the browser total cannot change the saved price.

**Known limit:** AI-generated shirt imagery is a concept, not a photograph of manufactured stock. Fabric, measurements, and policies are classroom assumptions.

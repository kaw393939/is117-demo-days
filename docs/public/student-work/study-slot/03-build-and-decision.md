# Study Slot — 3. Build and compare

Fictional completed student work by Jordan Rivera and Riley Park. Peer conversations are teaching scenarios. This is a filled example, not a worksheet.

### My completed product submission

[Version A](/samples/study-slot/a.html) · [Version B](/samples/study-slot/b.html)

**Launch choice:** Version A. Topic context helps a student decide whether this service fits their question before choosing a time.

**Task used for comparison:** Request help with CSS for a preferred window and explain the next step.

| Version | Recorded observation in this fictional review |
| --- | --- |
| A | The reviewer understood that the supported topics were HTML, CSS, and introductory JavaScript. |
| B | The reviewer could select a preferred window but initially treated the choice as a reservation. |

**What I kept:** The shared core task works in both presentations. The versions work, but my comparison notes are less complete than the product itself. I need stronger task evidence for the choice.

**Code and setup:** [Shared class-demo source](https://github.com/kaw393939/is117-demo-days/tree/main/docs/public/samples). The downloadable submission bundle includes the product source. Run `node product-source/server.mjs` from the bundle root, then use the printed local address. The public version stores synthetic records in this browser; the local version demonstrates SQLite.

#### My explanation of how it works

The request sends a topic and preferred window to storage. The returned status means pending, not booked. Our explanation identifies the fields and status, but does not explain the request-history handoff as clearly as the form.

**Known limit:** No tutor is contacted. Availability is fictional; this is a request workflow, not a live booking platform.

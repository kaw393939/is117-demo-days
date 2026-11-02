# Room Ready — 3. Build and compare

Fictional completed student work by Maya Chen and Avery Ellis. Peer conversations are teaching scenarios. This is a filled example, not a worksheet.

### My completed product submission

[Version A](/samples/room-ready/a.html) · [Version B](/samples/room-ready/b.html)

**Launch choice:** Version A. The scope and confirmation language are clearer before the visitor starts the form.

**What stays steady:** the product/service, hero headline and supporting copy, main action, and shared data. Visual treatment and hierarchy both change, so this is a combined design comparison, not an isolated causal experiment. [Inspect the brand notes](/samples/room-ready/style-guide.html).

**Task used for comparison:** Request assembly for a desk, select a preferred window, and explain whether you have a confirmed appointment.

| Version | Recorded observation in this fictional review |
| --- | --- |
| A | The reviewer read the supported items and described the next step before starting the form. |
| B | The reviewer reached the form sooner but asked whether the selected window was already reserved. |

**What I kept:** The shared core task works in both presentations. My decision follows the stated visitor task; I did not treat a preference as proof of higher sales or hiring success.

**Code and setup:** [Shared class-demo source](https://github.com/kaw393939/is117-demo-days/tree/main/docs/public/samples). The downloadable submission bundle includes the product source. Run `node product-source/server.mjs` from the bundle root, then use the printed local address. The public version stores synthetic records in this browser; the local version demonstrates SQLite.

#### My explanation of how it works

The interface validates the item and preferred window. The local server checks both against allowed values and writes a request record. The history shows the stored request, but it is not a secure staff dashboard or a real operator notification.

**Known limit:** No actual service, operator notification, or scheduling integration exists. Any price shown is illustrative.

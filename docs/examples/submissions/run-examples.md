# Try the T-shirt browser storage starter

A **clickable prototype** lets someone try the same steps they would on a real site. **Browser storage** lets JavaScript remember a demo order after the page reloads. GitHub Pages hosts the prototype, and each browser keeps its own history.

[Open Campus Cotton A](/samples/campus-cotton/a.html) · [Open B](/samples/campus-cotton/b.html) · [Download the source](/downloads/is117-example-products.zip)

## Run the save and reload check

1. Open A. Choose size M and quantity 2. Review the order and finish the simulated checkout.
2. Copy the demo reference. Reload the page and open **Demo order history**.
3. Look for the same reference, size, quantity, and total. Open B in the same browser and see if it can read the same history.

Use fake order details. A demo order stays in this browser on this site. It won’t appear on another device or after you clear the site’s data. No order or email is sent.

## What to record

> In Version A, I saved a demo order for two medium shirts. After reload, history showed the same reference and $50 total. Version B could read that same history.

In your Build record, include your actual reference, result, and GitHub Pages links. If the check fails, say what happened and what you’ll try next.

## Make it your own

1. Download the source or [view it on GitHub](https://github.com/kaw393939/is117-demo-days/tree/main/docs/public). Keep `prototype-storage.js` alongside the `samples` folder.
2. In `samples/projects.json`, find `campus-cotton`. Change the name, headline, and price for your audience. Try the same task on both versions.
3. Publish the files on GitHub Pages and test the published links. `samples/ui.js` handles the forms and screen updates. `prototype-storage.js` uses `localStorage` to save and read demo records.

For group projects, the same idea works for a fake request, quote, or saved choice. Pick a piece of data your workflow should remember. [Try a group example](/samples/room-ready/a.html) · [See the T-shirt assignment](/projects/white-tshirt).

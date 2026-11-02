# Try the examples and inspect the code

The [six submission examples](/examples/submissions/) contain twelve clickable versions. Use the public links to compare their designs and complete simulated workflows. There are no real orders, appointments, emails, payments, or student accounts.

## Two ways to run them

| Mode | What runs | Where records go |
| --- | --- | --- |
| Public GitHub Pages examples | HTML/CSS/JavaScript in your browser | Browser storage for this device; no SQLite backend |
| Downloaded local examples | The same pages plus a small Node 24 server | SQLite database outside the public files |

[Download all example source files](/downloads/is117-example-products.zip). The archive includes twelve pages, shared styles/JavaScript, six project descriptions, professional-profile drafts, the local server, and two fictional-customer `AGENTS.md` briefs. The source is also in [GitHub](https://github.com/kaw393939/is117-demo-days/tree/main/docs/public/samples).

## Run the SQLite example locally

1. Install Node.js 24 from the [official Node.js site](https://nodejs.org/).
2. Extract the archive and open a terminal in its `samples` folder.
3. Run:

```sh
node server.mjs
```

4. Open the local URL printed in your terminal. Follow the version-comparison links or change `campus-cotton/a.html` to another example's folder/version.
5. Complete a demo order or request using synthetic information. Expand the history to inspect the saved record. Reload, or stop/restart the server, and check that the record remains.
6. Stop the server with **Control-C**.

The server listens only on your computer at `127.0.0.1:4174`. It prints the database location, normally your system temporary folder. The port and database can be overridden with `IS117_DEMO_PORT` and `IS117_DEMO_DB`. Do not deploy this local teaching server as a real public service.

The server serves the example products, not the VitePress guide. Links back to documentation require the published guide. Professional-profile text files remain available locally.

## What the code demonstrates

- **`projects.json`:** shared content for the six examples.
- **`ui.js`:** selection, quantity totals, validation, confirmation, and records; one shared implementation supports two presentations.
- **`ui.css`:** responsive layout, visible keyboard focus, and A/B composition.
- **`server.mjs`:** validates inputs and stores demo records in SQLite. Shirt totals are calculated from server-side product prices, rather than trusting the browser's submitted total.

The demo email is validated but is not saved in SQLite or sent anywhere. Use synthetic information in either mode. Browser storage can be cleared through your browser's site settings; the local database file can be removed after stopping the server if you want to reset local examples.

## Scope and limitations

These are small teaching products. The AI-generated images are concepts; there is no manufactured stock or product photography. The services have no live availability, notifications, or fulfillment. The portfolios describe fictional students and link to labeled profile drafts.

The code is an example to inspect and explain, not an additional framework requirement. Your project can use a different implementation. Follow the published project requirements, including the T-shirt project's SQLite expectation, and document what actually works in your deployment.

## Image-generation record

The six concept images were made with the built-in image-generation tool after the initial example content was written. [Read the exact prompts](/samples/image-prompts.json). Assets are included in the download. They illustrate fictional projects and must not be presented as real product photos, customer testimonials, or student records.

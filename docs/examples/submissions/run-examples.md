# Run the T-shirt SQLite starter

**Get one demo order to save, stop the server, and find the order again.** You can build on this working classroom code for your T-shirt store. Then make the brand and experience your own. There is no package installation or account setup.

[Download the working starter and examples](/downloads/is117-example-products.zip) · [Try the public preview](/samples/campus-cotton/a.html)

**Start with Campus Cotton.** The download contains six examples; use `samples/campus-cotton/a.html` for this first task. Leave the other five alone until you want a reference. You are not being asked to rebuild all six.

**Something you can show:** “My app checks an order and saves it in a database. I can explain the difference between the public preview and the local server.”

## Run the SQLite example locally

1. Install Node.js 24 from the [official Node.js site](https://nodejs.org/).
2. Extract the archive and open a terminal in its `samples` folder.
3. Run:

```sh
node server.mjs
```

4. Open the printed **Campus Cotton** URL: `http://127.0.0.1:4174/is117-demo-days/samples/campus-cotton/a.html`. Try A first, then use its version-comparison link for B.
5. Check that the page says **Local server mode: records are stored in SQLite.** Choose M, quantity 2, review the order, and check out with `demo@example.test`. Copy its demo reference from the confirmation.
6. Expand **Demo order history**. Your reference should appear. Stop the server with **Control-C**, run `node server.mjs` again, and reload the page. Open history: the same reference should still be there.
7. Record what you actually observed in your existing project document. If it failed, record the error and get help in class. Stop the server with **Control-C** when finished.

The server listens only on your computer at `127.0.0.1:4174`. It prints the database location, normally your system temporary folder. The port and database can be overridden with `IS117_DEMO_PORT` and `IS117_DEMO_DB`. Do not deploy this local teaching server as a real public service.

The server serves the example products. Links labeled “Read the submission” or “All six examples” open the **published course guide**, so they need an internet connection. The product and its SQLite workflow run locally; professional-profile text files remain available locally.

## Make it your own

Copy the extracted `samples` folder into your project repository, or reuse the parts in your existing Brand Studio app. Keep a working copy before changing it.

1. In `projects.json`, find the entry with `"slug": "campus-cotton"`. Start by changing its name, headline (`tag`), and price. Keep the slug and file paths while you learn how the pieces connect.
2. Restart the server, refresh, and make one new order. Check that the page and saved total match your changed price. Earlier saved orders should keep their original totals.
3. Improve the HTML/CSS and shared UI for your own audience and A/B approaches. Ask AI to explain the existing flow before making a small change. Check the result yourself.

You still need your own research, decisions, design, working A/B versions, and feedback-driven improvement. Reusing this starter is allowed; explain what you changed and how you checked it.

**Keep the evidence small:** link the code and setup command, then record the reference and restart result in the same Build/Improve record. This is part of the existing SQLite requirement, not a new submission.

<details>
<summary>If the server will not start</summary>

- Check `node --version`: this starter needs **Node 24 or newer**. Older versions may not include `node:sqlite`.
- “Cannot find module”: open the terminal in the extracted **samples** folder, where `server.mjs` is located.
- “Address already in use”: stop your earlier server, or run `IS117_DEMO_PORT=4192 node server.mjs` and use the newly printed URL.
- A Node SQLite experimental-feature message is a warning; check whether the local address is printed below it. If the process exits, bring the actual error to class.

</details>

<details>
<summary>Public preview versus SQLite, source files, and limits</summary>

## Two ways to run them

| Mode | What runs | Where records go |
| --- | --- | --- |
| Public GitHub Pages examples | HTML/CSS/JavaScript in your browser | Browser storage for this device; no SQLite backend |
| Downloaded local examples | The same pages plus a small Node 24 server | SQLite database outside the public files |

[Download all example source files](/downloads/is117-example-products.zip). The archive includes twelve pages, shared styles/JavaScript, six project descriptions, completed fictional professional-profile content, the local server, and two fictional-customer `AGENTS.md` briefs. The source is also in [GitHub](https://github.com/kaw393939/is117-demo-days/tree/main/docs/public/samples).

## What the code demonstrates

- **`projects.json`:** shared content for the six examples.
- **`ui.js`:** selection, quantity totals, validation, confirmation, and records; one shared implementation supports two presentations.
- **`ui.css`:** responsive layout, visible keyboard focus, and A/B composition.
- **`server.mjs`:** validates inputs and stores demo records in SQLite. Shirt totals are calculated from server-side product prices, rather than trusting the browser's submitted total.

The demo email is validated but is not saved in SQLite or sent anywhere. Use synthetic information in either mode. Browser storage can be cleared through your browser's site settings; the local database file can be removed after stopping the server if you want to reset local examples.

## Scope and limitations

These are small teaching products. The AI-generated images are concepts; there is no manufactured stock or product photography. The services have no live availability, notifications, or fulfillment. The portfolios describe fictional students and link to labeled fictional profile examples.

The code is an example to inspect and explain, not an additional framework requirement. Your project can use a different implementation. Follow the published project requirements, including the T-shirt project's SQLite expectation, and document what actually works in your deployment.

## Image-generation record

The six concept images were made with the built-in image-generation tool after the initial example content was written. [Read the exact prompts](/samples/image-prompts.json). Assets are included in the download. They illustrate fictional projects and must not be presented as real product photos, customer testimonials, or student records.


</details>

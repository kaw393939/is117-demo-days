# Nina’s three-project rehearsal
Fictional student work, built by the teaching assistant with AI assistance and an adapted classroom Node/SQLite server. This is a fresh example, not a genuine student’s submission. No real partner, client, peer study or professional account.

## Run
Node 24 or newer; no dependencies. Unzip source, then run `node server.mjs`. Open http://127.0.0.1:4191/is117-demo-days/student-trial/shirt/a.html . Replace `shirt` with `group` or `portfolio` for the other products. Stop with Ctrl+C. Database lives in your temporary directory, outside these public files. IS117_DEMO_DB and IS117_DEMO_PORT can override paths/port. Use synthetic data only; loopback classroom server is not a production deployment.

GitHub Pages uses browser storage for the public previews. Local run uses actual SQLite for orders and inquiries. Email is validated, never persisted or sent. No payment, actual appointment, login or real customer data.

A is the selected layout; B is a real alternative sharing code/content. Read `records/` for the four stages, choices and honest evidence gaps. Browser and backend receipts are summarized on the course review page. The source is intentionally small; do not treat this as a production ecommerce template.

Run `node verify.mjs` for ten backend integration checks, including an actual server restart. Port 4197 must be free. Browser checks are documented separately; the script is not a substitute for a human peer walkthrough.

[Return to the three products](/examples/student-trial).

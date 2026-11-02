# 02 / Your Plain White T-Shirt company

**See the process in practice:** [two complete examples for each project](/examples/submissions/), including research, personas, specifications, working A/B versions, and a sample feedback-driven improvement.

Everyone begins with the same basic product. Your audience, business vision, branding, and customer experience make the project your own.

Build your best attempt at a professional **simulated eCommerce site**, using competitive research and specification-driven development. Preserve the existing Canvas expectation of **SQLite and simulated checkout**. HTML, CSS, and JavaScript remain useful foundations; additional technologies are welcome when you can explain and maintain them.

## 1. Research 3–5 competitors

Compare a relevant product from each brand: audience, pricing conditions, positioning, fabric/fit information, imagery, shopping flow, trust information, and usability. A competitor may have a larger catalog; explain the selected product's relevance. Record source URLs and research dates. Include concise screenshot evidence.

Use the [completed class example](/examples/competitive-landscape), [screenshots](/examples/site-references), and [research worksheet](/templates/research).

## 2. Turn research into your feature list

For each feature, explain the customer need, research evidence, priority, and how you will know it works. Distinguish **essential**, **differentiating**, and **deferred** features. A list copied from another store is not yet a product decision.

Example: “Competitor fit guides address sizing uncertainty. My site will show garment measurements beside size selection. A visitor should be able to find them before adding a shirt.”

## 3. Specify before you build

Define the audience, brand promise, pages, main customer journey, data, features, acceptance criteria, and scope limits. Keep the specification current when a decision changes. The [worked example](/examples/tshirt-spec) shows research → feature → specification → QA.

## 4. Build the core simulated journey

Your exact design should follow your specification. A credible baseline includes:

| Customer task | Evidence to demonstrate |
| --- | --- |
| Understand the brand and shirt | Clear positioning, original brand identity, useful product imagery, fabric/fit/care information |
| Choose a product option | Labeled size controls and clear selected/missing states |
| Review a purchase | Cart or order summary with correct quantity and totals |
| Complete a simulated checkout | Validation, clear demo labeling, and a confirmation/reference |
| See stored data work | SQLite-backed product or order data connected to the application, explained in the README |
| Find help | Appropriate contact, delivery, and return information for the classroom scenario |

No real payment processing or payment-card collection. Use synthetic test orders, keep secrets out of the browser/repository, and distinguish fictional classroom policies from real business promises. A deployed SQLite application may need server hosting; a static frontend alone cannot execute a server-side database. Explain your deployment and any live-demo limitation honestly.

## 5. Verify, document, and present

Keep specifications, feature priorities, QA results, feedback, and known limitations with your code. Show a successful path and at least one validation/error case. Explain what you built and what AI helped generate. Include the project in your portfolio and four individual progress reviews.

At Demo Day, communicate your vision, one research-driven decision, and a short working customer journey. Professional quality comes from coherence and careful execution, not the largest feature count.

# IS117 Project Plan Guide

Use your existing T-shirt or portfolio project record. A few bullets per section are enough. For each major choice, say **what you picked, why, and how you’ll check it**. Your plan becomes your instructions for Build. Update the same plan as you learn what works.

## 1. Plan the main task

Name your audience and the main task they should be able to do. Sketch two ways to arrange the same content or task. Write **3–5 user stories** with a check for each. A user story says what someone wants to do and why. Name what you’ll build first and one feature you’ll save for later. [See a story and check](./audience-and-stories).

## 2. Research how to build it

Everyone watches the [React documentary](https://www.youtube.com/watch?v=8pDqJVdNa44). Explain one React idea using your site. A **component** is a piece of the interface, like a size picker. **State** is a value that can change as someone uses the site, like the selected size.

Compare two **frameworks** with AI, such as Next.js and SvelteKit. A framework helps organize and build your site. Pick one and explain why it fits. Research any **libraries** you might need for specific jobs, like form validation. Check one AI claim against the official docs. [Compare frameworks and libraries](./frameworks).

## 3. Plan hosting and storage

- **T-shirt site:** Build a clickable GitHub Pages demo with fake orders. Use **browser storage** such as `localStorage` to simulate what a real backend would save. Say what the demo saves, what should still be there after a reload in the same browser, and how to clear it.
- **Portfolio:** Publish on **GitHub Pages**. Check that your framework can produce a **static build**, a set of files a host can serve without running your app on a server.
- **Optional research:** Shopify is a commerce platform, Stripe handles payments, and Vercel hosts sites. Explore what they could add to a future version. The class demo uses fake orders and collects no real payment details.

[Plan hosting and browser storage](./hosting-and-storage).

## 4. Plan for mobile, accessibility, and privacy

Plan to try the main task on a phone and with a keyboard. Check visible focus, readable contrast, form labels, and image descriptions. Pick one mistake a visitor might make and say how the site should help them recover.

Check whether you have permission to use your images and fonts. Research **data minimization**, a GDPR principle that means collecting only what you need. Say what the demo stores and what you’d need to research before collecting real customer information. [Use the mobile, accessibility, and privacy checklist](./mobile-accessibility-privacy).

## 5. Plan how people will find it and how you’ll know it works

For **SEO** (search engine optimization), draft a clear page title and description. Pick one social channel and write a short post. Sketch the **link preview** with a title, description, and image. Say what you want someone to do after they click.

**Analytics** means measuring what people do on a site. For example, ask a classmate to start the demo checkout and see whether they reach the confirmation without help. Note where they get stuck. Installing analytics is optional. [Plan search, sharing, and one measure](./search-sharing-analytics).

## Use the plan in Build

Build from your stories and run the checks you planned. Try the same main task in both versions. In the same record, note what changed, why, and what actually happened in your checks.

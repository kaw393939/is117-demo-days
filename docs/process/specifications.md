# Write a website plan

A **specification**, or **spec**, is your current agreement about the problem, expected behavior, scope, and evidence of completion. It should help you decide what to build and help another person check whether it works.

Start with the [short four-step template](/templates/four-milestones). The sequence below explains the process; it is not eight extra submissions.

## Use this sequence

1. **Discover:** describe the audience, business need, current workflow, and assumptions.
2. **Research:** inspect alternatives and record evidence that influences decisions.
3. **Prioritize:** choose essential, differentiating, and deferred features.
4. **Specify:** describe behavior, pages, data, acceptance criteria, and limits.
5. **Delegate:** turn features into reviewable tasks with owners and reviewers.
6. **Build:** use AI and your own engineering work in small increments.
7. **Verify:** test against the acceptance criteria, record failures, and fix them.
8. **Revise:** update the spec when a decision changes and explain why.

## Make acceptance criteria observable

Weak: “The checkout is professional.”

Better: “With a size selected and quantity 2, the summary shows the selected size and twice the unit price. Submitting without the required information shows a readable error. A valid simulated order produces a confirmation and a SQLite record.”

## Keep the specification useful

Include purpose, audience, brand direction, user stories, navigation, feature priorities, data model, interface states, acceptance checks, accessibility needs, task ownership, and known exclusions. Reference it in task issues and QA notes. Use the [specification template](/templates/specification).

AI can help clarify or draft a specification. You are responsible for choosing the scope, correcting mistakes, and ensuring that the implemented behavior matches it. A large AI-generated document is not evidence that these decisions were made.

# Write a website plan

A **specification**, or **spec**, is a short plan: who the site serves, what it should do, and how you will check it. **Spec-driven development** means using that plan to guide the code, including code made with AI.

## Compare two approaches to one task

For a T-shirt shopper who is unsure about fit:

| | Approach A | Approach B |
| --- | --- | --- |
| First thing shown | Product, price, size guide, and size choices | A short fit explanation, followed by the same shopping controls |
| Same core task | Choose a size, review the total, complete a demo order | Choose a size, review the total, complete a demo order |
| Why try it? | A returning shopper may want to act quickly | A first-time shopper may need more explanation |
| What to compare | Can a peer find the guide and choose a size? | Give the peer the same task and record what happens |

These are two short plans for the same product. You can share the data and checkout code. You do not need two separate business plans.

## Turn one story into a check

**Story:** As a shopper, I want to review my quantity and total so I know what the demo order includes.

**Vague:** “The checkout is professional.”

**Checkable:** “With a size selected and quantity 2, the summary shows that size and twice the unit price. Missing required information shows an error. A valid simulated order produces a confirmation and a SQLite record.”

## Use the plan while you build

1. **Write:** choose three to five useful stories, essential features, and observable checks. Include the pages, data, errors, and limits they need.
2. **Build a small part:** ask AI to help with one feature. Give it the relevant story and check.
3. **Try it:** run the check yourself and record the result. Fix or explain failures.
4. **Update:** if your decision changes, revise the plan and say why. For a group, name the task owner and reviewer.

A useful AI request is: “Build the quantity summary for this story and check. Explain the changed files and how I can verify the total.” You still choose the scope and check the result.

**Next:** fill in the Plan section of [your one project document](/templates/four-milestones#_2-plan). The [detailed specification template](/templates/specification) is optional help when you need more structure.

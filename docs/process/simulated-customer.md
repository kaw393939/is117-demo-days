# Practice with a fictional customer

Your group can use an AI tool as a **simulated business owner**. Ask questions, compare two proposals, and get feedback on your website plan. This is a way to practice the process—not an extra report.

The **client** explains what the business needs. Your **persona** describes the person who will use the site. For example, a tutoring coordinator is the client; a student requesting help is the user.

## Choose a starter customer

| Business | Client’s problem | Role brief |
| --- | --- | --- |
| **Room Ready** | Assembly inquiries arrive without enough detail to assess the job. | <a href="/is117-demo-days/samples/room-ready/customer/AGENTS.md" download="AGENTS.md">Download AGENTS.md</a> |
| **Study Slot** | Tutoring requests do not explain the topic or preferred time. | <a href="/is117-demo-days/samples/study-slot/customer/AGENTS.md" download="AGENTS.md">Download AGENTS.md</a> |

`AGENTS.md` is a plain-text instruction file. These starters give the AI a role, business problem, users, limits, and a way to review proposals. Adapt one to your own business.

## Use it in four small conversations

1. **Discover:** ask about the business, its users, the current problem, and a useful result.
2. **Compare:** show your research and two possible approaches. Ask the client to explain a preference; make and explain your own decision.
3. **Agree on the plan:** show user stories and checks for success. Keep the core task small.
4. **Review:** show the working site. Ask whether it addresses the agreed need and what one change would help.

Both partners should take part. Keep a few decisions in the same project document you already use; label the conversation **AI-simulated client**.

## Start the conversation

Place the brief in `customer/AGENTS.md` and explicitly ask your AI tool:

```text
Read customer/AGENTS.md and act as our fictional client.
Start with the business problem. Let us ask discovery questions,
then review two proposals with us. Do not write the whole solution yet.
```

AI tools handle instruction files differently. A file in a subfolder may need to be read explicitly. Add this role alongside existing project instructions; keep the builder/coach role clear when you switch back to coding.

## A tiny example — fictional

**Team:** “What happens after someone requests a time?”

**Client:** “An operator checks the item and availability before confirming.”

**Team’s decision:** “Our receipt will say ‘request received,’ not ‘appointment booked.’”

You still need a **real classmate’s walkthrough**, at least one meaningful feedback-driven change for each project, and a retest. AI roleplay can help you practice discovery; it cannot supply real user evidence or claim a test happened.

The [existing Brand Studio coach](https://github.com/kaw393939/is117-brand-studio/blob/main/AGENTS.md) uses small questions and visible decisions. These customer briefs use that teaching approach while giving the AI a business-owner role.

[Group requirements](/projects/group-project) · [Room Ready example](/examples/submissions/room-ready) · [Study Slot example](/examples/submissions/study-slot).

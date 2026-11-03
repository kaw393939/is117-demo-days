# Work together and give useful feedback

**Bring one clear task to class. Take turns trying each other's work, then use the feedback to improve it.** Research and plans can be reviewed before a website exists.

## Use this five-step review

1. **State the goal.** Share the current version and one task: “Choose a size and order two shirts,” or “Check whether this persona follows from my research.”
2. **Let the reviewer try.** Watch without coaching. The reviewer says what they notice and where they get stuck. Step in if something is unsafe or the task cannot continue; record that help was needed.
3. **Give specific feedback.** Describe one useful strength and the most important obstacle, including its effect. Use observations such as “I could not tell whether my appointment was confirmed.” Suggest a possible improvement.
4. **Record and respond.** Use a [GitHub issue](/process/github-feedback) in that project's repository. The owner chooses a response, links the change, or explains another decision. Keep an existing issue if the same problem continues.
5. **Retry before closing.** Try the same task on the changed version. Record what happened. Close a resolved issue; keep an unresolved one open with a next step.

Then **swap roles** so both people's work receives attention. In a trio, rotate owner, reviewer, and observer; the observer records what happened. Everyone still tries someone else's work.

Choose a small improvement you can act on. Feedback is not a grade or a judgment about a person. Sincere encouragement helps, but a required praise sandwich should not bury a serious problem.

::: tip What you keep
Add the review link and a short result to the **same project record**. There is no new issue quota or separate review report. Each of your three final projects needs a walkthrough by an actual peer, at least one meaningful change based on that feedback, and a retest. AI feedback and a simulated customer can help you practice; they do not replace that peer.
:::

## Share the group work fairly

Each member contributes to **design, development, and quality assurance (QA)**. Divide the project into small, meaningful parts and review each other's work. Integrate early rather than combining separate pieces just before the deadline.

| Part of a service inquiry site | Partner A | Partner B |
| --- | --- | --- |
| Design and plan | Service choice and form; checks for invalid input | Receipt and request history; checks for status wording |
| Build | Form and validation | Saving the request and displaying its status |
| Review and QA | Try B's receipt/history against the spec | Try A's form against the spec |
| Integrate and explain | Agree on the saved fields together; both rehearse the whole workflow | Agree on the saved fields together; both rehearse the whole workflow |

This is an example, not an extra feature list. A trio can share three comparable parts. Estimate effort together; an unfamiliar task may take longer than several small ones. Compare actual effort at each review and adjust the remaining work. **Commit counts, issue counts, and feature counts do not prove equal effort.**

Use a branch for a bounded change. In a pull request or issue, explain the change, how to run it, and what you checked. Ask a partner to review before merging when practical. Keep brief contribution notes as you work, using the [collaboration template](/templates/collaboration).

<details id="review-examples">
<summary>Two filled teaching examples</summary>

These are invented examples of useful records, not evidence of actual peer participation.

**Research / Plan review — T-shirt store**

- **Task:** “Read my competitor notes and tell me who this shirt is for.”
- **Reviewer:** “The links let me check your observations. I cannot tell why a commuter needs your shirt rather than any basic tee. Your persona says commuters prefer a slim fit, but the sources do not establish that.”
- **Owner response:** “I removed the fit claim and labeled the commuter need as a hypothesis. I chose an easy-to-check sizing approach and added a story with measurements beside the size control.”
- **Retest:** “I can distinguish the observed facts from the assumption and explain how to test the story. Planning issue closed; fit still needs user feedback.”

**Build review — Campus Cycle group inquiry**

- **Task:** “Request a tune-up and tell me whether you have an appointment.”
- **Reviewer:** “The service choices were clear. The receipt said ‘pending,’ but history said ‘confirmed.’ I would expect to arrive at the time I selected.”
- **Owner response:** “Made both views say ‘Pending review’ and added that the preferred window is a request, not a confirmed booking. Linked the fix.”
- **Retest:** “I submitted a new request and reopened history. Both views say pending; I know no appointment is booked. Closed the issue.”

</details>

## Where the feedback approach comes from

Toastmasters recommends agreeing on the speaker's objective, describing observed behavior, using personal reactions, and offering sincere encouragement with useful suggestions. We adapt those ideas to project reviews: evaluate the work against a task, explain its effect on you, and choose a manageable next step. The issue, specification, and retest are our course additions. This guide is not a Toastmasters program or endorsement. [How to Evaluate Effectively](https://www.toastmasters.org/magazine/magazine-issues/2018/july2018/sidebars/evaluate-effectively) · [5 Tips for Effective Feedback](https://www.toastmasters.org/magazine/magazine-issues/2019/apr/sidebars/5-tips-for-effective-feedback).

If someone is absent or the partnership is not functioning, contact the instructor privately through Canvas. Keep personal circumstances and grades out of public issues.

**Next:** [Record the review in GitHub](/process/github-feedback) · [Choose checks for your site](/process/quality).

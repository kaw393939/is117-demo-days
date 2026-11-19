# Git and GitHub: show how your work changed

**Why it matters:** A screenshot tells me what your site looks like. A small commit and a good issue tell me what you noticed, what you changed, and how you checked it.

## Try it

Pick one small change in a practice repo. For example, the link says “Click here,” but it leads to your résumé.

1. Open an issue. Say what someone was trying to do and what should change: “Name the résumé link so I know what it opens.”
2. Open your local copy in VS Code. Make the change and try the link in your browser.
3. Run `git status` and `git diff` before staging. Stage the file you actually meant to change, then commit it with a useful message like `Name the résumé link (refs #3)`. Use your own issue number.
4. Push your branch and open a pull request if your assignment calls for it. In a pull request targeting the default branch, `Closes #3` in its description links the issue and closes it when merged.

## Check your work

Can you open the issue, find the exact change, and explain how you tested it? If you staged an unrelated change, unstage just that file before you commit. If your repo has a GitHub Actions workflow, check the Actions tab after pushing and open the failing step if a check is red. Use the practical’s SSH setup guidance when you need a key; never share your private key.

[Original Git + AI practical and SSH guidance](https://github.com/kaw393939/is117_test/blob/master/README.md) · [Write a readable project record](./markdown-for-projects)

**Coursework:** This is a practice lesson, not a replacement for the full Canvas brief. Follow its issue count, evidence, and submission instructions if you’re doing the original assignment.

Original Canvas assignment: [Section 005](https://njit.instructure.com/courses/70710/assignments/759626) · [Section 007](https://njit.instructure.com/courses/70711/assignments/759627).

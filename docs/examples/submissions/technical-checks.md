# Checks on the class prototypes

The clickable prototypes run on GitHub Pages. The examples use fake orders and requests.

## Automated checks

Run `npm run check:examples` from the course repository. It checks the example files and the JavaScript that calculates totals, rejects invalid choices, and saves and reads records. The test also checks what happens when the browser rejects a write.

[Read the checks](https://github.com/kaw393939/is117-demo-days/blob/main/scripts/check-examples.mjs).

## Checks you can try in the browser

| Prototype | What to try | Expected result |
| --- | --- | --- |
| Campus Cotton | Leave size blank, then try to review. | The form asks for a size. |
| Campus Cotton | Save two size-M shirts, copy the reference, and reload. | The same reference, size, quantity, and $50 total appear in history. |
| Room Ready | Save a desk request and reload. | The same request appears in history with pending status. |
| Portfolio | Open a case study and the résumé/profile links. | You can find the project, contribution, and evidence. |

A demo order or request stays in the browser that saved it. Read the [starter check](/examples/submissions/run-examples#run-the-save-and-reload-check) and the [grading examples](/examples/submissions/grading-guide).

# Student experience review · second pass · November 2, 2026

The first revision made the submission structure and examples clearer. This pass found that useful instructions could still arrive too late on the screen. It also found a search failure for the common unaccented word “resume.” The follow-up changes improve the order and discoverability of existing content without adding required work.

This is a task-based expert walkthrough from a student's perspective, not a study with actual students. Screen position and visible-word counts describe the interface; they do not demonstrate comprehension or learning gains.

## What improved after the previous review

- **What to hand in:** the map clearly connects three project documents to four individual reviews and four group reviews. It distinguishes Canvas coursework from GitHub demo signup.
- **How to read examples:** milestone links and separate feedback disclosures make it possible to inspect one step without reading an entire packet. Scores, evidence, and revision feedback remain available.
- **How the concepts connect:** the small T-shirt example connects an observation, an assumed user need, a story, a feature, a check, and a feedback-driven change.
- **Search and hidden text:** “submit” led to the hand-in map. The previous deep-link fix makes hidden explanations reachable. Search remains a useful alternative to navigating every sidebar section.
- **Due dates:** separate section schedules keep dates apart while retaining the common class-work rhythm.

These are observed improvements to the navigation and explanations. Real students may still interpret them differently.

## What remained confusing and what changed

| Finding | Evidence from the walkthrough | Focused change |
| --- | --- | --- |
| The next task was still below the first mobile screen | At 390 × 844, “This week” began around y=1010; the hero described the whole course | The hero now names research, the week, the three-site task, and Nov 5 feedback class. Its main action jumps to that task |
| The assignment repeated the four-step process | A large diagram came before a table describing the same four steps; the requirements heading began around y=1141 on desktop | Put the requirements first. Link to the existing visual roadmap instead of repeating it inline |
| Instructions for using examples came after the previews | “Read only the step you need” appeared around y=1947 | Put that instruction in the opening paragraph. Keep the three-row project/score chooser visible and make the six visual previews optional |
| “resume” found no results | The site used accented “résumé,” and the normal search tolerance did not match the two accent differences | Normalize diacritics in both the search index and query; résumé resources now appear for “resume” |
| The feedback template used a wide five-column table | The same record requires reading across reviewer, task, observation, change, and retest | Use five labeled prompts with the same information, easier to read and fill on a phone |
| “Position” could sound like unexplained business jargon | Students are asked for two positions before the term is defined | Explain it as who an offer serves and why someone would choose it, with a small tee/club example |

The roadmap, six visual previews, completed submissions, rubric grades, and full feedback were retained. Their placement changed. No project requirements, deadlines, course weights, or rubric shares changed.

## Before and after measurements for this pass

The previous audit's after-state is this pass's before-state. Measurements use the same desktop viewport and `main.innerText`; closed content and navigation are excluded from the visible-word count.

| Page | Before | After | Practical effect |
| --- | ---: | ---: | --- |
| Assignment | 588 words | 496 words | About 16% less initial text; requirements heading moves from y≈1141 to y≈372 |
| Example index | 458 words | 307 words | About 33% less initial text; choose-one/current-step guidance appears before the choices |
| Submission template | 354 words | 348 words | Nearly the same amount of content, with clearer prompts and less sideways reading |

The template illustrates why word count alone is insufficient. Changing the shape and order of information can make it easier to use without cutting the information students need.

## Checks performed

- Production build, local-reference checks, schedule checks, and completed-assessment checks pass.
- Expanded local crawl: 260 resources, zero HTTP failures. The known static `#main` flags refer to targets created by JavaScript, checked in the previous runtime audit.
- “resume” now returns the résumé example and starter. “submit” reaches the hand-in map. “SQLite” returns planning guidance, the runnable local example, and the T-shirt data explanation among the first few results.
- At 390px, the weekly task and its action are present in the home hero, and the revised feedback record is readable without page-wide horizontal overflow.
- The editable Markdown template is regenerated from its source guide.
- The four-part rubric and 24 illustrative assessments retain their scores and evidence.

This pass focuses on the student journey and internal site integrity. External job availability and GitHub's earlier rate limits are not newly verified by these checks. Canvas was not inspected or changed in this pass.

## What still deserves improvement

1. **Verify the Canvas handoff.** The site still says setup is pending. Confirm the actual assignment entries, direct links, points, and whether Canvas handles group submissions. This is the most consequential remaining uncertainty for a student trying to hand in work.
2. **Explain deductions in the sample feedback.** Some rows award 23/25 or 24/25 while describing only strengths. Add the specific gap that explains lost points, using the existing criteria. Calibrate these comments before students treat the numbers as a precise grading formula. Do not introduce extra requirements to justify a deduction.
3. **Update the weekly headline as the class advances.** The hero is deliberately labeled Nov 2–8. Move it to the next task with the existing schedule; retain one clear current action rather than adding another dashboard or page hierarchy.
4. **Watch a few real students use the site.** Ask them to find their next deadline, explain the two-version requirement, save the template, locate the SQLite expectation, and identify where to submit. Record hesitations and wrong turns before making another broad redesign.

A practical classroom pattern is: show one small example, let students attempt the current task, compare a decision with a partner, record one useful change, and check it. The site should support that activity and give students a reliable place to return when they forget a detail.

Local evidence, measurements, and screenshots are saved in `../outputs/is117-site-audit-round-2/`.

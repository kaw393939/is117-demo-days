# Maya Chen: submitted work and feedback

**Personal portfolio · Stronger example · Fictional student: Maya Chen**

Read the completed submission, then compare it with the instructor’s score and feedback. The work and peer comments are fictional teaching scenarios. The linked product is real runnable code.

<SampleAssessment slug="maya-chen" />

[Version A](/samples/maya-chen/a.html) · [Version B](/samples/maya-chen/b.html) · [Download all six submissions](/downloads/is117-graded-student-submissions.zip) · [How to read these grades](/examples/submissions/grading-guide)

## 1. Research

<details open>
<summary>Read the completed student submission</summary>

### Submitted by Maya Chen

**Project:** Maya Chen. **Research date:** November 2, 2026.

#### My competitive landscape

I compared three portfolio references, not people with the same student experience.

| Source | Site | Observation | Decision it suggests |
| --- | --- | --- | --- |
| R1 | [Brittany Chiang](https://brittanychiang.com/) | Role introduction, project/experience evidence, professional links. | Make role and evidence easy to find. |
| R2 | [Josh W. Comeau](https://www.joshwcomeau.com/) | An article-led site that demonstrates teaching. | Use a short explanation to show reasoning. |
| R3 | [Lee Robinson](https://leerob.com/) | A concise introduction and writing links. | Keep the introduction brief. These are experienced practitioners, not student achievement benchmarks. |

#### Two positions I considered

- **Position A:** Project-led student portfolio.
- **Position B:** Personal-story-led creative portfolio.

#### Two persona cards

| | Persona A | Persona B |
| --- | --- | --- |
| Situation | A recruiter scanning for an early-career web-development intern | A local small-business owner considering a student collaborator |
| Goal | Find two projects and understand the student’s actual contribution. | Clear examples of useful customer-facing work and contact information. |
| Concern | Can I distinguish a course exercise from professional experience? | Will the site focus on my task and make the next step clear? |
| Information needed | Projects, personal contribution, résumé, and professional information. | Clear examples of useful customer-facing work and contact information. |
| Evidence / assumption | Reference pages show useful ways to present information. This user need remains my hypothesis. | A plausible second audience. I have not validated this profile through customer research. |

#### My audience choice

I chose an internship recruiter as my primary reader because the first task is to find credible project work quickly. The references show clear introductions, project evidence, and professional links. They are design references from experienced practitioners, not a level of experience I claim to have.

**What the research does not prove:** Website observations do not establish demand, customer preferences, sales, or the quality of a competing product. I will not copy an experienced professional’s credentials or claim their experience.

</details>

<SampleAssessment slug="maya-chen" stage="research" />

## 2. Plan

<details>
<summary>Read the completed student submission</summary>

### My submitted website specifications

**Goal:** Find two projects and understand the student’s actual contribution.

#### Specification A

- **Approach:** Projects first: two case-study cards lead into résumé and profiles.
- **Sections:** Project cards; case-study details; introduction; résumé and profile content.
- **Main action:** Introduction → two course-project case studies → individual contribution → résumé and profile content.
- **Brand:** Creator; curious, concrete, honest.

#### Specification B

- **Approach:** About first: learning goals and personal brand lead into the same project evidence.
- **Sections:** Introduction; résumé/profile content; project cards and case-study details.
- **Main action:** Introduction → two course-project case studies → individual contribution → résumé and profile content.
- **Comparison:** Same core content and data, different information order and presentation.

#### Shared user stories, features, and checks

| ID | User story | Essential feature | Acceptance check |
| --- | --- | --- | --- |
| S1 | As a recruiter, I want to find two projects quickly so I can inspect relevant work. | F1: Two project cards linked to case-study details and runnable examples. | Both projects are labeled course projects and their demo links open the correct examples. |
| S2 | As a reviewer, I want individual contribution details so I can understand what the student did. | F2: Case studies distinguish individual work from team outcomes. | The group case study names one personally owned feature and one peer-review task. |
| S3 | As a recruiter, I want résumé and profile information so I can continue reviewing the student. | F3: Readable résumé, sample GitHub README, and LinkedIn example content. | Profile links open readable, clearly labeled fictional examples; a real student uses actual account links. |

**Priority:** F1–F3 are essential. The audience-specific information order is the design difference I am exploring. I am deferring blog platform, elaborate animation, analytics, and invented testimonials.

**Inputs and data:** Static project records and profile/résumé content; no visitor form or database required.

**States:** Project details available, links opened, and résumé/profile content readable.

**Limits:** Maya is a fictional student. The profile examples, résumé, and contribution statements model a submission; they are not a real person’s credentials.

#### Why I planned it this way

Both plans contain the same two course projects and professional information. A leads with project evidence; B gives my introduction more space first. I will compare whether a visitor can find a project, my own group contribution, and my résumé.

</details>

<SampleAssessment slug="maya-chen" stage="plan" />

## 3. Build and compare

<details>
<summary>Read the completed student submission</summary>

### My completed product submission

[Version A](/samples/maya-chen/a.html) · [Version B](/samples/maya-chen/b.html)

**Launch choice:** Version A. A recruiter can reach the work and the individual contribution in fewer steps.

**Task used for comparison:** Find the T-shirt project, identify the student’s group contribution, and locate the résumé.

| Version | Recorded observation in this fictional review |
| --- | --- |
| A | The reviewer reached both project cards and found the contribution paragraph. |
| B | The reviewer understood my interests first, then continued to the projects. A matched the project-finding task more directly. |

**What I kept:** The shared core task works in both presentations. My decision follows the stated visitor task; I did not treat a preference as proof of higher sales or hiring success.

**Code and setup:** [Shared class-demo source](https://github.com/kaw393939/is117-demo-days/tree/main/docs/public/samples). The downloadable submission bundle includes the product source. Run `node product-source/server.mjs` from the bundle root, then use the printed local address. The portfolio links to the two matching business examples.

#### My explanation of how it works

The portfolio is a static site. Each case study links to a working product and explains my contribution separately from the team’s result. The sample profile content represents fictional accounts; a real student must link their own actual GitHub and LinkedIn.

**Known limit:** Maya is a fictional student. The profile examples, résumé, and contribution statements model a submission; they are not a real person’s credentials.

</details>

<VersionComparison slug="maya-chen" />

<SampleAssessment slug="maya-chen" stage="build" />

## 4. Get feedback and improve

<details>
<summary>Read the completed student submission</summary>

### Completed peer-feedback record — fictional scenario

**Reviewer:** Drew Kim, a fictional classmate. **Session:** example review session, followed by a retest. These are scenario events, not actual interviews.

| Task | Before the change | Change made | Retest result |
| --- | --- | --- | --- |
| Find the T-shirt project, identify the student’s group contribution, and locate the résumé. | Drew could explain the team product but could not identify which part I had built. | Add a “My contribution” paragraph to the group case study and a direct résumé navigation link. | After I added My contribution and a direct résumé navigation link, Drew identified my service explanation and responsive-layout work and opened the résumé without a hint. |

**What this tells me:** The review checks whether a classmate can find the evidence. It is not a recruiter interview or hiring result.

#### Completed QA record

The following implementation checks were actually run on the class examples. They are separate from the fictional student/peer account. [Read the technical receipt](/examples/submissions/technical-checks).

| Check | Expected | Recorded implementation result |
| --- | --- | --- |
| Project links | Two matching product examples and contribution details are present. | The published portfolio includes both case studies and product links. |
| Profile content | Résumé, GitHub, and LinkedIn content can be opened. | Three profile-content files exist and are served. They represent fictional accounts. |
| Responsive page | No page-wide overflow at 390px. | The class demo was checked at 390px in the browser. |
| Keyboard / full accessibility | A visitor should reach and use every control. | No full accessibility audit is claimed; the example record does not establish one. |

#### AI-use record

I used the AI coding assistant to suggest two page orders and shorten draft copy. I kept the wording tied to the work shown, checked the project links, and revised the group case study after feedback. I removed claims that would imply professional employment.

#### My short portfolio case study

“I built Maya Chen for a recruiter scanning for an early-career web-development intern. I compared two positions, chose a primary audience, and turned that need into three user stories. I built two presentations and chose A. A recruiter can reach the work and the individual contribution in fewer steps. Feedback identified this problem: drew could explain the team product but could not identify which part I had built. I made this change: add an “My contribution” paragraph to the group case study and a direct résumé navigation link. After I added My contribution and a direct résumé navigation link, Drew identified my service explanation and responsive-layout work and opened the résumé without a hint. Maya is a fictional student. The profile examples, résumé, and contribution statements model a submission; they are not a real person’s credentials.”

#### Final handoff

- Selected product: [Version A](/samples/maya-chen/a.html).
- Alternate product: [Version B](/samples/maya-chen/b.html).
- Source: [class-demo repository](https://github.com/kaw393939/is117-demo-days/tree/main/docs/public/samples); the download includes the runnable code and these completed records.
- Remaining limitation: Maya is a fictional student. The profile examples, résumé, and contribution statements model a submission; they are not a real person’s credentials.

The written record models the student's explanation. It does not establish that an actual student demonstrated understanding in a live conversation.

</details>

<SampleAssessment slug="maya-chen" stage="improve" />

## Instructor’s suggested revision

I built the service explanation and responsive layouts. My partner implemented intake and receipts. I reviewed the form and helped change the wording so a request would not look like a confirmed appointment.

## Completed professional-profile content

These fictional profiles use filled content, not live personal accounts. Real students must use their own actual accounts.

- [Completed résumé](/samples/maya-chen/resume.txt)
- [Completed GitHub profile content](/samples/maya-chen/github-profile.txt)
- [Completed LinkedIn content](/samples/maya-chen/linkedin.txt)

[Back to all six examples](/examples/submissions/) · [Assignment rubric](/course/milestones#how-each-step-is-graded).

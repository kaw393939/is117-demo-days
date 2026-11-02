import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'IS117 Studio',
  description: 'Build a professional identity, an individual business, and a shared business project. NJIT · Fall 2026.',
  base: '/is117-demo-days/',
  lang: 'en-US',
  lastUpdated: true,
  head: [['meta', { name: 'theme-color', content: '#142b3b' }]],
  themeConfig: {
    siteTitle: 'IS117 / FALL 2026',
    nav: [
      { text: 'Start here', link: '/course/overview' },
      { text: 'Projects', items: [
        { text: 'Portfolio', link: '/projects/portfolio' },
        { text: 'White T-shirt', link: '/projects/white-tshirt' },
        { text: 'Group business', link: '/projects/group-project' }
      ]},
      { text: 'Demo Days', link: '/demo-days/' },
      { text: 'Internship preparation', link: '/career/fde' }
    ],
    sidebar: [
      { text: 'The course', items: [
        { text: 'Purpose & three deliverables', link: '/course/overview' },
        { text: 'Four milestones & simple rubric', link: '/course/milestones' },
        { text: 'Class rhythm & dates', link: '/course/schedule' },
        { text: 'Sources & course authority', link: '/course/sources' }
      ]},
      { text: 'Your projects', items: [
        { text: '01 / Professional portfolio', link: '/projects/portfolio' },
        { text: '02 / White T-shirt company', link: '/projects/white-tshirt' },
        { text: 'Two examples of every submission', link: '/examples/submissions/' },
        { text: 'Competitive landscape example', link: '/examples/competitive-landscape' },
        { text: 'Competitor screenshots', link: '/examples/site-references' },
        { text: 'Example feature list & spec', link: '/examples/tshirt-spec' },
        { text: '03 / Partner/group business', link: '/projects/group-project' },
        { text: 'Business project ideas', link: '/projects/ideas' }
      ]},
      { text: 'A professional process', items: [
        { text: 'Research → personas → user stories', link: '/process/research-to-features' },
        { text: 'Specification-driven development', link: '/process/specifications' },
        { text: 'Collaboration & equal contribution', link: '/process/collaboration' },
        { text: 'Quality assurance', link: '/process/quality' },
        { text: 'Using AI & explaining your work', link: '/process/ai' },
        { text: 'Reusable templates', link: '/templates/' }
      ]},
      { text: 'Demo Days', items: [
        { text: 'Format & signup', link: '/demo-days/' },
        { text: 'Section 005 / Dec 7 & 10', link: '/demo-days/section-005' },
        { text: 'Section 007 / Dec 8 & 10', link: '/demo-days/section-007' }
      ]},
      { text: 'Prepare early', items: [
        { text: 'What FDEs do', link: '/career/fde' },
        { text: 'Job descriptions & pay', link: '/career/jobs-and-pay' },
        { text: 'Next courses & BSEAI', link: '/career/course-pathway' },
        { text: 'Skills & next steps', link: '/career/skills' },
        { text: 'Professional GitHub portfolio', link: '/career/github' },
        { text: 'Professional LinkedIn profile', link: '/career/linkedin' },
        { text: 'Example student résumé', link: '/examples/student-resume' },
        { text: 'Fill-in résumé template', link: '/templates/resume' },
        { text: 'NYC internship examples & dates', link: '/career/internships' }
      ]}
    ],
    search: { provider: 'local' },
    socialLinks: [{ icon: 'github', link: 'https://github.com/kaw393939/is117-demo-days' }],
    editLink: { pattern: 'https://github.com/kaw393939/is117-demo-days/edit/main/docs/:path', text: 'Suggest an update on GitHub' },
    footer: { message: 'NJIT · Keith Williams · Sections 005 & 007 · Fall 2026', copyright: 'Canvas governs official deadlines and grading. Reference sources checked November 2, 2026.' }
  }
})

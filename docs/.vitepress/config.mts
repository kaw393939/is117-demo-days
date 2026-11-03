import { defineConfig } from 'vitepress'
const siteBase = '/is117-demo-days/'

const start = { text: 'Start here', items: [
  { text: 'Three projects & your goals', link: '/course/overview' },
  { text: 'Four steps & grading', link: '/course/milestones' },
  { text: 'Class dates & due dates', link: '/course/schedule' },
  { text: 'Section 007: class-by-class', link: '/course/section-007' },
  { text: 'See completed examples', link: '/examples/submissions/' },
  { text: 'Three-project student rehearsal', link: '/examples/student-trial' }
] }
const career = [
  { text: 'Careers & next courses', items: [
    { text: 'Start: career exploration', link: '/career/explore' },
    { text: 'What is an FDE?', link: '/career/fde' },
    { text: 'Job examples & pay', link: '/career/jobs-and-pay' },
    { text: 'NYC-area internships', link: '/career/internships' },
    { text: 'Next courses with Keith', link: '/career/course-pathway' }
  ]},
  { text: 'Your professional profiles', collapsed: true, items: [
    { text: 'GitHub', link: '/career/github' },
    { text: 'LinkedIn', link: '/career/linkedin' },
    { text: 'Example résumé', link: '/examples/student-resume' },
    { text: 'Résumé template', link: '/templates/resume' },
    { text: 'Skills to build next', link: '/career/skills' }
  ]}
]
const standard = [start,
  { text: 'Your three projects', items: [
    { text: 'T-shirt store', link: '/projects/white-tshirt' },
    { text: 'Group business', link: '/projects/group-project' },
    { text: 'Personal portfolio', link: '/projects/portfolio' }
  ]},
  { text: 'Help while you work', collapsed: true, items: [
    { text: 'Research, personas & user stories', link: '/process/research-to-features' },
    { text: 'Find your brand’s angle', link: '/process/find-your-angle' },
    { text: 'Write a website plan', link: '/process/specifications' },
    { text: 'Practice with a fictional customer', link: '/process/simulated-customer' },
    { text: 'Divide the group work', link: '/process/collaboration' },
    { text: 'Test & get feedback', link: '/process/quality' },
    { text: 'Review with GitHub issues', link: '/process/github-feedback' },
    { text: 'Use AI & explain your work', link: '/process/ai' },
    { text: 'Copy the submission template', link: '/templates/four-milestones' },
    { text: 'More templates', link: '/templates/' },
    { text: 'Group project ideas', link: '/projects/ideas' }
  ]},
  { text: 'Demo Days', collapsed: true, items: [
    { text: 'Presentation & signup', link: '/demo-days/' },
    { text: 'Section 005 / Dec 7 & 10', link: '/demo-days/section-005' },
    { text: 'Section 007 / Dec 8 & 10', link: '/demo-days/section-007' }
  ]},
  { text: 'Careers & next courses', collapsed: true, items: career[0].items }
]

export default defineConfig({
  title: 'IS117 Studio',
  description: 'Three projects, four steps: research, plan, build, and improve. NJIT · Fall 2026.',
  base: siteBase,
  lang: 'en-US',
  markdown: {
    config(md) {
      const renderLink = md.renderer.rules.link_open || ((tokens, idx, options, _env, self) => self.renderToken(tokens, idx, options))
      md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
        const href = tokens[idx].attrGet('href') || ''
        // Public HTML apps must navigate normally, including before hydration.
        if (/^\/(?:is117-demo-days\/)?(?:samples|student-trial)\/.*\.html(?:[?#]|$)/.test(href)) {
          if (!href.startsWith(siteBase)) tokens[idx].attrSet('href', siteBase.slice(0, -1) + href)
          tokens[idx].attrSet('target', '_self')
        }
        return renderLink(tokens, idx, options, env, self)
      }
    }
  },
  srcExclude: ['public/**'],
  lastUpdated: true,
  head: [['meta', { name: 'theme-color', content: '#142b3b' }]],
  themeConfig: {
    siteTitle: 'IS117 / FALL 2026',
    nav: [
      { text: 'Start here', link: '/course/overview' },
      { text: 'Examples', link: '/examples/submissions/' },
      { text: 'Schedule', link: '/course/schedule' },
      { text: 'Demo Days', link: '/demo-days/' },
      { text: 'Careers', link: '/career/fde' }
    ],
    sidebar: {
      '/career/': [...career, { text: 'Back to the course', items: [
        { text: 'Your assignment', link: '/course/milestones' },
        { text: 'Your portfolio', link: '/projects/portfolio' }
      ]}],
      '/examples/submissions/': [
        { text: 'Example library', items: [
          { text: 'Choose an example', link: '/examples/submissions/' },
          { text: 'How the sample grades work', link: '/examples/submissions/grading-guide' },
          { text: 'What you submit', link: '/course/milestones' },
          { text: 'Copy the short template', link: '/templates/four-milestones' }
        ]},
        { text: 'T-shirt stores', collapsed: true, items: [
          { text: 'Campus Cotton', link: '/examples/submissions/campus-cotton' },
          { text: 'Studio White', link: '/examples/submissions/studio-white' }
        ]},
        { text: 'Group businesses', collapsed: true, items: [
          { text: 'Room Ready', link: '/examples/submissions/room-ready' },
          { text: 'Study Slot', link: '/examples/submissions/study-slot' }
        ]},
        { text: 'Student portfolios', collapsed: true, items: [
          { text: 'Maya Chen', link: '/examples/submissions/maya-chen' },
          { text: 'Jordan Rivera', link: '/examples/submissions/jordan-rivera' }
        ]},
        { text: 'Want to inspect the code?', collapsed: true, items: [
          { text: 'Download & run the examples', link: '/examples/submissions/run-examples' },
          { text: 'Original competitor comparison', link: '/examples/competitive-landscape' },
          { text: 'Competitor screenshots', link: '/examples/site-references' },
          { text: 'Detailed T-shirt spec', link: '/examples/tshirt-spec' }
        ]}
      ],
      '/': standard
    },
    outline: { level: 2, label: 'On this page' },
    docFooter: { prev: false, next: false },
    search: {
      provider: 'local',
      options: {
        miniSearch: {
          options: {
            // Students should find résumé with either spelling: resume or résumé.
            processTerm: (term: string) => term.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
          },
          searchOptions: {
            // Definitions and instructions should precede repeated sample sections.
            boostDocument: (id: string) => id.includes('/process/') ? 4 : id.includes('/course/') ? 2 : 1
          }
        }
      }
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/kaw393939/is117-demo-days' }],
    editLink: { pattern: 'https://github.com/kaw393939/is117-demo-days/edit/main/docs/:path', text: 'Suggest a correction' },
    footer: { message: 'NJIT · Keith Williams · Sections 005 & 007 · Fall 2026', copyright: 'Canvas: submissions, grades, and private questions. This guide: project instructions and examples.' }
  }
})

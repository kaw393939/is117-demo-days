import { readdirSync, readFileSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const root = fileURLToPath(new URL('../', import.meta.url))
const docs = path.join(root, 'docs')
const walk = dir => readdirSync(dir, { withFileTypes: true }).flatMap(e =>
  e.name.startsWith('.') ? [] : e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)])
const pages = walk(docs).filter(p => p.endsWith('.md') && !p.startsWith(path.join(docs, 'public') + path.sep))
const broken = []
for (const page of pages) {
  const source = readFileSync(page, 'utf8').replace(/```[\s\S]*?```/g, '')
  for (const [, link] of source.matchAll(/\]\(([^\s)]+)\)/g)) {
    if (/^(https?:|mailto:|#)/.test(link)) continue
    const route = link.split('#')[0]
    const target = route.startsWith('/') ? path.join(docs, route) : path.resolve(path.dirname(page), route)
    const candidates = [target, `${target}.md`, path.join(target, 'index.md')]
    if (route.startsWith('/')) candidates.push(path.join(docs, 'public', route))
    if (!candidates.some(p => existsSync(p))) broken.push(`${path.relative(root, page)} → ${link}`)
  }
}
if (broken.length) throw new Error(`Broken local references:\n${broken.join('\n')}`)
const dateLeaks = []
const coursePages = [
  'index.md', 'course/schedule.md', 'course/section-005.md', 'course/section-007.md',
  'course/milestones.md', 'demo-days/index.md', 'demo-days/section-005.md', 'demo-days/section-007.md'
]
const classTime = /\b(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\.?\s+\d{1,2}\b|\b\d{1,2}:\d{2}\s*(?:[ap]\.?m\.?)|\b20\d{2}-\d{2}-\d{2}\b/i
for (const relative of coursePages) {
  const source = readFileSync(path.join(docs, relative), 'utf8')
  if (classTime.test(source)) dateLeaks.push(relative)
}
if (dateLeaks.length) throw new Error(`Class dates belong in Canvas, not these pages:\n${dateLeaks.join('\n')}`)
console.log(`Verified local references in ${pages.length} Markdown pages and checked schedule-free core pages.`)

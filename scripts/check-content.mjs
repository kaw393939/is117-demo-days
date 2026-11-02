import { readdirSync, readFileSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { execFileSync } from 'node:child_process'

const root = fileURLToPath(new URL('../', import.meta.url))
const docs = path.join(root, 'docs')
const walk = dir => readdirSync(dir, { withFileTypes: true }).flatMap(e =>
  e.name.startsWith('.') ? [] : e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)])
const pages = walk(docs).filter(p => p.endsWith('.md'))
const broken = []
for (const page of pages) {
  const source = readFileSync(page, 'utf8')
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
execFileSync(process.execPath, ['scripts/generate-schedules.mjs', '--check'], { cwd: root, stdio: 'inherit' })
const schedule = JSON.parse(readFileSync(path.join(root, 'data/demo-schedule.json'), 'utf8'))
for (const section of schedule.sections) {
  const form = readFileSync(path.join(root, `.github/ISSUE_TEMPLATE/demo-${section.id}.yml`), 'utf8')
  for (const slot of section.slots) {
    if (!form.includes(`${slot.id} · ${slot.date} ${slot.start} · ${slot.teamSize} people`)) {
      throw new Error(`Signup form missing or mismatched slot ${slot.id}`)
    }
  }
}
console.log(`Verified local references in ${pages.length} Markdown pages and matching signup options.`)

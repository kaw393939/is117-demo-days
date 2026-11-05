import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const root = fileURLToPath(new URL('../', import.meta.url))
const data = JSON.parse(readFileSync(path.join(root, 'data/demo-schedule.json'), 'utf8'))
const check = process.argv.includes('--check')
const minutes = time => Number(time.slice(0, 2)) * 60 + Number(time.slice(3))
const display = value => {
  const hour = Math.floor(value / 60)
  return `${hour % 12 || 12}:${String(value % 60).padStart(2, '0')} ${hour >= 12 ? 'p.m.' : 'a.m.'}`
}
const dateLabel = date => new Intl.DateTimeFormat('en-US', {
  weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC'
}).format(new Date(`${date}T12:00:00Z`))
const seen = new Set()
const assignedIssues = new Set()
if (data.timezone !== 'America/New_York') throw new Error('Schedule must use Eastern time')
for (const section of data.sections) {
  const slots = section.slots
  for (const slot of slots) {
    if (seen.has(slot.id)) throw new Error(`Duplicate slot ${slot.id}`)
    seen.add(slot.id)
    if (!section.dates.includes(slot.date)) throw new Error(`Unexpected date in ${slot.id}`)
    if (![2, 3].includes(slot.teamSize) || slot.minutes !== (slot.teamSize === 3 ? 12 : 10)) {
      throw new Error(`Incorrect team size/duration in ${slot.id}`)
    }
    if (minutes(slot.start) < minutes(section.start) + 5 || minutes(slot.start) + slot.minutes > minutes(section.end)) {
      throw new Error(`Slot outside meeting: ${slot.id}`)
    }
    if (slot.assignment) {
      const { issue, team } = slot.assignment
      if (!Number.isInteger(issue) || issue < 1 || !team?.trim()) throw new Error(`Invalid assignment: ${slot.id}`)
      if (assignedIssues.has(issue)) throw new Error(`Issue ${issue} assigned twice`)
      assignedIssues.add(issue)
    }
  }
  if (slots.filter(s => s.teamSize === 3).length !== 1) throw new Error(`Section ${section.id} needs one trio slot`)
  let text = `<!-- Generated from data/demo-schedule.json. Run npm run schedule:sync. -->\n# Section ${section.id} Demo Day schedule\n\n`
  text += `All times are **Eastern (America/New_York)**. Regular meeting: **${display(minutes(section.start))}–${display(minutes(section.end))}**, ${section.room}. Canvas currently directs Zoom screen sharing; follow the instructor's meeting instructions there.\n\n`
  text += '**Scheduling draft:** exact presentation duration and delivery details are awaiting confirmation in Canvas. The times below support requests; they are not a confirmed time allowance or booking. See the [required PowerPoint and presentation guidance](/demo-days/#required-powerpoint-support).\n\n'
  text += `**[Request a slot](https://github.com/kaw393939/is117-demo-days/issues/new?template=demo-${section.id}.yml)** · [Presentation format](/demo-days/) · [Pending requests](https://github.com/kaw393939/is117-demo-days/issues?q=is%3Aissue+is%3Aopen+label%3Ademo-signup+label%3Asection-${section.id})\n\n`
  text += 'A request is pending until the instructor confirms it and updates this table. One issue per team. The 12-minute slot is reserved for the section\'s designated trio. No student assignments are prefilled.\n\n'
  for (const date of section.dates) {
    const day = slots.filter(s => s.date === date).sort((a, b) => minutes(a.start) - minutes(b.start))
    let end = minutes(section.start) + 5
    for (const slot of day) {
      if (minutes(slot.start) < end) throw new Error(`Overlapping slot: ${slot.id}`)
      end = minutes(slot.start) + slot.minutes
    }
    text += `## ${dateLabel(date)}\n\nOpening/setup: ${display(minutes(section.start))}–${display(minutes(section.start) + 5)}\n\n`
    text += '| Slot | Time | Team size | Status / project |\n| --- | --- | --- | --- |\n'
    for (const slot of day) {
      const safeTeam = slot.assignment?.team.replace(/[|\n\r<>\[\]]/g, ' ')
      const status = slot.assignment
        ? `Confirmed: ${safeTeam} · [#${slot.assignment.issue}](https://github.com/kaw393939/is117-demo-days/issues/${slot.assignment.issue})`
        : `Available${slot.teamSize === 3 ? ' — trio only' : ''}`
      text += `| ${slot.id} | ${display(minutes(slot.start))}–${display(minutes(slot.start) + slot.minutes)} | ${slot.teamSize} | ${status} |\n`
    }
    text += `\nBuffer / wrap-up: ${display(end)}–${display(minutes(section.end))} The slot includes questions and transition.\n\n`
  }
  text += '## Changes and remaining presentations\n\nUpdate your existing signup issue to request a change. Private constraints belong in Canvas. The December 22 official final block is for remaining presentations and needed redos as directed by the instructor; see [the course schedule](/course/schedule).\n'
  const target = path.join(root, `docs/demo-days/section-${section.id}.md`)
  if (check) {
    if (!existsSync(target) || readFileSync(target, 'utf8') !== text) throw new Error(`Stale schedule: run npm run schedule:sync (${section.id})`)
  } else writeFileSync(target, text)
}
console.log(`${check ? 'Verified' : 'Generated'} ${seen.size} nonoverlapping slots across ${data.sections.length} sections.`)

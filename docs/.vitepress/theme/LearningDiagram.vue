<script setup>
import { computed } from 'vue'
const props = defineProps({ kind: { type: String, default: 'process' } })
const diagrams = {
 opportunities: { title: 'Build evidence → share it → take a next step', note: 'Start conversations with work you can explain. Keep learning as you pursue opportunities.', steps: [
 ['1', 'Build evidence', 'Your store + group business', 'Show the problem, your work, and checks', 'Use feedback to improve'],
 ['2', 'Make it easy to share', 'Your portfolio + profiles', 'Explain your contribution clearly', 'Practice a short introduction and demo'],
 ['3', 'Meet people + apply', 'Internship · part-time · client project', 'Listen, share relevant work, follow up', 'Match your evidence to a real need'] ] },
 brand: { title: 'From a reference site to your own angle', note: 'Keep this in the same project record. The audience need stays a hypothesis until you check it.', steps: [
 ['1', 'Notice', 'Look · character · trust', 'What does the reference emphasize?', 'Link the actual page and date'],
 ['2', 'Choose', 'Person · situation · need', 'Why would they choose your offer?', 'Compare two niches; choose one'],
 ['3', 'Express', 'Promise · voice · visual direction', 'Give honest reasons to act', 'Reuse Brand Studio; compare alternatives'],
 ['4', 'Check', 'Understand the offer + do the task', 'Peer observation → change → retest', 'Explain what the evidence does and does not show'] ] },
 process: { title: 'Explore two. Choose deliberately. Keep moving.', note: 'Career exploration is portfolio Research. The group follows about a week behind the T-shirt project. Shared code keeps A/B manageable.', steps: [
 ['01', 'Research', 'T-shirt/group: three sites · Portfolio: two roles', 'Compare positions or career directions', 'Choose a reader; label evidence and assumptions'],
 ['02', 'Plan', 'One customer need', 'Approach A ↔ Approach B', 'Stories + features + checks'],
 ['03', 'Build', 'One core workflow', 'Version A ↔ Version B', 'Compare the same realistic task'],
 ['04', 'Improve', 'One selected launch version', 'Peer observation → meaningful change', 'Retest, explain, publish'] ] },
 week: { title: 'The class cycle', note: 'Submit as the next topic starts in the first three cycles. The final cycle ends with a work/catch-up week; Thanksgiving changes its meeting dates.', steps: [
 ['1', 'Start', 'Monday · 005 / Tuesday · 007', 'Understand the next milestone', 'Begin with instructor guidance'],
 ['2', 'Work together', 'Thursday', 'Open peer issues; respond and revise', 'Protected partner-feedback time'],
 ['3', 'Submit', 'Following class: next topic begins', 'Submit at the start of class', 'Final cycle: catch up and rehearse instead'] ] },
 evidence: { title: 'A T-shirt decision you can trace', note: 'Competitor pages suggest a need. They do not validate a customer persona by themselves.', steps: [
 ['1', 'Observation', 'Competitors show fit information', 'Evidence: linked product pages', 'Keep facts separate from interpretation'],
 ['2', 'Persona hypothesis', 'A shopper uncertain about fit', 'Need: confidence in choosing a size', 'Check the assumption with a person'],
 ['3', 'User story', 'I want to compare measurements', 'So I can choose more confidently', 'The need comes before the feature'],
 ['4', 'Feature + check', 'Size guide beside the selector', 'Peer can find it without a hint', 'Observe → improve → retest'] ] },
 feedback: { title: 'Feedback becomes a product improvement', note: 'Do this for the T-shirt store, group business, and portfolio. Record actual observations.', steps: [
 ['1', 'Give a task', '“Choose a shirt size.”', 'Let a peer attempt it', 'Observe before you explain'],
 ['2', 'Notice a problem', '“I could not find measurements.”', 'Open a specific GitHub issue', 'Ask what the peer expected'],
 ['3', 'Make a change', 'Move the size guide beside sizes', 'A specific, useful improvement', 'Link a screenshot or commit'],
 ['4', 'Check again', 'Repeat the same task', 'Record what actually happens', 'Comment with the result; close if resolved'] ] },
 fde: { title: 'FDE work connects people, software, and outcomes', note: 'An instructor synthesis of the linked employer postings; technical depth varies by role.', steps: [
 ['1', 'Understand', 'Business workflow + stakeholder need', 'Ask, observe, and clarify', 'IS117: research and personas'],
 ['2', 'Specify + build', 'A practical technical solution', 'Code, data, integration, and AI', 'IS117: stories, specs, and a small product'],
 ['3', 'Deliver + improve', 'People can use the result', 'Test, explain, gather feedback', 'IS117: peer walkthrough and demo'] ] },
 courses: { title: 'Build depth over time', note: 'A learning map, not a prerequisite chart. Your degree plan and eligibility determine the sequence.', steps: [
 ['Now', 'IS117', 'Business + user needs', 'Research → specify → build → review', 'An introductory professional process'],
 ['Spring', 'IS219 + IS390', 'Interaction + requirements', 'Stronger interfaces and system reasoning', 'Take only when prerequisites are met'],
 ['Summer', 'IS218', 'Web applications', 'Keith’s planned online summer 2027 offering', 'Confirm the published summer section'],
 ['Later', 'IS425 + further study', 'Enterprise AI applications', 'Data, integration, human review, deployment', 'Build the database/programming foundation first'] ] }
}
const diagram = computed(() => diagrams[props.kind] || diagrams.process)
</script>
<template>
 <figure class="learning-diagram">
  <figcaption>{{ diagram.title }}</figcaption>
  <ol class="diagram-steps" :class="{ 'three-steps': diagram.steps.length === 3 }">
   <li v-for="step in diagram.steps" :key="step[0]">
    <span class="step-number">{{ step[0] }}</span>
    <strong>{{ step[1] }}</strong><span class="step-context">{{ step[2] }}</span>
    <span class="step-action">{{ step[3] }}</span><small>{{ step[4] }}</small>
   </li>
  </ol>
  <p class="diagram-note">{{ diagram.note }}</p>
 </figure>
</template>

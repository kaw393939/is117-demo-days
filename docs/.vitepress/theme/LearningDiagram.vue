<script setup>
import { computed } from 'vue'
const props = defineProps({ kind: { type: String, default: 'process' } })
const diagrams = {
 process: { title: 'Explore two. Choose deliberately. Keep moving.', note: 'One project grows through four milestones. Shared code keeps two versions manageable.', steps: [
 ['01', 'Research', 'Three reference sites', 'Position A ↔ Position B', 'Two persona hypotheses → choose an audience'],
 ['02', 'Plan', 'One customer need', 'Approach A ↔ Approach B', 'Stories + features + checks'],
 ['03', 'Build', 'One core workflow', 'Version A ↔ Version B', 'Compare the same realistic task'],
 ['04', 'Improve', 'One selected launch version', 'Peer observation → meaningful change', 'Retest, explain, publish'] ] },
 week: { title: 'The class cycle', note: 'Repeat for each milestone. Thanksgiving extends the final cycle; see the dates below.', steps: [
 ['1', 'Start', 'Monday · 005 / Tuesday · 007', 'Understand the next milestone', 'Begin with instructor guidance'],
 ['2', 'Work together', 'Thursday', 'Compare, review, and ask questions', 'Protected partner-feedback time'],
 ['3', 'Submit + restart', 'Next Monday / Tuesday', 'Submit at the start of class', 'Review briefly, then start the next cycle'] ] },
 evidence: { title: 'A T-shirt decision you can trace', note: 'Competitor pages suggest a need. They do not validate a customer persona by themselves.', steps: [
 ['1', 'Observation', 'Competitors show fit information', 'Evidence: linked product pages', 'Keep facts separate from interpretation'],
 ['2', 'Persona hypothesis', 'A shopper uncertain about fit', 'Need: confidence in choosing a size', 'Check the assumption with a person'],
 ['3', 'User story', 'I want to compare measurements', 'So I can choose more confidently', 'The need comes before the feature'],
 ['4', 'Feature + check', 'Size guide beside the selector', 'Peer can find it without a hint', 'Observe → improve → retest'] ] },
 feedback: { title: 'Feedback becomes a product improvement', note: 'Do this for the T-shirt store, group business, and portfolio. Record actual observations.', steps: [
 ['1', 'Give a task', '“Choose a shirt size.”', 'Let a peer attempt it', 'Observe before you explain'],
 ['2', 'Notice a problem', '“I could not find measurements.”', 'Record the confusion', 'Ask what the peer expected'],
 ['3', 'Make a change', 'Move the size guide beside sizes', 'A specific, useful improvement', 'Link a screenshot or commit'],
 ['4', 'Check again', 'Repeat the same task', 'Record what actually happens', 'Keep the result and any remaining issue'] ] },
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

<script setup>
import { computed } from 'vue'
import { withBase } from 'vitepress'
import grading from '../../../data/graded-examples.json'
const props=defineProps({slug:{type:String,default:''},stage:{type:String,default:''}})
const labels={research:'1. Research',plan:'2. Plan',build:'3. Build',improve:'4. Improve'}
const anchors={research:'_1-research',plan:'_2-plan',build:'_3-build-and-compare',improve:'_4-get-feedback-and-improve'}
const total=m=>m.scores.reduce((a,b)=>a+b,0)
const average=c=>Object.values(c.milestones).reduce((a,m)=>a+total(m),0)/4
const entry=computed(()=>grading.cases.find(c=>c.slug===props.slug))
const isPortfolio=slug=>['maya-chen','jordan-rivera'].includes(slug)
const careerAnchor=slug=>slug==='maya-chen'?'maya-specific-evidence-and-a-small-next-step':'jordan-sources-listed-reasoning-still-broad'
const careerScore=slug=>slug==='maya-chen'?100:80
const milestone=computed(()=>entry.value?.milestones[props.stage])
const pairs=[['T-shirt store','campus-cotton','studio-white'],['Group business','room-ready','study-slot'],['Portfolio','maya-chen','jordan-rivera']]
const find=slug=>grading.cases.find(c=>c.slug===slug)
const name=slug=>({'campus-cotton':'Campus Cotton','studio-white':'Studio White','room-ready':'Room Ready','study-slot':'Study Slot','maya-chen':'Maya Chen','jordan-rivera':'Jordan Rivera'})[slug]
</script>
<template>
 <div v-if="!slug" class="sample-comparison">
  <table tabindex="0"><thead><tr><th>Project</th><th>Stronger submission</th><th>Developing submission</th></tr></thead><tbody>
   <tr v-for="pair in pairs" :key="pair[0]"><th>{{pair[0]}}</th><td><a :href="withBase('/examples/submissions/'+pair[1]+'.html')">{{name(pair[1])}}</a><strong v-if="!isPortfolio(pair[1])">{{average(find(pair[1]))}}/100</strong><span v-else>Career Research + Plan, Build, Improve</span></td><td><a :href="withBase('/examples/submissions/'+pair[2]+'.html')">{{name(pair[2])}}</a><strong v-if="!isPortfolio(pair[2])">{{average(find(pair[2]))}}/100</strong><span v-else>Career Research + Plan, Build, Improve</span></td></tr>
  </tbody></table>
  <p class="assessment-note">T-shirt/group scores are equal averages of four milestones. Portfolio pages link career Research and show Plan, Build, and Improve separately. These are teaching examples, not real student marks or course-grade weights.</p>
 </div>
 <section v-else-if="entry && !stage" class="sample-assessment sample-summary" :class="{'sample-developing':entry.level==='Developing example'}" aria-label="Example assessment summary">
  <span class="assessment-label">{{entry.level}} · Illustrative assessment</span>
  <p v-if="!isPortfolio(slug)" class="assessment-score">{{average(entry)}}<span>/100</span></p>
  <table tabindex="0"><thead><tr><th>Submitted milestone</th><th>Example grade</th></tr></thead><tbody><tr v-if="isPortfolio(slug)"><td><a :href="withBase('/examples/career-reflections.html#'+careerAnchor(slug))">1. Research: career exploration</a></td><td><strong>{{careerScore(slug)}}/100</strong></td></tr><template v-for="(m,key) in entry.milestones" :key="key"><tr v-if="!isPortfolio(slug) || key!=='research'"><td><a :href="'#'+anchors[key]">{{labels[key]}}</a></td><td><strong>{{total(m)}}/100</strong></td></tr></template></tbody></table>
  <p class="assessment-note"><span v-if="isPortfolio(slug)">Career reflection is the required portfolio Research. The optional reference-site exercise below is not another checkpoint. </span><span v-else>The project score is an equal average of these four milestone scores. </span>Each uses <a :href="withBase('/course/milestones.html#how-each-step-is-graded')">the same four-part rubric</a>. The grade assesses the fictional submitted record, including its written explanations.</p>
 </section>
 <section v-else-if="milestone" class="sample-assessment" :class="{'sample-developing':entry.level==='Developing example'}" :aria-label="labels[stage]+' instructor feedback'">
  <div class="assessment-heading"><span class="assessment-label">Illustrative instructor assessment</span><strong>{{total(milestone)}}/100</strong></div>
  <p v-if="isPortfolio(slug) && stage==='research'" class="assessment-note">Optional reference-research exercise only. For Section 007's required Research score and feedback, <a :href="withBase('/examples/career-reflections.html#'+careerAnchor(slug))">read the career reflection</a>.</p>
  <table tabindex="0"><thead><tr><th>Rubric criterion</th><th>Points</th><th>Evidence and reason</th></tr></thead><tbody><tr v-for="(criterion,index) in grading.criteria" :key="criterion"><th>{{criterion}}</th><td>{{milestone.scores[index]}}/25</td><td>{{milestone.evidence[index]}}</td></tr></tbody></table>
  <p><strong>What worked:</strong> {{milestone.strength}}</p>
  <p><strong>{{total(milestone)===100 ? 'Optional next step:' : 'Next revision:'}}</strong> {{milestone.next}}</p>
  <p class="assessment-note">Feedback concerns this introductory submission. A real class review also checks the student's own explanation; written work alone does not prove that understanding.</p>
 </section>
</template>

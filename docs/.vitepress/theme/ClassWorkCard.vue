<script setup>
import { computed, onMounted, ref } from 'vue'
import { withBase } from 'vitepress'
import section007 from '../../../data/class-work-007.json'
import section005 from '../../../data/class-work-005.json'
const props=defineProps({section:{type:String,default:'007'}})
const data=computed(()=>props.section==='005'?section005:section007)
const selected=ref(data.value.classes[0].date)
const card=computed(()=>data.value.classes.find(c=>c.date===selected.value)||data.value.classes[0])
const routeLink=path=>{const [route,hash]=path.split("#");return withBase(route+(route.endsWith("/")||/\.[a-z]+$/i.test(route)?"":".html")+(hash?"#"+hash:""))}
const checkpoint=key=>data.value.checkpoints.find(c=>c.key===key)
const dueText=key=>{const c=checkpoint(key);const [y,m,d]=c.date.split('-');return `${c.points} points · ${Number(m)}/${Number(d)}/${y}, ${c.time} Eastern`}
const assignmentLink=key=>`https://njit.instructure.com/courses/${data.value.courseId}/assignments/${checkpoint(key).assignmentId}`
onMounted(()=>{const today=new Intl.DateTimeFormat('en-CA',{timeZone:'America/New_York',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());selected.value=(data.value.classes.find(c=>c.date>=today)||data.value.classes.at(-1)).date})
</script>
<template>
 <section class="class-work-card" aria-label="Class preparation and submission card">
  <label :for="'class-date-'+section">Your class date</label>
  <select :id="'class-date-'+section" v-model="selected"><option v-for="c in data.classes" :key="c.date" :value="c.date">{{c.label}}</option></select>
  <h3>{{card.label}}</h3>
  <p class="class-task"><strong>In class:</strong> {{card.work}}</p>
  <p><strong>Bring:</strong> {{card.bring}}</p>
  <div v-if="card.due.length" class="checkpoint-box"><strong>Submit before this class</strong><ul><li v-for="key in card.due" :key="key"><a :href="assignmentLink(key)">{{checkpoint(key).title}}</a><span>{{dueText(key)}}</span></li></ul></div>
  <div v-if="card.next.length" class="checkpoint-box"><strong>Next submission</strong><ul><li v-for="key in card.next" :key="key"><a :href="assignmentLink(key)">{{checkpoint(key).title}}</a><span>{{dueText(key)}}</span></li></ul></div>
  <p><strong>Try it with a classmate:</strong> {{card.review}}</p>
  <p><strong>Then update:</strong> {{card.update}}</p>
  <p class="career-win"><strong>Something you can show:</strong> {{card.careerWin}}</p>
  <p v-if="card.note" class="class-work-note">{{card.note}}</p>
  <p class="class-actions"><a :href="routeLink(card.example.link)">{{card.example.text}}</a> · <a :href="routeLink(card.guide.link)">{{card.guide.text}}</a></p>
  <details><summary>What earns the points? What do I turn in?</summary>
   <p>Each review is 100 points: <strong>Complete, Thoughtful, Checked, Understood—25 points each.</strong> Use the matching Canvas link above. Update your existing project record with current links and a short note about the change/check. Keep career Research private in Canvas. A GitHub issue records feedback; submit the work in Canvas too.</p>
   <p><a :href="routeLink('/course/milestones#how-each-step-is-graded')">Existing rubric and final-project grading</a> · <a :href="'https://njit.instructure.com/courses/'+data.courseId+'/assignments'">All Canvas assignments</a></p>
  </details>
 </section>
</template>
<style scoped>
.class-work-card{padding:22px;border:2px solid var(--vp-c-brand-1);border-radius:12px;background:var(--vp-c-bg-soft);margin:18px 0 28px}.class-work-card label{font-weight:700;display:block;margin-bottom:6px}.class-work-card select{width:100%;padding:10px;border:1px solid var(--vp-c-divider);border-radius:6px;background:var(--vp-c-bg);color:var(--vp-c-text-1);font:inherit}.class-work-card h3{margin:18px 0 14px}.class-task{font-size:1.08em}.class-work-card p{margin:12px 0}.checkpoint-box{background:var(--vp-c-bg);border:1px solid var(--vp-c-divider);border-radius:8px;padding:12px 16px;margin:14px 0}.checkpoint-box ul{margin:6px 0 0;padding-left:20px}.checkpoint-box li{margin:5px 0}.checkpoint-box span{display:block;font-size:.9em}.career-win{border-left:3px solid var(--vp-c-brand-1);padding-left:12px}.class-work-note{font-size:.94em}.class-actions{font-weight:650}.class-work-card details{border-top:1px solid var(--vp-c-divider);padding-top:10px;margin-top:16px}.class-work-card summary{cursor:pointer;font-weight:600}.class-work-card :focus-visible{outline:3px solid var(--vp-c-brand-1);outline-offset:3px}@media(max-width:520px){.class-work-card{padding:16px}.checkpoint-box{padding:10px 12px}}
</style>

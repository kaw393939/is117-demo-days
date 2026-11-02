import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
const data=JSON.parse(readFileSync('data/graded-examples.json','utf8'));
const projects=JSON.parse(readFileSync('docs/public/samples/projects.json','utf8'));
const files={research:'01-research.md',plan:'02-specifications.md',build:'03-build-and-decision.md',improve:'04-review-and-launch.md'};
assert.equal(data.cases.length,6);assert.equal(new Set(data.cases.map(c=>c.slug)).size,6);
for(const c of data.cases){
 assert.ok(projects.some(p=>p.slug===c.slug));
 const page=readFileSync('docs/examples/submissions/'+c.slug+'.md','utf8');
 assert.equal((page.match(/<SampleAssessment /g)||[]).length,5,'Summary plus four assessments required: '+c.slug);
 const assessment=readFileSync('docs/public/student-work/'+c.slug+'/ASSESSMENT.md','utf8');
 let total=0;
 for(const [key,file] of Object.entries(files)){
  const m=c.milestones[key];assert.equal(m.scores.length,4);assert.equal(m.evidence.length,4);
  for(const n of m.scores)assert.ok(Number.isInteger(n)&&n>=0&&n<=25);
  for(const t of [...m.evidence,m.next,m.strength])assert.ok(typeof t==='string'&&t.length>20);
  const score=m.scores.reduce((a,b)=>a+b,0);assert.ok(assessment.includes(': '+score+'/100'));total+=score;
  const artifact=readFileSync('docs/public/student-work/'+c.slug+'/'+file,'utf8');
  assert.ok(artifact.includes('Fictional completed student work'));
  assert.ok(!/Run and record|\[Your |\[Actual |Not chosen yet|replace with your actual/i.test(artifact),'Unfilled artifact: '+c.slug+'/'+file);
 }
 assert.ok(assessment.includes('Example project score: '+total/4+'/100'));
 assert.ok(existsSync('docs/public/student-work/'+c.slug+'/README.md'));
}
for(const kind of ['shirt','service','portfolio']){
 const pair=data.cases.filter(c=>projects.find(p=>p.slug===c.slug).kind===kind);
 assert.equal(pair.length,2);assert.deepEqual(new Set(pair.map(c=>c.level)),new Set(['Stronger example','Developing example']));
}
console.log('Verified 6 completed submission packets, 24 four-part rubric assessments, accurate totals, paired performance levels, and no unfilled worksheet fields.');

import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
const data=JSON.parse(readFileSync('data/graded-examples.json','utf8'));
const projects=JSON.parse(readFileSync('docs/public/samples/projects.json','utf8'));
const files={research:'01-research.md',plan:'02-specifications.md',build:'03-build-and-decision.md',improve:'04-review-and-launch.md'};
assert.equal(data.cases.length,6);assert.equal(new Set(data.cases.map(c=>c.slug)).size,6);
for(const c of data.cases){
 const project=projects.find(p=>p.slug===c.slug);assert.ok(project);
 assert.equal(project.brand.persuasion.length,2);
 for(const x of project.brand.persuasion)for(const key of ['principle','element','mechanism','limit'])assert.ok(x[key]?.length>5);
 for(const file of ['logo.svg','style-guide.html'])assert.ok(existsSync('docs/public/samples/'+c.slug+'/'+file));
 const plan=readFileSync('docs/public/student-work/'+c.slug+'/02-specifications.md','utf8');
 for(const text of [project.tag,project.brand.support,project.brand.sourceA[1],project.brand.sourceB[1],'My compact brand brief'])assert.ok(plan.includes(text),'Brand plan missing '+c.slug+'/'+text);
 const research=readFileSync('docs/public/student-work/'+c.slug+'/01-research.md','utf8');
 assert.ok(research.includes(project.brand.trace));
 assert.ok(research.includes('What the brand presentation suggests'));

 const page=readFileSync('docs/examples/submissions/'+c.slug+'.md','utf8');
 assert.equal((page.match(/<SampleAssessment /g)||[]).length,5,'Summary plus four assessments required: '+c.slug);
 const assessment=readFileSync('docs/public/student-work/'+c.slug+'/ASSESSMENT.md','utf8');
 let total=0;
 for(const [key,file] of Object.entries(files)){
  const m=c.milestones[key];assert.equal(m.scores.length,4);assert.equal(m.evidence.length,4);assert.equal(m.deductions.length,4);
  for(const [i,n] of m.scores.entries()){
   assert.ok(Number.isInteger(n)&&n>=0&&n<=25);
   if(n<25){
    assert.ok(m.deductions[i].length>30,'Specific deduction required: '+c.slug+'/'+key);
    assert.ok(m.evidence[i].includes('Deduction (−'+(25-n)+'): '+m.deductions[i]));
   }else{
    assert.equal(m.deductions[i],'');assert.ok(m.evidence[i].startsWith('Full credit:'));
   }
  }
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
console.log('Verified 6 completed submission packets, 24 four-part rubric assessments, accurate totals, paired performance levels, and no unfilled worksheet fields, and matching six brand briefs/style guides with two persuasion applications each.');

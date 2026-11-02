import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { mkdtemp, rm, readFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
const temp=await mkdtemp(join(tmpdir(),'is117-example-check-'));
const projects=JSON.parse(await readFile('docs/public/samples/projects.json','utf8'));
const base='http://127.0.0.1:4195/is117-demo-days/samples/';
let child;
const start=async()=>{child=spawn(process.execPath,['docs/public/samples/server.mjs'],{env:{...process.env,IS117_DEMO_PORT:'4195',IS117_DEMO_DB:join(temp,'test.sqlite')},stdio:['ignore','pipe','pipe']});await new Promise((resolve,reject)=>{child.stdout.once('data',resolve);child.once('error',reject);child.once('exit',code=>reject(Error('Server exited '+code)));});};
const stop=async()=>{if(child&&child.exitCode===null){const exited=new Promise(resolve=>child.once('exit',resolve));child.kill('SIGTERM');await exited;}child=null;};
const post=async body=>{const res=await fetch(base+'api/records',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(body)});return [res.status,await res.json()];};
try{
 await start();
 for(const p of projects){
  for(const v of ['a','b']){const r=await fetch(base+p.slug+'/'+v+'.html');assert.equal(r.status,200);assert.match(await r.text(),new RegExp('data-version="'+v+'"'));assert.equal((await fetch(base+p.slug+'/preview-'+v+'.jpg')).status,200);}
  for(const f of ['logo.svg','style-guide.html'])assert.equal((await fetch(base+p.slug+'/'+f)).status,200);
  const image=await fetch(base+p.slug+'/concept.jpg');assert.equal(image.status,200);
  const packet=await readFile('docs/examples/submissions/'+p.slug+'.md','utf8');for(const h of ['## 1. Research','## 2. Plan','## 3. Build','## 4. Get feedback'])assert.ok(packet.includes(h));
  if(p.kind==='service')assert.equal((await fetch(base+p.slug+'/customer/AGENTS.md')).status,200);
  if(p.kind==='portfolio'){for(const f of ['resume.txt','github-profile.txt','linkedin.txt'])assert.equal((await fetch(base+p.slug+'/'+f)).status,200);continue;}
  const body={project:p.slug,email:'demo@example.test',...(p.kind==='shirt'?{size:'M',quantity:2,total:1}:{service:p.options[0],window:'Weekday afternoon'})};
  const [status,row]=await post(body);assert.equal(status,201);assert.ok(row.reference);assert.equal(row.email,undefined);
  if(p.kind==='shirt'){assert.equal(row.total,p.price*2);assert.equal((await post({...body,quantity:0}))[0],400);assert.equal((await post({...body,size:'XXL'}))[0],400);}else{assert.equal(row.status,'Pending confirmation');assert.equal((await post({...body,service:'not-a-service'}))[0],400);}
  assert.equal((await post({...body,email:'invalid'}))[0],400);
 }
 const before=await fetch(base+'api/records?project=campus-cotton').then(r=>r.json());
 await stop();await start();
 const after=await fetch(base+'api/records?project=campus-cotton').then(r=>r.json());assert.deepEqual(after,before);
 assert.equal((await fetch(base+'server.mjs')).status,404);
 console.log('Verified 12 pages, 12 UI previews, 6 concept images, 6 milestone packets, 6 completed professional-profile examples, all 4 demo workflows, validation, server-calculated totals, and SQLite persistence across restart.');
}finally{await stop();await rm(temp,{recursive:true,force:true});}

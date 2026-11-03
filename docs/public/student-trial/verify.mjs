// Reproducible integration checks: node verify.mjs (Node 24+).
import { spawn } from 'node:child_process';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
const dir=mkdtempSync(join(tmpdir(),'nina-check-'));
const root=dirname(fileURLToPath(import.meta.url));
const port=4197, base=`http://127.0.0.1:${port}/is117-demo-days/student-trial/api/`;
let server,count=0;
const check=(name,ok)=>{assert.ok(ok,name);console.log('PASS '+name);count++};
async function start(){server=spawn(process.execPath,[join(root,'server.mjs')],{env:{...process.env,IS117_DEMO_PORT:String(port),IS117_DEMO_DB:join(dir,'test.sqlite')},stdio:['ignore','pipe','pipe']});let ready=false;server.stdout.on('data',b=>{if(String(b).includes('Local SQLite demo:'))ready=true});for(let i=0;i<100;i++){if(server.exitCode!==null)throw Error('Server exited; check port 4197');if(ready)return;await new Promise(r=>setTimeout(r,50))}throw Error('Server did not start')}
async function stop(){if(!server||server.exitCode!==null)return;await new Promise(resolve=>{server.once('exit',resolve);server.kill('SIGTERM')})}
async function request(route,data){const r=await fetch(base+route,data?{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)}:{});return {code:r.status,body:await r.json()}}
try{await start();let r=await request('records',{project:'shirt',email:'student@example.com',size:'M',quantity:2,total:1});check('server ignores tampered total and calculates 4800 cents',r.code===201&&r.body.total===4800);const ref=r.body.reference;
for(const [size,quantity] of [['XL',1],['S',0],['S',1.5],['S',6]]){r=await request('records',{project:'shirt',email:'student@example.com',size,quantity});check(`reject size=${size} quantity=${quantity}`,r.code===400)}
r=await request('records',{project:'shirt',email:'bad',size:'M',quantity:1});check('reject invalid email',r.code===400);
r=await request('records',{project:'group',email:'student@example.com',service:'Brake adjustment',window:'Weekend afternoon'});check('save supported inquiry as pending review',r.code===201&&r.body.status==='Pending review');
r=await request('records',{project:'group',email:'student@example.com',service:'Unsupported',window:'Weekend afternoon'});check('reject unsupported service',r.code===400);
await stop();await start();r=await request('records?project=shirt');check('SQLite order survives actual server restart',r.body.some(x=>x.reference===ref&&x.total===4800));check('email absent from returned saved records',!JSON.stringify(r.body).includes('student@example.com'));
console.log(`${count} checks passed`);
}finally{await stop();rmSync(dir,{recursive:true,force:true})}

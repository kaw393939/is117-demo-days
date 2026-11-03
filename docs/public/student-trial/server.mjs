// Node 24+, no package installation. This is a loopback-only classroom demo.
import { createServer } from 'node:http';
import { readFileSync } from 'node:fs';
import { resolve, dirname, extname, sep, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { tmpdir } from 'node:os';
import { DatabaseSync } from 'node:sqlite';
import { randomUUID } from 'node:crypto';
const root=dirname(fileURLToPath(import.meta.url));
const projects=JSON.parse(readFileSync(join(root,'projects.json'),'utf8'));
const dbPath=process.env.IS117_DEMO_DB||join(tmpdir(),'is117-nina-rehearsal.sqlite');
const db=new DatabaseSync(dbPath);
db.exec('CREATE TABLE IF NOT EXISTS products (slug TEXT PRIMARY KEY, price INTEGER NOT NULL); CREATE TABLE IF NOT EXISTS records (id INTEGER PRIMARY KEY, project TEXT NOT NULL, reference TEXT NOT NULL, payload TEXT NOT NULL)');
for(const p of projects.filter(p=>p.kind==='shirt')) db.prepare('INSERT OR REPLACE INTO products VALUES (?,?)').run(p.slug,p.price);
const port=Number(process.env.IS117_DEMO_PORT||4191);
const base='/is117-demo-days/student-trial/';
const reply=(res,code,data)=>{res.writeHead(code,{'Content-Type':'application/json','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});res.end(JSON.stringify(data));};
const server=createServer(async(req,res)=>{
 try{
 const url=new URL(req.url,'http://127.0.0.1:'+port);
 if(!url.pathname.startsWith(base)) {res.writeHead(302,{Location:base+'shirt/a.html'});return res.end();}
 const route=url.pathname.slice(base.length);
 if(route==='api/health')return reply(res,200,{storage:'sqlite'});
 if(route==='api/records'&&req.method==='GET'){
 const project=url.searchParams.get('project');
 if(!projects.some(p=>p.slug===project&&p.kind!=='portfolio'))return reply(res,400,{error:'Unknown project.'});
 return reply(res,200,db.prepare('SELECT payload FROM records WHERE project=? ORDER BY id DESC LIMIT 30').all(project).map(r=>JSON.parse(r.payload)));
 }
 if(route==='api/records'&&req.method==='POST'){
 if(req.headers.origin&&req.headers.origin!=='http://127.0.0.1:'+port)return reply(res,403,{error:'Use the local demo origin.'});
 let raw='';for await(const chunk of req){raw+=chunk;if(raw.length>4096)return reply(res,413,{error:'Request too large.'});}
 let body;try{body=JSON.parse(raw)}catch{return reply(res,400,{error:'Invalid JSON.'})}
 const p=projects.find(p=>p.slug===body.project&&p.kind!=='portfolio');
 if(!p||typeof body.email!=='string'||body.email.length>120||!/^\S+@\S+\.\S+$/.test(body.email))return reply(res,400,{error:'Choose a known project and valid synthetic email.'});
 const row={reference:'DEMO-'+randomUUID().slice(0,8).toUpperCase(),project:p.slug};
 // Email is validated but deliberately not persisted; only synthetic workflow data is needed.
 if(p.kind==='shirt'){
 if(!['S','M','L'].includes(body.size)||!Number.isInteger(body.quantity)||body.quantity<1||body.quantity>5)return reply(res,400,{error:'Choose size S/M/L and whole quantity 1–5.'});
 row.size=body.size;row.quantity=body.quantity;row.total=db.prepare('SELECT price FROM products WHERE slug=?').get(p.slug).price*body.quantity;
 }else{
 if(!p.options.includes(body.service)||!['Weekday morning','Weekday afternoon','Weekend afternoon'].includes(body.window))return reply(res,400,{error:'Choose a supported service/topic and preferred window.'});
 row.service=body.service;row.window=body.window;row.status='Pending review';
 }
 db.prepare('INSERT INTO records(project,reference,payload) VALUES (?,?,?)').run(p.slug,row.reference,JSON.stringify(row));
 return reply(res,201,row);
 }
 if(req.method!=='GET'||route.startsWith('api/'))return reply(res,404,{error:'Not found.'});
 const file=resolve(root,decodeURIComponent(route));
 if(!file.startsWith(root+sep)||!['.html','.css','.js','.json','.txt','.svg','.jpg','.png','.webp','.md'].includes(extname(file)))return reply(res,404,{error:'Not found.'});
 const types={'.html':'text/html','.css':'text/css','.js':'text/javascript','.json':'application/json','.txt':'text/plain','.svg':'image/svg+xml','.jpg':'image/jpeg','.png':'image/png','.webp':'image/webp','.md':'text/plain'};
 let bytes;try{bytes=readFileSync(file)}catch{return reply(res,404,{error:'Not found.'})}
 res.writeHead(200,{'Content-Type':types[extname(file)],'X-Content-Type-Options':'nosniff'});res.end(bytes);
 }catch{reply(res,500,{error:'Demo server error. Check the local console.'});}
});
server.listen(port,'127.0.0.1',()=>{console.log('Local SQLite demo: http://127.0.0.1:'+port+base+'shirt/a.html');console.log('Database outside public files: '+dbPath);});
const stop=()=>server.close(()=>{db.close();process.exit(0)});
process.on('SIGTERM',stop);process.on('SIGINT',stop);

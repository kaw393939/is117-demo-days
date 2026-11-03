// Run after docs:build. File-existence checks alone miss SPA interception/base errors.
import { readdirSync,readFileSync,existsSync } from 'node:fs';
import { resolve,join } from 'node:path';
const root=resolve('docs/.vitepress/dist'),base='/is117-demo-days/';
const walk=dir=>readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?['assets','samples','student-trial'].includes(e.name)?[]:walk(join(dir,e.name)):[join(dir,e.name)]);
let count=0;
for(const file of walk(root).filter(x=>x.endsWith('.html'))){
 for(const [tag] of readFileSync(file,'utf8').matchAll(/<a\b[^>]*>/g)){
  const href=tag.match(/\bhref="([^"]+)"/)?.[1];
  if(!href||!/(?:\/samples\/|\/student-trial\/).*\.html(?:[?#]|$)/.test(href))continue;
  if(!href.startsWith(base)||!tag.includes('target="_self"'))throw Error(`${file}: standalone link must preserve base and use normal navigation: ${tag}`);
  if(!existsSync(join(root,href.slice(base.length).split(/[?#]/)[0])))throw Error(`${file}: missing ${href}`);
  count++;
 }
}
if(count<20)throw Error('Expected at least 20 standalone product links; check scan coverage.');
console.log(`Verified ${count} built standalone links: target, Pages base and actual file.`);

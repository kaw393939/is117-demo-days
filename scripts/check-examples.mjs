import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import { makeOrder, makeRequest, readRecords, saveRecord } from '../docs/public/prototype-storage.js';

const dir = 'docs/public/samples';
const projects = JSON.parse(await readFile(dir + '/projects.json', 'utf8'));
const memory = new Map();
const storage = {
  getItem: key => memory.get(key) ?? null,
  setItem: (key, value) => memory.set(key, value)
};

for (const project of projects) {
  const folder = dir + '/' + project.slug;
  for (const version of ['a', 'b']) {
    const page = await readFile(folder + '/' + version + '.html', 'utf8');
    assert.ok(page.includes('data-version="' + version + '"'));
    await access(folder + '/preview-' + version + '.jpg');
  }
  for (const file of ['logo.svg', 'style-guide.html', 'concept.jpg']) await access(folder + '/' + file);

  const packet = await readFile('docs/examples/submissions/' + project.slug + '.md', 'utf8');
  for (const heading of ['## 1. Research', '## 2. Plan', '## 3. Build', '## 4. Get feedback']) {
    assert.ok(packet.includes(heading));
  }

  if (project.kind === 'portfolio') {
    for (const file of ['resume.txt', 'github-profile.txt', 'linkedin.txt']) await access(folder + '/' + file);
    continue;
  }

  let fields;
  if (project.kind === 'shirt') {
    fields = makeOrder('M', 2, project.price);
    assert.equal(fields.total, project.price * 2);
    for (const invalid of [0, 1.5, 6]) assert.throws(() => makeOrder('M', invalid, project.price));
    assert.throws(() => makeOrder('XL', 2, project.price));
  } else {
    await access(folder + '/customer/AGENTS.md');
    fields = makeRequest(project.options[0], 'Weekday afternoon', project.options, 'Pending confirmation');
    assert.equal(fields.status, 'Pending confirmation');
    assert.throws(() => makeRequest('Unsupported', 'Weekday afternoon', project.options, fields.status));
    assert.throws(() => makeRequest(project.options[0], 'Yesterday', project.options, fields.status));
  }

  const key = 'is117-demo-' + project.slug;
  assert.deepEqual(readRecords(key, storage), []);
  const saved = saveRecord(key, fields, storage);
  assert.match(saved.reference, /^DEMO-[0-9A-F]{8}$/);
  assert.deepEqual(readRecords(key, storage), [saved]);
  assert.equal('email' in saved, false);
  assert.throws(() => saveRecord(key, fields, {
    ...storage,
    setItem: () => { throw new Error('Browser storage is full'); }
  }), /Browser storage is full/);
  assert.deepEqual(readRecords(key, storage), [saved]);
}
assert.deepEqual(readRecords('different-site-example', storage), []);
console.log('Verified twelve example pages, six packets, and four prototype workflows with calculated totals, validation, storage readback, and write-failure handling.');

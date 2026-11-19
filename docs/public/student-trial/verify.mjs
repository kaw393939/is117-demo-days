import assert from 'node:assert/strict';
import { makeOrder, makeRequest, readRecords, saveRecord } from '../prototype-storage.js';

const memory = new Map();
const browser = {
  getItem: key => memory.get(key) ?? null,
  setItem: (key, value) => memory.set(key, value)
};

const order = saveRecord('nina-demo-shirt', makeOrder('M', 2, 2400), browser);
assert.equal(order.total, 4800);
assert.deepEqual(readRecords('nina-demo-shirt', browser), [order]);
assert.throws(() => makeOrder('XL', 1, 2400));

const services = ['Flat tire', 'Tune-up', 'Brake adjustment'];
const request = saveRecord(
  'nina-demo-group',
  makeRequest('Brake adjustment', 'Weekend afternoon', services, 'Pending review'),
  browser
);
assert.deepEqual(readRecords('nina-demo-group', browser), [request]);
assert.equal(request.status, 'Pending review');
assert.equal('email' in request, false);
assert.throws(() => makeRequest('Unsupported', 'Weekend afternoon', services, 'Pending review'));
console.log('Checked the rehearsal order and request with browser-style storage.');

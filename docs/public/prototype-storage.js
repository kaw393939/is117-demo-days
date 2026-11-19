export const demoWindows = ['Weekday morning', 'Weekday afternoon', 'Weekend afternoon'];

export function makeOrder(size, quantity, unitPrice) {
  if (!['S', 'M', 'L'].includes(size) || !Number.isInteger(quantity) || quantity < 1 || quantity > 5) {
    throw new Error('Choose a size and a whole quantity from 1 to 5.');
  }
  return { size, quantity, total: quantity * unitPrice };
}

export function makeRequest(service, window, options, status) {
  if (!options.includes(service) || !demoWindows.includes(window)) {
    throw new Error('Choose a listed service and time.');
  }
  return { service, window, status };
}

export function readRecords(key, storage = localStorage) {
  const saved = storage.getItem(key);
  if (!saved) return [];

  const records = JSON.parse(saved);
  if (!Array.isArray(records)) throw new Error('The browser history could not be read.');
  return records;
}

export function saveRecord(key, fields, storage = localStorage) {
  const reference = 'DEMO-' + crypto.randomUUID().slice(0, 8).toUpperCase();
  const record = { ...fields, reference };
  const records = [record, ...readRecords(key, storage)].slice(0, 30);
  storage.setItem(key, JSON.stringify(records));
  return record;
}

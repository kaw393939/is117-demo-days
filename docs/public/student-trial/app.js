import { makeOrder, makeRequest, readRecords, saveRecord } from '../prototype-storage.js';

const project = document.body.dataset.project;
const form = document.querySelector('form');
const isShirt = project === 'shirt';

if (form) {
  const key = 'nina-demo-' + project;
  const message = document.querySelector('#storage');
  const result = document.querySelector('#result');
  const history = document.querySelector('#history');
  const services = ['Flat tire', 'Tune-up', 'Brake adjustment'];
  const money = cents => '$' + (cents / 100).toFixed(2);

  function showHistory() {
    const entries = readRecords(key).map(row => isShirt
      ? `${row.reference} — ${row.size} × ${row.quantity} — ${money(row.total)}`
      : `${row.reference} — ${row.service} — ${row.window} — ${row.status}`);
    history.replaceChildren(...(entries.length ? entries : ['No demo records yet.']).map(text => {
      const item = document.createElement('li');
      item.textContent = text;
      return item;
    }));
  }

  message.textContent = 'Clickable prototype · Demo records stay in this browser.';
  if (isShirt) {
    form.elements.quantity.addEventListener('input', () => {
      const q = Number(form.elements.quantity.value);
      document.querySelector('#total').textContent = Number.isInteger(q) && q >= 1 && q <= 5
        ? 'Total: ' + money(q * 2400)
        : 'Choose a whole quantity from 1 to 5.';
    });
  }

  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = Object.fromEntries(new FormData(form));

    try {
      const fields = isShirt
        ? makeOrder(data.size, Number(data.quantity), 2400)
        : makeRequest(data.service, data.window, services, 'Pending review');
      const row = saveRecord(key, { project, ...fields });
      result.textContent = isShirt
        ? `Demo order saved: ${row.reference}. ${row.size} × ${row.quantity}. Total ${money(row.total)}. No payment taken.`
        : `Request saved: ${row.reference}. Pending review. No appointment confirmed or message sent.`;
      showHistory();
    } catch (error) {
      result.textContent = 'Not saved: ' + error.message;
    }
  });

  try {
    showHistory();
  } catch (error) {
    message.textContent = 'Demo history is unavailable in this browser. ' + error.message;
  }
}

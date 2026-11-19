import { makeOrder, makeRequest, readRecords, saveRecord } from '../prototype-storage.js';

const slug=document.body.dataset.project,version=document.body.dataset.version;
const projects=await fetch('../projects.json').then(r=>r.json());
const p=projects.find(x=>x.slug===slug),isStore=p.kind==='shirt',isService=p.kind==='service';
document.body.classList.add(`version-${version}`);document.body.style.setProperty('--accent',p.color);
const docsBase="https://kaw393939.github.io/is117-demo-days/";
const guide=`${docsBase}examples/submissions/${slug}.html`;
const money=n=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(n);
const concept=`<figure class="visual"><img src="concept.jpg" width="1536" height="1024" alt="AI-generated concept for ${p.name}; not a real product or documented student/customer"><figcaption>AI-generated classroom concept imagery.</figcaption></figure>`;
const shirt=concept;
const guidance=`<section class="brand-help" id="guidance"><span class="eyebrow">${p.kind==='portfolio'?'A useful habit':'A little help before you start'}</span><h2>${p.brand.tipTitle}</h2><ul>${p.brand.tips.map(t=>`<li>${t}</li>`).join('')}</ul></section>`;
const heroAction=p.kind==='portfolio'?'Explore my course projects':isStore?'Choose your tee':'Start a demo request';
const notice='<div class="notice">IS117 fictional teaching example · No real business, orders, appointments, or student credentials. <a href="'+guide+'">Read the submission example</a></div>';
const profiles=`<section id="profiles"><h2>Résumé and professional profiles</h2><p>These links open completed fictional profile examples. A student submission uses real personal account links and accurate education/contact details.</p><div class="profilelinks"><a href="resume.txt">Résumé text</a><a href="github-profile.txt">GitHub profile example</a><a href="linkedin.txt">LinkedIn profile example</a></div></section>`;
const caseHtml=()=>p.projects.map((id,i)=>{const q=projects.find(x=>x.slug===id);return `<article class="card"><span class="case-meta">${i===0?'Individual course project':'Team course project · fictional contribution'}</span><h3>${q.name}</h3><p><strong>Problem:</strong> ${q.goal}</p><p><strong>My contribution:</strong> ${i===0?'I owned the research, specification, and simulated storefront.':slug==='maya-chen'?'I designed the service explanation and responsive layouts; my partner implemented intake and receipts. I cross-reviewed the form.':'I implemented request validation and confirmation; my partner designed the topic explanation and layouts. I cross-reviewed navigation.'}</p><details><summary>Decisions, AI use, and checks</summary><p><strong>Brand choice:</strong> ${q.brand.promise} ${q.brand.trace}</p><p><strong>Alternatives:</strong> ${q.a} Compared with: ${q.b} Selected ${q.launch}: ${q.why} Both visual treatment and hierarchy change; this does not isolate a cause.</p><p><strong>Feedback and improvement:</strong> ${q.change} This is a fictional peer-review scenario. The full submission includes the retest result and rubric feedback.</p><p><strong>AI use and verification:</strong> AI helped draft alternatives and form logic. The graded record identifies required-field and valid-path checks and separates the fictional student account from actual checks on the class code.</p><p><strong>Limitation:</strong> ${q.limit}</p></details><a class="button" href="../${q.slug}/${q.launch.toLowerCase()}.html">Try ${q.name}</a> <a href="${docsBase}examples/submissions/${q.slug}.html">Read process evidence</a></article>`}).join('');
const about=`<section id="about"><h2>${slug==='maya-chen'?'Small ideas, made useful.':'Understand the problem. Check the result.'}</h2><p>${slug==='maya-chen'?'I enjoy turning a vague business request into a clear page and a useful next step. These projects show my experiments with wording, layout, and customer tasks.':'I like explaining how a workflow should behave, then checking where it can fail. These projects show the decisions I am learning to make with a teammate and AI assistance.'}</p><p>I am practicing HTML, CSS, JavaScript, specifications, peer review, and careful use of AI. These are course projects; they do not represent professional employment.</p></section>`;
const store=`<div class="grid"><section>${shirt}<h2>Product facts</h2><p>A fictional white crew-neck tee. Concept specification: cotton jersey, regular fit, machine wash cold. Manufacturing, material, and care details are assumptions for this classroom business.</p><p class="muted">Classroom policy: no real shipment or returns; simulated shipping and tax are $0. No payment-card information is collected.</p></section><section class="panel primary" id="workflow"><span class="eyebrow">The white crew</span><h2>Choose with confidence.</h2><p class="price">${money(p.price)}</p><p>One shirt, one classroom concept price.</p><details><summary>Size guide — garment measurements</summary><p>Flat garment dimensions in centimeters; compare with a shirt you own. These are illustrative measurements, not a manufactured product specification.</p><table><thead><tr><th>Size</th><th>Chest width (cm)</th><th>Length (cm)</th></tr></thead><tbody><tr><td>S</td><td>48</td><td>67</td></tr><tr><td>M</td><td>51</td><td>70</td></tr><tr><td>L</td><td>54</td><td>73</td></tr></tbody></table></details><form id="order"><div class="twocol"><div><label for="size">Size</label><select id="size" name="size" required><option value="">Choose a size</option><option>S</option><option>M</option><option>L</option></select></div><div><label for="quantity">Quantity (1–5)</label><input id="quantity" name="quantity" type="number" min="1" max="5" step="1" value="1" required></div></div><p id="total" aria-live="polite"></p><p>Demo shipping: $0 · Demo tax: $0</p><button type="submit">Review demo order</button></form><div id="review" hidden><h3>Review your choices</h3><p id="summary"></p><form id="checkout"><label for="email">Demo email</label><input id="email" name="email" type="email" value="demo@example.test" required><p class="muted">Use synthetic information. This does not send email.</p><button type="submit">Complete simulated checkout</button></form></div><p class="receipt" id="receipt" role="status" tabindex="-1"></p><p id="mode" class="muted">Clickable prototype · Demo records stay in this browser.</p><details><summary>Demo order history</summary><ul id="history" class="history"></ul></details></section></div>`;
const service=`<div class="grid"><section>${concept}<h2>${slug==='room-ready'?'Know what to expect.':'A focused request for help.'}</h2><p>${slug==='room-ready'?'Assembly inquiries for desks, chairs, and shelving. No electrical work, mounting, repairs, or real service delivery.':'Guidance on HTML, CSS, and introductory JavaScript. We model support for learning, not completion of assessed work.'}</p><ol><li>Choose your ${slug==='room-ready'?'item':'topic'} and preferred window.</li><li>Send a demo request.</li><li>${slug==='room-ready'?'An operator':'A tutor'} would confirm details later.</li></ol><p><strong>A request does not reserve a time.</strong> No actual ${slug==='room-ready'?'operator':'tutor'} is contacted.</p></section><section id="workflow" class="panel primary"><h2>${slug==='room-ready'?'Tell us what needs assembling.':'What would you like to understand?'}</h2><form id="request"><label for="service">${slug==='room-ready'?'Furniture item':'Tutoring topic'}</label><select id="service" name="service" required><option value="">Choose one</option>${p.options.map(o=>'<option>'+o+'</option>').join('')}</select><label for="window">Preferred window — Eastern time</label><select id="window" name="window" required><option value="">Choose a preference</option><option>Weekday morning</option><option>Weekday afternoon</option><option>Weekend afternoon</option></select><p class="muted">Illustrative preferences; not live availability.</p><label for="email">Demo email</label><input type="email" id="email" name="email" required value="demo@example.test"><p class="muted">Use synthetic information. No email is sent.</p><button type="submit">Send demo request</button></form><p class="receipt" id="receipt" role="status" tabindex="-1"></p><p id="mode" class="muted">Clickable prototype · Demo records stay in this browser.</p><details><summary>Demo request history</summary><ul id="history" class="history"></ul></details></section></div>`;
const portfolio=version==='a'?`${concept}<section id="projects"><h2>Selected course projects</h2>${caseHtml()}</section>${about}${profiles}`:`${about}${concept}${profiles}<section id="projects"><h2>Selected course projects</h2>${caseHtml()}</section>`;
document.querySelector('#app').innerHTML=notice+`<header><div class="topline"><a class="wordmark" href="${version}.html"><img src="logo.svg" alt="" width="36" height="36">${p.name}</a><nav aria-label="Main navigation">${p.kind==='portfolio'?'<a href="#projects">Projects</a><a href="#about">About</a><a href="#profiles">Résumé & profiles</a>':'<a href="#workflow">'+(isStore?'Shop the tee':'Make a request')+'</a>'}<a href="${version==='a'?'b':'a'}.html">Compare version ${version==='a'?'B':'A'}</a></nav></div></header><main id="main"><section class="hero"><span class="eyebrow">${p.kind==='portfolio'?'Student portfolio':'An introductory business concept'} · Version ${version.toUpperCase()}</span><h1>${p.tag}</h1><p>${p.brand.support}</p><p class="hero-actions"><a class="button" href="${p.kind==='portfolio'?'#projects':'#workflow'}">${heroAction}</a> <a href="#guidance">${p.brand.tipTitle}</a></p><span class="badge">${p.kind==='portfolio'?'Fictional student':isStore?'Simulated store':'Simulated service request'}</span></section>${isStore?store:isService?service:portfolio}${guidance}<section class="variantlinks"><h2>Behind this classroom example</h2><p>Version ${version.toUpperCase()}: ${version==='a'?p.brand.visualA:p.brand.visualB} Both visual treatment and information order change; this comparison cannot isolate which caused a preference.</p><p><a href="style-guide.html">Logo, style guide, sources, and persuasion notes</a></p><p><strong>Example launch choice: ${p.launch}.</strong> ${p.why}</p><p><a href="${version==='a'?'b':'a'}.html">Try the other version</a> · <a href="${guide}">Read the research, personas, specs, and feedback example</a> · <a href="${docsBase}examples/submissions/">All six examples</a></p></section></main><footer>${p.limit} Built for IS117 as a small reference example.</footer>`;

if (isStore || isService) {
  const key = 'is117-demo-' + slug;
  const history = document.querySelector('#history');
  const receipt = document.querySelector('#receipt');

  function show(message) {
    receipt.textContent = message;
    receipt.focus();
  }

  function refresh() {
    const records = readRecords(key);
    const entries = records.map(row => isStore
      ? row.reference + ' · ' + row.size + ' / ' + row.quantity + ' / ' + money(row.total)
      : row.reference + ' · ' + row.service + ' / ' + row.window + ' / ' + (row.status ?? 'Pending confirmation'));
    history.replaceChildren(...(entries.length ? entries : ['No demo records yet.']).map(text => {
      const item = document.createElement('li');
      item.textContent = text;
      return item;
    }));
  }

  function submit(buildFields, message) {
    try {
      const row = saveRecord(key, buildFields());
      show(message(row));
      refresh();
    } catch (error) {
      show('Could not save this demo record. ' + error.message);
    }
  }

  if (isStore) {
    const order = document.querySelector('#order');
    const checkout = document.querySelector('#checkout');
    const review = document.querySelector('#review');
    const total = document.querySelector('#total');
    const quantity = document.querySelector('#quantity');
    const size = document.querySelector('#size');

    function update() {
      const n = Number(quantity.value);
      total.textContent = Number.isInteger(n) && n >= 1 && n <= 5
        ? 'Item total: ' + money(n * p.price)
        : 'Enter a whole quantity from 1 to 5.';
      review.hidden = true;
    }

    quantity.addEventListener('input', update);
    size.addEventListener('change', update);
    update();

    order.addEventListener('submit', event => {
      event.preventDefault();
      if (!order.reportValidity()) return;
      const pending = makeOrder(size.value, Number(quantity.value), p.price);
      document.querySelector('#summary').textContent =
        pending.quantity + ' × ' + p.name + ' white tee / ' + pending.size + ' / ' + money(pending.total) + ' total';
      review.hidden = false;
      document.querySelector('#email').focus();
    });

    checkout.addEventListener('submit', event => {
      event.preventDefault();
      if (review.hidden || !order.reportValidity() || !checkout.reportValidity()) return;
      submit(() => makeOrder(size.value, Number(quantity.value), p.price), row => (
        'Simulated order complete: ' + row.reference + '. ' + row.quantity + ' shirt(s), size ' +
        row.size + ', ' + money(row.total) + '. No real order, payment, or shipment.'
      ));
    });
  } else {
    const request = document.querySelector('#request');
    request.addEventListener('submit', event => {
      event.preventDefault();
      if (!request.reportValidity()) return;
      submit(
        () => makeRequest(request.elements.service.value, request.elements.window.value, p.options, 'Pending confirmation'),
        row => 'Demo request saved: ' + row.reference + ' / ' + row.service + ' / ' + row.window +
          '. ' + row.status + '. No appointment is booked and no email was sent.',
      );
    });
  }

  try {
    refresh();
  } catch (error) {
    document.querySelector('#mode').textContent = 'Demo history is unavailable in this browser. ' + error.message;
  }
}

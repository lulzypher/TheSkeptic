/* Real-DOM render verification.
 * Loads the real debate.html + real debates.js, executes the renderer IIFE
 * inside a jsdom window, then cross-checks the rendered DOM against the
 * actual DEBATE_DATA object (so data→render fidelity is asserted, not assumed). */
const { JSDOM } = require('jsdom');
const path = require('path');

(async () => {
  const dom = await JSDOM.fromFile(path.join(__dirname, 'debate.html'), {
    runScripts: 'dangerously',
    resources: 'usable',
    pretendToBeVisual: true,
  });
  const { window } = dom;
  const document = window.document;

  // Wait for external debates.js to load and both scripts to run.
  await new Promise((resolve) => {
    if (document.readyState === 'complete') return resolve();
    window.addEventListener('load', resolve);
  });
  await new Promise((r) => setTimeout(r, 60)); // settle microtasks

  const results = [];
  const check = (name, pass, extra) =>
    results.push({ name, pass: !!pass, extra: extra || '' });

  const topicsEl = document.getElementById('topics');
  const sections = document.querySelectorAll('#topics section.topic');
  const badgesText = document.getElementById('badges').textContent;
  const topicsHtml = topicsEl.innerHTML;

  const data = window.DEBATE_DATA;
  const evExp = data.reduce((s, t) => s + t.mainstream.evidence.length, 0);
  const coExp = data.reduce((s, t) => s + t.creationist.counters.length, 0);
  const reExp = data.reduce((s, t) => s + t.rebuttal.length, 0);
  const srExp = data.reduce(
    (s, t) => s + t.creationist.counters.reduce((n, c) => n + c.sources.length, 0), 0);

  const evAct = document.querySelectorAll('#topics .pts li').length;
  const coAct = document.querySelectorAll('#topics details.counter').length;
  const reAct = document.querySelectorAll('#topics .rb li').length;
  const srAct = document.querySelectorAll('#topics .srcs .chip').length;
  const navAnchors = document.querySelectorAll('#nav a').length;

  check('exactly 6 topic sections rendered', sections.length === 6, `got ${sections.length}`);
  check('badge reads "6 DEBATE TOPICS"', badgesText.includes('6 DEBATE TOPICS'), badgesText.trim().replace(/\s+/g, ' '));
  check('badge points count matches data', badgesText.includes(evExp + ' MAINSTREAM POINTS'));
  check('badge counters·sources matches data', badgesText.includes(coExp + ' COUNTERS · ' + srExp + ' SOURCES'));
  check('no literal "undefined" leaked into DOM', !topicsHtml.includes('undefined'));
  check('evidence <li> count == data', evAct === evExp, `${evAct} vs ${evExp}`);
  check('counter <details> count == data', coAct === coExp, `${coAct} vs ${coExp}`);
  check('rebuttal <li> count == data', reAct === reExp, `${reAct} vs ${reExp}`);
  check('source .chip count == data', srAct === srExp, `${srAct} vs ${srExp}`);
  check('nav has 6 anchors', navAnchors === 6, `got ${navAnchors}`);

  // Every section must carry the full structural skeleton.
  let structural = true;
  sections.forEach((sec) => {
    const need = ['h2', '.colhead.ms', '.colhead.cr', 'ul.pts', 'details.counter', '.rebut', 'ul.rb', '.verdict', '.vlab'];
    need.forEach((sel) => { if (!sec.querySelector(sel)) structural = false; });
    if ((sec.querySelector('.verdict') || {}).textContent.trim() === '') structural = false;
  });
  check('every section has h2+colheads+pts+counters+rb+verdict', structural);

  // Every counter must have a non-empty summary, detail, and at least one chip.
  let counters = true;
  document.querySelectorAll('#topics details.counter').forEach((c) => {
    const p = (c.querySelector('summary') || {}).textContent || '';
    const d = (c.querySelector('.cbody p') || {}).textContent || '';
    const s = c.querySelectorAll('.srcs .chip').length;
    if (!p.trim() || !d.trim() || s < 1) counters = false;
  });
  check('every counter has non-empty summary+detail+sources', counters);

  const allPass = results.every((r) => r.pass);
  console.log('\n=== RENDER VERIFICATION (jsdom ' + require('jsdom/package.json').version + ') ===');
  for (const r of results) {
    console.log((r.pass ? 'PASS' : 'FAIL').padEnd(5) + '  ' + r.name + (r.extra ? '   [' + r.extra + ']' : ''));
  }
  console.log('\nActual: topics=' + sections.length + '  evidence=' + evAct + '  counters=' + coAct + '  rebuttal=' + reAct);
  console.log('Expected (from data): topics=' + data.length + '  evidence=' + evExp + '  counters=' + coExp + '  rebuttal=' + reExp);
  console.log('\n' + (allPass ? 'ALL CHECKS PASSED' : 'SOME CHECKS FAILED'));
  process.exit(allPass ? 0 : 1);
})().catch((e) => {
  console.error('HARNESS ERROR', e);
  process.exit(2);
});
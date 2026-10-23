/**
 * Page-turning logic for the issue: transitions, swipe, keyboard, URL hash,
 * stickers, the fan of phones, the Lagos clock. It runs once on the client and
 * returns a cleanup function, so React Strict Mode can mount it twice safely.
 */
export function initStage(): () => void {
  const ac = new AbortController();
  const opt = { signal: ac.signal };
  const timers: ReturnType<typeof setTimeout>[] = [];
  const q = <E extends HTMLElement>(sel: string) => document.querySelector<E>(sel);

  const P = Array.from(document.querySelectorAll<HTMLElement>('.pg'));
  const N = P.length;
  const sl = q('#sl'), sh = q('#sh'), mk = q('#mk');
  const pv = q<HTMLButtonElement>('#pv'), nx = q<HTMLButtonElement>('#nx');
  const c1 = q('#c1'), more = q('#more'), live = q('#live'), idx = q('#idx'), cn = q('#cn');
  let hint = q('#hint');
  if (!N || !sl || !sh || !mk || !pv || !nx || !c1 || !more || !live || !idx || !cn) return () => {};

  const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const titles = P.map((p) => p.getAttribute('aria-label') ?? '');
  const TC: Record<number, string> = { 1: 'tear', 2: 'scn', 3: 'spl', 4: 'mrk', 5: 'stm' };
  let cur = 0, busy = false, pending: number | null = null;

  const later = (fn: () => void, ms: number) => { timers.push(setTimeout(fn, ms)); };

  function chk() {
    const p = P[cur];
    more!.classList.toggle('s', p.scrollHeight > p.clientHeight + 60 && p.scrollTop < 30);
  }
  function ui() {
    c1!.textContent = String(cur + 1);
    c1!.classList.remove('r'); void c1!.offsetWidth; c1!.classList.add('r');
    pv!.disabled = cur === 0;
    nx!.disabled = cur === N - 1;
    chk();
  }
  P.forEach((p) => p.addEventListener('scroll', chk, { passive: true, signal: ac.signal }));

  function announce() {
    live!.textContent = `Page ${cur + 1} of ${N}: ${titles[cur]}`;
    const p = P[cur];
    p.tabIndex = -1;
    p.focus({ preventScroll: true });
  }
  function push(n: number, np?: boolean) {
    if (np) return;
    try { history.pushState({ p: n }, '', '#p' + (n + 1)); } catch { /* ignore */ }
  }

  function go(n: number, np?: boolean) {
    if (n === cur || n < 0 || n >= N) return;
    if (busy) { pending = n; return; }
    if (hint) { hint.remove(); hint = null; }
    const from = cur;
    const finish = () => {
      busy = false;
      if (pending !== null) { const p = pending; pending = null; if (p !== cur) go(p); }
    };
    const done = () => { ui(); push(n, np); announce(); };

    if (still) {
      P[from].classList.remove('on'); P[n].classList.add('on'); P[n].scrollTop = 0;
      cur = n; done(); return;
    }
    busy = true;
    const tc = TC[n];
    if (tc) {
      const oldP = P[from], newP = P[n];
      newP.classList.add('on', tc); newP.scrollTop = 0;
      newP.style.zIndex = '3'; oldP.style.zIndex = '1';
      if (tc === 'scn') sl!.className = 'run';
      if (tc === 'mrk') mk!.className = 'run';
      cur = n; done();
      later(() => {
        oldP.classList.remove('on'); oldP.style.zIndex = '';
        newP.classList.remove(tc); newP.style.zIndex = '';
        sl!.className = ''; mk!.className = '';
        finish();
      }, 1300);
      return;
    }
    sh!.className = 'sheets ' + (n > from ? 'f' : 'b'); void sh!.offsetWidth; sh!.classList.add('run');
    later(() => { P[from].classList.remove('on'); P[n].classList.add('on'); P[n].scrollTop = 0; cur = n; done(); }, 430);
    later(() => { sh!.className = 'sheets'; finish(); }, 950);
  }

  pv.addEventListener('click', () => go(cur - 1), opt);
  nx.addEventListener('click', () => go(cur + 1), opt);
  cn.addEventListener('click', () => { idx!.hidden = !idx!.hidden; }, opt);
  document.addEventListener('click', (e) => {
    const t = (e.target as Element).closest<HTMLElement>('[data-g]');
    if (t) { e.preventDefault(); idx!.hidden = true; go(Number(t.dataset.g)); }
  }, opt);
  document.addEventListener('keydown', (e) => {
    const tg = e.target as HTMLElement;
    if (/^(INPUT|TEXTAREA|SELECT)$/.test(tg.tagName)) return;
    if (e.key === 'Escape') idx!.hidden = true;
    if (e.key === 'ArrowRight') go(cur + 1);
    if (e.key === 'ArrowLeft') go(cur - 1);
    if (e.key === 'Enter' && tg.dataset && tg.dataset.g) go(Number(tg.dataset.g));
  }, opt);
  window.addEventListener('popstate', () => {
    const m = /#p(\d)/.exec(location.hash);
    go(m ? Number(m[1]) - 1 : 0, true);
  }, opt);

  // Swipe. Starts near the screen edges are ignored so Android's back gesture still works.
  let sx = 0, sy = 0;
  document.addEventListener('touchstart', (e) => {
    const x = e.touches[0].clientX;
    if ((e.target as Element).closest('.st, input, textarea, .slip') || x < 24 || x > window.innerWidth - 24) { sx = 0; return; }
    sx = x; sy = e.touches[0].clientY;
  }, { passive: true, signal: ac.signal });
  document.addEventListener('touchend', (e) => {
    if (!sx) return;
    const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
    sx = 0;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.6) go(dx < 0 ? cur + 1 : cur - 1);
  }, { passive: true, signal: ac.signal });

  // Fan of phones on the NoteForge page.
  const fr = Array.from(document.querySelectorAll<HTMLElement>('.ph'));
  const fc = q('#fcap');
  const fan = (i: number) => {
    fr.forEach((f, k) => { f.className = 'ph fr' + ((k - i + 3) % 3); });
    if (fc) fc.textContent = fr[i].dataset.c ?? '';
  };
  fr.forEach((f, k) => f.addEventListener('click', () => fan(k), opt));
  if (fr.length) fan(0);

  // Draggable cover stickers.
  document.querySelectorAll<HTMLElement>('.st').forEach((s) => {
    let dx = 0, dy = 0, d = false;
    s.addEventListener('pointerdown', (e) => {
      d = true;
      const b = s.getBoundingClientRect(); dx = e.clientX - b.left; dy = e.clientY - b.top;
      s.setPointerCapture(e.pointerId); s.classList.remove('pop');
    }, opt);
    s.addEventListener('pointermove', (e) => {
      if (!d) return;
      const p = (s.offsetParent as HTMLElement).getBoundingClientRect();
      s.style.left = e.clientX - dx - p.left + 'px'; s.style.top = e.clientY - dy - p.top + 'px';
      s.style.right = 'auto'; s.style.bottom = 'auto';
    }, opt);
    s.addEventListener('pointerup', () => { d = false; void s.offsetWidth; s.classList.add('pop'); }, opt);
  });

  // Lagos clock and the "Your copy" note.
  const tm = () => new Date().toLocaleTimeString('en-GB', { timeZone: 'Africa/Lagos', hour: '2-digit', minute: '2-digit' });
  const clock = q('#clock');
  const clk = () => { if (clock) clock.textContent = 'Lagos ' + tm(); };
  clk();
  const iv = setInterval(clk, 30000);
  const copy = q('#copy');
  if (copy) copy.textContent = `Your copy · read on ${/Mobi|Android|iPhone/i.test(navigator.userAgent) ? 'a phone' : 'a computer'} at ${tm()}, Lagos time`;

  // Open at the page named in the URL hash.
  const m = /#p(\d)/.exec(location.hash);
  if (m && Number(m[1]) > 1 && Number(m[1]) <= N) {
    P[0].classList.remove('on'); cur = Number(m[1]) - 1; P[cur].classList.add('on');
  }
  ui();

  return () => { ac.abort(); clearInterval(iv); timers.forEach(clearTimeout); };
}

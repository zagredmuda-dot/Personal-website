'use client';
import { useEffect, type ReactNode } from 'react';
import { initStage } from '@/lib/initStage';

const TITLES = ['Cover', 'The profile', 'NoteForge', '2KRAZZY', 'Other work', 'Back cover'];

export default function Stage({ children }: { children: ReactNode }) {
  useEffect(() => initStage(), []);
  return (
    <>
      <div id="stage">{children}</div>
      <div id="mk" aria-hidden="true" />
      <div id="sl" aria-hidden="true" />
      <div className="sheets" id="sh" aria-hidden="true"><i /><i /><i /></div>
      <div className="rm" style={{ left: 12, top: 12 }} aria-hidden="true" />
      <div className="rm" style={{ right: 12, top: 12 }} aria-hidden="true" />
      <div className="hint" id="hint" aria-hidden="true">←</div>
      <div className="more mono" id="more" aria-hidden="true">More ↓</div>
      <button className="fold fp" id="pv" type="button" aria-label="Previous page">← Back</button>
      <button className="cn mono" id="cn" type="button" aria-label="Open the page index"><b id="c1">1</b><span>/ 6</span></button>
      <button className="fold fn" id="nx" type="button" aria-label="Next page">Next →</button>
      <div id="live" className="sr" role="status" aria-live="polite" />
      <div id="idx" className="idx" hidden role="dialog" aria-label="Page index">
        {TITLES.map((t, i) => (
          <button key={t} type="button" data-g={i}><span className="mono">0{i + 1}</span>{t}</button>
        ))}
      </div>
    </>
  );
}

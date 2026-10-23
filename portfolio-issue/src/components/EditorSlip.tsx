'use client';
import { useState, type FormEvent } from 'react';
import { site } from '@/config';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function EditorSlip() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>('idle');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get('_gotcha')) return; // spam trap
    setStatus('sending');
    try {
      const res = await fetch(site.formEndpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
      if (res.ok) { setStatus('sent'); form.reset(); } else setStatus('error');
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="slipw a" style={{ ['--d' as string]: '.27s' }}>
      <button type="button" className="tkt slipbtn" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span>Write to the editor<small className="mono">Leave a note. I read every one.</small></span>
        <i>{open ? '−' : '+'}</i>
      </button>
      {open && (
        <form className="slip" onSubmit={onSubmit}>
          <label className="mono">Your name<input name="name" required autoComplete="name" /></label>
          <label className="mono">Your email<input name="email" type="email" required autoComplete="email" /></label>
          <label className="mono">Your note<textarea name="message" required rows={4} /></label>
          <input type="hidden" name="_subject" value="New note from the portfolio" />
          <input className="hp" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          <button type="submit" className="sendbtn" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send to the editor'}</button>
          <p className="mono" role="status" aria-live="polite">
            {status === 'sent' && 'Sent. Thank you, I will reply soon.'}
            {status === 'error' && 'Something went wrong. Please email me instead.'}
          </p>
        </form>
      )}
    </div>
  );
}

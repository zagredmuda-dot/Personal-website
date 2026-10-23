import EditorSlip from '@/components/EditorSlip';
import { site } from '@/config';

export default function BackCover() {
  return (
<section className="pg ox p6" aria-label="Contact"><div className="in">
<div className="run mono a"><span>Back cover</span><span>Issue 01</span></div>
<div className="cut" role="img" aria-label="Let’s build"><span className="c1" style={{"--r": "-6deg", "--d": "0.00s"} as React.CSSProperties}>L</span><span className="c2" style={{"--r": "4deg", "--d": "0.07s"} as React.CSSProperties}>E</span><span className="c3" style={{"--r": "-3deg", "--d": "0.14s"} as React.CSSProperties}>T</span><span className="c4" style={{"--r": "6deg", "--d": "0.21s"} as React.CSSProperties}>’</span><span className="c2" style={{"--r": "-5deg", "--d": "0.28s"} as React.CSSProperties}>S</span><i className="br"></i><span className="c1" style={{"--r": "3deg", "--d": "0.35s"} as React.CSSProperties}>B</span><span className="c4" style={{"--r": "-6deg", "--d": "0.42s"} as React.CSSProperties}>U</span><span className="c3" style={{"--r": "5deg", "--d": "0.49s"} as React.CSSProperties}>I</span><span className="c1" style={{"--r": "-2deg", "--d": "0.56s"} as React.CSSProperties}>L</span><span className="c2" style={{"--r": "4deg", "--d": "0.63s"} as React.CSSProperties}>D</span></div>
<p className="a lead6" style={{"--d": ".1s"} as React.CSSProperties}>Have something worth building? Say hello.</p>
<div className="tks a" style={{"--d": ".2s"} as React.CSSProperties}>
<a className="tkt" href="mailto:zagredmuda@gmail.com?subject=Hello%20Abdullah"><span>Email me<small className="mono">zagredmuda@gmail.com</small></span><i>→</i></a>
<a className="tkt wa2" href="https://wa.me/2349022508507?text=Hi%20Abdullah%2C%20I%20saw%20your%20portfolio%20and%20I%27d%20like%20to%20talk." target="_blank" rel="noopener"><span>WhatsApp<small className="mono">Message me directly</small></span><i>→</i></a></div>
<p className="mono avail a" style={{"--d": ".26s"} as React.CSSProperties}>Open to remote work and freelance projects.</p><p className="mono soc a" style={{ "--d": ".28s" } as React.CSSProperties}>{site.github ? <a href={`https://github.com/${site.github}`} target="_blank" rel="noopener noreferrer">GitHub · {site.github}</a> : null}{site.x ? <a href={`https://x.com/${site.x}`} target="_blank" rel="noopener noreferrer">X · @{site.x}</a> : null}</p><EditorSlip /><div className="dls a" style={{"--d": ".3s"} as React.CSSProperties}><a className="dlb" href="/Mudasiru_Abdullah_Resume.pdf" download>Resume · PDF ↓</a><a className="dlb" href="/Mudasiru_Abdullah_CV.pdf" download>CV · PDF ↓</a></div>

<div className="sheetw a" style={{"--d": ".4s"} as React.CSSProperties}><p className="mono" style={{"color": "var(--ac)", "margin": "20px 0 8px"} as React.CSSProperties}>Contact sheet · selected frames</p>
<div className="sheet"><figure style={{"--d": "1.40s"} as React.CSSProperties}><img src="/img/landing.webp" alt="" decoding="async" /><figcaption className="mono">1A &nbsp;NoteForge</figcaption></figure><figure style={{"--d": "1.75s"} as React.CSSProperties}><img src="/img/prep.webp" alt="" decoding="async" /><figcaption className="mono">2A &nbsp;Prep</figcaption></figure><figure style={{"--d": "2.10s"} as React.CSSProperties}><img src="/img/kz-home.webp" alt="" decoding="async" /><figcaption className="mono">3A &nbsp;2KRAZZY</figcaption></figure><figure style={{"--d": "2.45s"} as React.CSSProperties}><img src="/img/orad-home.webp" alt="" decoding="async" /><figcaption className="mono">4A &nbsp;Orad</figcaption></figure>
<svg className="grease" viewBox="0 0 180 150" preserveAspectRatio="none" aria-hidden="true"><path pathLength="1" d="M14 62 C 8 18, 92 4, 134 18 C 176 34, 170 112, 122 128 C 70 144, 8 112, 14 62" /></svg></div></div>
<p className="mono a" style={{"--d": ".5s", "color": "var(--ac)", "marginTop": "22px"} as React.CSSProperties}>What I do</p>
<p className="a" style={{"--d": ".52s", "font": "italic 400 1.6rem/1.15 var(--font-serif),serif", "maxWidth": "20em", "marginTop": "6px"} as React.CSSProperties}>I design and build web products, end to end.</p>
<p className="mono a" style={{"--d": ".55s", "color": "var(--ac)", "marginTop": "22px"} as React.CSSProperties}>House rules</p>
<ol className="rules"><li className="a" style={{"--d": ".6s"} as React.CSSProperties}><b>1</b>First versions are drafts.</li><li className="a" style={{"--d": ".65s"} as React.CSSProperties}><b>2</b>Tested on a real phone.</li><li className="a" style={{"--d": ".7s"} as React.CSSProperties}><b>3</b>If it looks like everyone else’s, it isn’t done.</li></ol>
<div className="nx a" style={{"--d": ".75s"} as React.CSSProperties}><span className="mono">Next issue</span><b className="sfn">Issue 02: a clothing brand, built with a friend.</b></div>
<div className="endrow"><div className="bc" aria-hidden="true"><i></i><span className="mono">Issue 01 · Lagos · 2026</span></div><span className="endst" aria-hidden="true">End of Issue 01</span></div>
<a className="back a" style={{"--d": ".8s"} as React.CSSProperties} href="#" data-g="0">← Back to the cover</a>
<div className="copy mono a" style={{"--d": ".85s"} as React.CSSProperties} id="copy">Your copy<br />Read in Lagos time</div>
<p className="cap mono a" style={{"--d": ".9s", "marginTop": "18px", "lineHeight": "1.8"} as React.CSSProperties}>Set in Bricolage Grotesque, Instrument Serif and JetBrains Mono.<br />Built by Abdullah. Issue 01, 2026.</p>
<div className="folio mono"><span>Abdullah · Issue 01</span><span>p. 06</span></div>
</div></section>
  );
}

import type { Metadata, Viewport } from 'next';
import '@fontsource-variable/bricolage-grotesque';
import '@fontsource/instrument-serif/400.css';
import '@fontsource/instrument-serif/400-italic.css';
import '@fontsource/jetbrains-mono/500.css';
import './globals.css';
import { site } from '@/config';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} · Web developer`,
  description: site.description,
  openGraph: {
    title: `${site.name} · Issue 01`,
    description: site.description,
    url: site.url,
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: `${site.name}, web developer` }],
  },
  twitter: { card: 'summary_large_image', title: `${site.name} · Issue 01`, description: site.description, images: ['/og.png'] },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#47141A',
};

// Without JavaScript the pages stack vertically so everything stays readable.
const NOSCRIPT = `html,body{overflow:auto!important;height:auto!important}#stage{position:static!important}.pg{display:block!important;position:relative!important;min-height:100vh;overflow:visible!important}.pg *{opacity:1!important;transform:none!important;animation:none!important;clip-path:none!important}.fold,.cn,.rm,.hint,.more,.sheets,#sl,#mk,#idx{display:none!important}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <noscript>
          <style>{NOSCRIPT}</style>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}

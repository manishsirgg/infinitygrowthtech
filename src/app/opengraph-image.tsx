import { ImageResponse } from 'next/og';
import { brandMarkDataUri } from '@/lib/brand-mark';

export const runtime = 'edge';
export const alt = 'Infinity Growth Tech — Architecting Digital Growth';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display: 'flex', width: '100%', height: '100%', background: '#060e10', color: 'white', position: 'relative', padding: '72px', fontFamily: 'Arial, sans-serif', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '10px', background: '#35f979' }} />
      <div style={{ display: 'flex', flexDirection: 'column', width: 730, zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
          <span style={{ width: 10, height: 62, background: '#35f979', borderRadius: 5 }} />
          <span style={{ fontSize: 25, fontWeight: 800, letterSpacing: 3, color: '#35f979' }}>BUILD · GROW · AUTOMATE</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', fontSize: 67, lineHeight: 1.12, fontWeight: 800, letterSpacing: -1 }}>
          <span>INFINITY</span>
          <span>GROWTH <span style={{ color: '#35f979' }}>TECH</span></span>
        </div>
        <div style={{ marginTop: 27, fontSize: 28, color: '#d4e5e0' }}>Architecting Digital Growth</div>
        <div style={{ marginTop: 21, fontSize: 20, color: '#a4bab2', lineHeight: 1.4 }}>Technology · Digital Marketing · CRM · Automation</div>
        <div style={{ marginTop: 38, fontSize: 22, color: '#35f979', fontWeight: 700 }}>infinitygrowthtech.com</div>
      </div>
      <img alt="" src={brandMarkDataUri} width={360} height={360} style={{ width: 360, height: 360, objectFit: 'contain' }} />
      <div style={{ position: 'absolute', left: 72, right: 72, bottom: 45, height: 2, background: '#24473b' }} />
    </div>,
    { ...size }
  );
}

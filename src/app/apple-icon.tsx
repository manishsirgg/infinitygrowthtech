import { ImageResponse } from 'next/og';
import { brandMarkDataUri } from '@/lib/brand-mark';

export const runtime = 'edge';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    <div style={{ display: 'flex', width: '100%', height: '100%', background: '#000', alignItems: 'center', justifyContent: 'center' }}>
      <img alt="" src={brandMarkDataUri} width={180} height={180}/>
    </div>,
    { ...size }
  );
}

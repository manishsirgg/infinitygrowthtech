import { brandMarkSvg } from '@/lib/brand-mark';

export function GET() {
  return new Response(brandMarkSvg, {
    headers: {
      'Content-Type': 'image/svg+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=31536000, immutable',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}

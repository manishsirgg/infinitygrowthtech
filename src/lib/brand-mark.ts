/**
 * Vector trace of the approved Infinity Growth Tech mark.
 * The left loop is intentionally smaller than the right.
 * The mark is served unchanged across the header, browser icon and sharing art.
 */
const outer = [[856,583],[839,540],[805,501],[764,479],[708,474],[672,485],[642,504],[587,573],[555,538],[530,524],[477,518],[451,526],[425,543],[403,572],[392,627],[400,657],[416,682],[463,713],[503,716],[531,708],[558,691],[588,656],[617,698],[656,732],[693,748],[743,751],[794,732],[831,697],[855,646]];
const leftHole = [[486,559],[528,571],[563,614],[529,659],[499,673],[477,672],[457,662],[434,624],[447,581]];
const rightHole = [[723,518],[749,522],[778,538],[801,567],[811,604],[808,638],[792,670],[767,693],[731,705],[701,702],[669,686],[613,615],[664,543],[692,525]];

function smoothClosedPath(points: number[][]): string {
  const n = points.length;
  let d = `M ${points[0][0]} ${points[0][1]}`;
  for (let i = 0; i < n; i++) {
    const p0 = points[(i - 1 + n) % n];
    const p1 = points[i];
    const p2 = points[(i + 1) % n];
    const p3 = points[(i + 2) % n];
    const a = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const b = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C ${a[0].toFixed(1)} ${a[1].toFixed(1)} ${b[0].toFixed(1)} ${b[1].toFixed(1)} ${p2[0]} ${p2[1]}`;
  }
  return d + ' Z';
}

export const brandMarkSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1254 1254" role="img" aria-label="Infinity Growth Tech logo">
<defs><linearGradient id="igt-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop stop-color="#00170f"/><stop offset="100%" stop-color="#000c0a"/></linearGradient></defs>
<rect width="1254" height="1254" fill="#000"/>
<rect x="190" y="183" width="870" height="853" rx="180" fill="url(#igt-bg)" stroke="#2df278" stroke-width="11"/>
<path fill="#35f979" fill-rule="evenodd" d="${[outer, leftHole, rightHole].map(smoothClosedPath).join(' ')}"/>
</svg>`;

export const brandMarkDataUri = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(brandMarkSvg)}`;

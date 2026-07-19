// Crop transparent margins from a PNG (no colour changes — preserves white artwork).
import { readFileSync, writeFileSync } from 'node:fs';
import { PNG } from 'pngjs';

const [, , srcPath, outPath] = process.argv;

// Some exporters append junk after the IEND chunk, which pngjs rejects — truncate there.
let buf = readFileSync(srcPath);
const iend = buf.indexOf(Buffer.from('IEND'));
if (iend !== -1) buf = buf.subarray(0, iend + 8);

const png = PNG.sync.read(buf);
const { width, height, data } = png;

let top = height, bottom = 0, left = width, right = 0;
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    if (data[(y * width + x) * 4 + 3] > 8) {
      if (y < top) top = y;
      if (y > bottom) bottom = y;
      if (x < left) left = x;
      if (x > right) right = x;
    }
  }
}

const pad = 8;
top = Math.max(0, top - pad);
left = Math.max(0, left - pad);
bottom = Math.min(height - 1, bottom + pad);
right = Math.min(width - 1, right + pad);

const cw = right - left + 1;
const ch = bottom - top + 1;
const out = new PNG({ width: cw, height: ch });
PNG.bitblt(png, out, left, top, cw, ch, 0, 0);

writeFileSync(outPath, PNG.sync.write(out));
console.log(`Wrote ${outPath} (${cw}x${ch}, cropped from ${width}x${height})`);

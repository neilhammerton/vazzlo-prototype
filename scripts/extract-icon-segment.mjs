// One-off: the affiliate infographic PNGs are full composites (icon / number / title)
// separated by transparent gaps. Extract just the top segment (the icon).
import { readFileSync, writeFileSync } from 'node:fs';
import { PNG } from 'pngjs';

const [, , srcPath, outPath] = process.argv;

const png = PNG.sync.read(readFileSync(srcPath));
const { width, height, data } = png;

const rowVisible = (y) => {
  for (let x = 0; x < width; x++) {
    if (data[(y * width + x) * 4 + 3] > 8) return true;
  }
  return false;
};

// Find the first contiguous band of visible rows.
let start = -1, end = -1;
for (let y = 0; y < height; y++) {
  const vis = rowVisible(y);
  if (vis && start === -1) start = y;
  if (!vis && start !== -1) { end = y - 1; break; }
}
if (end === -1) end = height - 1;

// Horizontal bounds within that band.
let left = width, right = 0;
for (let y = start; y <= end; y++) {
  for (let x = 0; x < width; x++) {
    if (data[(y * width + x) * 4 + 3] > 8) {
      if (x < left) left = x;
      if (x > right) right = x;
    }
  }
}

const cw = right - left + 1;
const ch = end - start + 1;
const out = new PNG({ width: cw, height: ch });
PNG.bitblt(png, out, left, start, cw, ch, 0, 0);

writeFileSync(outPath, PNG.sync.write(out));
console.log(`Wrote ${outPath} (${cw}x${ch}, icon segment rows ${start}-${end} of ${height})`);

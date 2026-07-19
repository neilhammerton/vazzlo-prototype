// One-off: convert the supplied white-background logo into a transparent,
// tightly-cropped PNG for use as the brand asset on the dark theme.
import { readFileSync, writeFileSync } from 'node:fs';
import { PNG } from 'pngjs';

const [, , srcPath, outPath] = process.argv;

const png = PNG.sync.read(readFileSync(srcPath));
const { width, height, data } = png;

// Make white/near-white pixels transparent, feathering the edge.
for (let i = 0; i < data.length; i += 4) {
  const min = Math.min(data[i], data[i + 1], data[i + 2]);
  if (min >= 250) {
    data[i + 3] = 0;
  } else if (min >= 235) {
    data[i + 3] = Math.round(255 * (250 - min) / 15);
  }
}

// Bounding box of visible pixels.
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

const pad = 12;
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

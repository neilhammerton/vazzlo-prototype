// The supplied "PNG" logos are actually JPEGs with a baked-in checkerboard
// background. Decode, flood-fill the checkerboard from the image borders
// (so enclosed white artwork survives), then crop and save as real PNG.
import { readFileSync, writeFileSync } from 'node:fs';
import { PNG } from 'pngjs';
import jpeg from 'jpeg-js';

const [, , srcPath, outPath] = process.argv;

const { width, height, data } = jpeg.decode(readFileSync(srcPath), { useTArray: true });

// Background = light, low-saturation (white/grey checker squares).
const isBackground = (i) => {
  const r = data[i], g = data[i + 1], b = data[i + 2];
  const mx = Math.max(r, g, b), mn = Math.min(r, g, b);
  return mn >= 195 && mx - mn <= 22;
};

const removed = new Uint8Array(width * height);
const queue = [];
for (let x = 0; x < width; x++) { queue.push(x, (height - 1) * width + x); }
for (let y = 0; y < height; y++) { queue.push(y * width, y * width + width - 1); }

while (queue.length) {
  const p = queue.pop();
  if (removed[p]) continue;
  if (!isBackground(p * 4)) continue;
  removed[p] = 1;
  const x = p % width, y = (p / width) | 0;
  if (x > 0) queue.push(p - 1);
  if (x < width - 1) queue.push(p + 1);
  if (y > 0) queue.push(p - width);
  if (y < height - 1) queue.push(p + width);
}

const png = new PNG({ width, height });
for (let p = 0; p < width * height; p++) {
  const i = p * 4;
  png.data[i] = data[i];
  png.data[i + 1] = data[i + 1];
  png.data[i + 2] = data[i + 2];
  png.data[i + 3] = removed[p] ? 0 : 255;
}

// Crop transparent margins.
let top = height, bottom = 0, left = width, right = 0;
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    if (png.data[(y * width + x) * 4 + 3] > 0) {
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

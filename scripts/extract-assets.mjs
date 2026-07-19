// One-off: extract base64 PNG constants from the handover monolith into real asset files.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const src = readFileSync('docs/vazzlo_landing_v2 (handover).jsx', 'utf8');

const dest = {
  LOGO_SM: 'src/assets/brand/iconmark.png',
  LOGO_MD: 'src/assets/brand/logo.png',
  CHAR_GRACE: 'src/assets/images/Grace.png',
  CHAR_PRIYA: 'src/assets/images/Priya.png',
  CHAR_RUBY: 'src/assets/images/Ruby.png',
  CHAR_TOM: 'src/assets/images/Tom.png',
  CHAR_AMARA: 'src/assets/images/Amara.png',
  CHAR_KENJI: 'src/assets/images/Kenji.png',
  CHAR_MARCUS: 'src/assets/images/Marcus.png',
};

mkdirSync('src/assets/brand', { recursive: true });
mkdirSync('src/assets/images', { recursive: true });

const re = /const (\w+)\s*=\s*"data:image\/png;base64,([^"]+)"/g;
let match;
let count = 0;
while ((match = re.exec(src)) !== null) {
  const [, name, b64] = match;
  const file = dest[name];
  if (!file) {
    console.warn(`No destination mapped for ${name}, skipping`);
    continue;
  }
  writeFileSync(file, Buffer.from(b64, 'base64'));
  console.log(`${name} -> ${file}`);
  count++;
}
console.log(`Extracted ${count} images`);

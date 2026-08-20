// Regenerates pamphlet.pdf from index.html.
//   npm install playwright && npx playwright install chromium
//   node tools/make-pdf.mjs
import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import path from 'path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto('file://' + path.join(root, 'index.html'));
await page.waitForTimeout(2000);
await page.pdf({
  path: path.join(root, 'pamphlet.pdf'),
  format: 'Letter',
  printBackground: true,
  margin: { top: '0.4in', bottom: '0.4in', left: '0.4in', right: '0.4in' }
});
await browser.close();
console.log('Wrote pamphlet.pdf');

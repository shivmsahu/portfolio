import { cp, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';

const output = new URL('../dist/', import.meta.url);
await rm(output, { recursive: true, force: true });
await mkdir(new URL('assets/', output), { recursive: true });

let html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
html = html
  .replace('./src/style.css', './assets/style.css')
  .replace('./src/main.js', './assets/main.js');

const root = new URL('../', import.meta.url);
const resumeFiles = (await readdir(root)).filter((file) => file.toLowerCase().endsWith('.pdf'));
if (resumeFiles.length > 0) {
  const resume = resumeFiles.sort()[0];
  html = html.replaceAll('./Shivam_Sahu_Resume.pdf', `./${encodeURIComponent(resume)}`);
  await cp(new URL(resume, root), new URL(resume, output));
  console.log(`Included resume: ${resume}`);
} else {
  console.warn('No PDF resume found in the repository root; resume links will use Shivam_Sahu_Resume.pdf.');
}

await writeFile(new URL('index.html', output), html);
await cp(new URL('../src/style.css', import.meta.url), new URL('assets/style.css', output));
await cp(new URL('../src/main.js', import.meta.url), new URL('assets/main.js', output));
await writeFile(new URL('.nojekyll', output), '');

console.log('Built portfolio to dist/');

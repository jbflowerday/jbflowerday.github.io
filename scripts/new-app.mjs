// Usage: node scripts/new-app.mjs <slug> "<App Name>" "<one-line tagline>"
// Creates /<slug>/{index,support/index,privacy/index}.html from _template and adds the app to the landing page.
// The privacy page contains TODO markers: fill them in with the app's real data practices before submitting.
import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const [slug, name, tagline = ''] = process.argv.slice(2);
if (!slug || !name || !/^[a-z0-9-]+$/.test(slug)) {
  console.error('Usage: node scripts/new-app.mjs <slug> "<App Name>" "<tagline>"   (slug: lowercase letters, digits, dashes)');
  process.exit(1);
}
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dir = resolve(root, slug);
if (existsSync(dir)) {
  console.error(`/${slug}/ already exists, refusing to overwrite.`);
  process.exit(1);
}
const date = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
const fill = (t) => t.replaceAll('{{SLUG}}', slug).replaceAll('{{APP_NAME}}', name).replaceAll('{{TAGLINE}}', tagline).replaceAll('{{DATE}}', date);
const make = (rel, tpl) => {
  const out = resolve(dir, rel);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, fill(readFileSync(resolve(root, '_template', tpl), 'utf8')));
};
make('index.html', 'index.html');
make('support/index.html', 'support.html');
make('privacy/index.html', 'privacy.html');

const landing = resolve(root, 'index.html');
// The tile shows the app icon at /assets/<slug>-icon.png.
const entry = `      <li><a class="tile" href="/${slug}/">
        <div class="sheet"><img class="app-mark" src="/assets/${slug}-icon.png" alt="" width="1024" height="1024" loading="lazy"></div>
        <div class="tile-body">
          <h3>${name}</h3>
          <p>${tagline}</p>
          <dl class="facts"><div><dt>Type</dt><dd>App</dd></div></dl>
        </div>
      </a></li>
`;
const html = readFileSync(landing, 'utf8');
writeFileSync(landing, html.replace('      <!-- APPS:END -->', `${entry}      <!-- APPS:END -->`));

console.log(`Created /${slug}/. Next: fill in the TODOs in ${slug}/index.html, ${slug}/privacy/index.html and ${slug}/support/index.html.`);
console.log(`Support URL:  https://jbflowerday.github.io/${slug}/support/`);
console.log(`Privacy URL:  https://jbflowerday.github.io/${slug}/privacy/`);

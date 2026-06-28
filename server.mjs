// ============================================================
//  Static file server for the built site.
//  Hostinger's "Node.js Web App" runs this with `npm start`.
//  It serves the /dist folder produced by `npm run build`
//  and listens on the port Hostinger provides (process.env.PORT).
//  Zero dependencies — uses only built-in Node modules.
// ============================================================

import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, extname, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('./dist', import.meta.url));
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
};

async function tryFiles(urlPath) {
  // Strip query string and decode.
  let p = decodeURIComponent(urlPath.split('?')[0]);
  // Prevent path traversal.
  p = normalize(p).replace(/^(\.\.[/\\])+/, '');
  const candidates = [];

  if (p.endsWith('/')) {
    candidates.push(join(ROOT, p, 'index.html'));
  } else if (!extname(p)) {
    // Clean URL → try the directory index, then file.html
    candidates.push(join(ROOT, p, 'index.html'));
    candidates.push(join(ROOT, p + '.html'));
  } else {
    candidates.push(join(ROOT, p));
  }

  for (const file of candidates) {
    try {
      const s = await stat(file);
      if (s.isFile()) return file;
    } catch {}
  }
  return null;
}

const server = createServer(async (req, res) => {
  try {
    const file = await tryFiles(req.url || '/');
    if (file) {
      const data = await readFile(file);
      const type = MIME[extname(file).toLowerCase()] || 'application/octet-stream';
      const cache = file.includes(`${'/'}_astro${'/'}`)
        ? 'public, max-age=31536000, immutable'
        : 'public, max-age=3600';
      res.writeHead(200, { 'Content-Type': type, 'Cache-Control': cache });
      res.end(data);
      return;
    }
    // 404 fallback to the built 404 page if present.
    try {
      const notFound = await readFile(join(ROOT, '404.html'));
      res.writeHead(404, { 'Content-Type': MIME['.html'] });
      res.end(notFound);
    } catch {
      res.writeHead(404, { 'Content-Type': MIME['.txt'] });
      res.end('404 Not Found');
    }
  } catch (err) {
    res.writeHead(500, { 'Content-Type': MIME['.txt'] });
    res.end('500 Internal Server Error');
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});

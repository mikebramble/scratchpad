// Tiny static server that mounts a folder under a sub-path and answers the way GitHub Pages does:
// correct MIME types, an ETag, `cache-control: max-age=600`, and 304 when the browser revalidates.
const http = require('http'), fs = require('fs'), path = require('path'), crypto = require('crypto');
const MIME = { '.html':'text/html; charset=utf-8', '.js':'text/javascript', '.mjs':'text/javascript', '.css':'text/css', '.wasm':'application/wasm', '.json':'application/json', '.webmanifest':'application/manifest+json', '.svg':'image/svg+xml', '.png':'image/png', '.ico':'image/x-icon', '.woff2':'font/woff2', '.txt':'text/plain; charset=utf-8' };
function serve(root, prefix, port, { pagesHeaders = true } = {}) {
  return new Promise((resolve) => {
    const srv = http.createServer((req, res) => {
      let p = decodeURIComponent(req.url.split('?')[0]);
      if (!p.startsWith(prefix)) { res.writeHead(404); return res.end('nope'); }
      p = p.slice(prefix.length) || 'index.html';
      if (p.endsWith('/')) p += 'index.html';
      const f = path.join(root, p);
      if (!f.startsWith(root) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); return res.end('404'); }
      const body = fs.readFileSync(f);
      const headers = { 'content-type': MIME[path.extname(f)] || 'application/octet-stream', 'content-length': body.length };
      if (pagesHeaders) {
        headers.etag = 'W/"' + crypto.createHash('sha1').update(body).digest('hex').slice(0, 16) + '"';
        headers['cache-control'] = 'max-age=600';
        if (req.headers['if-none-match'] === headers.etag) { delete headers['content-length']; res.writeHead(304, headers); return res.end(); }
      }
      res.writeHead(200, headers);
      res.end(body);
    });
    srv.listen(port, '127.0.0.1', () => resolve(srv));
  });
}
module.exports = { serve };

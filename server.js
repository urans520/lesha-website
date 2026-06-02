const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8888;
const ROOT = __dirname;
const DATA_DIR = path.join(ROOT, 'data');

const MIME = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.gif': 'image/gif', '.webp': 'image/webp', '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon', '.yml': 'text/yaml; charset=utf-8',
};

function readJSON(fp) { try { return JSON.parse(fs.readFileSync(fp,'utf-8')); } catch { return null; } }
function writeJSON(fp, d) { fs.writeFileSync(fp, JSON.stringify(d,null,2), 'utf-8'); }

function parseBody(req) {
  return new Promise(resolve => {
    let b = ''; req.on('data', c => b += c);
    req.on('end', () => { try { resolve(JSON.parse(b)); } catch { resolve(null); } });
  });
}

function sendJSON(res, data, status = 200) {
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0'
  });
  res.end(JSON.stringify(data, null, 2));
}

function serveFile(res, fp) {
  const ext = path.extname(fp).toLowerCase();
  const mime = MIME[ext] || 'application/octet-stream';
  // Check file exists before writing headers
  if (!fs.existsSync(fp) || !fs.statSync(fp).isFile()) {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>404 Not Found</h1>');
    return;
  }
  try {
    const stat = fs.statSync(fp);
    const content = fs.readFileSync(fp);
    const etag = '"' + stat.mtimeMs.toString(36) + '-' + stat.size.toString(36) + '"';
    res.writeHead(200, {
      'Content-Type': mime,
      'Cache-Control': 'no-cache',
      'ETag': etag,
      'Last-Modified': stat.mtime.toUTCString()
    });
    res.end(content);
  } catch {
    if (!res.headersSent) {
      res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end('<h1>500 Internal Error</h1>');
    }
  }
}

async function handleAPI(req, res, url) {
  const m = req.method;
  if (url === '/api/products' && m === 'GET') return sendJSON(res, readJSON(path.join(DATA_DIR,'products.json'))||{products:[]});
  if (url === '/api/products' && m === 'PUT') { const b = await parseBody(req); if(!b) return sendJSON(res,{error:'invalid'},400); writeJSON(path.join(DATA_DIR,'products.json'),b); return sendJSON(res,{success:true}); }
  if (url === '/api/news' && m === 'GET') return sendJSON(res, readJSON(path.join(DATA_DIR,'news.json'))||{news:[]});
  if (url === '/api/news' && m === 'PUT') { const b = await parseBody(req); if(!b) return sendJSON(res,{error:'invalid'},400); writeJSON(path.join(DATA_DIR,'news.json'),b); return sendJSON(res,{success:true}); }
  if (url === '/api/company' && m === 'GET') return sendJSON(res, readJSON(path.join(DATA_DIR,'company.json'))||{});
  if (url === '/api/company' && m === 'PUT') { const b = await parseBody(req); if(!b) return sendJSON(res,{error:'invalid'},400); writeJSON(path.join(DATA_DIR,'company.json'),b); return sendJSON(res,{success:true}); }
  if (url === '/api/contact' && m === 'POST') {
    const b = await parseBody(req);
    if(!b) return sendJSON(res,{error:'invalid'},400);
    const f = path.join(DATA_DIR,'inquiries.json');
    let d = readJSON(f) || {inquiries:[]};
    d.inquiries.push({...b, id: Date.now(), time: new Date().toISOString(), status:'new'});
    writeJSON(f, d);
    console.log('\n📩 新咨询 | '+b.name+' | '+(b.company||'个人')+' | '+b.email);
    return sendJSON(res, {success:true, message:'咨询已提交！'});
  }
  if (url === '/api/inquiries' && m === 'GET') return sendJSON(res, readJSON(path.join(DATA_DIR,'inquiries.json'))||{inquiries:[]});
  if (url === '/api/theme' && m === 'GET') return sendJSON(res, readJSON(path.join(DATA_DIR,'theme.json'))||{});
  if (url === '/api/theme' && m === 'PUT') { const b = await parseBody(req); if(!b) return sendJSON(res,{error:'invalid'},400); writeJSON(path.join(DATA_DIR,'theme.json'),b); return sendJSON(res,{success:true}); }
  if (url === '/api/brands' && m === 'GET') return sendJSON(res, readJSON(path.join(DATA_DIR,'brands.json'))||{brands:[]});
  if (url === '/api/brands' && m === 'PUT') { const b = await parseBody(req); if(!b) return sendJSON(res,{error:'invalid'},400); writeJSON(path.join(DATA_DIR,'brands.json'),b); return sendJSON(res,{success:true}); }
  if (url === '/api/upload' && m === 'POST') {
    const b = await parseBody(req);
    if(!b||!b.data||!b.name) return sendJSON(res,{error:'invalid'},400);
    const uploadDir = path.join(ROOT, 'images', 'uploads');
    if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, {recursive: true});
    const ext = path.extname(b.name).toLowerCase() || '.png';
    const safeName = 'logo_' + Date.now() + ext;
    const buf = Buffer.from(b.data, 'base64');
    fs.writeFileSync(path.join(uploadDir, safeName), buf);
    console.log('\n🖼  上传成功 | ' + safeName + ' (' + (buf.length/1024).toFixed(1) + 'KB)');
    return sendJSON(res, {success: true, path: '/images/uploads/' + safeName});
  }
  sendJSON(res, {error:'not found'}, 404);
}

function serveStatic(req, res, url) {
  let fp = url === '/' ? '/index.html' : url;
  if (!path.extname(fp)) {
    const tryHtml = path.join(ROOT, fp + '.html');
    if (fs.existsSync(tryHtml)) fp = fp + '.html';
  }
  const full = path.join(ROOT, fp);
  const normalized = path.normalize(full);
  if (!normalized.startsWith(path.normalize(ROOT))) {
    res.writeHead(403); return res.end('Forbidden');
  }
  const servePath = (fs.existsSync(normalized) && fs.statSync(normalized).isDirectory())
    ? path.join(normalized, 'index.html')
    : normalized;
  serveFile(res, servePath);
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, 'http://localhost:'+PORT).pathname;
  if (url.startsWith('/api/')) return handleAPI(req, res, url);
  serveStatic(req, res, url);
});

server.listen(PORT, () => {
  console.log('\n╔══════════════════════════════════════════════╗');
  console.log('║   🏢 广州市乐莎美容用具有限公司 - 企业官网  ║');
  console.log('║                                              ║');
  console.log('║   🌐 前台: http://localhost:'+PORT+'             ║');
  console.log('║   ⚙️  后台: http://localhost:'+PORT+'/admin       ║');
  console.log('║                                              ║');
  console.log('║   按 Ctrl+C 停止服务器                         ║');
  console.log('╚══════════════════════════════════════════════╝\n');
});

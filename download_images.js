const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const url = require('url');

const htmlFile = path.join(__dirname, 'index.html');
let html = fs.readFileSync(htmlFile, 'utf8');

const imgDir = path.join(__dirname, 'img', 'products');
if (!fs.existsSync(imgDir)) fs.mkdirSync(imgDir, { recursive: true });

const urlRegex = /img:"(https?:\/\/[^"]+)"/g;
const matches = [...html.matchAll(urlRegex)];
const unique = [...new Set(matches.map(m => m[1]))];

console.log(`Toplam ${unique.length} xarici şəkil tapıldı.`);

function getExt(imgUrl) {
  const parsed = url.parse(imgUrl);
  const ext = path.extname(parsed.pathname).toLowerCase();
  return ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif'].includes(ext) ? ext : '.jpg';
}

function sanitizeName(imgUrl) {
  const parsed = url.parse(imgUrl);
  const base = path.basename(parsed.pathname).replace(/[^a-zA-Z0-9._-]/g, '_');
  return base || 'image.jpg';
}

function download(imgUrl, dest) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(dest)) { resolve('exists'); return; }
    const proto = imgUrl.startsWith('https') ? https : http;
    const file = fs.createWriteStream(dest);
    const req = proto.get(imgUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' },
      timeout: 15000
    }, res => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        fs.unlinkSync(dest);
        download(res.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        file.close();
        fs.unlinkSync(dest);
        reject(new Error(`HTTP ${res.statusCode}`));
        return;
      }
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve('downloaded'); });
    });
    req.on('error', e => { file.close(); try { fs.unlinkSync(dest); } catch {} reject(e); });
    req.on('timeout', () => { req.destroy(); reject(new Error('timeout')); });
  });
}

async function run() {
  const mapping = {};
  let ok = 0, fail = 0;

  for (const imgUrl of unique) {
    const name = sanitizeName(imgUrl);
    const dest = path.join(imgDir, name);
    try {
      const result = await download(imgUrl, dest);
      const localPath = `img/products/${name}`;
      mapping[imgUrl] = localPath;
      console.log(`✓ ${result === 'exists' ? '[mövcud]' : '[yüklendi]'} ${name}`);
      ok++;
    } catch (e) {
      console.log(`✗ [xəta] ${name} — ${e.message}`);
      mapping[imgUrl] = imgUrl; // xəta olsa orijinal URL saxla
      fail++;
    }
  }

  // HTML-i yenilə
  let newHtml = html;
  for (const [origUrl, localPath] of Object.entries(mapping)) {
    if (localPath !== origUrl) {
      newHtml = newHtml.split(`img:"${origUrl}"`).join(`img:"${localPath}"`);
    }
  }
  fs.writeFileSync(htmlFile, newHtml, 'utf8');

  console.log(`\nTamamlandı: ${ok} uğurlu, ${fail} xəta`);
  console.log('index.html yeniləndi.');
}

run().catch(console.error);

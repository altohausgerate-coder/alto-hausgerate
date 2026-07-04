const fs = require('fs');
const path = require('path');

// Read the saved output files from tool results
const homeDir = process.env.USERPROFILE || 'C:\\Users\\Admin';
const savedDir = path.join(homeDir, '.local', 'share', 'opencode', 'tool-output');

// Check for saved files
const files = fs.readdirSync(savedDir).filter(f => f.startsWith('tool_e838'));
console.log('Saved files:', files);

// Search for Shopify CDN URLs in all saved tool outputs
for (const file of files) {
    const content = fs.readFileSync(path.join(savedDir, file), 'utf8');
    const matches = content.match(/cdn\.shopify\.com[^"')\s]+/g);
    if (matches) {
        console.log(`\n=== ${file} ===`);
        for (const m of matches) {
            console.log('  https://' + m);
        }
    }
}

// Also check the index.html
const html = fs.readFileSync('C:\\Users\\Admin\\Desktop\\alto-hausgerate\\index.html', 'utf8');
const iyoImgs = html.match(/"https:\/\/www\.inyourorigin\.me[^"]+"/g);
console.log('\n=== Current IYO URLs in HTML ===');
if (iyoImgs) iyoImgs.forEach(u => console.log('  ' + u));

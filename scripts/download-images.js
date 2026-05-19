const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const breedDataPath = path.join(__dirname, '..', 'src', 'app', 'guides', 'breedData.ts');
const outputDir = path.join(__dirname, '..', 'public', 'images', 'breeds');

const content = fs.readFileSync(breedDataPath, 'utf-8');

const regex = /'([\w-]+)':\s*\{[\s\S]*?imageUrl:\s*'([^']+)'/g;
const pairs = [];
let match;
while ((match = regex.exec(content)) !== null) {
  pairs.push({ slug: match[1], imageUrl: match[2] });
}

console.log(`Found ${pairs.length} breeds to download\n`);

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

let success = 0;
let fail = 0;

pairs.forEach(({ slug, imageUrl }, i) => {
  const filePath = path.join(outputDir, `${slug}.jpg`);
  if (fs.existsSync(filePath)) {
    console.log(`[${i + 1}/${pairs.length}] SKIP (exists): ${slug}`);
    success++;
    return;
  }
  try {
    process.stdout.write(`[${i + 1}/${pairs.length}] Downloading: ${slug} ... `);
    execSync(`curl -sL -o "${filePath}" -w "%{http_code} %{size_download}" "${imageUrl}"`, {
      stdio: ['ignore', 'pipe', 'ignore'],
      timeout: 30000,
    });
    const stat = fs.statSync(filePath);
    if (stat.size > 1000) {
      console.log(`OK (${(stat.size / 1024).toFixed(1)} KB)`);
      success++;
    } else {
      console.log(`FAIL (too small: ${stat.size} bytes)`);
      fail++;
    }
  } catch (err) {
    console.log(`ERROR: ${err.message}`);
    fail++;
  }
});

console.log(`\nDone: ${success} downloaded, ${fail} failed`);
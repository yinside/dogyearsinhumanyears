const fs = require('fs');
const path = require('path');
const https = require('https');

const outputDir = path.join(__dirname, '..', 'public', 'images', 'breeds');

// Dog CEO API breed name mappings
const breedApiMap = {
  'labrador-retriever-lifespan': 'labrador',
  'german-shepherd-lifespan': 'germanshepherd',
  'golden-retriever-lifespan': 'retriever/golden',
  'french-bulldog-lifespan': 'bulldog/french',
  'beagle-lifespan': 'beagle',
  'chihuahua-lifespan': 'chihuahua',
  'poodle-lifespan': 'poodle',
  'yorkshire-terrier-lifespan': 'terrier/yorkshire',
  'boxer-lifespan': 'boxer',
  'great-dane-lifespan': 'dane/great',
  'shih-tzu-lifespan': 'shihtzu',
  'dachshund-lifespan': 'dachshund',
  'rottweiler-lifespan': 'rottweiler',
  'siberian-husky-lifespan': 'husky',
  'pembroke-welsh-corgi-lifespan': 'corgi',
  'doberman-pinscher-lifespan': 'doberman',
  'australian-shepherd-lifespan': 'ovcharka/caucasian',
  'cavalier-king-charles-spaniel-lifespan': 'spaniel/cocker',
  'boston-terrier-lifespan': 'terrier/boston',
  'maltese-lifespan': 'maltese',
  'miniature-schnauzer-lifespan': 'schnauzer',
  'shetland-sheepdog-lifespan': 'collie/border',
  'bernese-mountain-dog-lifespan': 'mountain/bernese',
  'border-collie-lifespan': 'collie/border',
  'bichon-frise-lifespan': 'maltese',
  'cocker-spaniel-lifespan': 'spaniel/cocker',
  'english-bulldog-lifespan': 'bulldog/english',
  'pug-lifespan': 'pug',
  'pomeranian-lifespan': 'maltese',
  'havanese-lifespan': 'maltese',
  'weimaraner-lifespan': 'pointer/german',
  'newfoundland-lifespan': 'newfoundland',
  'basset-hound-lifespan': 'basset',
  'saint-bernard-lifespan': 'mountain/swiss',
  'rhodesian-ridgeback-lifespan': 'ridgeback/rhodesian',
  'west-highland-white-terrier-lifespan': 'terrier/westhighland',
  'scottish-terrier-lifespan': 'terrier/scottish',
  'akita-lifespan': 'akita',
  'cane-corso-lifespan': 'mastiff',
  'papillon-lifespan': 'papillon',
  'chinese-shar-pei-lifespan': 'sharpei',
  'chow-chow-lifespan': 'chow',
  'alaskan-malamute-lifespan': 'malamute',
  'irish-setter-lifespan': 'setter/irish',
  'staffordshire-bull-terrier-lifespan': 'terrier/staffordshire',
  'whippet-lifespan': 'greyhound/italian',
  'samoyed-lifespan': 'samoyed',
  'belgian-malinois-lifespan': 'ovcharka/caucasian',
  'shiba-inu-lifespan': 'shiba',
  'lhasa-apso-lifespan': 'lhasa',
};

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        const stat = fs.statSync(dest);
        resolve(stat.size);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  const entries = Object.entries(breedApiMap);
  console.log(`Processing ${entries.length} breeds...\n`);

  let success = 0;
  let fail = 0;

  for (let i = 0; i < entries.length; i++) {
    const [slug, apiBreed] = entries[i];
    const filePath = path.join(outputDir, `${slug}.jpg`);

    // Skip if already has a real unique image (not the placeholder)
    if (fs.existsSync(filePath)) {
      const existing = fs.statSync(filePath);
      // Placeholder is exactly 176679 bytes (172.5KB)
      if (existing.size !== 176626) {
        console.log(`[${i + 1}/${entries.length}] SKIP (already unique): ${slug}`);
        success++;
        await sleep(200);
        continue;
      }
    }

    try {
      const apiUrl = `https://dog.ceo/api/breed/${apiBreed}/images/random`;
      process.stdout.write(`[${i + 1}/${entries.length}] Fetching: ${slug} (${apiBreed}) ... `);

      const data = await fetchJson(apiUrl);

      if (data.status === 'success' && data.message) {
        await downloadFile(data.message, filePath);
        const stat = fs.statSync(filePath);
        if (stat.size > 1000 && stat.size !== 176626) {
          console.log(`OK (${(stat.size / 1024).toFixed(1)} KB)`);
          success++;
        } else {
          console.log(`FAIL (bad image: ${stat.size} bytes)`);
          fail++;
        }
      } else {
        console.log(`FAIL (API: ${JSON.stringify(data).substring(0, 80)})`);
        fail++;
      }
    } catch (err) {
      console.log(`ERROR: ${err.message}`);
      fail++;
    }

    await sleep(300); // rate limit protection
  }

  console.log(`\nDone: ${success} replaced, ${fail} failed`);
}

main();
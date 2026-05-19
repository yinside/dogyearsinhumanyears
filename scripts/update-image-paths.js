const fs = require('fs');
const path = require('path');

const breedDataPath = path.join(__dirname, '..', 'src', 'app', 'guides', 'breedData.ts');
let content = fs.readFileSync(breedDataPath, 'utf-8');

const regex = /'([\w-]+)':\s*\{[\s\S]*?imageUrl:\s*'([^']+)'/g;
let replacements = 0;
content = content.replace(regex, (fullMatch, slug, oldUrl) => {
  const newPath = `/images/breeds/${slug}.jpg`;
  return fullMatch.replace(oldUrl, newPath);
});

// also replace the interface line placeholder (line 7 has the type definition, skip that)
content = content.replace(/imageUrl: 'https:\/\/trae-api-cn\.mchost\.guru[^']*'/g, (match) => {
  replacements++;
  const slugMatch = match.match(/'([\w-]+)-lifespan'/);
  return match; // this won't match correctly, let me do it differently
});

// Actually let me just do a simple replace for all remaining API URLs
const remaining = content.match(/https:\/\/trae-api-cn\.mchost\.guru[^']*/g);
if (remaining) {
  console.log(`Remaining API URLs: ${remaining.length}`);
} else {
  console.log('All API URLs replaced!');
}

fs.writeFileSync(breedDataPath, content);
console.log(`Done. File updated.`);
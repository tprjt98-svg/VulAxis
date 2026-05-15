const fs = require('fs');
const content = fs.readFileSync('src/App.tsx', 'utf-8');
const lines = content.split('\n');
// Truncate at line 1287
const newLines = lines.slice(0, 1287);
fs.writeFileSync('src/App.tsx', newLines.join('\n'));
console.log('Successfully truncated App.tsx to 1287 lines.');

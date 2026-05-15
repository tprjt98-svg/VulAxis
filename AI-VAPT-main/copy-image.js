import fs from 'fs';
import path from 'path';

const sourcePath = 'C:\\Users\\Harshil Panchal\\.gemini\\antigravity\\brain\\0058ccde-a4ee-4816-a5fd-14e6f46bbf43\\media__1778391454055.png';
const destPath = path.join(process.cwd(), 'public', 'samurai-bg.png');

try {
  fs.copyFileSync(sourcePath, destPath);
  console.log('✅ SUCCESS: Samurai image successfully copied to your public folder!');
} catch (err) {
  console.error('❌ ERROR: Could not copy image. Please manually save your samurai image as "samurai-bg.png" inside the "public" folder.');
  console.error(err);
}

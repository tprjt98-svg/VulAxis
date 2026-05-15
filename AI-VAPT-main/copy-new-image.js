import fs from 'fs';
import path from 'path';

const brainDir = 'C:\\Users\\Harshil Panchal\\.gemini\\antigravity\\brain\\0058ccde-a4ee-4816-a5fd-14e6f46bbf43';
const destPath = path.join(process.cwd(), 'public', 'red-eyes-bg.png');

try {
  const files = fs.readdirSync(brainDir);
  const mediaFiles = files.filter(f => f.startsWith('media__') && (f.endsWith('.png') || f.endsWith('.jpg') || f.endsWith('.jpeg')));
  
  if (mediaFiles.length === 0) {
    console.error('No media files found!');
    process.exit(1);
  }

  // Sort by modification time to get the newest one (the glowing red eyes)
  mediaFiles.sort((a, b) => {
    return fs.statSync(path.join(brainDir, b)).mtime.getTime() - fs.statSync(path.join(brainDir, a)).mtime.getTime();
  });

  const newestFile = mediaFiles[0];
  const sourcePath = path.join(brainDir, newestFile);

  fs.copyFileSync(sourcePath, destPath);
  console.log(`✅ SUCCESS: Newest image (${newestFile}) successfully copied to your public folder as red-eyes-bg.png!`);
} catch (err) {
  console.error('❌ ERROR: Could not copy image.', err);
}

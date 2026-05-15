@echo off
echo Fixing App.tsx - Removing orphaned code...
node -e "const fs=require('fs');const c=fs.readFileSync('src/App.tsx','utf8');const l=c.split('\n');fs.writeFileSync('src/App.tsx',l.slice(0,1287).join('\n'));console.log('Done! App.tsx trimmed to',1287,'lines.');"
echo.
echo FIXED! You can close this window.
pause

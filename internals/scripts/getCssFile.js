const chokidar = require('chokidar');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const fg = require('fast-glob');

let isFirstRun = true;

const scssFiles = [];

async function getFiles(dirs) {
  for (const dir of dirs) {
    const files = await fg(path.join(dir, '*.css'));
    for (const file of files) {
      scssFiles.push(file);
    }
    const subdirectories = await fg(path.join(dir, '*'), { onlyDirectories: true });

    for (const subdirectory of subdirectories) {
      if (!dirs.includes(subdirectory)) {
        await getFiles([subdirectory]);
      }
    }
  }
}

async function build() {
  await getFiles(['app/containers', 'app/components', 'app/assets']);

  let imports = '';
  for (const file of scssFiles) {
    imports += `@import "${file}";\n`;
  }
  imports += `@import "tailwindcss/base";\n`;
  imports += `@import "tailwindcss/components";\n`;
  imports += `@import "tailwindcss/utilities";\n`;

  fs.writeFileSync('./main.css', imports);

  // execSync('npm run build-scss', { stdio: 'inherit' });
}

build();

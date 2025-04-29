/**
 * This script runs after the build process on Render.com to ensure
 * all necessary files are in the right places for production.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, './public');
const distDir = path.resolve(__dirname, './dist/public');

console.log('Starting post-build process for Render.com deployment...');
console.log(`Public directory: ${publicDir}`);
console.log(`Dist directory: ${distDir}`);

// Ensure the dist directory exists
if (!fs.existsSync(distDir)) {
  console.log('Creating dist directory...');
  fs.mkdirSync(distDir, { recursive: true });
}

// Copy the entire public directory to dist/public
function copyDirectory(srcDir, destDir) {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  const entries = fs.readdirSync(srcDir, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);

    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied: ${srcPath} → ${destPath}`);
    }
  }
}

console.log('Copying public directory to dist/public...');
copyDirectory(publicDir, distDir);

// Copy the special render-index.html to index.html in the dist directory as a fallback
const renderIndexPath = path.join(publicDir, 'render-index.html');
const indexPath = path.join(distDir, 'index.html');

if (fs.existsSync(renderIndexPath)) {
  console.log('Copying render-index.html as fallback index.html...');
  fs.copyFileSync(renderIndexPath, indexPath);
}

// Ensure static assets like meal images are in the dist directory
const mealImagesSource = path.join(publicDir, 'meal-images');
const mealImagesDest = path.join(distDir, 'meal-images');

if (fs.existsSync(mealImagesSource)) {
  console.log('Copying meal images...');
  if (!fs.existsSync(mealImagesDest)) {
    fs.mkdirSync(mealImagesDest, { recursive: true });
  }
  copyDirectory(mealImagesSource, mealImagesDest);
}

// Verify copied files
console.log('\nVerifying copied files:');
function listFiles(dir, prefix = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      console.log(`${prefix}📁 ${entry.name}/`);
      listFiles(fullPath, prefix + '  ');
    } else {
      const stats = fs.statSync(fullPath);
      const sizeKb = (stats.size / 1024).toFixed(2);
      console.log(`${prefix}📄 ${entry.name} (${sizeKb} KB)`);
    }
  }
}

console.log('\nFiles in dist/public:');
listFiles(distDir);

console.log('\nPost-build process completed successfully!');
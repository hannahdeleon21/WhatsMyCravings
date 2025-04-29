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
const clientDir = path.resolve(__dirname, './client'); // Add client directory for Render.com

console.log('Starting post-build process for Render.com deployment...');
console.log(`Public directory: ${publicDir}`);
console.log(`Dist directory: ${distDir}`);
console.log(`Client directory: ${clientDir}`);

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

// ==== RENDER.COM CLIENT DIRECTORY SETUP ====
// For Render.com deployment, we need to set up the client directory as the public directory
console.log('\nPreparing client directory for Render.com deployment...');

// Create a render-assets directory in client if it doesn't exist
const clientAssetsDir = path.join(clientDir, 'render-assets');
if (!fs.existsSync(clientAssetsDir)) {
  console.log('Creating client/render-assets directory...');
  fs.mkdirSync(clientAssetsDir, { recursive: true });
}

// Copy important public files to client/render-assets
console.log('Copying public files to client/render-assets...');
const publicFiles = ['debug.html', 'render-index.html', 'download.html'];
for (const file of publicFiles) {
  const sourcePath = path.join(publicDir, file);
  const destPath = path.join(clientAssetsDir, file);
  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, destPath);
    console.log(`Copied: ${sourcePath} → ${destPath}`);
  }
}

// Create a special index.html file for client directory
console.log('Setting up special index.html for client directory...');
const clientIndexPath = path.join(clientDir, 'index.html');
const clientIndexContentOriginal = fs.readFileSync(path.join(clientDir, 'index.html'), 'utf8');

// Create a backup of the original client/index.html
fs.writeFileSync(path.join(clientDir, 'index.html.original'), clientIndexContentOriginal);

// Copy the built index.html to client directory
if (fs.existsSync(indexPath)) {
  fs.copyFileSync(indexPath, clientIndexPath);
  console.log(`Copied built index.html to client directory: ${indexPath} → ${clientIndexPath}`);
}

// Copy assets from dist/public to client directory
console.log('Copying built assets to client directory...');
const distAssetsDir = path.join(distDir, 'assets');
const clientBuiltAssetsDir = path.join(clientDir, 'assets');

if (fs.existsSync(distAssetsDir)) {
  if (!fs.existsSync(clientBuiltAssetsDir)) {
    fs.mkdirSync(clientBuiltAssetsDir, { recursive: true });
  }
  copyDirectory(distAssetsDir, clientBuiltAssetsDir);
}

// Copy meal images to client directory if they exist
if (fs.existsSync(mealImagesSource)) {
  const clientMealImagesDir = path.join(clientDir, 'meal-images');
  if (!fs.existsSync(clientMealImagesDir)) {
    fs.mkdirSync(clientMealImagesDir, { recursive: true });
  }
  copyDirectory(mealImagesSource, clientMealImagesDir);
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

console.log('\nFiles in client directory:');
listFiles(clientDir);

console.log('\nIMPORTANT: On Render.com, set client as your public directory!');
console.log('\nPost-build process completed successfully!');
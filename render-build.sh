#!/usr/bin/env bash
# exit on error
set -o errexit

echo "==== Starting Render.com Build Process ===="

# Clean up and reinstall dependencies
echo "Installing dependencies..."
npm ci

# Regular build
echo "Building application..."
npm run build

# Run our post-build script to ensure all assets are properly copied
echo "Running post-build asset copying..."
node render-postbuild.js

# Create a special file to indicate this is a Render.com deployment
echo "render.com" > ./dist/public/deployment-platform.txt

# Ensure client directory is properly set up for Render's static publishing
echo "Setting up client directory for Render deployment..."

# Create a special main-app directory for the actual application
echo "Creating main-app directory..."
mkdir -p ./main-app

# Copy client/index.html to main-app as the default page
cp ./client/index.html ./main-app/index.html

# Copy all the built assets to main-app
echo "Copying assets to main-app directory..."
mkdir -p ./main-app/assets
cp -r ./dist/public/assets/* ./main-app/assets/

# Copy all public assets to main-app
cp -r ./public/* ./main-app/

# Create special routes file for Render.com
echo "Creating special routes for Render.com..."
cat > ./dist/render-routes.js << 'EOL'
// Special routing for Render.com
const express = require('express');
const router = express.Router();
const path = require('path');

// Dedicated download page route
router.get('/download', (req, res) => {
  res.sendFile(path.join(__dirname, '../main-app/download.html'));
});

// Debug page route
router.get('/debug.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../main-app/debug.html'));
});

// 404 error page
router.get('/404', (req, res) => {
  res.sendFile(path.join(__dirname, '../main-app/render-404.html'));
});

module.exports = router;
EOL

# Update the main server index.js to use the special routes
echo "Updating server entry point for Render.com..."
cat >> ./dist/index.js << 'EOL'

// For Render.com deployment, add special routes
if (process.env.RENDER || process.env.NODE_ENV === 'production') {
  try {
    const renderRoutes = require('./render-routes');
    app.use(renderRoutes);
    console.log('Render.com special routes initialized');
  } catch (error) {
    console.error('Error loading Render.com routes:', error);
  }
}
EOL

# Create Render.com specific .env file
echo "RENDER=true" > ./dist/.env

echo "==== Build completed successfully ===="
echo "Note: On Render.com, set 'main-app' as your public directory."
echo "If you encounter a white screen, visit /debug.html on your deployed site to diagnose the issue."
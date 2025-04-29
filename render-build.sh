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
# Copy the built index.html to client directory
cp ./client/index.html ./client/index.html.original
cp ./dist/public/index.html ./client/index.html
# Create symlinks for all assets in dist/public to client
mkdir -p ./client/assets
cp -r ./dist/public/assets/* ./client/assets/

echo "==== Build completed successfully ===="
echo "Note: On Render.com, set 'client' as your public directory."
echo "If you encounter a white screen, visit /debug.html on your deployed site to diagnose the issue."
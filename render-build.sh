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

echo "==== Build completed successfully ===="
echo "If you encounter a white screen, visit /debug.html on your deployed site to diagnose the issue."
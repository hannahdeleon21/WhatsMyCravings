#!/usr/bin/env bash
# exit on error
set -o errexit

# Clean up and reinstall dependencies
npm ci

# Regular build
npm run build

# Copy public assets to the dist directory
mkdir -p ./dist/public
cp -r ./public/* ./dist/public/

echo "Build completed successfully"
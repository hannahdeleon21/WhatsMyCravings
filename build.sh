#!/bin/bash

# Build the frontend
echo "Building frontend..."
npm run build

# Copy public assets to dist/public
echo "Copying public assets..."
node scripts/public-copy.js

echo "Build complete!"
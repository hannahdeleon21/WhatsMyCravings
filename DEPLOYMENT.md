# Deploying "What's My Cravings?" to Render.com

This guide explains how to deploy the "What's My Cravings?" application to Render.com.

## Setup on Render.com

1. **Create a new Web Service**:
   - Log in to your Render.com account
   - Click "New +" and select "Web Service"
   - Connect your GitHub repository

2. **Configure the Web Service**:
   - Name: `whats-my-cravings` (or your preferred name)
   - Environment: `Node`
   - Build Command: `./render-build.sh`
   - Start Command: `node dist/index.js`
   - Public Directory: `client` (IMPORTANT: you must specify this)
   - Set the following environment variables:
     - `NODE_ENV`: `production`
     - `PORT`: `5000`

3. **Advanced Settings**:
   - Set the instance type (Free tier works fine for testing)
   - Health Check Path: `/`

4. **Create Web Service**:
   - Click "Create Web Service"
   - Render will begin deploying your application

## Fix for White Screen Issues

If you're seeing a white screen after deployment:

1. **Visit the Debug Page**:
   First, try accessing the debug page to see if your assets are loading correctly:
   ```
   https://your-app-name.onrender.com/debug.html
   ```
   
   This page will show if your images and other assets are loading correctly.

2. **Use the Static Fallback**:
   We've included a static fallback page that should work even if the React app fails to load:
   ```
   https://your-app-name.onrender.com/render-index.html
   ```

3. **Check for Common Issues**:
   - **Browser Console**: Open browser developer tools (F12) and check the Console tab for errors
   - **Network Tab**: Check if JS or CSS files are failing to load
   - **Render Logs**: In your Render dashboard, check the logs for build or runtime errors

## Deployment Files

This project includes several special files to help with Render.com deployment:

- `render.yaml` - Defines your Render.com service configuration
- `render-build.sh` - Custom build script for Render.com
- `render-postbuild.js` - Ensures all assets are correctly copied during build
- `public/debug.html` - Helps diagnose deployment issues
- `public/render-index.html` - Static fallback page for when the main app fails to load

## Manual Deployment Steps

If you need to deploy manually:

1. Clone your repository
2. Install dependencies:
   ```bash
   npm ci
   ```
3. Build the application:
   ```bash
   npm run build
   ```
4. Run the post-build script:
   ```bash
   node render-postbuild.js
   ```
5. The complete built application will be in the `dist` directory

## Testing Your Deployment

After deploying, check these URLs to verify everything is working:

1. Main Application:
   ```
   https://your-app-name.onrender.com/
   ```

2. Debug Page:
   ```
   https://your-app-name.onrender.com/debug.html
   ```

3. Static Fallback:
   ```
   https://your-app-name.onrender.com/render-index.html
   ```

4. Download Page:
   ```
   https://your-app-name.onrender.com/download.html
   ```
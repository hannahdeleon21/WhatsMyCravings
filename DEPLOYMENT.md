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
   - Set the following environment variables:
     - `NODE_ENV`: `production`
     - `PORT`: `5000`

3. **Advanced Settings**:
   - Set the instance type (Free tier works fine for testing)
   - Health Check Path: `/`

4. **Create Web Service**:
   - Click "Create Web Service"
   - Render will begin deploying your application

## Troubleshooting White Screen Issues

If you're seeing a white screen after deployment, try these steps:

1. **Check Render Logs**:
   - In your Render dashboard, select your web service
   - Click on "Logs" to see what's happening during build and runtime
   - Look for any errors related to file paths or missing assets

2. **Verify Build Process**:
   - Ensure the `render-build.sh` script is executable (`chmod +x render-build.sh`)
   - Confirm public assets are being copied correctly

3. **Manual Deployment Fix**:
   If the issue persists:
   
   - Clone your repository locally
   - Run the build process manually:
     ```bash
     npm ci
     npm run build
     mkdir -p ./dist/public
     cp -r ./public/* ./dist/public/
     ```
   - Create a new zip of the entire project, including the dist directory
   - Use Render's "Upload Files" option to directly upload the built files

4. **Browser Console Debugging**:
   - Open your deployed site
   - Open browser developer tools (F12 or right-click > Inspect)
   - Check the Console tab for any JavaScript errors
   - Check the Network tab to see if any assets are failing to load

## Customizing Build and Start Commands

If needed, you can adjust the build and start commands in the `render-build.sh` script and `render.yaml` file. These files are included in the project to simplify deployment.
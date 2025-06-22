# Deploying the Backend to Render.com

## Prerequisites

- A [Render.com](https://render.com) account
- Your project code pushed to a Git repository (GitHub, GitLab, etc.)

## Deployment Steps

### 1. Set Up Your Project

Ensure your project has the following configuration:

- **package.json**: Make sure it has the correct build and start scripts:
  ```json
  "scripts": {
    "start": "node dist/index.js",
    "build": "tsc -b"
  }
  ```

- **Dependencies**: Ensure all required dependencies are in your package.json, including TypeScript types:
  ```json
  "dependencies": {
    "@google/generative-ai": "^0.24.0",
    "@types/express": "^5.0.1",
    "axios": "^1.8.4",
    "cors": "^2.8.5",
    "dotenv": "^16.5.0",
    "express": "^5.1.0"
  },
  "devDependencies": {
    "@types/cors": "^2.8.17",
    "@types/node": "^20.11.0"
  }
  ```

- **tsconfig.json**: Ensure it's properly configured with Node.js types:
  ```json
  {
    "compilerOptions": {
      "target": "es2019",
      "lib": ["es2019", "dom"],
      "moduleResolution": "node",
      "types": ["node"],
      // other options...
    }
  }
  ```

### 2. Create a New Web Service on Render

1. Log in to your Render dashboard
2. Click on "New +" and select "Web Service"
3. Connect your Git repository
4. Configure your web service:
   - **Name**: Choose a name for your service (e.g., "wilder-backend")
   - **Environment**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`

### 3. Configure Environment Variables

In the Render dashboard, add the following environment variables:

- `GEMINI_API_KEY`: Your Google Gemini API key
- `PORT`: 10000 (Render uses port 10000 by default)
- `GEMINI_MODEL`: gemini-2.0-flash-lite
- `NODE_ENV`: production

### 4. Deploy Your Service

Click "Create Web Service" to deploy your application. Render will automatically build and deploy your service.

### 5. Update Frontend Configuration

After deployment, update your Frontend's `.env.production` file with the URL of your Render service:

```
VITE_BACKEND_URL=https://your-service-name.onrender.com
VITE_PRODUCTION=true
```

## Troubleshooting

### Common Issues

1. **TypeScript Errors**: If you encounter TypeScript errors during build:
   - Ensure you have the correct types installed (@types/node, @types/express, @types/cors)
   - Check your tsconfig.json for proper configuration

2. **Module Not Found Errors**: If modules can't be found:
   - Make sure all dependencies are correctly listed in package.json
   - Check import statements for correct paths

3. **Environment Variable Issues**: If your app can't access environment variables:
   - Verify they're correctly set in the Render dashboard
   - Ensure you're using dotenv correctly in your code

4. **CORS Issues**: If you encounter CORS errors when connecting from your frontend:
   - Check your CORS configuration in the backend code
   - Ensure your frontend URL is allowed in the CORS settings

## Monitoring and Logs

Render provides logs for your service that can help diagnose issues. Access them from your service dashboard under the "Logs" tab.
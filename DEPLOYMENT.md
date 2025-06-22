# Deployment Guide for Wilder Project

This guide provides instructions for deploying both the Frontend and Backend components of the Wilder project to Vercel.

## Prerequisites

- A [Vercel](https://vercel.com) account
- [Node.js](https://nodejs.org) installed locally
- A [Google AI Studio](https://ai.google.dev/) account for Gemini API key

## Backend Deployment

1. **Set up environment variables**

   Create a `.env` file in the Backend directory with the following variables:
   ```
   GEMINI_API_KEY=your_gemini_api_key_here
   PORT=3000
   GEMINI_MODEL=gemini-2.0-flash-lite
   NODE_ENV=production
   ```

2. **Add environment variables to Vercel**

   In your Vercel project settings, add the following environment variables:
   - `GEMINI_API_KEY`: Your Gemini API key
   - `PORT`: 3000
   - `GEMINI_MODEL`: gemini-2.0-flash-lite
   - `NODE_ENV`: production

3. **Deploy to Vercel**

   ```bash
   cd Backend
   vercel
   ```

   Follow the prompts to complete the deployment.

4. **Note your deployment URL**

   After deployment, note the URL of your backend (e.g., `https://wilder-backend.vercel.app`). You'll need this for the frontend deployment.

## Frontend Deployment

1. **Set up environment variables**

   Create a `.env.production` file in the Frontend directory with:
   ```
   VITE_BACKEND_URL=https://your-backend-url.vercel.app
   VITE_PRODUCTION=true
   ```

   Replace `https://your-backend-url.vercel.app` with your actual backend URL from the previous step.

2. **Add environment variables to Vercel**

   In your Vercel project settings, add:
   - `VITE_BACKEND_URL`: Your backend deployment URL
   - `VITE_PRODUCTION`: true

3. **Deploy to Vercel**

   ```bash
   cd Frontend
   vercel
   ```

   Follow the prompts to complete the deployment.

## Verifying the Deployment

1. Visit your frontend URL to ensure the application is working correctly.
2. Test the connection to the backend by using the application's features.
3. Check the Vercel logs for both deployments if you encounter any issues.

## Troubleshooting

- **CORS Issues**: If you encounter CORS errors, verify that your backend is properly configured to accept requests from your frontend domain.
- **API Key Issues**: Ensure your Gemini API key is correctly set in the Vercel environment variables.
- **Build Failures**: Check the build logs in Vercel for any errors during the build process.

## Updating Your Deployment

To update your deployment after making changes:

1. Push your changes to your repository.
2. If you've connected Vercel to your repository, it will automatically deploy the changes.
3. Alternatively, run `vercel` again from the respective directory.

---

For more detailed information on deploying to Vercel, refer to the [Vercel documentation](https://vercel.com/docs).
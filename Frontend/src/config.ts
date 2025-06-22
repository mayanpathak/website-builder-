// Use environment variable or fallback to localhost for development
export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

// Ensure API_URL is consistent with BACKEND_URL
export const API_URL = BACKEND_URL;

// Check if we're in production environment
export const IS_PRODUCTION = import.meta.env.PROD;

// Log the environment for debugging during build
console.log(`Environment: ${IS_PRODUCTION ? 'Production' : 'Development'}`);
console.log(`API URL: ${API_URL}`);
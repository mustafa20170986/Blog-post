import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {ClerkProvider} from '@clerk/clerk-react'
//import { RouterProvider } from 'react-router-dom';
// 1. Create the QueryClient instance
const queryClient = new QueryClient(); 
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}
// 2. Render the App wrapped with the necessary provider
createRoot(document.getElementById('root')!).render(
  <StrictMode>
  
    {/* 🔑 FIX: Wrap the entire application in the QueryClientProvider */}
    <QueryClientProvider client={queryClient}>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}> 
      <App />
      </ClerkProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
   
  </StrictMode>,
);
// Removed the unused `AppRoot` function
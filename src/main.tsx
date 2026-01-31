import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from './App'
import './index.css'

// Create a TanStack Query client
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,              // retry 2 times automatically
      retryDelay: 1000,      // 1s between retries
      refetchOnWindowFocus: false, // avoid surprise refetch
      //prevent blank page during refetch
      staleTime: 1000 * 60,  // 1 minute
    },
  },
})

async function prepare() {
  if (import.meta.env.DEV) {
    const { worker } = await import('./mocks/browser')
    await worker.start()
  }
}

prepare().then(() => {
  ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  ).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </React.StrictMode>
  )
})

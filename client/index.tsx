import { createRoot } from 'react-dom/client'
import { router } from './router'
import { RouterProvider } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const queryClient = new QueryClient()
import App from './components/App'



const root = createRoot(document.getElementById('app') as HTMLElement)
root.render(
  
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <App />
    <ReactQueryDevtools />
  </QueryClientProvider>
)
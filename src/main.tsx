import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/index.tsx'
import './assets/styles/index.css'

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)

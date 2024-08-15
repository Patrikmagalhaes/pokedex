import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home.tsx'
import Details from './Details.tsx'

const router = createBrowserRouter([


  {
    path: '/',
    element: <App />
  },
  {
    path: '/home/:name',
    element: <Home />
  },
  {
    path: '/home/:name/details/:id',
    element: <Details />
  }

])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

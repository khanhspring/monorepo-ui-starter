import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import {UIProvider} from "@repo/ui/atoms";
import {createRouter, RouterProvider} from "@tanstack/react-router";
import { routeTree } from './routeTree.gen';

// Set up a Router instance
const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  defaultStaleTime: 5000,
  scrollRestoration: true,
})

// Register things for typesafety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UIProvider>
      <RouterProvider router={router} />
    </UIProvider>
  </StrictMode>,
)

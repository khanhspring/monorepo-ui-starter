import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './styles/globals.css'
import {UIProvider} from "@repo/ui/atoms";
import {createRouter, RouterProvider} from "@tanstack/react-router";
import {routeTree} from './routeTree.gen';
import {AuthProvider} from "./context/auth";
import {useAuth} from "./hooks";

// Set up a Router instance
const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  defaultStaleTime: 5000,
  scrollRestoration: true,
  context: {
    auth: undefined!, // This will be set after we wrap the app in an AuthProvider
  },
})

// Register things for typesafety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

function AppRouter() {
  const auth = useAuth();
  return <RouterProvider router={router} context={{ auth }} />
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <UIProvider>
        <AppRouter />
      </UIProvider>
    </AuthProvider>
  </StrictMode>,
)

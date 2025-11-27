import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './styles/globals.css'
import {UIProvider} from "@repo/ui/atoms";
import {createRouter, RouterProvider} from "@tanstack/react-router";
import {routeTree} from './routeTree.gen';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {APIClient} from "@repo/api-client";
import {getCookie} from "@repo/utils";
import {setApiClient} from "@repo/hooks/lib";
import {AuthProvider, useAuth} from "@repo/ui/contexts";
import {ACCESS_TOKEN_KEY} from "@repo/types";
import {i18n} from "@lingui/core";
import {I18nProvider} from "@lingui/react";
import {messages as enMessages} from "./locales/en/messages";
import {messages as viMessages} from "./locales/vi/messages";

i18n.load({
  en: enMessages,
  vi: viMessages,
});
i18n.activate("vi");

const apiClient = new APIClient({
  baseUrl: import.meta.env.VITE_API_URL,
  getAccessToken: () => getCookie(ACCESS_TOKEN_KEY),
  getApiKey: () => import.meta.env.VITE_PUBLIC_API_KEY,
});

setApiClient(apiClient);

const queryClient = new QueryClient();

// Set up a Router instance
const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  // Since we're using React Query, we don't want loader calls to ever be stale
  // This will ensure that the loader is always called when the route is preloaded or visited
  defaultPreloadStaleTime: 0,
  scrollRestoration: true,
  context: {
    queryClient,
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
  return <RouterProvider router={router} context={{auth}}/>
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <UIProvider withToaster>
            <AppRouter/>
          </UIProvider>
        </AuthProvider>
      </QueryClientProvider>
    </I18nProvider>
  </StrictMode>,
)

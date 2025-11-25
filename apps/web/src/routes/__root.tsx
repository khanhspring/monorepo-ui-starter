import * as React from 'react'
import {createRootRouteWithContext, Outlet} from '@tanstack/react-router'
import {AuthContext} from "../context/auth";
import {QueryClient} from "@tanstack/react-query";

export interface AppRouterContext {
  queryClient: QueryClient,
  auth: AuthContext
}

export const Route = createRootRouteWithContext<AppRouterContext>()({
  component: Root,
})

function Root() {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  )
}

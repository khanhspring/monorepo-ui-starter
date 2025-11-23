import * as React from 'react'
import {createRootRouteWithContext, Outlet} from '@tanstack/react-router'
import {AuthContext} from "../context/auth";

export interface AppRouterContext {
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

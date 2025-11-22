import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: Root,
})

function Root() {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  )
}

import {createFileRoute, Outlet, redirect} from '@tanstack/react-router'
import MainLayout from "../../components/layouts/MainLayout";

export const Route = createFileRoute('/(main)')({
  beforeLoad: ({ context, location }) => {
    if (!context.auth.isAuthenticated) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href,
        },
      })
    }
  },
  component: Main,
})

function Main() {
  return (
    <MainLayout>
      <Outlet/>
    </MainLayout>
  )
}

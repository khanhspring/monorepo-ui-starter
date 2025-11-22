import {createFileRoute, Outlet} from '@tanstack/react-router'
import MainLayout from "../../components/layouts/MainLayout";

export const Route = createFileRoute('/(main)/_mainLayout')({
  component: Main,
})

function Main() {
  return (
    <MainLayout>
      <Outlet/>
    </MainLayout>
  )
}

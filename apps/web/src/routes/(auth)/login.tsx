import {createFileRoute} from '@tanstack/react-router'
import Login from "../../features/Login";

export const Route = createFileRoute('/(auth)/login')({
  component: LoginPage,
})

function LoginPage() {
  return <Login />
}

import {createFileRoute} from '@tanstack/react-router'
import Users from "../../../../features/Users";

export const Route = createFileRoute('/(main)/_mainLayout/users/')({
  component: UsersPage,
})

function UsersPage() {
  return <Users />
}

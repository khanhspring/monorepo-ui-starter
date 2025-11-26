import {createFileRoute} from '@tanstack/react-router'
import AddUser from "../../../features/AddUser";

export const Route = createFileRoute('/(main)/users/create')({
  component: AddUserPage,
})

function AddUserPage() {
  return <AddUser />;
}

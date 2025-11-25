import {createFileRoute} from '@tanstack/react-router'
import UserDetail from "../../../features/UserDetail";

export const Route = createFileRoute('/(main)/users/$userId')({
  component: UserDetailPage,
})

function UserDetailPage() {
  const { userId } = Route.useParams()
  return <UserDetail userId={userId} />;
}

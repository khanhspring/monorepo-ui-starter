import {createFileRoute} from '@tanstack/react-router'
import UserDetail from "../../../features/UserDetail";
import {userQueryOptions} from "@repo/hooks/queries";
import {useSuspenseQuery} from "@tanstack/react-query";

export const Route = createFileRoute('/(main)/users/$userId')({
  loader: ({ context: { queryClient }, params: { userId } }) => {
    queryClient.ensureQueryData(userQueryOptions(userId))
  },
  component: UserDetailPage,
  pendingComponent: Pending,
})

function UserDetailPage() {
  const { userId } = Route.useParams();
  const { data } = useSuspenseQuery(userQueryOptions(userId));

  return <UserDetail user={data?.data} />;
}

function Pending() {
  return <>Loading...</>;
}
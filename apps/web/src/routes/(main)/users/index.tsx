import {createFileRoute} from '@tanstack/react-router'
import Users from "../../../features/Users";
import {usersQueryOptions} from "@repo/hooks/queries";
import {useSuspenseQuery} from "@tanstack/react-query";

export const Route = createFileRoute('/(main)/users/')({
  loader: ({ context: { queryClient } }) => {
    queryClient.ensureQueryData(usersQueryOptions())
  },
  component: UsersPage,
  pendingComponent: Pending
})

function UsersPage() {
  const { data } = useSuspenseQuery(usersQueryOptions());

  return <Users userPage={data} />;
}

function Pending() {
  return <>Loading...</>;
}

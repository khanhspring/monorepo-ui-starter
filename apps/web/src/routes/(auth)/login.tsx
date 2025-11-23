import {createFileRoute, redirect} from '@tanstack/react-router'
import Login from "../../features/Login";
import {z} from "zod";

export const Route = createFileRoute('/(auth)/login')({
  validateSearch: z.object({
    redirect: z.string().optional().catch(''),
  }),
  beforeLoad: ({ context, search }) => {
    if (context.auth.isAuthenticated) {
      throw redirect({ to: search.redirect || "/" })
    }
  },
  component: LoginPage,
})

function LoginPage() {
  const search = Route.useSearch();
  return <Login redirect={search.redirect} />
}

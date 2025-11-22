import { createFileRoute } from '@tanstack/react-router'
import Home from "../../../features/Home";

export const Route = createFileRoute('/(main)/_mainLayout/')({
  component: HomePage,
})

function HomePage() {
  return <Home />
}

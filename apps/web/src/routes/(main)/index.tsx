import { createFileRoute } from '@tanstack/react-router'
import Home from "../../features/Home";

export const Route = createFileRoute('/(main)/')({
  component: HomePage,
})

function HomePage() {
  return <Home />
}

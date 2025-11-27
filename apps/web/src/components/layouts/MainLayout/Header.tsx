import {Link, useNavigate, useRouter} from "@tanstack/react-router";
import {Button} from "@repo/ui/atoms";
import {useAuth} from "@repo/ui/contexts";
import LanguageMenu from "./LanguageMenu";
import {Trans} from "@lingui/react/macro";

export default function Header() {
  const router = useRouter();
  const navigate = useNavigate();
  const auth = useAuth();

  const handleLogout = () => {
    auth.logout().then(() => {
      router.invalidate().finally(async () => {
        await navigate({ to: '/' })
      })
    })
  }

  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto flex gap-10 items-center py-4 px-5">
        <div className="flex gap-2 items-center">
          <img src="/logo.svg" alt="Logo" className="w-7 h-7"/>
          <span className="font-bold text-lg">UI Starter</span>
        </div>
        <div className="flex-1 flex gap-5 items-center">
          <Link to="/">
            <Trans>Home</Trans>
          </Link>
          <Link to="/users">
            <Trans>Users</Trans>
          </Link>
        </div>
        <div className="flex gap-3 items-center">
          <LanguageMenu />
          <Button onClick={handleLogout} size="xs">
            <Trans>Logout</Trans>
          </Button>
        </div>
      </div>
    </header>
  );
}
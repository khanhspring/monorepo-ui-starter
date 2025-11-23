import {useNavigate, useRouter} from "@tanstack/react-router";
import {Button} from "@repo/ui/atoms";
import {useAuth} from "../../hooks";

type Props = {
  redirect?: string;
};

export default function Login({ redirect }: Props) {
  const auth = useAuth();
  const router = useRouter();
  const navigate = useNavigate();

  const handleLogin = async () => {
    await auth.login("dummy-token");
    await router.invalidate()
    await navigate({ to: redirect || "/" })
  }

  return (
    <div className="container mx-auto flex items-center justify-center min-h-dvh">
      <div className="w-100 aspect-square bg-gray-200 flex flex-col gap-1 items-center justify-center rounded-xl">
        <Button onClick={handleLogin}>Login</Button>
      </div>
    </div>
  );
}
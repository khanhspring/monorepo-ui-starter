import {Link} from "@tanstack/react-router";
import {Icon} from "@repo/ui/atoms";
import {User} from "@repo/types";

type Props = {
  user?: User;
}

export default function UserDetail({ user }: Props) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <Link to="/users">
          <Icon name="ArrowLeft" />
        </Link>
        <h2 className="font-semibold text-lg">User detail</h2>
      </div>
      <div className="mt-5">
        <p>ID: {user?.id}</p>
        <p>Email: {user?.email}</p>
        <p>First name: {user?.first_name}</p>
        <p>Last name: {user?.last_name}</p>
      </div>
    </div>
  );
}
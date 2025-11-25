import {Link} from "@tanstack/react-router";
import {useUser} from "@repo/hooks/queries";
import {Icon} from "@repo/ui/atoms";

type Props = {
  userId: string;
}

export default function UserDetail({ userId }: Props) {
  const { data } = useUser(userId);

  return (
    <div>
      <div className="flex items-center gap-3">
        <Link to="/users">
          <Icon name="ArrowLeft" />
        </Link>
        <h2 className="font-semibold text-lg">User detail</h2>
      </div>
      <div className="mt-5">
        <p>ID: {userId}</p>
        <p>Email: {data?.data.email}</p>
        <p>First name: {data?.data.first_name}</p>
        <p>Last name: {data?.data.last_name}</p>
      </div>
    </div>
  );
}
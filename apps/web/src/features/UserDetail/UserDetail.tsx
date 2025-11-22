import {Link, useParams} from "@tanstack/react-router";

type Props = {
  userId: string;
}

export default function UserDetail({ userId }: Props) {

  return (
    <div>
      <Link to="/users">Back</Link>
      <div className="mt-5">
        This is the User Detail page. User ID: {userId}
      </div>
    </div>
  );
}
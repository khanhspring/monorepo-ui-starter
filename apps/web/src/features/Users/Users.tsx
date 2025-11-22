import {Link} from "@tanstack/react-router";

export default function Users() {
  return (
    <div>
      This is the Users page.
      <div className="py-5 flex gap-3">
        <Link to="/users/$userId" params={{ userId: "user-1" }}>User 1</Link>
        <Link to="/users/$userId" params={{ userId: "user-2" }}>User 2</Link>
      </div>
    </div>
  );
}
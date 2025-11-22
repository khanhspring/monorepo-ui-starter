import {Link} from "@tanstack/react-router";

export default function Login() {
  return (
    <div className="container mx-auto flex items-center justify-center min-h-dvh">
      <div className="w-100 aspect-square bg-gray-200 flex flex-col gap-1 items-center justify-center rounded-xl">
        Login form...
        <Link to="/">Back to home page</Link>
      </div>
    </div>
  );
}
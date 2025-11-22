import {Link} from "@tanstack/react-router";

export default function Header() {
  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto flex gap-10 items-center py-4 px-5">
        <div className="flex gap-2 items-center">
          <img src="/logo.svg" alt="Logo" className="w-7 h-7"/>
          <span className="font-bold text-lg">UI Starter</span>
        </div>
        <div className="flex-1 flex gap-5 items-center">
          <Link to="/">Home</Link>
          <Link to="/users">Users</Link>
        </div>
        <div>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </header>
  );
}
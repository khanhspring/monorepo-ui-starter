import Header from "./Header";
import {ReactNode} from "react";

type Props = {
  children: ReactNode;
}

export default function MainLayout({children}: Props) {
  return (
    <div className="w-full flex flex-col">
      <Header/>
      <main className="flex-1 container mx-auto p-5">
        {children}
      </main>
    </div>
  );
}
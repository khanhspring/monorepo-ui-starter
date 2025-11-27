import {ReactNode} from "react";

type Props = {
  children: ReactNode;
}
export default function FormContainer({ children }: Props) {
  return (
    <div className="flex flex-col gap-4">
      {children}
    </div>
  );
}
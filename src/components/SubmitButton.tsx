import { FC, PropsWithChildren } from "react";
import { useFormStatus } from "react-dom";

const SubmitButton = ({ children }: PropsWithChildren) => {
  const { pending } = useFormStatus();
  return <button disabled={pending}>{children}</button>;
};

export default SubmitButton;

"use client";

import { useFormState } from "react-dom";
import { addSubscriptionAction } from "@/serverActions/addSubscriptionAction";
import SubmitButton from "@/components/SubmitButton";

const NewsletterForm = () => {
  const [state, submitAction] = useFormState(addSubscriptionAction, null);
  const message = state?.message;
  return (
    <form action={submitAction}>
      <label htmlFor="email">Email:</label>
      <input id="email" type="email" autoComplete="off" />
      <SubmitButton>Newsletter abonnieren</SubmitButton>
      {message && <p>{message}</p>}
    </form>
  );
};

export default NewsletterForm;

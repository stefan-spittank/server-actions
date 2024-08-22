"use server";

import { addSubscription } from "@/lib/backend";

export const addSubscriptionAction = async (
  previousState: { message: string } | null,
  formData: FormData,
) => {
  console.log("addSubscriptionAction", previousState, formData);
  await addSubscription(formData.get("name")?.toString() || "");

  return { message: "Newsletter erfolgreich abonniert" };
};
